/**
 * コンテンツコレクション定義。
 * NEWS は src/content/news/ に Markdown を1ファイル置くだけで追加される
 * （更新手順は README「NEWSの更新方法」参照）。
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const schema = z.object({
  /** 一覧・詳細に表示するタイトル */
  title: z.string(),
  /** 表示・並び順に使う日付（YYYY-MM-DD） */
  date: z.coerce.date(),
  /** カテゴリ（表示ラベルは i18n 辞書側で定義） */
  category: z.enum(['info', 'award', 'paper', 'media', 'event']).default('info'),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema,
});

/** 英語版の NEWS。src/content/news-en/ に、日本語版と同じファイル名で置く */
const newsEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news-en' }),
  schema,
});

export const collections = { news, newsEn };
