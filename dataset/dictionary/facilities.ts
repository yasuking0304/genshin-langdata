import type { SourceWord } from "../../libs/types.ts";

export default [
  //
  // Mondstadt
  //
  {
    en: "Angel's Share",
    ja: "エンジェルズシェア",
    zhCN: "天使的馈赠",
    tags: [ "mondstadt", "facility" ],
  },
  {
    en: "Cat's Tail",
    ja: "キャッツテール",
    zhCN: "猫尾酒馆",
    tags: [ "mondstadt", "facility" ],
  },
  {
    en: "Good Hunter",
    ja: "鹿狩り",
    zhCN: "猎鹿人",
    tags: [ "mondstadt", "facility" ],
  },
  {
    en: "With Wind Comes Glory",
    ja: "栄光の風",
    zhCN: "荣光之风",
    tags: [ "mondstadt", "facility" ],
    notes: "風の印をアイテムと交換できる店",
  },
  {
    en: "Favonius Cathedral",
    ja: "西風大聖堂",
    zhCN: "西风大教堂",
    tags: [ "mondstadt", "facility" ],
  },

  //
  // Liyue
  //
  {
    en: "Yujing Terrace",
    ja: "玉京台",
    zhCN: "玉京台",
    pronunciationJa: "ぎょくけいだい",
    tags: [ "liyue", "facility" ],
  },
  {
    en: "Yuehai Pavilion",
    ja: "月海亭",
    zhCN: "月海亭",
    pronunciationJa: "げつかいてい",
    tags: [ "liyue", "facility" ],
  },
  {
    en: "Wangsheng Funeral Parlor",
    ja: "往生堂",
    zhCN: "往生堂",
    pronunciationJa: "おうじょうどう",
    tags: [ "liyue", "facility" ],
  },
  {
    en: "Wanmin Restaurant",
    ja: "万民堂",
    zhCN: "万民堂",
    pronunciationJa: "ばんみんどう",
    tags: [ "liyue", "facility" ],
  },
  {
    en: "Bubu Pharmacy",
    ja: "不卜廬",
    zhCN: "不卜庐",
    pronunciationJa: "ふぼくろ",
    tags: [ "liyue", "facility" ],
    variants: {
      ja: [ "不卜盧" ],
    },
  },
  {
    en: "Wanwen Bookhouse",
    ja: "万文集舎",
    zhCN: "万文集舍",
    pronunciationJa: "まんぶんしゅうしゃ",
    tags: [ "liyue", "facility" ],
  },
  {
    en: "Yanshang Teahouse",
    ja: "岩上茶室",
    pronunciationJa: "がんじょうちゃしつ",
    zhCN: "岩上茶室",
    tags: [ "liyue", "facility" ],
  },
  {
    en: "Liuli Pavilion",
    ja: "琉璃亭",
    zhCN: "琉璃亭",
    pronunciationJa: "るりてい",
    tags: [ "liyue", "facility" ],
    variants: {
      ja: [ "瑠璃亭" ],
    },
  },
  {
    en: "Xinyue Kiosk",
    ja: "新月軒",
    zhCN: "新月轩",
    pronunciationJa: "しんげつけん",
    tags: [ "liyue", "facility" ],
  },
  {
    en: "Third-Round Knockout",
    ja: "三杯酔",
    zhCN: "三碗不过港",
    pronunciationJa: "さんばいよい",
    tags: [ "liyue", "facility" ],
  },
  {
    en: "Hanfeng's Ironmongers",
    ja: "寒鋒鉄器",
    zhCN: "寒锋铁器",
    pronunciationJa: "かんほうてっき",
    tags: [ "liyue", "facility" ],
  },
  {
    en: "Heyu Tea House",
    ja: "和裕茶館",
    zhCN: "和裕茶馆",
    tags: [ "liyue", "facility" ],
  },
  {
    en: "Scent of Spring",
    ja: "春香窯",
    zhCN: "春香窑",
    tags: [ "liyue", "facility" ],
    notes: "鶯の店",
  },
  {
    en: "The Jade Mystery",
    ja: "解翠行",
    zhCN: "解翠行",
    tags: [ "liyue", "facility" ],
    notes: "石商の鉱石店",
  },
  {
    en: "Mingxing Jewelry",
    ja: "明星斎",
    zhCN: "明星斋",
    pronunciationJa: "みょうじょうさい",
    tags: [ "liyue", "facility" ],
    notes: "岩の印をアイテムと交換できる店",
  },

  //
  // Inazuma
  //
  {
    en: "Naganohara Fireworks",
    ja: "長野原花火屋",
    zhCN: "长野原烟花店",
    pronunciationJa: "ながのはらはなびや",
    tags: [ "inazuma", "facility" ],
  },
  {
    en: "Komore Teahouse",
    ja: "木漏茶屋",
    zhCN: "木漏茶室",
    pronunciationJa: "こもれちゃや",
    tags: [ "inazuma", "facility" ],
  },
  {
    en: "Yae Publishing House",
    ja: "八重堂",
    zhCN: "八重堂",
    pronunciationJa: "やえどう",
    tags: [ "inazuma", "organization", "facility" ],
  },
  {
    en: "Bantan Sango Detective Agency",
    ja: "万端珊瑚探偵所",
    zhCN: "万端珊瑚侦探社",
    pronunciationJa: "ばんたんさんごたんていしょ",
    tags: [ "inazuma", "facility" ],
  },
  {
    en: "Amenoma Smithy",
    ja: "天目鍛冶屋",
    zhCN: "天目锻冶屋",
    pronunciationJa: "あめのまかじや",
    tags: [ "inazuma", "facility" ],
  },
  {
    en: "Netsuke no Gen Crafts",
    ja: "根付の源",
    zhCN: "根付之源",
    pronunciationJa: "ねつけのげん",
    tags: [ "inazuma", "facility" ],
    notes: "雷の印をアイテムと交換できる店",
  },
  {
    en: "Uyuu Restaurant",
    ja: "烏有亭",
    zhCN: "乌有亭",
    pronunciationJa: "うゆうてい",
    tags: [ "inazuma", "facility" ],
  },
  {
    en: "Shimura's",
    ja: "志村屋",
    zhCN: "志村屋",
    pronunciationJa: "しむらや",
    tags: [ "inazuma", "facility" ],
  },
  {
    en: "Outlander Affairs Agency",
    ja: "遠国監察",
    zhCN: "远国监司",
    tags: [ "inazuma", "facility", "organization" ],
  },
  {
    en: "Syavushi Bakshesh Shoppe",
    ja: "豊穣の願い",
    zhCN: "葱茏之愿",
    pronunciationJa: "ほうじょうのねがい",
    tags: [ "inazuma", "facility" ],
  },
  {
    en: "Sailing Breeze",
    ja: "セーリングブリーズ",
    zhCN: "远航之风",
    tags: [ "inazuma", "facility" ],
  },
  {
    en: "Aisa Bathhouse",
    ja: "秋沙銭湯",
    zhCN: "秋沙钱汤",
    pronunciationJa: "あいさせんとう",
    tags: [ "inazuma", "facility" ],
  },

  //
  // Sumeru
  //
  {
    en: "Zubayr Theater",
    ja: "ズバイルシアター",
    zhCN: "祖拜尔剧场",
    tags: [ "sumeru", "facility" ],
  },
  {
    en: "Puspa Café",
    ja: "プスパカフェ",
    zhCN: "普斯帕咖啡馆",
    tags: [ "sumeru", "facility" ],
  },
  {
    en: "Citadel of Regzar",
    ja: "レグザー庁",
    zhCN: "聚砂厅",
    tags: [ "sumeru", "facility" ],
  },
  {
    en: "Lambad's Tavern",
    ja: "ランバド酒場",
    zhCN: "兰巴德酒馆",
    tags: [ "sumeru", "facility" ],
  },
  {
    en: "Menakeri's Treasure Shop",
    ja: "メナケリーショップ",
    zhCN: "梅娜卡里商铺",
    tags: [ "sumeru", "facility" ],
    notes: "草の印をアイテムと交換できる店",
  },
  {
    en: "Bimarstan",
    ja: "ビマリスタン",
    zhCN: "健康之家",
    tags: [ "sumeru", "facility" ],
  },
  {
    en: "House of Daena",
    ja: "知恵の殿堂",
    zhCN: "智慧宫",
    tags: [ "sumeru", "facility" ],
    notes: "スメール教令院の奥にある図書館",
  },
  {
    en: "Djafar Tavern",
    ja: "ジャファータバーン",
    zhCN: "迪亚法饭店",
    tags: [ "sumeru", "facility" ],
  },
  {
    en: "Wikala Funduq",
    ja: "ウィカラ隊商宿",
    zhCN: "维卡拉商栈",
    pronunciationJa: "ウィカラたいしょうやど", // Need Confirmation
    tags: [ "sumeru", "facility" ],
  },
  {
    en: "Acara Crafts",
    ja: "アジャンタ彫刻店",
    zhCN: "阿折罗造像",
    pronunciationJa: "アジャンタちょうこくてん",
    tags: [ "sumeru", "facility" ],
  },
  {
    en: "Pharos Lighthouse",
    ja: "ファロス灯台",
    zhCN: "法逻斯灯塔",
    pronunciationJa: "ファロスとうだい",
    tags: [ "sumeru", "facility" ],
  },
  {
    en: "Amrita Pool",
    ja: "甘露の池",
    zhCN: "甘露池",
    pronunciationJa: "かんろのいけ",
    tags: [ "sumeru", "facility" ],
  },

  //
  // Fontaine
  //
  {
    en: "Station Main Hall",
    ja: "セントラルポートホール",
    zhCN: "总站大厅",
    tags: [ "fontaine", "facility" ],
    notes: "フォンテーヌ廷の巡水船乗り場の1F",
  },
  {
    en: "Callas Line",
    ja: "カーレス線",
    zhCN: "卡雷斯线",
    tags: [ "fontaine", "facility" ],
    notes: "フォンテーヌの巡水船の線の1つ",
  },
  {
    en: "Clementine Line",
    ja: "クレメンタイン線",
    zhCN: "克莱门汀线",
    tags: [ "fontaine", "facility" ],
    notes: "フォンテーヌの巡水船の線の1つ",
  },
  {
    en: "Navia Line",
    ja: "ナヴィア線",
    zhCN: "娜维娅线",
    tags: [ "fontaine", "facility" ],
    notes: "フォンテーヌの巡水船の線の1つ",
  },
  {
    en: "Romaritime Station",
    ja: "ポート・ロマリタイム",
    zhCN: "海露站",
    tags: [ "fontaine", "facility" ],
    notes: "英訳から察するに、「ロマリタイムハーバー」は国外からの船を含め、様々な船舶が停泊する港としての意味を示す一方、「ポート・ロマリタイム」は巡水船の駅を示していると思われる。",
  },
  {
    en: "Hotel Debord",
    ja: "ホテル・ドゥボール",
    zhCN: "德波大饭店",
    tags: [ "fontaine", "facility" ],
  },
  {
    en: "Café Lucerne",
    ja: "カフェ・ルツェルン",
    zhCN: "露泽咖啡厅",
    tags: [ "fontaine", "facility" ],
  },
  {
    en: "Chioriya Boutique",
    ja: "千織屋",
    zhCN: "千织屋",
    tags: [ "fontaine", "facility" ],
  },
  {
    en: "Bertin's House of Curiosities",
    ja: "バーティンの珍奇館",
    zhCN: "白棠珍奇屋",
    pronunciationJa: "バーティンのちんきかん",
    tags: [ "fontaine", "facility" ],
    notes: "水の印交換ショップ",
  },
  {
    en: "Beaumont Workshop",
    ja: "ボーモント工房",
    zhCN: "博蒙特工坊",
    pronunciationJa: "ボーモントこうぼう",
    tags: [ "fontaine", "facility" ],
    notes: "フォンテーヌの鍛冶屋",
  },
  {
    en: "Leschots Clockwork Workshop",
    ja: "レシュッツのクロックワーク工房",
    zhCN: "莱舒的发条工坊",
    pronunciationJa: "レシュッツのクロックワークこうぼう",
    tags: [ "fontaine", "facility" ],
  },
  {
    en: "Lepaute Horlogerie",
    ja: "ルポート時計店",
    zhCN: "勒波特钟表店",
    pronunciationJa: "ルポートとけいてん",
    tags: [ "fontaine", "facility" ],
  },
  {
    en: "Damoville Purveyor",
    ja: "ダーモヴィル雑貨店",
    zhCN: "达莫维百货",
    pronunciationJa: "ダーモヴィルざっかてん",
    tags: [ "fontaine", "facility" ],
    // related: [ "boucicaut" ]
  },
  {
    en: "Coupon Cafeteria",
    ja: "特別許可食堂",
    zhCN: "特许食堂",
    pronunciationJa: "とくべつきょかしょくどう",
    tags: [ "fontaine", "facility" ],
    notes: "メロピデ要塞の食堂",
  },
  {
    en: "Welfare Meal",
    ja: "サービス食",
    zhCN: "福利餐",
    pronunciationJa: "サービスしょく",
    tags: [ "fontaine" ],
    notes: "特別許可食堂で1日1食、無料で提供されるランダムな料理とおみくじのセット",
  },
  {
    en: "Rag and Bone Shop",
    ja: "ラグ&ボーンショップ",
    zhCN: "破烂骨头商店",
    tags: [ "fontaine", "facility" ],
    notes: "メロピデ要塞の非公認ショップ",
  },
  {
    en: "Pankration Ring",
    ja: "鉄拳闘技場",
    zhCN: "拳力斗技场",
    tags: [ "fontaine", "facility" ],
  },
  {
    en: "Pankration",
    ja: "鉄拳闘技",
    zhCN: "拳力斗技",
    tags: [ "fontaine" ],
  },

  //
  // Natlan
  //
  {
    en: "Weary Inn",
    ja: "草臥の家",
    zhCN: "倦意之屋",
    pronunciationJa: "くさぶしのいえ",
    tags: [ "natlan", "facility" ],
  },
  {
    en: "Zakan's Street Bites",
    ja: "ザカンの屋台",
    zhCN: "扎坎小吃摊",
    pronunciationJa: "ザカンのやたい",
    tags: [ "natlan", "facility" ],
  },
  {
    en: "Muhuru's Gemporium",
    ja: "ムフル宝石店",
    zhCN: "穆胡鲁宝石铺",
    pronunciationJa: "ムフルほうせきてん",
    tags: [ "natlan", "facility" ],
  },
  {
    en: "Throne of the Primal Fire",
    ja: "原火の玉座",
    zhCN: "源火之圣座",
    pronunciationJa: "げんかのぎょくざ",
    tags: [ "natlan", "facility" ],
  },
  {
    en: "Djembe Studios",
    ja: "ジャンペ楽器店",
    zhCN: "金贝乐棚",
    pronunciationJa: "ジャンペがっきてん",
    tags: [ "natlan", "facility" ],
  },
  {
    en: "\"Yumekizuki's Cozy Cornder\"",
    ja: "「夢見月のホッと一息」",
    zhCN: "「梦见月的舒心小站」",
    pronunciationJa: "ゆめみづきのホッとひといき",
    tags: [ "natlan", "facility" ],
  },

  //
  // Snezhnaya & Fatui
  //

  // TODO need check
  {
    en: "Northland Bank",
    ja: "北国銀行",
    zhCN: "北国银行",
    pronunciationJa: "きたくにぎんこう",
    tags: [ "snezhnaya", "liyue", "fontaine", "facility" ],
  },
  {
    en: "Clink-Clank Krumkake Craftshop",
    ja: "カチャカチャ・クルムカケ工房",
    zhCN: "叮铃哐啷蛋卷工坊",
    notes: "期間限定Webイベント「空月の歌」の情報",
    pronunciationJa: "カチャカチャ・クルムカケこうぼう",
    tags: [ "snezhnaya", "facility" ],
  },
] as const satisfies SourceWord[];
