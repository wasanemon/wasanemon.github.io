/**
 * 公式素材マッピング — サイト内の画像参照はすべてこのファイルを経由する。
 *
 * ◆ 素材投入手順（スタッフ向け・3ステップ）
 *   1. 画像ファイルを public/assets/official/ に置く（例: keyvisual.jpg）
 *   2. このファイルの該当スロットの file にファイル名を書く（例: file: 'keyvisual.jpg'）
 *   3. 保存すると、そのスロットを使う全ページに自動反映される
 *
 * file が空文字列のスロットは、ページ側で代替表示(または非表示)にしている。
 */

/** プレースホルダの見た目（src/components/Placeholder.astro で描画） */
export type PlaceholderVariant = 'hero' | 'jacket' | 'portrait' | 'video';

export interface AssetSlot {
  /** public/assets/official/ 内のファイル名。空なら未投入としてプレースホルダ表示 */
  file: string;
  /** 代替テキスト */
  alt: string;
  /** 未投入時に表示するプレースホルダの種類 */
  placeholder: PlaceholderVariant;
}

export const OFFICIAL_ASSET_BASE = '/assets/official/';

export const assets = {
  /** TOPページのキービジュアル(未投入のあいだは Kamo の数値カードを表示) */
  keyVisual: {
    file: '',
    alt: '宮﨑祐介 キービジュアル',
    placeholder: 'hero',
  },
  /** PROFILEページの写真(未投入のあいだは写真欄ごと非表示) */
  portrait: {
    file: '',
    alt: '宮﨑祐介 プロフィール写真',
    placeholder: 'portrait',
  },
} as const satisfies Record<string, AssetSlot>;

export type AssetKey = keyof typeof assets;

/** 投入済みなら公開URL、未投入なら null（プレースホルダ表示の判定に使う） */
export function assetUrl(key: AssetKey): string | null {
  const slot: AssetSlot = assets[key];
  return slot.file ? OFFICIAL_ASSET_BASE + slot.file : null;
}
