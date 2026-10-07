// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 静的ビルド（SSRなし）。デプロイは任意の静的ホスティングを想定。
  output: 'static',

  // 公開URL(canonical / OGP / sitemap の基準)
  site: 'https://wasanemon.github.io',

  // i18n: 日本語がデフォルト。将来 'ko' / 'en' を locales に追加し、
  // src/i18n/locales/ に辞書を足すだけで多言語ページを増やせる構造。
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
