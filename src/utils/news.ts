/** NEWS の取得 — 言語に合ったコレクションを日付の新しい順で返す */
import { getCollection } from 'astro:content';

export async function getNews(locale: string | undefined) {
  const entries = await getCollection(locale === 'en' ? 'newsEn' : 'news');
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
