/**
 * 外部リンク集約 — SNS・関連ページのURLはすべてここで管理する。
 * url が空文字列のあいだ、LINKSページでは「準備中」表示になる(リンクにならない)。
 */

/** アイコンは src/components/deco/Icon.astro の自作SVG(商標ロゴは使用しない) */
export type IconName = 'tiktok' | 'instagram' | 'youtube' | 'streaming' | 'code' | 'page';

export interface ExternalLink {
  id: string;
  /** 表示名 */
  platform: string;
  /** アカウント名等の補足(未定なら空でOK・表示されない) */
  handle: string;
  /** 実URL。空なら「準備中」表示 */
  url: string;
  icon: IconName;
}

/** SNS */
export const snsLinks: ExternalLink[] = [
  { id: 'github', platform: 'GitHub', handle: '@wasanemon', url: 'https://github.com/wasanemon', icon: 'code' },
  { id: 'instagram', platform: 'Instagram', handle: '@wasanemon', url: 'https://www.instagram.com/wasanemon/', icon: 'instagram' },
];

/** 関連する公式ページ */
export const pageLinks: ExternalLink[] = [
  {
    id: 'ipa',
    platform: 'IPA',
    handle: '未踏スーパークリエータ紹介ページ',
    url: 'https://www.ipa.go.jp/jinzai/mitou/koubo/career/2025/2025-supercreator-22.html',
    icon: 'page',
  },
  {
    id: 'keio',
    platform: '慶應義塾',
    handle: 'SFC生が未踏IT人材発掘・育成事業で活躍',
    url: 'https://www.keio.ac.jp/ja/sfc-pem/news/20260713/',
    icon: 'page',
  },
  {
    id: 'sakura',
    platform: 'さくらのナレッジ',
    handle: '「Kamo」の開発 解説記事',
    url: 'https://knowledge.sakura.ad.jp/50280/',
    icon: 'page',
  },
  {
    id: 'kamo-github',
    platform: 'Kamo',
    handle: 'mitou-Kamo/LineairDB-storage-engine',
    url: 'https://github.com/mitou-Kamo/LineairDB-storage-engine',
    icon: 'code',
  },
  {
    id: 'friday',
    platform: 'model agency friday',
    handle: 'モデル プロフィール',
    url: 'https://fridayfarm.net/yusuke-miyazaki/',
    icon: 'page',
  },
];
