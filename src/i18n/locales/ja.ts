/**
 * 日本語辞書 — サイト上の UI テキストはすべてこのファイルに集約する。
 *
 * 英語を追加するときは、このファイルを src/i18n/locales/en.ts 等に
 * コピーして値を翻訳し、src/i18n/index.ts の dictionaries に登録する。
 * （キー構造は `Dictionary` 型として共有されるため、翻訳漏れは型エラーになる）
 */
export const ja = {
  meta: {
    siteName: '宮﨑祐介 / Yusuke Miyazaki',
    description:
      '宮﨑祐介(宮崎祐介 / Yusuke Miyazaki)の公式サイト。データベースシステムの研究者。慶應義塾大学大学院 政策・メディア研究科。2025年度未踏IT人材発掘・育成事業スーパークリエータ。MySQL互換の高性能・耐故障DBMS「Kamo」を開発。',
  },

  a11y: {
    skipToContent: '本文へスキップ',
    mainNav: 'メインナビゲーション',
    externalLink: '外部サイトへ移動します',
  },

  header: {
    logo: 'yusuke',
    logoSub: '宮﨑祐介',
    aside: 'C:\\> BEGIN; … COMMIT;',
    /** 言語切り替え(相手の言語の表示名) */
    langSwitch: 'EN',
    langSwitchLabel: 'English version',
  },

  nav: {
    top: 'TOP',
    news: 'NEWS',
    research: 'RESEARCH',
    kamo: 'KAMO',
    media: 'MEDIA',
    profile: 'PROFILE',
    links: 'LINKS',
  },

  /** 起動オープニング(ターミナル風のタイピング演出) */
  boot: {
    windowTitle: 'terminal — yusuke@keio',
    label: 'サイトを起動しています',
    lines: [
      { cmd: 'whoami', out: 'yusuke miyazaki / 宮﨑祐介' },
      { cmd: 'cat role.txt', out: 'データベースシステム研究者' },
      { cmd: './kamo --bench tpcc', out: '18.7x faster … OK' },
      { cmd: 'open ./site', out: '' },
    ],
    enter: 'ENTER ⏎ サイトをひらく',
    skip: 'スキップ',
    hint: 'Enter キーでも開きます',
  },

  home: {
    heroRoles: '> DATABASE RESEARCHER_',
    heroLogo: 'yusuke',
    heroName: '宮﨑祐介',
    heroReading: '(みやざき ゆうすけ)',
    subCopy: ['データベースシステム研究者', '2025年度 未踏ITスーパークリエータ'],
    /** 所属のラベル(それぞれの公式サイトへのリンク) */
    affiliations: [
      { label: '慶應義塾大学', url: 'https://www.keio.ac.jp/ja/' },
      { label: 'model agency friday', url: 'https://fridayfarm.net/' },
    ],
    cta: 'Kamo を見る',
    avatarLabel: '宮﨑祐介のアバター。坊主頭で細身の長身。足元に白と茶の猫が座っている。矢印を押すと、隣の着替え室に入って服を着替えてくる。その横に服の掛かったハンガーラックがある',
    outfitPrev: '前の服に着替える',
    outfitNext: '次の服に着替える',
    outfits: [
      '紺のニットポロ',
      '黒のロングコート',
      'クリームのTシャツ',
      'クリームのセットアップ',
      'レザージャケット',
      '牛柄のカーディガン',
      'キャップとデニムジャケット',
      '黒のタンクトップ',
    ],
    awardLabel: 'AWARD',
    awardWindow: 'award.txt',
    projectWindow: 'kamo.app',
    award: {
      title: '未踏ITスーパークリエータ',
      meta: '2025年度 ・ 経済産業省 / IPA ・ 2026年6月認定',
      more: 'くわしく見る',
      href: '/news/2026-06-04-super-creator/',
    },
    projectLabel: 'LATEST PROJECT',
    project: {
      title: 'Kamo',
      meta: 'MySQL互換DBMS ・ 2025年度 未踏IT',
    },
    favoritesHeading: 'FAVORITES',
    favoritesLead: 'すきなもの',
    favorites: [
      { icon: 'insect', label: '昆虫' },
      { icon: 'cat', label: '猫' },
      { icon: 'outdoor', label: 'アウトドア' },
      { icon: 'sports', label: 'スポーツ' },
      { icon: 'kebab', label: 'ケバブ' },
      { icon: 'taco', label: 'タコス' },
      { icon: 'naan', label: 'チーズナン' },
      { icon: 'eating', label: '大食い' },
      { icon: 'sake', label: '日本酒' },
      { icon: 'shochu', label: '焼酎' },
      { icon: 'dj', label: 'DJ' },
      { icon: 'music', label: '音楽' },
      { icon: 'club', label: '小さなナイトクラブ' },
      { icon: 'cafe', label: 'カフェ' },
      { icon: 'drawing', label: '絵を描く' },
      { icon: 'fashion', label: 'ファッション' },
      { icon: 'walk', label: '散歩' },
      { icon: 'drive', label: 'ドライブ' },
      { icon: 'rain', label: '雨' },
      { icon: 'grass', label: '草原' },
    ] as const,
    newsHeading: 'NEWS',
    newsMore: 'NEWSをもっと見る',
    ticker: [
      '2025年度 未踏ITスーパークリエータ認定',
      'SC26 にポスター2件が採択',
      '情報処理学会論文誌に採録決定',
      'Kamo: TPC-Cで18.7倍',
    ],
    tickerPause: 'STOP ⏸',
    tickerPlay: 'PLAY ▶',
    tickerLabel: 'トピックス',
  },

  news: {
    title: 'NEWS',
    lead: '受賞・論文・発表のお知らせ',
    window: 'news.txt',
    empty: 'お知らせは準備中です',
    backToList: 'NEWS一覧へ戻る',
    categories: {
      info: 'INFO',
      award: 'AWARD',
      paper: 'PAPER',
      media: 'MEDIA',
      event: 'EVENT',
    } as Record<string, string>,
  },

  research: {
    title: 'RESEARCH',
    lead: '論文と発表',
    fileExt: '.pdf',
    /** 英語版で、日本語の題名を訳して載せた業績に付ける注記(ja では使わない) */
    translatedNote: '',
    linksHeading: 'リンク',
  },

  media: {
    title: 'MEDIA',
    lead: '他の媒体での掲載',
    /** 英語版で、日本語のページへのリンクに付ける注記(ja では使わない) */
    langNote: '',
    kinds: {
      news: 'NEWS',
      profile: 'PROFILE',
      article: 'ARTICLE',
      award: 'AWARD',
    } as Record<string, string>,
  },

  kamo: {
    title: 'KAMO',
    lead: 'MySQL互換の高性能・耐故障DBMS',
    name: 'Kamo',
    kind: 'PROJECT ・ 2025年度 未踏IT人材発掘・育成事業',
    body: [
      'MySQLのプラガブルストレージエンジン層にトランザクションエンジン LineairDB を統合し、互換性を保ったままメニーコア環境での性能を引き上げたDBMSです。',
      '2025年度 未踏IT人材発掘・育成事業「高性能で耐故障なMySQLの開発」の成果として開発しました。PMは田中邦裕氏です。',
    ],
    statsHeading: 'RESULT',
    statsWindow: 'kamo_bench.exe',
    stats: [
      { value: '18.7×', label: 'TPC-C・144スレッド時の性能向上' },
      { value: '0s', label: '自動フェイルオーバー時の実質ダウンタイム' },
    ],
    teamHeading: 'TEAM',
    team: ['宮﨑祐介(代表)', '中森辰洋', '李浩文'],
    linksHeading: 'LINKS',
    links: [
      { label: 'GitHub', url: 'https://github.com/mitou-Kamo/LineairDB-storage-engine' },
      { label: '解説記事(さくらのナレッジ)', url: 'https://knowledge.sakura.ad.jp/50280/' },
      { label: 'LineairDB', url: 'https://github.com/LineairDB/LineairDB' },
      { label: 'IPA 成果報告', url: 'https://www.ipa.go.jp/jinzai/mitou/it/2025/seika.html' },
    ],
  },

  profile: {
    title: 'PROFILE',
    name: '宮﨑祐介',
    reading: 'みやざき ゆうすけ / Yusuke Miyazaki',
    roles: 'データベースシステム研究者',
    facts: [
      { label: '生年', value: '2002年生まれ' },
      { label: '出身', value: '群馬県' },
      { label: '所属', value: '慶應義塾大学大学院 政策・メディア研究科 修士課程' },
      { label: '研究室', value: '川島英之研究室' },
      { label: '研究', value: 'トランザクション処理 / 並行性制御' },
      {
        label: 'すき',
        value:
          '昆虫 / 猫 / アウトドア / スポーツ / ケバブ / タコス / チーズナン / 大食い / 日本酒 / 焼酎 / DJ / 音楽 / 小さなナイトクラブ / カフェ / 絵を描く / ファッション / 散歩 / ドライブ / 雨 / 草原',
      },
    ],
    bio: [
      'データベースシステムの研究者です。慶應義塾大学大学院 政策・メディア研究科の川島英之研究室で、トランザクション処理と並行性制御を研究しています。',
      '学部3年の春にコンピュータサイエンスをゼロから学び始め、第一著者として書いた論文が国際会議に採択されました。',
      '2025年度には未踏IT人材発掘・育成事業に採択され、MySQL互換の高性能・耐故障DBMS「Kamo」の開発を代表として進め、2026年6月にスーパークリエータに認定されました。',
    ],
    en: 'Yusuke Miyazaki is a database systems researcher at the Graduate School of Media and Governance, Keio University, working on transaction processing and concurrency control. He led the development of Kamo, a high-performance, fault-tolerant MySQL-compatible DBMS, under the MITOU IT Program 2025 and was certified as a MITOU Super Creator in June 2026.',
    highlightsHeading: 'AWARDS',
    highlights: [
      '2026年 未踏IT人材発掘・育成事業 スーパークリエータ認定(経済産業省・IPA)',
      '2025年 未踏IT人材発掘・育成事業 採択「高性能で耐故障なMySQLの開発」代表',
      '2025年度 秋学期 優秀卒業プロジェクト(慶應義塾大学SFC)',
    ],
    historyHeading: 'HISTORY',
    history: [
      { year: '2026', text: '慶應義塾大学大学院 政策・メディア研究科 修士課程 入学' },
      { year: '2026', text: '慶應義塾大学 総合政策学部 卒業' },
      { year: '2021', text: '群馬県立高崎高等学校 卒業' },
      { year: '2002', text: '群馬県生まれ' },
    ],
    modelHeading: 'MODEL',
    model: 'model agency friday に所属し、モデルとしての活動も始めています。',
    modelLinks: [
      { label: 'プロフィール', url: 'https://fridayfarm.net/yusuke-miyazaki/' },
      { label: 'Instagram', url: 'https://www.instagram.com/wasanemon/' },
    ],
  },

  /** 画像スロット未投入時のプレースホルダ文言(Placeholder.astro) */
  placeholder: {
    preparingSuffix: '(準備中)',
    statusBar: '▂▄▆█ MIYAZAKI MOBILE',
    keyVisual: 'KEY VISUAL',
    comingSoon: 'COMING SOON…',
    jacket: 'IMAGE COMING SOON',
    photo: 'PHOTO COMING SOON',
    rec: '● REC',
  },

  links: {
    title: 'LINKS',
    lead: 'SNS・関連ページ(他媒体での掲載は MEDIA へ)',
    snsHeading: 'SNS',
    pagesHeading: 'PAGES',
    preparing: 'ただいま準備中',
    contact: 'モデル活動に関するお問い合わせは model agency friday までお願いします。',
    contactLabel: 'お問い合わせページ',
    contactUrl: 'https://fridayfarm.net/contact/',
  },

  /** デスクトップの遊び(スタートメニュー、ごみ箱、文句のウィンドウ、シャットダウン) */
  fun: {
    startLabel: 'スタートメニューを開く',
    startBand: 'yusuke 98',
    startTrash: 'ごみ箱を開く',
    startReplay: 'オープニングをもう一度',
    startShutdown: 'シャットダウン',
    shutdownText: 'おやすみなさい',
    shutdownHint: 'クリックで再起動',
    terminalLabel: 'terminal',
    terminalAria: 'ターミナルを開く(SQLで自己紹介)',
    trashLabel: 'ごみ箱',
    trashTitle: 'trash',
    trashItems: [
      { name: 'paper_final_final_v7_本当に最後.pdf' },
      { name: '食べすぎた日の記録.csv' },
      { name: '早起きの計画.txt' },
      { name: '髪型のカタログ.pdf' },
      { name: 'ダイエット.exe' },
      { name: 'チーズナン_おかわり.log' },
    ],
    trashCount: '6 個の項目',
    trashEmpty: 'ごみ箱を空にする',
    /** 文句のウィンドウは英語 */
    popupTitle: 'warning.exe',
    popupOk: 'OK',
    popupRestore: 'Put them back',
    popupClose: 'Close',
    warnings: [
      "Please don't close that.",
      'I worked hard on that window.',
      'Seriously. Stop.',
      'That one had my research in it.',
      'Fine. Close everything. See if I care.',
      '...I do care. Please stop.',
      'The cat is judging you.',
    ],
    warningMany: 'You have closed {n} windows. There is nothing left to prove.',
    warningPopup: "Closing me won't help.",
    warningTrash: 'Access denied. These files are load-bearing.',
  },

  sql: {
    heading: 'QUERY',
    windowTitle: 'mysql — yusuke_db',
    prompt: 'mysql>',
    run: 'RUN',
    inputLabel: 'SQL を入力',
    /** この語がクエリに含まれると hungry の表を返す */
    hungryKey: '空腹',
    initial: "SELECT * FROM yusuke WHERE mood = '空腹';",
    presets: [
      "SELECT * FROM yusuke WHERE mood = '空腹';",
      'SHOW TABLES;',
      'SELECT * FROM favorites;',
      'SELECT * FROM papers;',
      'SELECT * FROM awards;',
      'SELECT * FROM cat;',
      'DROP TABLE yusuke;',
    ],
    welcome: 'Welcome to yusuke_db. 下のボタンか、自分で書いた SQL を実行できます。',
    rows: 'rows in set',
    denied: "ERROR 1142 (42000): command denied to user 'guest'@'wasanemon.github.io'",
    unknown: 'ERROR 1064 (42000): そのクエリはまだ実装していません。SHOW TABLES; を試してください。',
    hungry: [
      { id: '1', food: 'ケバブ', status: '食べたい' },
      { id: '2', food: 'チーズナン', status: '食べたい' },
      { id: '3', food: 'タコス', status: '食べたい' },
    ],
    hungryNote: '(空腹は継続中)',
    self: [{ name: '宮﨑祐介', role: 'データベースシステム研究者', hair: '坊主', mood: '空腹' }],
    cat: [{ breed: 'マンチカン', color: '白と茶', legs: '短い', status: '寝ている' }],
    awards: [
      { year: '2026', award: '未踏IT人材発掘・育成事業 スーパークリエータ認定' },
      { year: '2025', award: '未踏IT人材発掘・育成事業 採択' },
      { year: '2025', award: '優秀卒業プロジェクト(慶應義塾大学SFC)' },
    ],
  },

  notFound: {
    title: '404',
    message: 'お探しのページは見つかりませんでした。',
    back: 'TOPへ戻る',
  },

  footer: {
    copyright: '© 2026 yusuke miyazaki',
    staging: '',
  },
} as const;
