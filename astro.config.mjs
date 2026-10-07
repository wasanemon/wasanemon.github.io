// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 静的ビルド（SSRなし）。デプロイは任意の静的ホスティングを想定。
  output: 'static',

  // 公開URL(canonical / OGP / sitemap の基準)
  site: 'https://wasanemon.github.io',

  // i18n: 日本語がデフォルト(接頭辞なし)。英語は /en/ 配下(src/pages/en/)。
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
