/**
 * i18n エントリポイント。
 *
 * 言語追加の手順:
 *   1. astro.config.mjs の i18n.locales に 'ko' 等を追加
 *   2. src/i18n/locales/ko.ts を ja.ts を元に作成
 *   3. 下の locales / dictionaries に登録
 * ページ側は Astro.currentLocale 経由で辞書を引くため、変更不要。
 */
import { ja } from './locales/ja';

export const locales = ['ja'] as const; // 将来: ['ja', 'ko', 'en']
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ja';

/** 全言語で共有するキー構造（ja が基準） */
export type Dictionary = typeof ja;

const dictionaries: Record<Locale, Dictionary> = { ja };

/** ロケール文字列から辞書を取得。未対応ロケールはデフォルト言語にフォールバック */
export function getDictionary(locale: string | undefined): Dictionary {
  if (locale && (locales as readonly string[]).includes(locale)) {
    return dictionaries[locale as Locale];
  }
  return dictionaries[defaultLocale];
}
