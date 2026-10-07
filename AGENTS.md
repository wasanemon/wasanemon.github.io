# AGENTS.md

宮﨑祐介(Yusuke Miyazaki)の公式個人サイト。Astro(静的ビルド)+ Tailwind CSS。
`main` への push で GitHub Actions がビルドし、https://wasanemon.github.io/ に公開される。

デザインは別リポジトリ `wasanemon/sasane` の骨格(ドット文字の見出し、縁取りとハードシャドウのカード、ティッカー)を流用し、題材を「レトロPCのデスクトップ」に置き換えている。カードはタイトルバー付きのウィンドウ(`src/components/Window.astro`)、装飾はフロッピー・フォルダ・カーソルのアイコン(`src/components/deco/`)、本文は角ゴシック。丸ゴシック、ピンク、絵文字の装飾、丸いピル型は使わない。

## コマンド

```bash
npm install
npm run dev      # http://localhost:4321 (.claude/launch.json の dev と同じ)
npm run build    # dist/ に出力
```

## どこに何があるか

| 変えたいもの | 場所 |
| --- | --- |
| サイト上の文言すべて | `src/i18n/locales/ja.ts` |
| 研究業績 | `src/data/research.ts`(先頭 = 最新) |
| NEWS | `src/content/news/*.md`(category: info / award / paper / media / event) |
| 他媒体での掲載(MEDIA) | `src/data/media.ts`(先頭 = 最新) |
| SNS・関連ページのリンク | `src/data/links.ts` |
| 画像(TOPのキービジュアル、PROFILEの写真) | `public/assets/official/` に置き、`src/data/assets.ts` の `file` に書く |
| 配色・フォント・角丸・影 | `src/styles/tokens.css` |
| 起動オープニング(ターミナル風タイピング) | `src/components/BootOpening.astro`、文言は `ja.ts` の `boot` |
| すきなもののアイコン(FAVORITES) | `src/components/deco/HobbyIcon.astro`、並びは `ja.ts` の `home.favorites` |
| アバター(足元に猫) | `src/components/deco/Avatar.astro` |
| 歩き回る猫と、ついて歩くカモ | `src/components/RoamingCat.astro` |
| 「×」で閉じるウィンドウ、文句のウィンドウ、ごみ箱、スタートメニュー、シャットダウン | `src/components/Desktop.astro`、文言は `ja.ts` の `fun`(文句のウィンドウだけ英語) |
| SQLで自己紹介(PROFILE) | `src/components/SqlConsole.astro`、文言と表は `ja.ts` の `sql` |

## 決まりごと

- 色・フォント等は必ず `src/styles/tokens.css` のトークン経由(直書き禁止)
- UI文言は `src/i18n/locales/ja.ts` に集約(ハードコード禁止)
- 画像は `src/data/assets.ts` のスロット + `ImageSlot` 経由のみ。未投入のスロットはページ側で代替表示か非表示にしている(「COMING SOON」は出さない)

## 内容の方針

- 第一の肩書きは「データベースシステム研究者」。未踏IT採択とスーパークリエータ認定が最大の業績
- モデル活動は PROFILE の末尾に短く。「これから」のニュアンスで、事務所ページと Instagram へのリンクのみ
- 載せるのは公開情報か本人が確認した事実だけ。推測で業績・著者順・発表形態を書かない
- メールアドレスは載せない。生年月日、住所、就職活動、不採録の履歴も載せない
- 表記は「宮﨑」(﨑)。別表記「宮崎祐介」は meta description と JSON-LD の `alternateName` にだけ置く
- 内容を変えたら `src/pages/index.astro` の JSON-LD `dateModified` と `public/sitemap.xml` の `lastmod` を更新
