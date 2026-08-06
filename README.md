# 宮﨑祐介 / Yusuke Miyazaki 公式サイト

宮﨑祐介(宮崎祐介 / Yusuke Miyazaki)の公式個人サイトです。
「宮﨑祐介」「宮崎祐介」「Yusuke Miyazaki」で検索された際に本人の公式情報が見つかることを目的としています。

ビルド不要の静的サイト(HTML/CSS のみ)で、GitHub Pages でそのまま公開できます。

## 構成 / 変更内容

| ファイル | 内容 |
|---|---|
| `index.html` | メインページ(日本語中心・英語併記)。title / meta description / OGP / canonical / JSON-LD(ProfilePage + Person)を設定 |
| `assets/style.css` | レスポンシブ対応のベーススタイル(ライト/ダークモード対応。デザインは今後調整予定) |
| `assets/ogp.svg` / `assets/ogp.png` | OGP画像(1200×630)。SVGが元データで、`rsvg-convert -w 1200 -h 630 assets/ogp.svg -o assets/ogp.png` で再生成可能 |
| `favicon.svg` | ファビコン |
| `404.html` | 404ページ(noindex) |
| `sitemap.xml` | サイトマップ |
| `robots.txt` | クローラー許可 + サイトマップ参照 |
| `.nojekyll` | GitHub Pages の Jekyll 処理を無効化 |
| `tools/set-base-url.sh` | ベースURL(canonical / OGP / sitemap / robots)の一括変更スクリプト |
| `.base-url` | 現在設定されているベースURL(スクリプトが参照) |

### 掲載内容と出典

推測を避けるため、公式に確認できる情報のみを掲載しています。

- **未踏IT**: [IPA スーパークリエータ紹介ページ](https://www.ipa.go.jp/jinzai/mitou/koubo/career/2025/2025-supercreator-22.html) / [経済産業省 発表(2026年6月)](https://www.meti.go.jp/press/2026/06/20260604002/20260604002.html)
- **SFCでの表彰(受賞掲載)**: [慶應義塾 SFC 2025年 教員・学生の受賞](https://www.keio.ac.jp/ja/sfc/activity/award/award2025/)(2025年6月・未踏採択の掲載)
- **Kamoプロジェクト**: [さくらのナレッジ 解説記事](https://knowledge.sakura.ad.jp/50280/) / [GitHub: mitou-Kamo/LineairDB-storage-engine](https://github.com/mitou-Kamo/LineairDB-storage-engine)
- **モデル活動**: [model agency friday プロフィール](https://fridayfarm.net/yusuke-miyazaki/)

## 公開方法(GitHub Pages)

公開URL: **https://wasanemon.github.io/** (ユーザーサイトとして公開。ベースURLは設定済み)

1. GitHub のリポジトリ [wasanemon/miyayu](https://github.com/wasanemon/miyayu) の
   **Settings → General → Repository name** で `miyayu` → `wasanemon.github.io` にリネームする

2. このリポジトリを push する

   ```bash
   git remote add origin git@github.com:wasanemon/wasanemon.github.io.git
   git push -u origin feat/official-site
   ```

3. GitHub 上で `feat/official-site` → `main` へマージ(または直接 `main` に push)

4. リポジトリ → **Settings → Pages** → 「Build and deployment」で
   - Source: **Deploy from a branch**
   - Branch: **main** / **/(root)**
   を選択して保存。数分で https://wasanemon.github.io/ に公開されます。

※ 公開URLを変更する場合(独自ドメイン等)は `./tools/set-base-url.sh <新URL>` で一括置換できます。

### 独自ドメインを設定する場合(後から可能)

1. DNSを設定する
   - サブドメイン(例 `www.example.com`)の場合: CNAME レコードで `<username>.github.io` を指定
   - Apexドメイン(例 `example.com`)の場合: A レコードで GitHub Pages のIP(185.199.108.153 / 109.153 / 110.153 / 111.153)を指定
2. GitHub の **Settings → Pages → Custom domain** にドメインを入力(リポジトリに `CNAME` ファイルが自動作成される)
3. 「Enforce HTTPS」を有効化
4. ベースURLを差し替えてコミット:

   ```bash
   ./tools/set-base-url.sh https://your-domain.com
   ```

## ローカルでの確認

```bash
python3 -m http.server 8000
```

を実行して `http://localhost:8000` を開きます。

## 今後のSEO改善点

- [x] **ベースURLの設定** — `https://wasanemon.github.io` を設定済み
- [ ] **Google Search Console への登録**: サイト所有権を確認し、`sitemap.xml` を送信。「宮﨑祐介」「宮崎祐介」「Yusuke Miyazaki」での掲載状況とクリック率を確認できるようにする
- [ ] **Bing Webmaster Tools への登録**(Search Console からインポート可能)
- [ ] **本人写真の掲載**: プロフィール写真とOGP画像を実写に差し替えると、検索結果・SNSシェアでの本人性が大幅に向上(JSON-LD の `image` も更新)
- [ ] **外部プロフィールからの被リンク**: GitHub個人アカウント・Instagram・X などのプロフィール欄にこのサイトのURLを記載(双方向リンクで同一人物性のシグナルを強化)
- [ ] **英語ページの分離**: 現在は1ページ内に英語併記。`en/index.html` を作成し `hreflang` を設定すると "Yusuke Miyazaki" での英語圏検索に有利
- [ ] **コンテンツの追加**: 技術記事・登壇・研究業績などの追加(更新頻度と情報量は評価に寄与)。`sitemap.xml` へのページ追加を忘れずに
- [ ] **構造化データの検証**: 公開後に [Google リッチリザルトテスト](https://search.google.com/test/rich-results) で JSON-LD を検証

## 未確定の情報(要確認)

以下はオーナー(宮﨑さん本人)の確認・提供が必要です:

1. **X(Twitter)・LinkedIn などその他SNS**(あれば追加。GitHub は [@wasanemon](https://github.com/wasanemon) を掲載済み)
2. **公開する連絡先メールアドレス**(現在 `miyayu@keio.jp` を掲載。変更・非公開にする場合は `index.html` の連絡先セクションと JSON-LD を修正)
3. **プロフィール写真**(掲載する場合)
4. **独自ドメインの取得予定**
