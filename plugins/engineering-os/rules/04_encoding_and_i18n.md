# UTF-8 & Internationalization (I18N) Standards for Windows

To prevent broken characters, mojibake, or parser crashes when handling international characters (Spanish accents, tildes: `á, é, í, ó, ú, ñ`, opening marks: `¿, ¡`, and emojis):

## 1. PowerShell Script Standards
All `.ps1` automation scripts must explicitly configure standard UTF-8 stream and console encodings at the top of the file:
```powershell
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8
```

## 2. File Writing & Reading Standards
- When writing files from PowerShell, use explicit UTF-8:
  ```powershell
  Set-Content -Path $filePath -Value $content -Encoding UTF8
  # or
  [System.IO.File]::WriteAllText($filePath, $content, [System.Text.Encoding]::UTF8)
  ```
- Avoid raw shell heredocs that mix string interpolation with multibyte unicode characters unless properly encoded in UTF-8.

## 3. Web & Markdown Standards
- All HTML documents must declare `<meta charset="UTF-8">`.
- All Markdown documents in `docs/` and Obsidian must be encoded in pure UTF-8.
- Never strip accents or replace Spanish characters with ASCII approximations unless strictly required by filesystem or URL slug constraints.
