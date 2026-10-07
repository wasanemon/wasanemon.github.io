# AGENTS.md

宮﨑祐介(Yusuke Miyazaki)の公式個人サイト。ビルドなしの静的サイトで、`main` への push がそのまま https://wasanemon.github.io/ に公開される。

## 構成

- `index.html` — 唯一のページ。本文、OGP、JSON-LD(ProfilePage / Person)を含む
- `assets/style.css` — 全スタイル。404 ページも共用
- `assets/ogp.svg` → `assets/ogp.png` — OGP 画像。SVG を編集したら PNG を再生成する
- `tools/set-base-url.sh` — 公開 URL の一括置換(`.base-url` が現在値)

## コマンド

```bash
python3 -m http.server 8000   # プレビュー(.claude/launch.json の site-preview と同じ)
rsvg-convert -w 1200 -h 630 assets/ogp.svg -o assets/ogp.png
```

## 内容の方針

- 第一の肩書きは「データベースシステム研究者」。未踏IT採択とスーパークリエータ認定が最大の業績で、研究業績より上に置く
- モデル活動は末尾に短く。「これから」のニュアンスで、事務所ページと Instagram へのリンクのみ
- 載せるのは公開情報か本人が確認した事実だけ。推測で業績・著者順・発表形態を書かない
- メールアドレスは載せない(本文にも JSON-LD にも)。生年月日、住所、就職活動、不採録の履歴も載せない
- 表記は「宮﨑」(﨑)。検索用の別表記「宮崎祐介」は meta description と JSON-LD の `alternateName` にだけ置く

## デザインの方針

4列の罫線グリッドに、大きな一文と等幅の表を載せる。参考は maximiliankaspar.com(グリッドと一文)と artemiilebedev.com(名前 / 分野 / 年の表)。

- 縦の罫線は `body::before` で画面全体に固定。全要素は `.grid`(4列、720px以下は2列)に乗せ、セルの左右余白は `--cell`
- 各セクションは `.grid.block`。1列目に等幅のラベル(`.label`)、2〜4列目に内容
- 一覧は `.table`: タイトル(2列)+ 会議名と年(1列、等幅)。補足は `.note`
- 大きく見せるのは冒頭の一文(`.statement`)、`Kamo`、数値(`.figures dt`)だけ。ほかは 15px 前後
- 色は白黒と罫線のグレー、差し色 `--accent` は1色のみ(■、選択範囲、フォーカス)。リンクの hover は白黒反転
- 書体は IBM Plex Sans JP と IBM Plex Mono(Google Fonts)。ラベル・年・数値・英語の補足は等幅
- カード、角丸、影、アイコン、画像、JavaScript は足さない
- ライト / ダークの両方と、幅 1440px・375px で確認する

## 更新時のチェック

- 業績を足すとき: `index.html` の該当 `.table` に新しい順で追加
- 内容を変えたら JSON-LD の `dateModified` と `sitemap.xml` の `lastmod` を更新
- 肩書きを変えたら title / description / OGP / JSON-LD / `assets/ogp.svg` を揃える
