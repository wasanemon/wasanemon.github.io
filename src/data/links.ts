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
  /** 英語版の補足(無ければ handle をそのまま使う) */
  handleEn?: string;
  /** 実URL。空なら「準備中」表示 */
  url: string;
  icon: IconName;
}

/** SNS */
export const snsLinks: ExternalLink[] = [
  { id: 'github', platform: 'GitHub', handle: '@wasanemon', url: 'https://github.com/wasanemon', icon: 'code' },
  { id: 'instagram', platform: 'Instagram', handle: '@wasanemon', url: 'https://www.instagram.com/wasanemon/', icon: 'instagram' },
];

/** 関連ページ(他媒体での掲載は src/data/media.ts) */
export const pageLinks: ExternalLink[] = [
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
    handleEn: 'Model profile',
    url: 'https://fridayfarm.net/yusuke-miyazaki/',
    icon: 'page',
  },
];
