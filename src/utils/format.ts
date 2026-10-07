/**
 * 日付を「2026.07.23」形式で整形（アーティストサイト定番の表記）。
 * frontmatter の日付は UTC 深夜0時の Date になるため、UTC 基準で取り出す
 * （ローカル基準だとビルド環境のタイムゾーンによって前日にずれる）。
 */
export function formatDate(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}.${m}.${d}`;
}
