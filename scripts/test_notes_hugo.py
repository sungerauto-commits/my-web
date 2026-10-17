import json
import shutil
import subprocess
import tempfile
import unittest
from html.parser import HTMLParser
from pathlib import Path

from sync_obsidian import Exporter


REPOSITORY = Path(__file__).resolve().parents[1]


class Elements(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.items = []
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        self.items.append((tag, dict(attrs)))


def build_fixture(root):
    source = root / "public-notes"
    site = root / "site"
    output = root / "serve/my-web"
    source.mkdir(parents=True)
    shutil.copytree(REPOSITORY / "content", site / "content", ignore=shutil.ignore_patterns("obsidian"))
    fixture = {
        "电影与城市.md": "---\ntags: [电影]\ndescription: 从街道、建筑与银幕上的生活片段开始。\n---\n## 街道的片段\n\n[[散步的路线]] 和 [[阅读札记]]\n\n![[paper.webp]]\n",
        "散步的路线.md": "---\ntags: [生活]\n---\n## 路上的光\n\n[[电影与城市]] [[镜头里的光]]\n",
        "阅读札记.md": "---\ntags: [阅读]\n---\n## 留下的句子\n\n[[历史的侧面]] [[笔记之间]]\n\n| 书页 | 摘记 |\n| --- | --- |\n| 一 | 开始 |\n",
        "镜头里的光.md": "---\ntags: [摄影]\n---\n光影与观察，[[散步的路线]]。",
        "历史的侧面.md": "---\ntags: [阅读]\n---\n[[电影与城市]] 与 [[阅读札记]]。",
        "笔记之间.md": "---\ntags: [生活]\n---\n[[阅读札记]]，[[散步的路线]]，[[私人笔记]]。",
        "私人笔记.md": "---\npublish: false\n---\nPRIVATE FIXTURE SECRET",
    }
    for name, body in fixture.items():
        (source / name).write_text(body, encoding="utf-8")
    shutil.copyfile(REPOSITORY / "static/images/art/cotton-rag-v2.webp", source / "paper.webp")
    catalog = root / "catalog.json"
    catalog.write_text(json.dumps({"groups": {"综合": [["札记", ["N01", "N02"]]]}, "nodes": [
        {"id": "N01", "title": "电影与城市", "path": "电影与城市.md", "course": "综合", "chapter": "札记", "prerequisites": []},
        {"id": "N02", "title": "散步的路线", "path": "散步的路线.md", "course": "综合", "chapter": "札记", "prerequisites": ["N01"]}
    ]}, ensure_ascii=False), encoding="utf-8")
    exporter = Exporter(source, site, study_catalog=catalog)
    exporter.build()
    exporter.apply()
    override = root / "fixture.json"
    override.write_text(json.dumps({"staticDir": [str(REPOSITORY / "static"), str(site / "static")], "dataDir": str(site / "data")}), encoding="utf-8")
    result = subprocess.run(["hugo", "--source", str(REPOSITORY), "--config", str(REPOSITORY / "hugo.yaml") + "," + str(override), "--contentDir", str(site / "content"),
                             "--destination", str(output), "--baseURL", "http://127.0.0.1:1318/my-web/"],
                            capture_output=True, text=True, encoding="utf-8", errors="replace")
    if result.returncode:
        raise RuntimeError(result.stdout + result.stderr)
    return output, exporter


@unittest.skipUnless(shutil.which("hugo"), "Hugo is required for the integration check")
class HugoNotesTests(unittest.TestCase):
    def test_published_pages_graph_search_backlinks_and_assets(self):
        with tempfile.TemporaryDirectory(prefix="sunger-hugo-test-") as temporary:
            output, exporter = build_fixture(Path(temporary))
            graph = json.loads((output / "notes/index.json").read_text(encoding="utf-8"))
            self.assertEqual(len(graph["nodes"]), 6)
            self.assertEqual(len(graph["study"]["nodes"]), 2)
            self.assertEqual(graph["study"]["nodes"][1]["prerequisites"], ["N01"])
            self.assertGreaterEqual(len(graph["links"]), 6)
            ids = {node["id"] for node in graph["nodes"]}
            self.assertTrue(all(link["source"] in ids and link["target"] in ids for link in graph["links"]))
            pairs = {tuple(sorted((link["source"], link["target"]))) for link in graph["links"]}
            self.assertEqual(len(pairs), len(graph["links"]))
            index = (output / "notes/index.html").read_text(encoding="utf-8")
            self.assertIn("data-note-graph", index)
            self.assertIn("data-study-map", index)
            self.assertIn("data-graph-canvas", index)
            self.assertIn("data-graph-expand", index)
            for icon in ["scan.svg", "minimize.svg", "maximize.svg"]:
                self.assertTrue((output / "images/icons" / icon).is_file())
            self.assertNotIn("data-note-entry", index)
            self.assertNotIn("notes-directory", index)
            self.assertNotIn("collection-page-header", index)
            self.assertTrue(any(node["title"] == "电影与城市" for node in graph["nodes"]))
            self.assertIn("知识地图", index)
            self.assertIn("关系图谱", index)
            home = (output / "index.html").read_text(encoding="utf-8")
            elements = Elements(home).items
            kinds = [attrs.get("data-record-kind") for _, attrs in elements]
            filters = [attrs.get("data-record-filter") for _, attrs in elements]
            self.assertNotIn("notes", kinds)
            self.assertNotIn("notes", filters)
            self.assertIn("photos", kinds)
            self.assertIn("videos", kinds)
            self.assertIn('/my-web/notes/', home)
            font = next(attrs for tag, attrs in elements if tag == "link" and "fontsapi.zeoseven.com/292" in attrs.get("href", ""))
            self.assertEqual(font.get("media"), "print")
            search = (output / "index.json").read_text(encoding="utf-8")
            self.assertIn("电影与城市", search)
            self.assertNotIn("PRIVATE FIXTURE SECRET", search)
            note = next(note for note in exporter.notes.values() if note.relative == "散步的路线.md")
            page = (output / "notes/obsidian" / note.uid / "index.html").read_text(encoding="utf-8")
            self.assertIn("note-backlinks", page)
            self.assertIn("电影与城市", page)
            self.assertIn("note-toc", page)
            assets = [output / key.removeprefix("static/") for key in exporter.files if key.startswith("static/")]
            self.assertEqual(len(assets), 1)
            self.assertTrue(all(path.is_file() for path in assets))


if __name__ == "__main__":
    unittest.main()
