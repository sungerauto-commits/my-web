@echo off
chcp 65001 >nul
cd /d "%~dp0"
if not exist ".venv-obsidian\Scripts\python.exe" (
  py -3 -m venv .venv-obsidian
  if errorlevel 1 goto failed
)
".venv-obsidian\Scripts\python.exe" -c "import mistune.renderers.markdown, yaml, PIL" >nul 2>nul
if errorlevel 1 (
  ".venv-obsidian\Scripts\python.exe" -m pip install -r scripts\requirements-obsidian.txt
  if errorlevel 1 goto failed
)
".venv-obsidian\Scripts\python.exe" scripts\sync_obsidian.py --publish %*
if errorlevel 1 goto failed
pause
exit /b 0
:failed
echo Sync failed. No other content was published.
pause
exit /b 1
