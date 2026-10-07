/**
 * 研究業績データ — RESEARCHページはここを参照する。
 * 新しい業績を追加するときは publications の先頭に足す(先頭 = 最新)。
 * 著者順・発表形態は確認できた事実だけを書く。
 */
export interface PublicationLink {
  label: string;
  url: string;
}

export interface Publication {
  id: string;
  title: string;
  /** 表示用の年 */
  year: string;
  /** 会議名・誌名 */
  venue: string;
  /** 種別チップ(例: POSTER / JOURNAL / WORKSHOP) */
  kind: string;
  /** 補足(著者順、状態など) */
  notes: string[];
  /** 英語版の表記。titleEn があるのは題名が日本語の業績で、訳であることを注記して出す */
  titleEn?: string;
  venueEn?: string;
  notesEn?: string[];
  /** 先頭のリンクは、題名からも飛べる(論文や発表のページがあればそれを先頭に置く) */
  links: PublicationLink[];
}

export const publications: Publication[] = [
  {
    id: 'sc26-kamo',
    title: 'Kamo: Bringing Many-Core Scalability to MySQL',
    year: '2026',
    venue: 'SC26',
    kind: 'POSTER',
    notes: ['第一著者', '2026年11月発表予定'],
    notesEn: ['First author', 'To be presented in November 2026'],
    links: [{ label: 'SC26', url: 'https://sc26.supercomputing.org/' }],
  },
  {
    id: 'sc26-helios',
    title: 'Helios: A Disaggregated MySQL Database That Scales Without Replication',
    year: '2026',
    venue: 'SC26',
    kind: 'POSTER',
    notes: ['Co-first author', '2026年11月発表予定'],
    notesEn: ['Co-first author', 'To be presented in November 2026'],
    links: [{ label: 'SC26', url: 'https://sc26.supercomputing.org/' }],
  },
  {
    id: 'acs91-cantata',
    title: 'Cantata: Accelerating Aria with Early Dependency Resolution',
    year: '2026',
    venue: '情報処理学会論文誌 コンピューティングシステム(ACS)91号',
    kind: 'JOURNAL',
    notes: ['採録決定'],
    venueEn: 'IPSJ Transactions on Advanced Computing Systems (ACS), No. 91',
    notesEn: ['Accepted'],
    links: [],
  },
  {
    id: 'xsig2026',
    title: '大規模データ処理に向けた高性能で耐故障なMySQL互換DBMSの設計',
    year: '2026',
    venue: 'xSIG 2026',
    kind: 'POSTER',
    notes: ['第一著者'],
    titleEn: 'Design of a High-Performance, Fault-Tolerant MySQL-Compatible DBMS for Large-Scale Data Processing',
    notesEn: ['First author'],
    links: [{ label: 'xSIG 2026', url: 'https://xsig.ipsj.or.jp/2026/' }],
  },
  {
    id: 'comsys2025',
    title: '高性能かつ耐故障なデータベースシステムの設計',
    year: '2025',
    venue: 'ComSys 2025(コンピュータシステム・シンポジウム)',
    titleEn: 'Design of a High-Performance, Fault-Tolerant Database System',
    venueEn: 'ComSys 2025 (Computer System Symposium)',
    kind: 'POSTER',
    notes: ['第一著者'],
    notesEn: ['First author'],
    links: [
      { label: 'PDF', url: 'https://sigos.ipsj.or.jp/event/comsys2025/posters/ComSys_2025_paper_30.pdf' },
      { label: 'ComSys 2025', url: 'https://sigos.ipsj.or.jp/event/comsys2025/#poster' },
    ],
  },
  {
    id: 'ipdpsw2024',
    title: 'Optimizing Aria Concurrency Control Protocol with Early Dependency Resolution',
    year: '2024',
    venue: 'IPDPS 2024 Workshops',
    kind: 'WORKSHOP',
    notes: ['第一著者', '口頭発表'],
    notesEn: ['First author', 'Oral presentation'],
    links: [{ label: 'IEEE Xplore', url: 'https://ieeexplore.ieee.org/document/10596429' }],
  },
];
