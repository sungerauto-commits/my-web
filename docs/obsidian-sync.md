# Obsidian Notes

The site publishes a one-way snapshot of an explicitly selected public folder.
The source vault is never modified by the exporter. Local connection settings
live in `.obsidian-sync.local.json`, which is excluded from Git.

## Use On This Computer

The configured source is the `知识库` folder in the selected Obsidian vault.
Templates and Obsidian-only UI instructions are excluded by local settings.

- Double-click `sync-notes.cmd` to export, verify the Hugo build, and publish.
- Double-click `watch-notes.cmd` to keep syncing while its window stays open.
- Only Markdown notes and referenced attachments are eligible. `publish: false`
  or `draft: true` excludes an individual note. Explicitly referenced images may
  also be read from inside the configured vault, but unrelated vault notes,
  hidden folders, plugin settings, and backups are never copied.
- Move a note out of the public folder, or exclude it, then sync again to remove
  the generated page and unused attachments. Old public revisions can remain in
  GitHub history; removing the current page does not erase that history.
- Source PDFs and PPTs outside the selected folder become readable labels, not
  broken download links. Outside-vault files are never copied. Images are
  deduplicated, resized to at most 2000 pixels, and converted to WebP when
  smaller. Original files remain untouched.

The notes landing page contains only the knowledge map and relationship graph,
with course selection and graph search. Full notes open from graph nodes;
there is no separate note directory on this page. The relationship canvas also
supports keyboard node selection and opening. Graph data is derived at build
time from published pages; private or
excluded notes never appear as nodes. A two-way link is drawn as one connection.

The separate knowledge map preserves the existing Obsidian study-map catalog:
courses, chapter order, prerequisite arrows, concepts, learning cues, and related
original problems. Selecting a node reveals its prerequisites and full-note
link. Plugin history, personal review state, and raw filesystem paths are not
exported. Existing study-map links focus the corresponding website node.
Both views have course filtering; the map also has chapter and problem controls.

## Conversion

Supported: standard Markdown, tables, task lists, footnotes, public `[[links]]`,
heading links, note aliases, and image embeds. Standard local links and reference
links are resolved too. Images use responsive sizing. Note transclusions become
links instead of copying another note's contents. Audio, video, and PDF embeds
become links to copied attachments. Referenced attachments are limited to 25 MB.

Obsidian `%%comments%%` and HTML comments are stripped before parsing, including
when these markers are used in a code example. Unclosed Obsidian comments abort
the export. Code blocks and inline code otherwise preserve literal wiki syntax.
Block references fall back to the containing note. TeX formulas render with
locally hosted KaTeX. Dataview and arbitrary plugins are not executed; Canvas
entry links open the website knowledge views.

The exporter uses Mistune's Markdown parser and PyYAML's safe frontmatter parser.
It forwards only title, dates, description, and tags; source metadata cannot
override Hugo routes, output formats, or layouts.

## Implementation

Generated bundles are under `content/notes/obsidian/`, deduplicated media under
`static/notes-media/`, and the sanitized map in `data/study-map.json`.
A tracked manifest at
`data/obsidian-sync.json` records exact file hashes. Sync aborts if a managed
file was edited outside the exporter, rather than overwriting that work.
The publisher updates only these managed files and the manifest through the GitHub
Git Data API. It preserves all other site files and rejects remote conflicts.

Prerequisites: Python 3.10+, Hugo Extended, authenticated GitHub CLI, and network
access. The launchers create an isolated Python environment on first use.
The first website integration is deployed separately from the content-only
publisher. No scheduled task, login service, or permanent watcher is installed.
Watching requires this computer to remain on and connected. Local config accepts
`source`, `external_images_root`, `exclude`, `study_catalog`, and `repository`.

```powershell
.\.venv-obsidian\Scripts\python.exe scripts/sync_obsidian.py --dry-run
.\.venv-obsidian\Scripts\python.exe -m unittest discover -s scripts -p 'test_*.py'
```

Vendor assets: D3 7.9.0 (ISC), Lucide Static 0.468.0 (ISC), and KaTeX 0.16.22
(MIT), with licenses next
to the files. D3 is loaded only on a populated notes page; its force simulation
settles and stops instead of running indefinitely.
