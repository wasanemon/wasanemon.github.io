/**
 * i18n エントリポイント。
 *
 * 日本語(ja)が基準で、URL は接頭辞なし。英語(en)は /en/ 配下。
 * 英語ページは src/pages/en/ に置き、日本語のページをそのまま読み込んでいる。
 * ページ側は Astro.currentLocale 経由で辞書を引き、内部リンクは localizePath を通す。
 */
import { ja } from './locales/ja';
import { en } from './locales/en';

export const locales = ['ja', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ja';

/** 辞書の値を string に広げる(ja の `as const` のままだと他言語を代入できないため)。icon だけはアイコン名の型を保つ */
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : T extends object
      ? { [K in keyof T]: K extends 'icon' ? T[K] : Widen<T[K]> }
      : T;

/** 全言語で共有するキー構造（ja が基準） */
export type Dictionary = Widen<typeof ja>;

const dictionaries: Record<Locale, Dictionary> = { ja, en };

function toLocale(locale: string | undefined): Locale {
  return locale && (locales as readonly string[]).includes(locale) ? (locale as Locale) : defaultLocale;
}

/** ロケール文字列から辞書を取得。未対応ロケールはデフォルト言語にフォールバック */
export function getDictionary(locale: string | undefined): Dictionary {
  return dictionaries[toLocale(locale)];
}

/** サイト内パス('/kamo/' など)を、その言語のURLにする。ja はそのまま、en は /en を付ける */
export function localizePath(path: string, locale: string | undefined): string {
  const l = toLocale(locale);
  return l === defaultLocale ? path : `/${l}${path}`;
}

/** 言語の接頭辞を外したパス('/en/kamo/' → '/kamo/') */
export function stripLocale(pathname: string): string {
  for (const l of locales) {
    if (l === defaultLocale) continue;
    if (pathname === `/${l}` || pathname === `/${l}/`) return '/';
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
  }
  return pathname;
}

/** データ側の「英語があれば英語」を選ぶ */
export function pick(locale: string | undefined, jaValue: string, enValue?: string): string {
  return toLocale(locale) === 'en' && enValue ? enValue : jaValue;
}
