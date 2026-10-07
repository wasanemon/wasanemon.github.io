/**
 * 他媒体での掲載 — MEDIAページはここを参照する。
 * 新しい掲載を追加するときは mediaItems の先頭に足す(先頭 = 最新)。
 * 載せるのは実際に名前が掲載されている公開ページだけ。
 */
export type MediaKind = 'news' | 'profile' | 'article' | 'award';

export interface MediaItem {
  id: string;
  /** 掲載元 */
  outlet: string;
  /** ページ・記事のタイトル、または掲載内容 */
  title: string;
  /** 掲載時期(表示用。不明なら空) */
  when: string;
  kind: MediaKind;
  url: string;
}

export const mediaItems: MediaItem[] = [
  {
    id: 'keio-sfc-news',
    outlet: '慶應義塾',
    title: 'SFC生が独立行政法人情報処理推進機構「未踏IT人材発掘・育成事業」で活躍(2025・2026年度)',
    when: '2026.07',
    kind: 'news',
    url: 'https://www.keio.ac.jp/ja/sfc-pem/news/20260713/',
  },
  {
    id: 'meti-press',
    outlet: '経済産業省',
    title: '2025年度未踏IT人材発掘・育成事業スーパークリエータを認定しました',
    when: '2026.06',
    kind: 'news',
    url: 'https://www.meti.go.jp/press/2026/06/20260604002/20260604002.html',
  },
  {
    id: 'ipa-supercreator',
    outlet: 'IPA(情報処理推進機構)',
    title: '2025年度 未踏スーパークリエータ 紹介ページ',
    when: '2026.06',
    kind: 'profile',
    url: 'https://www.ipa.go.jp/jinzai/mitou/koubo/career/2025/2025-supercreator-22.html',
  },
  {
    id: 'sakura-knowledge',
    outlet: 'さくらのナレッジ',
    title: '高性能で耐故障なMySQL互換DBMS「Kamo」の開発(寄稿)',
    when: '2026.04',
    kind: 'article',
    url: 'https://knowledge.sakura.ad.jp/50280/',
  },
  {
    id: 'sfc-sotsupuro',
    outlet: '慶應義塾大学SFC',
    title: '優秀卒業プロジェクト(2025年度 秋学期)「高性能かつ耐故障なデータベースシステムの設計」',
    when: '2025年度',
    kind: 'award',
    url: 'https://www.sfc.keio.ac.jp/doc/sotsupuro.pdf',
  },
  {
    id: 'mitou-meikan',
    outlet: '未踏名鑑',
    title: '宮崎 祐介(2025年度 未踏IT クリエータ)',
    when: '',
    kind: 'profile',
    url: 'https://scrapbox.io/mitou-meikan/%E5%AE%AE%E5%B4%8E_%E7%A5%90%E4%BB%8B',
  },
  {
    id: 'a-worthy-tomorrow',
    outlet: '風の谷 A Worthy Tomorrow',
    title: 'メンバー紹介(学生メンバー)',
    when: '',
    kind: 'profile',
    url: 'https://aworthytomorrow.org/people/',
  },
];
