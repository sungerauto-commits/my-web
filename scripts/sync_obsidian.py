"""Export an explicitly public Obsidian folder; optionally publish its snapshot."""

import argparse
import base64
import hashlib
import json
import os
import posixpath
import re
import subprocess
import tempfile
import time
import unicodedata
from io import BytesIO
from dataclasses import dataclass
from concurrent.futures import ThreadPoolExecutor
from datetime import date, datetime, timezone
from pathlib import Path
from urllib.parse import parse_qs, quote, unquote, urlsplit

import mistune
import yaml
from PIL import Image, ImageOps
from mistune.renderers.markdown import MarkdownRenderer


PREFIX = "content/notes/obsidian/"
MEDIA_PREFIX = "static/notes-media/"
MANIFEST = "data/obsidian-sync.json"
STUDY_MAP = "data/study-map.json"
IMAGES = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".avif"}
MEDIA = IMAGES | {".pdf", ".mp3", ".wav", ".ogg", ".m4a", ".mp4", ".webm", ".mov"}
FRONTMATTER = re.compile(r"\A---[ \t]*\n(.*?)\n---[ \t]*(?:\n|\Z)", re.S)


def blob_sha(data):
    return hashlib.sha1(b"blob " + str(len(data)).encode() + b"\0" + data).hexdigest()


def owned_path(path, root):
    if "\\" in path or ".." in Path(path).parts:
        return False
    return (path == STUDY_MAP and (root / path).resolve().is_relative_to(root.resolve())) or any(path.startswith(prefix) and (root / path).resolve().is_relative_to((root / prefix).resolve())
               for prefix in [PREFIX, MEDIA_PREFIX])


def anchor(text):
    text = text.strip().lower().replace(" ", "-")
    return "".join(c for c in text if c in "-_" or unicodedata.category(c)[0] in "LN")


def excluded(metadata):
    return (str(metadata.get("publish", True)).strip().lower() in {"false", "no", "0"}
            or str(metadata.get("draft", False)).strip().lower() in {"true", "yes", "1"})


def read_note(path):
    body = path.read_text(encoding="utf-8-sig").replace("\r\n", "\n")
    match = FRONTMATTER.match(body)
    metadata = yaml.safe_load(match[1]) if match else {}
    if metadata is None:
        metadata = {}
    if not isinstance(metadata, dict):
        raise ValueError(f"Frontmatter must be a mapping: {path.name}")
    body = body[match.end():] if match else body
    if excluded(metadata):
        return metadata, body
    if body.count("%%") % 2:
        raise ValueError(f"Unclosed Obsidian comment in {path.name}")
    # Obsidian comments are never part of a public export.
    body = re.sub(r"%%.*?%%|<!--.*?-->", "", body, flags=re.S)
    return metadata, body


def public_files(source):
    for current, folders, names in os.walk(source, followlinks=False):
        folders[:] = sorted(name for name in folders if not name.startswith(".")
                            and not (Path(current) / name).is_symlink()
                            and not getattr(Path(current) / name, "is_junction", lambda: False)()
                            and (Path(current) / name).resolve().is_relative_to(source))
        for name in sorted(names):
            path = Path(current) / name
            if not name.startswith(".") and not path.is_symlink() and path.resolve().is_relative_to(source):
                yield path


@dataclass
class Note:
    path: Path
    relative: str
    metadata: dict
    body: str
    uid: str

    @property
    def output(self):
        return PREFIX + self.uid + "/index.md"


def wiki_plugin(md):
    def parse(inline, match, state):
        raw = match.group(0)
        state.append_token({"type": "wiki_link", "raw": raw[3:-2] if raw.startswith("!") else raw[2:-2],
                            "attrs": {"embed": raw.startswith("!")}})
        return match.end()

    md.inline.register("obsidian_link", r"!?\[\[[^\]\n]+\]\]", parse, before="link")


class NoteRenderer(MarkdownRenderer):
    def __init__(self, exporter, note):
        super().__init__()
        self.exporter = exporter
        self.note = note
        self.links = set()

    def render_referrences(self, state):
        return []

    def link(self, token, state):
        target = self.exporter.resolve(token["attrs"]["url"], self.note, self.links)
        if target is None:
            return self.render_children(token, state)
        token = dict(token, attrs={**token["attrs"], "url": target})
        token.pop("label", None)
        token.pop("ref", None)
        return super().link(token, state)

    def image(self, token, state):
        target = self.exporter.resolve(token["attrs"]["url"], self.note, self.links)
        if target is None:
            return self.render_children(token, state)
        token = dict(token, attrs={**token["attrs"], "url": target})
        token.pop("label", None)
        token.pop("ref", None)
        return "!" + super().link(token, state)

    def wiki_link(self, token, state):
        target, _, label = token["raw"].replace("\\|", "|").partition("|")
        embedded = token["attrs"]["embed"]
        resolved = self.exporter.resolve(target, self.note, self.links)
        suffix = Path(target.split("#", 1)[0]).suffix.lower()
        if not label or (embedded and re.fullmatch(r"\d+(?:x\d+)?", label)):
            label = Path(target.split("#", 1)[0]).stem or target.lstrip("#")
        label = re.sub(r"([\\\[\]])", r"\\\1", label)
        if resolved is None:
            return label
        marker = "!" if embedded and suffix in IMAGES else ""
        return f"{marker}[{label}]({resolved})"

    def strikethrough(self, token, state):
        return "~~" + self.render_children(token, state) + "~~"

    def inline_math(self, token, state):
        return "$" + token["raw"] + "$"

    def block_math(self, token, state):
        return "$$\n" + token["raw"] + "\n$$\n\n"

    def footnote_ref(self, token, state):
        return "[^" + token["raw"] + "]"

    def footnote_item(self, token, state):
        text = self.render_children(token, state).strip().replace("\n", "\n    ")
        return f"[^{token['attrs']['key']}]: {text}\n\n"

    def footnotes(self, token, state):
        return self.render_children(token, state)


class Exporter:
    def __init__(self, source, repository, base_path="/my-web/", external_images_root=None, exclude=(), media_cache=None, study_catalog=None):
        self.source = Path(source).resolve()
        self.repository = Path(repository).resolve()
        self.base_path = "/" + base_path.strip("/") + "/" if base_path.strip("/") else "/"
        self.files = {}
        self.lookup = {}
        self.paths = {}
        self.notes = {}
        self.warnings = set()
        self.external_images_root = Path(external_images_root).resolve() if external_images_root else None
        self.exclude = tuple(path.casefold().strip("/") for path in exclude)
        self.media_cache = media_cache if media_cache is not None else {}
        self.study_catalog = Path(study_catalog) if study_catalog else None
        manifest = self.repository / MANIFEST
        self.previous_files = json.loads(manifest.read_text(encoding="utf-8")).get("files", {}) if manifest.exists() else {}

    def index(self, key, path):
        self.lookup.setdefault(key.casefold(), set()).add(path)

    def resolve(self, target, note, links):
        parsed = urlsplit(target)
        if parsed.scheme == "obsidian" and parsed.netloc == "study-map":
            code = parse_qs(parsed.query).get("node", [""])[0]
            matches = [n for n in self.notes.values() if code and n.path.stem.split(" ", 1)[0] == code]
            focus = "?map=" + quote(code, safe="") if len(matches) == 1 else ""
            return self.base_path + "notes/" + focus + "#notes-graph-heading"
        if parsed.scheme in {"http", "https", "mailto"} or target.startswith("//"):
            return target
        if parsed.scheme:
            self.warnings.add(f"{note.relative}: local/application link omitted")
            return None
        raw = unquote(parsed.path).replace("\\", "/")
        if raw.endswith(".canvas") or raw == "00 开始复习":
            return self.base_path + "notes/#notes-graph-heading"
        if not raw:
            path = note.path
        else:
            if raw.startswith(self.source.name + "/"):
                raw = raw[len(self.source.name) + 1:]
            candidates = [posixpath.normpath(posixpath.join(posixpath.dirname(note.relative), raw)),
                          posixpath.normpath(raw.lstrip("/"))]
            found = set()
            for key in candidates:
                if key == ".." or key.startswith("../"):
                    continue
                for option in [key, key + ".md"]:
                    if option.casefold() in self.paths:
                        found.add(self.paths[option.casefold()])
                if found:
                    break
            if not found and "/" not in raw:
                found.update(self.lookup.get(raw.casefold(), set()))
            external = None
            if not found and self.external_images_root and Path(raw).suffix.lower() in IMAGES:
                candidate = self.external_images_root / raw
                if (not any(part.startswith(".") for part in Path(raw).parts)
                        and candidate.resolve().is_relative_to(self.external_images_root)
                        and not candidate.is_symlink() and candidate.is_file()):
                    external = candidate
            if len(found) != 1 and external is None:
                self.warnings.add(f"{note.relative}: link unavailable in public folder: {raw}")
                return None
            path = external or next(iter(found))
        if path in self.notes:
            linked = self.notes[path]
            if linked.path != note.path:
                links.add(linked.output.removeprefix("content/"))
            url = self.base_path + "notes/obsidian/" + linked.uid + "/"
            if parsed.fragment and not parsed.fragment.startswith("^"):
                url += "#" + quote(anchor(unquote(parsed.fragment).split("#")[-1]))
            elif parsed.fragment:
                self.warnings.add(f"{note.relative}: block reference links to whole note")
            return url
        if path.suffix.lower() not in MEDIA:
            self.warnings.add(f"{note.relative}: attachment format omitted: {path.name}")
            return None
        if path.stat().st_size > 25 * 1024 * 1024:
            raise ValueError(f"Attachment exceeds 25 MB: {path.name}")
        data = path.read_bytes()
        digest = hashlib.sha256(data).hexdigest()
        if digest not in self.media_cache:
            suffix = path.suffix.lower()
            cached = False
            for cached_suffix in dict.fromkeys([".webp", suffix]):
                name = MEDIA_PREFIX + "asset-" + digest[:16] + cached_suffix
                previous = self.repository / name
                if name in self.previous_files and previous.is_file():
                    candidate = previous.read_bytes()
                    if blob_sha(candidate) == self.previous_files[name]:
                        data, suffix, cached = candidate, cached_suffix, True
                        break
            if not cached and suffix in IMAGES - {".svg", ".gif"}:
                try:
                    with Image.open(BytesIO(data)) as original:
                        image = ImageOps.exif_transpose(original)
                        image.thumbnail((2000, 2000))
                        image = image.convert("RGBA" if "A" in image.getbands() or "transparency" in image.info else "RGB")
                        buffer = BytesIO()
                        image.save(buffer, format="WEBP", quality=92, method=4)
                        if len(buffer.getvalue()) < len(data):
                            data, suffix = buffer.getvalue(), ".webp"
                except (OSError, ValueError):
                    pass
            self.media_cache[digest] = (data, suffix)
        data, suffix = self.media_cache[digest]
        asset = "asset-" + digest[:16] + suffix
        self.files[MEDIA_PREFIX + asset] = data
        return self.base_path + "notes-media/" + asset + ("#" + quote(parsed.fragment, safe="=&") if parsed.fragment else "")

    def build(self):
        if not self.source.is_dir():
            raise ValueError(f"Public source folder does not exist: {self.source}")
        for path in public_files(self.source):
            relative = path.relative_to(self.source).as_posix()
            if any(relative.casefold() == prefix or relative.casefold().startswith(prefix + "/") for prefix in self.exclude):
                continue
            if path.suffix.lower() == ".md":
                metadata, body = read_note(path)
                if excluded(metadata):
                    continue
                uid = hashlib.sha256(relative.casefold().encode()).hexdigest()[:16]
                self.notes[path] = Note(path, relative, metadata, body, uid)
            elif path.suffix.lower() not in MEDIA:
                continue
            if relative.casefold() in self.paths:
                raise ValueError(f"Case-insensitive filename collision: {relative}")
            self.paths[relative.casefold()] = path
            self.index(relative, path)
            self.index(path.name, path)
            if path in self.notes:
                self.index(relative[:-len(path.suffix)], path)
                self.index(path.stem, path)
                aliases = metadata.get("aliases", [])
                for alias in aliases if isinstance(aliases, list) else [aliases]:
                    if isinstance(alias, str):
                        self.index(alias, path)
        for note in self.notes.values():
            renderer = NoteRenderer(self, note)
            markdown = mistune.create_markdown(renderer=renderer, plugins=[
                wiki_plugin, "table", "task_lists", "strikethrough", "footnotes", "math"
            ])
            body = markdown(note.body)
            metadata = note.metadata
            modified = datetime.fromtimestamp(note.path.stat().st_mtime, timezone.utc).isoformat()
            created = metadata.get("date", metadata.get("created", modified))
            if isinstance(created, (datetime, date)):
                created = created.isoformat()
            if not isinstance(created, str):
                raise ValueError(f"Invalid date in {note.relative}")
            tags = metadata.get("tags", [])
            if isinstance(tags, str):
                tags = tags.split(",")
            tags = sorted({str(t).strip().lstrip("#") for t in tags if isinstance(t, str) and t.strip()}) if isinstance(tags, list) else []
            frontmatter = {
                "title": str(metadata.get("title") or note.path.stem),
                "date": created, "lastmod": modified, "draft": False,
                "description": str(metadata.get("description") or ""),
                "tags": tags, "note_links": sorted(renderer.links), "obsidian": True,
                "note_course": self.course(str(metadata.get("课程") or self.infer_course(note.relative))),
            }
            self.files[note.output] = ("---\n" + yaml.safe_dump(frontmatter, allow_unicode=True, sort_keys=False)
                                       + "---\n\n" + body).encode("utf-8")
        if self.study_catalog:
            catalog = json.loads(self.study_catalog.read_text(encoding="utf-8-sig"))
            nodes = []
            for node in catalog["nodes"]:
                raw = node["path"].replace("\\", "/").removeprefix(self.source.name + "/")
                note = self.notes.get(self.paths.get(raw.casefold()))
                if not note:
                    continue
                nodes.append({"id": str(node["id"]), "title": str(node["title"]),
                              "course": self.course(node["course"]), "chapter": str(node["chapter"]),
                              "type": "problem" if node.get("type") == "problem" else "concept",
                              "cue": str(node.get("cue", "")),
                              "prerequisites": list(node.get("prerequisites", [])),
                              "note": note.output.removeprefix("content/"),
                              "url": self.base_path + "notes/obsidian/" + note.uid + "/"})
            ids = {node["id"] for node in nodes}
            for node in nodes:
                node["prerequisites"] = [key for key in node["prerequisites"] if key in ids]
            groups = {self.course(course): [[name, [key for key in keys if key in ids]] for name, keys in groups]
                      for course, groups in catalog["groups"].items()}
            self.files[STUDY_MAP] = (json.dumps({"groups": groups, "nodes": nodes}, ensure_ascii=False, indent=2) + "\n").encode("utf-8")
        return self.files

    @staticmethod
    def course(value):
        return "大学物理" if value == "大物" else value

    @staticmethod
    def infer_course(relative):
        for key, label in [("电路", "电路"), ("大物", "大学物理"), ("概率", "概率论")]:
            if key in relative:
                return label
        return "综合"

    def apply(self):
        manifest_path = self.repository / MANIFEST
        previous = json.loads(manifest_path.read_text(encoding="utf-8")) if manifest_path.exists() else {"files": {}}
        old = previous["files"]
        expected = {path: blob_sha(data) for path, data in self.files.items()}
        manifest_bytes = (json.dumps({"version": 1, "notes": len(self.notes), "files": expected},
                                     ensure_ascii=False, indent=2) + "\n").encode("utf-8")
        if (manifest_path.exists() and old == expected and manifest_path.read_bytes() == manifest_bytes
                and all((self.repository / p).is_file() for p in expected)):
            # Still check managed files for manual edits below.
            unchanged = True
        else:
            unchanged = False
        for path in set(old) | set(expected):
            target = self.repository / path
            if not owned_path(path, self.repository):
                raise ValueError("Invalid path in sync manifest")
            if target.exists() and blob_sha(target.read_bytes()) not in {old.get(path), expected.get(path)}:
                raise ValueError(f"Generated file edited outside sync; preserve and review it: {path}")
        if unchanged:
            return False
        for path, data in self.files.items():
            target = self.repository / path
            target.parent.mkdir(parents=True, exist_ok=True)
            with tempfile.NamedTemporaryFile(dir=target.parent, delete=False) as temporary:
                temporary.write(data)
                staging = Path(temporary.name)
            staging.replace(target)
        for path in set(old) - set(expected):
            target = self.repository / path
            if target.is_file():
                target.unlink()
        manifest_path.parent.mkdir(parents=True, exist_ok=True)
        manifest_path.write_bytes(manifest_bytes)
        return True


def github_api(repository, endpoint, payload=None, method=None):
    command = ["gh", "api", f"repos/{repository}/{endpoint}"]
    if payload is not None:
        command.extend(["--method", method or "POST", "--input", "-"])
    result = subprocess.run(command, input=json.dumps(payload) if payload is not None else None,
                            capture_output=True, text=True, encoding="utf-8", check=False)
    if result.returncode:
        raise RuntimeError(result.stderr.strip() or "GitHub request failed")
    return json.loads(result.stdout)


def publish(repository, root, api=github_api):
    manifest = json.loads((root / MANIFEST).read_text(encoding="utf-8"))
    for path in manifest["files"]:
        if not owned_path(path, root):
            raise ValueError("Publishing outside the notes folder is not allowed")
    desired = {path: (root / path).read_bytes() for path in manifest["files"]}
    desired[MANIFEST] = (root / MANIFEST).read_bytes()
    head = api(repository, "git/ref/heads/main")["object"]["sha"]
    commit = api(repository, f"git/commits/{head}")
    tree = api(repository, f"git/trees/{commit['tree']['sha']}?recursive=1")
    if tree.get("truncated"):
        raise RuntimeError("Remote tree is incomplete; publishing stopped")
    remote = {entry["path"]: entry["sha"] for entry in tree["tree"] if entry["type"] == "blob"}
    old = {}
    if MANIFEST in remote:
        blob = api(repository, f"git/blobs/{remote[MANIFEST]}")
        old = json.loads(base64.b64decode(blob["content"]))["files"]
    for path, sha in old.items():
        if not owned_path(path, root) or remote.get(path, sha) != sha:
            raise RuntimeError(f"Remote generated note changed outside sync: {path}")
    entries = []
    uploads = []
    for path, data in desired.items():
        if path != MANIFEST and not owned_path(path, root):
            raise ValueError("Publishing outside the notes folder is not allowed")
        if blob_sha(data) == remote.get(path):
            continue
        if path in remote and path not in old and path != MANIFEST:
            raise RuntimeError(f"Remote file is not owned by sync: {path}")
        try:
            content = data.decode("utf-8")
        except UnicodeDecodeError:
            uploads.append((path, data))
        else:
            entries.append({"path": path, "mode": "100644", "type": "blob", "content": content})
    def upload(item):
        path, data = item
        blob = api(repository, "git/blobs", {"encoding": "base64", "content": base64.b64encode(data).decode()})
        return {"path": path, "mode": "100644", "type": "blob", "sha": blob["sha"]}
    with ThreadPoolExecutor(max_workers=4) as pool:
        entries.extend(pool.map(upload, uploads))
    entries.extend({"path": path, "mode": "100644", "type": "blob", "sha": None}
                   for path in old if path not in desired and path in remote)
    if not entries:
        return None
    new_tree = api(repository, "git/trees", {"base_tree": commit["tree"]["sha"], "tree": entries})
    new_commit = api(repository, "git/commits", {"message": "Sync public Obsidian notes", "tree": new_tree["sha"], "parents": [head]})
    api(repository, "git/refs/heads/main", {"sha": new_commit["sha"], "force": False}, method="PATCH")
    return new_commit["sha"]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source", type=Path)
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--publish", action="store_true")
    parser.add_argument("--watch", action="store_true")
    args = parser.parse_args()
    root = Path(__file__).resolve().parents[1]
    config_path = root / ".obsidian-sync.local.json"
    config = json.loads(config_path.read_text(encoding="utf-8-sig")) if config_path.exists() else {}
    source = args.source or config.get("source")
    if not source:
        parser.error("Set the public folder in .obsidian-sync.local.json or --source")
    site = yaml.safe_load((root / "hugo.yaml").read_text(encoding="utf-8"))
    last_snapshot = None
    candidate_snapshot = None
    media_cache = {}
    while True:
        try:
            exporter = Exporter(source, root, urlsplit(site["baseURL"]).path,
                                config.get("external_images_root"), config.get("exclude", []), media_cache,
                                config.get("study_catalog"))
            files = exporter.build()
            snapshot = {path: blob_sha(data) for path, data in files.items()}
            if args.watch and snapshot != last_snapshot and snapshot != candidate_snapshot:
                candidate_snapshot = snapshot
                time.sleep(3)
                continue
            if snapshot != last_snapshot:
                for warning in sorted(exporter.warnings)[:8]:
                    print("Notice:", warning)
                if len(exporter.warnings) > 8:
                    print(f"Notice: {len(exporter.warnings)} source links could not be displayed as embedded content.")
                if args.dry_run:
                    print(f"Preview: {len(exporter.notes)} public notes, {len(files)} output files. No files changed.")
                    return
                exporter.apply()
                with tempfile.TemporaryDirectory(prefix="sunger-notes-build-") as destination:
                    result = subprocess.run(["hugo", "--minify", "--destination", destination], cwd=root,
                                            capture_output=True, text=True, encoding="utf-8", errors="replace")
                    if result.returncode:
                        raise RuntimeError("Website build failed; nothing published.\n" + result.stdout + result.stderr)
                if args.publish:
                    sha = publish(config.get("repository", "sungerauto-commits/my-web"), root)
                    print(f"Published {len(exporter.notes)} public notes: {sha}" if sha else "Website notes are already up to date.")
                else:
                    print(f"Exported {len(exporter.notes)} public notes. Website build passed.")
                last_snapshot = snapshot
            if not args.watch:
                return
        except (ValueError, RuntimeError, OSError, yaml.YAMLError) as error:
            if not args.watch:
                raise SystemExit(str(error)) from error
            print("Sync paused:", error)
        time.sleep(3)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nSync stopped.")
