# 宮﨑祐介 / Yusuke Miyazaki 公式サイト

https://wasanemon.github.io/

宮﨑祐介(宮崎祐介 / Yusuke Miyazaki)の公式個人サイト。Astro(静的ビルド)+ Tailwind CSS。
デザインは `wasanemon/sasane` のものを流用している。

## 開発

Node.js 22.12 以上が必要。

```bash
npm install
npm run dev      # 開発サーバー http://localhost:4321
npm run build    # 静的ビルド(dist/ に出力)
npm run preview  # ビルド結果の確認
```

初回アクセス時にターミナル風の起動オープニングが出る(2回目以降は自動でスキップ)。

## 更新のしかた

| 変えたいもの | 場所 |
| --- | --- |
| 文言 | `src/i18n/locales/ja.ts` |
| 研究業績 | `src/data/research.ts` |
| NEWS | `src/content/news/` に Markdown を1つ追加 |
| リンク | `src/data/links.ts` |
| 写真 | `public/assets/official/` に置き、`src/data/assets.ts` の `file` にファイル名を書く |
| 配色・フォント | `src/styles/tokens.css` |

NEWS の書式:

```markdown
---
title: 記事タイトル
date: 2026-11-20
category: paper   # info / award / paper / media / event
---

本文
```

## 公開

`main` に push すると `.github/workflows/deploy.yml` がビルドして GitHub Pages に公開する。
リポジトリの Settings → Pages → Source は「GitHub Actions」にしておく。

## 掲載内容の出典

- 未踏IT: [IPA スーパークリエータ紹介ページ](https://www.ipa.go.jp/jinzai/mitou/koubo/career/2025/2025-supercreator-22.html) / [経済産業省の発表](https://www.meti.go.jp/press/2026/06/20260604002/20260604002.html) / [慶應義塾の記事](https://www.keio.ac.jp/ja/sfc-pem/news/20260713/)
- Kamo: [さくらのナレッジ](https://knowledge.sakura.ad.jp/50280/) / [GitHub](https://github.com/mitou-Kamo/LineairDB-storage-engine)
- 研究業績: [IEEE Xplore](https://ieeexplore.ieee.org/document/10596429) / [xSIG 2026](https://xsig.ipsj.or.jp/2026/)。SC26 と情報処理学会論文誌は採択・採録通知に基づく
- モデル: [model agency friday](https://fridayfarm.net/yusuke-miyazaki/)
