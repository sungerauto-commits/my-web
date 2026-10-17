import base64
import json
import tempfile
import unittest
from pathlib import Path

from sync_obsidian import Exporter, MANIFEST, PREFIX, STUDY_MAP, blob_sha, publish


class ExportTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.source = self.root / "public"
        self.repo = self.root / "site"
        self.source.mkdir()
        self.repo.mkdir()

    def write(self, name, text):
        path = self.source / name
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(text, encoding="utf-8")
        return path

    def export(self):
        exporter = Exporter(self.source, self.repo)
        exporter.build()
        return exporter

    def page(self, exporter, filename):
        note = next(note for note in exporter.notes.values() if note.relative == filename)
        return exporter.files[note.output].decode("utf-8")

    def test_opt_out_private_links_and_comments(self):
        outside = self.root / "private.md"
        outside.write_text("PRIVATE SECRET", encoding="utf-8")
        self.write("hidden.md", "---\npublish: false\n---\nSECRET %% unclosed")
        self.write("draft.md", "---\ndraft: true\n---\nDRAFT SECRET")
        self.write("quoted.md", "---\npublish: 'false'\n---\nQUOTED SECRET")
        self.write("hello.md", "Hello %% INTERNAL SECRET %%\n\n[[../private|private]] [[hidden]]")
        exporter = self.export()
        output = "\n".join(value.decode("utf-8") for value in exporter.files.values())
        self.assertEqual(len(exporter.notes), 1)
        self.assertNotIn("SECRET", output)
        self.assertNotIn("../private", output)
        self.assertNotIn("[[hidden]]", output)
        self.assertTrue(exporter.warnings)

    def test_links_images_reference_links_and_backlinks(self):
        self.write("first.md", "[[second#A heading|Other]] ![[photo.png|300]]\n\n[pic][p]\n\n[p]: photo.png\n")
        self.write("second.md", "# A heading\n\nSecond")
        (self.source / "photo.png").write_bytes(b"image-data")
        exporter = self.export()
        output = self.page(exporter, "first.md")
        second = next(note for note in exporter.notes.values() if note.relative == "second.md")
        self.assertIn("/my-web/notes/obsidian/" + second.uid + "/#a-heading", output)
        self.assertIn(second.output.removeprefix("content/"), output)
        self.assertIn("![photo](/my-web/notes-media/asset-", output)
        self.assertNotIn("[p]: photo.png", output)
        self.assertEqual(sum(path.endswith(".png") for path in exporter.files), 1)

    def test_code_is_not_rewritten_and_markdown_features_survive(self):
        self.write("note.md", "`[[missing]]`\n\n```md\n![[private.png]]\n```\n\n| A | B |\n| - | - |\n| 1 | 2 |\n\n- [x] Done\n\n~~Gone~~ $x$\n\nText[^x]\n\n[^x]: Footnote\n")
        exporter = self.export()
        output = self.page(exporter, "note.md")
        for expected in ["`[[missing]]`", "![[private.png]]", "| A | B |", "[x] Done", "~~Gone~~", "$x$", "[^X]: Footnote"]:
            self.assertIn(expected, output)
        self.assertFalse(exporter.warnings)

    def test_explicit_relative_link_with_duplicate_names(self):
        self.write("same.md", "Root")
        self.write("folder/same.md", "Nested")
        self.write("folder/from.md", "[local](same.md) [[../same.md|root]]")
        exporter = self.export()
        output = self.page(exporter, "folder/from.md")
        self.assertFalse(exporter.warnings)
        self.assertEqual(output.count("](/my-web/notes/obsidian/"), 2)

    def test_only_referenced_public_media_is_copied(self):
        (self.source / "used.jpg").write_bytes(b"used")
        (self.source / "unused.jpg").write_bytes(b"unused")
        (self.root / "private.png").write_bytes(b"private")
        self.write("note.md", "![](used.jpg) ![](../private.png)")
        exporter = self.export()
        self.assertEqual([value for name, value in exporter.files.items() if name.endswith(".jpg")], [b"used"])
        self.assertNotIn(b"private", exporter.files.values())

    def test_missing_source_never_retracts_content(self):
        self.write("note.md", "Hello")
        self.export().apply()
        before = (self.repo / MANIFEST).read_bytes()
        with self.assertRaises(ValueError):
            Exporter(self.root / "missing", self.repo).build()
        self.assertEqual(before, (self.repo / MANIFEST).read_bytes())

    def test_external_referenced_images_deduplicate_without_copying_other_files(self):
        (self.root / "photo.jpg").write_bytes(b"shared image")
        (self.root / "private.md").write_text("PRIVATE SECRET", encoding="utf-8")
        self.write("copy.jpg", "shared image")
        self.write("note.md", "![[photo.jpg]] ![[copy.jpg]] [[private.md]]")
        exporter = Exporter(self.source, self.repo, external_images_root=self.root)
        exporter.build()
        assets = [key for key in exporter.files if key.startswith("static/")]
        self.assertEqual(len(assets), 1)
        self.assertNotIn("PRIVATE SECRET", self.page(exporter, "note.md"))

    def test_catalog_exports_only_published_nodes_and_no_private_plugin_state(self):
        self.write("A.md", "[[B]]")
        self.write("B.md", "---\npublish: false\n---\nPrivate")
        catalog = self.root / "catalog.json"
        catalog.write_text(json.dumps({"groups": {"大物": [["chapter", ["A", "B"]]]}, "nodes": [
            {"id": "A", "title": "A", "path": "public/A.md", "course": "大物", "chapter": "chapter", "prerequisites": ["B"], "search": "PRIVATE PLUGIN STATE"},
            {"id": "B", "title": "B", "path": "public/B.md", "course": "大物", "chapter": "chapter", "prerequisites": []}
        ]}), encoding="utf-8")
        exporter = Exporter(self.source, self.repo, study_catalog=catalog)
        exporter.build()
        data = json.loads(exporter.files[STUDY_MAP])
        self.assertEqual(len(data["nodes"]), 1)
        self.assertEqual(data["nodes"][0]["prerequisites"], [])
        self.assertIn("大学物理", data["groups"])
        self.assertNotIn("PRIVATE", exporter.files[STUDY_MAP].decode())
        exporter.apply()

    def test_apply_idempotent_retraction_and_manual_edits(self):
        source = self.write("note.md", "Hello")
        exporter = self.export()
        self.assertTrue(exporter.apply())
        self.assertFalse(self.export().apply())
        output = self.repo / next(iter(exporter.files))
        output.write_text("manual change", encoding="utf-8")
        with self.assertRaises(ValueError):
            self.export().apply()
        output.write_bytes(next(iter(exporter.files.values())))
        source.unlink()
        self.assertTrue(self.export().apply())
        self.assertFalse(output.exists())

    def test_empty_initial_sync_creates_manifest(self):
        self.assertTrue(self.export().apply())
        self.assertEqual(json.loads((self.repo / MANIFEST).read_text())["notes"], 0)
        self.assertNotIn(b"\r\n", (self.repo / MANIFEST).read_bytes())

    def test_manifest_newline_normalization_then_noop(self):
        self.write("note.md", "Hello")
        self.export().apply()
        path = self.repo / MANIFEST
        path.write_bytes(path.read_bytes().replace(b"\n", b"\r\n"))
        self.assertTrue(self.export().apply())
        self.assertNotIn(b"\r\n", path.read_bytes())
        self.assertFalse(self.export().apply())

    def test_manifest_cannot_delete_outside_owned_folder(self):
        target = self.repo / "keep.txt"
        target.write_text("keep", encoding="utf-8")
        (self.repo / "data").mkdir()
        (self.repo / MANIFEST).write_text(json.dumps({"files": {"keep.txt": blob_sha(b"keep")}}))
        with self.assertRaises(ValueError):
            self.export().apply()
        self.assertTrue(target.exists())

    def test_unclosed_comment_aborts_before_export(self):
        self.write("note.md", "Hello %% secret")
        with self.assertRaises(ValueError):
            self.export()
        self.assertFalse((self.repo / MANIFEST).exists())

    def test_publisher_scopes_writes_and_retracts_owned_files(self):
        self.write("note.md", "Hello")
        self.export().apply()
        deleted = PREFIX + "old/index.md"
        old = json.dumps({"files": {deleted: "old-sha"}}).encode()
        calls = []

        def api(repository, endpoint, payload=None, method=None):
            calls.append((endpoint, payload, method))
            if endpoint == "git/ref/heads/main":
                return {"object": {"sha": "head"}}
            if endpoint == "git/commits/head":
                return {"tree": {"sha": "tree"}}
            if endpoint.startswith("git/trees/tree?"):
                return {"tree": [{"path": MANIFEST, "sha": "manifest", "type": "blob"},
                                 {"path": deleted, "sha": "old-sha", "type": "blob"},
                                 {"path": "content/posts/keep.md", "sha": "keep", "type": "blob"}]}
            if endpoint == "git/blobs/manifest":
                return {"content": base64.b64encode(old).decode()}
            return {"sha": "created"}

        self.assertEqual(publish("owner/site", self.repo, api), "created")
        entries = next(payload["tree"] for endpoint, payload, _ in calls if endpoint == "git/trees")
        self.assertTrue(all(entry["path"].startswith(PREFIX) or entry["path"] == MANIFEST for entry in entries))
        self.assertIn({"path": deleted, "mode": "100644", "type": "blob", "sha": None}, entries)
        self.assertEqual(calls[-1][1]["force"], False)


if __name__ == "__main__":
    unittest.main()
