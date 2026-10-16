# ノート5（craftmuse の line-notes）を list.txt にコピーして GitHub Pages に反映する
$ErrorActionPreference = "Stop"
$env:Path = "$env:LOCALAPPDATA\Programs\Git\cmd;$env:Path"
Set-Location $PSScriptRoot
$src = Join-Path $PSScriptRoot "..\craftmuse\Activities\chiangmai-by-utmb-2026\line-notes\5_持ち物リスト.txt"
Copy-Item -LiteralPath $src -Destination "list.txt" -Force
git add -A
if (git status --porcelain) {
  git commit -m "Update packing list $(Get-Date -Format 'yyyy-MM-dd HH:mm')" | Out-Null
  git push
  Write-Host "反映しました。数分でアプリに出ます: https://hirinyo2019-glitch.github.io/chiangmai-utmb-packing/"
} else {
  Write-Host "変更はありません。"
}
