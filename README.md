# チェンマイ持ち物リスト

Chiangmai Thailand by UTMB 2026（大和練）の持ち物チェックリスト。GitHub Pages で公開する単体のWebアプリ（AI 不使用）。

- 公開URL: https://hirinyo2019-glitch.github.io/chiangmai-utmb-packing/
- リストの中身は `list.txt`（LINE ノート「5. 持ち物リスト」と同じ書式）をアプリが毎回読み込む。
  - `■` セクション / `【】` 小見出し / `・種目名 ／ 種目名`（【種目ごとの追加】の中）/ `□` 項目 / 全角スペースで始まる行 = 項目の補足（URL はリンク）/ `※` 注意書き
- チェック状態は各自のブラウザ（localStorage）に保存。項目の「（）」より前の名前が同じならチェックは引き継がれる。新しい項目には NEW 印。
- 圏外でも前回のリストで開ける（sw.js）。

## 更新手順

1. `craftmuse/Activities/chiangmai-by-utmb-2026/line-notes/5_持ち物リスト.txt` を編集
2. `持ち物リストを反映.bat` を実行（list.txt にコピーして push）
