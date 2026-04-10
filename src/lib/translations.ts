export type Language = "ja" | "en";

type Dict = {
  toggle: {
    label: string;
    aria: string;
  };
  hero: {
    studentImage: string;
    teacherImage: string;
  };
  heroInfo: {
    mottoLine: string;
    gameWord: string;
    englishWord: string;
    serviceLine: string;
    onlineLineBefore: string;
    onlineHighlight: string;
    onlineLineAfter: string;
    gameEnglishLineBefore: string;
    gameEnglishHighlight: string;
    gameEnglishLineAfter: string;
  };
  description: {
    bodyLines: string[];
    courseButtonLine1: string;
    courseButtonLine2: string;
  };
  courses: {
    sectionTitle: string;
    course1Label: string;
    course1TitleLines: string[];
    course2Label: string;
    course2TitleLines: string[];
    priceLabel: string;
    course1Price: string;
    course2Price: string;
    priceUnit: string;
    frequencyLabel: string;
    frequency: string;
    supportedGamesLabel: string;
    supportedGames: string;
  };
  trial: {
    ribbon: string;
    title: string;
    priceNumber: string;
    priceUnit: string;
    priceTax: string;
    contentLabel: string;
    contentDetail: string;
    note: string;
    ctaTop: string;
    ctaBottom: string;
  };
  referral: {
    heading: string;
    bodyLine1: string;
    bodyLine2: string;
    bodyLine3Before: string;
    bodyLine3Highlight: string;
    bodyLine3After: string;
    subnote: string;
    strikePrice: string;
    firstMonthLabel: string;
    firstMonthPrice: string;
    firstMonthUnit: string;
  };
  members: {
    title: string;
    photoPlaceholder: string;
    member1Name: string;
    member1Role: string;
    member1Desc: string;
    member2Name: string;
    member2Role: string;
    member2Desc: string;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  footer: {
    ctaButton: string;
    copyright: string;
  };
};

export const translations: Record<Language, Dict> = {
  ja: {
    toggle: {
      label: "English",
      aria: "Switch to English",
    },
    hero: {
      studentImage: "生徒イメージ",
      teacherImage: "講師イメージ",
    },
    heroInfo: {
      mottoLine: "楽しく自然と英語が身につく",
      gameWord: "ゲーム",
      englishWord: "英会話",
      serviceLine: "のサービスを展開しています。",
      onlineLineBefore: "有名英会話講師と",
      onlineHighlight: "オンライン",
      onlineLineAfter: "で繋がりながら、",
      gameEnglishLineBefore: "",
      gameEnglishHighlight: "ゲームを英語",
      gameEnglishLineAfter: "で一緒にプレイしていきます。",
    },
    description: {
      bodyLines: [
        "ゲームプレイを通じて、",
        "自然と簡単なフレーズや言い回しを身につけていきます。",
        "最初は英語を話すことに抵抗があるかもしれませんが、",
        "ゲームを通じて楽しくやりとりしていきます。",
        "コツコツと積み上げた英語力は確実に力がついている、",
        "そんな学びを提供します。",
      ],
      courseButtonLine1: "コース",
      courseButtonLine2: "値段",
    },
    courses: {
      sectionTitle: "コース・値段",
      course1Label: "コース1",
      course1TitleLines: ["マンツーマン！", "ゲームで英会話"],
      course2Label: "コース2",
      course2TitleLines: ["友達とゲームで", "英会話"],
      priceLabel: "価格:",
      course1Price: "10,000円",
      course2Price: "〜8,000円",
      priceUnit: "/月（税込）",
      frequencyLabel: "頻度:",
      frequency: "基本週1回（1時間）",
      supportedGamesLabel: "対応ゲーム",
      supportedGames: "マイクラ・Fortnite・Steam系",
    },
    trial: {
      ribbon: "まずは！",
      title: "体験レッスン",
      priceNumber: "1,500",
      priceUnit: "円",
      priceTax: "（税込）",
      contentLabel: "内容:",
      contentDetail: "レッスン（45分）＋ 無料カウンセリング（15分）",
      note: "※予約前に問い合わせから学校名、お話を元にコース内容をご提案させて頂きます。",
      ctaTop: "申込・お問い合わせは",
      ctaBottom: "こちら",
    },
    referral: {
      heading: "お得なお友達割引付き",
      bodyLine1: "お友達の紹介割引を使うと、",
      bodyLine2: "紹介した人・された人は",
      bodyLine3Before: "レッスン料が",
      bodyLine3Highlight: "1ヶ月半額",
      bodyLine3After: "に！",
      subnote: "＊マンツーマンコースをご利用の方も割引対象",
      strikePrice: "10,000円",
      firstMonthLabel: "初月は",
      firstMonthPrice: "5,000",
      firstMonthUnit: "円",
    },
    members: {
      title: "メンバー紹介",
      photoPlaceholder: "写真",
      member1Name: "坂本達輝",
      member1Role: "サポートメンバー",
      member1Desc: "サービスの運営・サポートを担当しています。",
      member2Name: "伊度悠希",
      member2Role: "サポートメンバー（講師）",
      member2Desc: "英会話講師として、レッスンを担当しています。",
    },
    faq: {
      title: "Q&A",
      items: [
        {
          q: "用意するものは何ですか？",
          a: "PC・タブレット・ヘッドセット",
        },
        {
          q: "レッスンで使うゲームのソフトはどうすればいいですか？",
          a: "ゲームソフトはご自身で準備をお願いしております。",
        },
        {
          q: "英語が全くできなくても大丈夫ですか？",
          a: "大丈夫です。一人一人に合わせて授業を提供しますので、何歳からでもお受けしております。",
        },
        {
          q: "レッスンはマンツーマンですか？",
          a: "基本的にマンツーマンレッスンとグループレッスンどちらも対応しています。",
        },
        {
          q: "大人も対象ですか？",
          a: "大人も受け付けております。",
        },
        {
          q: "ゲーム以外のレッスンはありますか？",
          a: "有名英会話講師とオンラインレッスンは行っております。",
        },
        {
          q: "レッスンのキャンセルはどうすればいいですか？",
          a: "お問い合わせフォームよりご連絡ください。",
        },
        {
          q: "支払い方法は何がありますか？",
          a: "銀行振込にて対応しております。",
        },
      ],
    },
    footer: {
      ctaButton: "お問い合わせはこちら",
      copyright: "© 2024 ピコピコイングリッシュ All Rights Reserved.",
    },
  },
  en: {
    toggle: {
      label: "日本語",
      aria: "日本語に切り替え",
    },
    hero: {
      studentImage: "Student",
      teacherImage: "Teacher",
    },
    heroInfo: {
      mottoLine: 'Our motto: "Learn English naturally and have fun!"',
      gameWord: "Gaming",
      englishWord: "English",
      serviceLine: "is the service we offer.",
      onlineLineBefore: "Connect ",
      onlineHighlight: "online",
      onlineLineAfter: " with experienced English teachers,",
      gameEnglishLineBefore: "and ",
      gameEnglishHighlight: "play games in English",
      gameEnglishLineAfter: " together!",
    },
    description: {
      bodyLines: [
        "Through gameplay, you'll naturally pick up",
        "useful phrases and expressions.",
        "You might feel hesitant about speaking English at first,",
        "but through gaming, you'll enjoy chatting in English.",
        "The English you build up steadily really pays off —",
        "that's the kind of learning we provide.",
      ],
      courseButtonLine1: "Courses",
      courseButtonLine2: "& Pricing",
    },
    courses: {
      sectionTitle: "Courses & Pricing",
      course1Label: "COURSE 1",
      course1TitleLines: ["One-on-One!", "Gaming English"],
      course2Label: "COURSE 2",
      course2TitleLines: ["Group Gaming", "English"],
      priceLabel: "Price:",
      course1Price: "¥10,000",
      course2Price: "~¥8,000",
      priceUnit: "/month (tax incl.)",
      frequencyLabel: "Frequency:",
      frequency: "Once a week (1 hour)",
      supportedGamesLabel: "Supported Games",
      supportedGames: "Minecraft, Fortnite, Steam games",
    },
    trial: {
      ribbon: "Try it!",
      title: "Trial Lesson",
      priceNumber: "¥1,500",
      priceUnit: "",
      priceTax: "(tax incl.)",
      contentLabel: "Includes:",
      contentDetail: "Lesson (45 min) + Free Counseling (15 min)",
      note: "* Before booking, please contact us with your school name. We'll suggest a course based on your situation.",
      ctaTop: "Apply / Contact",
      ctaBottom: "Click Here",
    },
    referral: {
      heading: "Friend Referral Discount!",
      bodyLine1: "Use our friend referral program —",
      bodyLine2: "both you and your friend get",
      bodyLine3Before: "",
      bodyLine3Highlight: "50% off",
      bodyLine3After: " for your first month!",
      subnote: "* One-on-one course members are also eligible",
      strikePrice: "¥10,000",
      firstMonthLabel: "First month:",
      firstMonthPrice: "¥5,000",
      firstMonthUnit: "",
    },
    members: {
      title: "Our Team",
      photoPlaceholder: "Photo",
      member1Name: "Tatsuki Sakamoto",
      member1Role: "Support Member",
      member1Desc: "Manages service operations and support.",
      member2Name: "Yuki Ido",
      member2Role: "Support Member (Instructor)",
      member2Desc: "Serves as our English instructor for lessons.",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "What do I need to prepare?",
          a: "A PC or tablet, and a headset.",
        },
        {
          q: "How do I get the game software?",
          a: "Please prepare the game software on your own.",
        },
        {
          q: "Is it okay if I can't speak English at all?",
          a: "Absolutely! We tailor lessons to each individual, and welcome students of all ages.",
        },
        {
          q: "Are lessons one-on-one?",
          a: "We offer both one-on-one and group lessons.",
        },
        {
          q: "Do you accept adults?",
          a: "Yes, adults are welcome too!",
        },
        {
          q: "Are there lessons without games?",
          a: "Yes, we also offer online lessons with experienced English teachers.",
        },
        {
          q: "How do I cancel a lesson?",
          a: "Please contact us through the inquiry form.",
        },
        {
          q: "What payment methods are available?",
          a: "We accept bank transfers.",
        },
      ],
    },
    footer: {
      ctaButton: "Contact Us",
      copyright: "© 2024 PikoPiko English All Rights Reserved.",
    },
  },
};
