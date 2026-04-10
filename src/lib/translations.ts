export type Language = "ja" | "en" | "zh" | "vi" | "th";

export const languageNames: Record<Language, string> = {
  ja: "日本語",
  en: "English",
  zh: "中文",
  vi: "Tiếng Việt",
  th: "ไทย",
};

export const languageOrder: Language[] = ["ja", "en", "zh", "vi", "th"];

type Dict = {
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
  /* ================================================================
   *  日本語
   * ================================================================ */
  ja: {
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
        { q: "用意するものは何ですか？", a: "PC・タブレット・ヘッドセット" },
        { q: "レッスンで使うゲームのソフトはどうすればいいですか？", a: "ゲームソフトはご自身で準備をお願いしております。" },
        { q: "英語が全くできなくても大丈夫ですか？", a: "大丈夫です。一人一人に合わせて授業を提供しますので、何歳からでもお受けしております。" },
        { q: "レッスンはマンツーマンですか？", a: "基本的にマンツーマンレッスンとグループレッスンどちらも対応しています。" },
        { q: "大人も対象ですか？", a: "大人も受け付けております。" },
        { q: "ゲーム以外のレッスンはありますか？", a: "有名英会話講師とオンラインレッスンは行っております。" },
        { q: "レッスンのキャンセルはどうすればいいですか？", a: "お問い合わせフォームよりご連絡ください。" },
        { q: "支払い方法は何がありますか？", a: "銀行振込にて対応しております。" },
      ],
    },
    footer: {
      ctaButton: "お問い合わせはこちら",
      copyright: "© 2024 ピコピコイングリッシュ All Rights Reserved.",
    },
  },

  /* ================================================================
   *  English
   * ================================================================ */
  en: {
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
        { q: "What do I need to prepare?", a: "A PC or tablet, and a headset." },
        { q: "How do I get the game software?", a: "Please prepare the game software on your own." },
        { q: "Is it okay if I can't speak English at all?", a: "Absolutely! We tailor lessons to each individual, and welcome students of all ages." },
        { q: "Are lessons one-on-one?", a: "We offer both one-on-one and group lessons." },
        { q: "Do you accept adults?", a: "Yes, adults are welcome too!" },
        { q: "Are there lessons without games?", a: "Yes, we also offer online lessons with experienced English teachers." },
        { q: "How do I cancel a lesson?", a: "Please contact us through the inquiry form." },
        { q: "What payment methods are available?", a: "We accept bank transfers." },
      ],
    },
    footer: {
      ctaButton: "Contact Us",
      copyright: "© 2024 PikoPiko English All Rights Reserved.",
    },
  },

  /* ================================================================
   *  中文（简体）
   * ================================================================ */
  zh: {
    hero: {
      studentImage: "学生",
      teacherImage: "教师",
    },
    heroInfo: {
      mottoLine: "「轻松自然地掌握英语」",
      gameWord: "游戏",
      englishWord: "英语会话",
      serviceLine: "是我们提供的服务。",
      onlineLineBefore: "与专业英语教师",
      onlineHighlight: "在线",
      onlineLineAfter: "连接，",
      gameEnglishLineBefore: "",
      gameEnglishHighlight: "用英语玩游戏",
      gameEnglishLineAfter: "一起来吧！",
    },
    description: {
      bodyLines: [
        "通过游戏体验，",
        "自然地学会简单的短语和表达方式。",
        "一开始可能会对说英语感到抗拒，",
        "但通过游戏可以愉快地交流。",
        "日积月累的英语能力一定会有所提升，",
        "我们提供这样的学习方式。",
      ],
      courseButtonLine1: "课程",
      courseButtonLine2: "价格",
    },
    courses: {
      sectionTitle: "课程・价格",
      course1Label: "课程1",
      course1TitleLines: ["一对一！", "游戏英语会话"],
      course2Label: "课程2",
      course2TitleLines: ["和朋友一起", "游戏英语会话"],
      priceLabel: "价格:",
      course1Price: "¥10,000",
      course2Price: "~¥8,000",
      priceUnit: "/月（含税）",
      frequencyLabel: "频率:",
      frequency: "基本每周1次（1小时）",
      supportedGamesLabel: "支持游戏",
      supportedGames: "Minecraft、Fortnite、Steam游戏",
    },
    trial: {
      ribbon: "先来试试！",
      title: "体验课程",
      priceNumber: "¥1,500",
      priceUnit: "",
      priceTax: "（含税）",
      contentLabel: "内容:",
      contentDetail: "课程（45分钟）+ 免费咨询（15分钟）",
      note: "※预约前请先通过咨询告知学校名称。我们将根据您的情况推荐合适的课程。",
      ctaTop: "报名・咨询",
      ctaBottom: "点击这里",
    },
    referral: {
      heading: "好友推荐优惠！",
      bodyLine1: "使用好友推荐折扣，",
      bodyLine2: "推荐人和被推荐人",
      bodyLine3Before: "课程费",
      bodyLine3Highlight: "首月半价",
      bodyLine3After: "！",
      subnote: "＊一对一课程的用户也可享受折扣",
      strikePrice: "¥10,000",
      firstMonthLabel: "首月",
      firstMonthPrice: "¥5,000",
      firstMonthUnit: "",
    },
    members: {
      title: "团队介绍",
      member1Name: "坂本達輝",
      member1Role: "运营成员",
      member1Desc: "负责服务运营和客户支持。",
      member2Name: "伊度悠希",
      member2Role: "运营成员（讲师）",
      member2Desc: "担任英语会话讲师。",
    },
    faq: {
      title: "Q&A",
      items: [
        { q: "需要准备什么？", a: "电脑或平板电脑，以及耳机。" },
        { q: "游戏软件怎么获取？", a: "请自行准备游戏软件。" },
        { q: "完全不会英语也没关系吗？", a: "完全没问题！我们会根据每个人的水平量身定制课程，欢迎任何年龄段的学员。" },
        { q: "课程是一对一的吗？", a: "我们提供一对一和小组课程两种选择。" },
        { q: "成年人也可以参加吗？", a: "是的，成年人也非常欢迎！" },
        { q: "有不包含游戏的课程吗？", a: "是的，我们也提供与专业英语教师的在线课程。" },
        { q: "如何取消课程？", a: "请通过咨询表单联系我们。" },
        { q: "有哪些付款方式？", a: "目前支持银行转账。" },
      ],
    },
    footer: {
      ctaButton: "联系我们",
      copyright: "© 2024 PikoPiko English 版权所有。",
    },
  },

  /* ================================================================
   *  Tiếng Việt
   * ================================================================ */
  vi: {
    hero: {
      studentImage: "Học sinh",
      teacherImage: "Giáo viên",
    },
    heroInfo: {
      mottoLine: "\"Học tiếng Anh tự nhiên và vui vẻ!\"",
      gameWord: "Game",
      englishWord: "Tiếng Anh",
      serviceLine: "là dịch vụ chúng tôi cung cấp.",
      onlineLineBefore: "Kết nối ",
      onlineHighlight: "trực tuyến",
      onlineLineAfter: " với giáo viên tiếng Anh,",
      gameEnglishLineBefore: "và ",
      gameEnglishHighlight: "chơi game bằng tiếng Anh",
      gameEnglishLineAfter: " cùng nhau!",
    },
    description: {
      bodyLines: [
        "Thông qua chơi game,",
        "bạn sẽ tự nhiên học được các cụm từ hữu ích.",
        "Ban đầu bạn có thể ngại nói tiếng Anh,",
        "nhưng qua game, bạn sẽ thích thú giao tiếp.",
        "Kỹ năng tiếng Anh tích lũy dần sẽ cho kết quả —",
        "đó là cách học mà chúng tôi mang lại.",
      ],
      courseButtonLine1: "Khóa học",
      courseButtonLine2: "& Giá",
    },
    courses: {
      sectionTitle: "Khóa học & Giá",
      course1Label: "KHÓA 1",
      course1TitleLines: ["1 kèm 1!", "Tiếng Anh qua Game"],
      course2Label: "KHÓA 2",
      course2TitleLines: ["Chơi game cùng", "bạn bè"],
      priceLabel: "Giá:",
      course1Price: "¥10,000",
      course2Price: "~¥8,000",
      priceUnit: "/tháng (đã gồm thuế)",
      frequencyLabel: "Tần suất:",
      frequency: "1 lần/tuần (1 giờ)",
      supportedGamesLabel: "Game hỗ trợ",
      supportedGames: "Minecraft, Fortnite, game Steam",
    },
    trial: {
      ribbon: "Hãy thử!",
      title: "Buổi học thử",
      priceNumber: "¥1,500",
      priceUnit: "",
      priceTax: "(đã gồm thuế)",
      contentLabel: "Nội dung:",
      contentDetail: "Buổi học (45 phút) + Tư vấn miễn phí (15 phút)",
      note: "※ Trước khi đặt lịch, vui lòng liên hệ với tên trường. Chúng tôi sẽ đề xuất khóa học phù hợp.",
      ctaTop: "Đăng ký / Liên hệ",
      ctaBottom: "Tại đây",
    },
    referral: {
      heading: "Giảm giá giới thiệu bạn bè!",
      bodyLine1: "Sử dụng chương trình giới thiệu —",
      bodyLine2: "cả bạn và người được giới thiệu",
      bodyLine3Before: "học phí ",
      bodyLine3Highlight: "giảm 50%",
      bodyLine3After: " tháng đầu tiên!",
      subnote: "＊Học viên khóa 1 kèm 1 cũng được áp dụng",
      strikePrice: "¥10,000",
      firstMonthLabel: "Tháng đầu:",
      firstMonthPrice: "¥5,000",
      firstMonthUnit: "",
    },
    members: {
      title: "Đội ngũ",
      member1Name: "Tatsuki Sakamoto",
      member1Role: "Thành viên hỗ trợ",
      member1Desc: "Phụ trách vận hành và hỗ trợ dịch vụ.",
      member2Name: "Yuki Ido",
      member2Role: "Thành viên hỗ trợ (Giảng viên)",
      member2Desc: "Giảng viên tiếng Anh cho các buổi học.",
    },
    faq: {
      title: "FAQ",
      items: [
        { q: "Cần chuẩn bị gì?", a: "Máy tính hoặc máy tính bảng, và tai nghe." },
        { q: "Phần mềm game lấy ở đâu?", a: "Vui lòng tự chuẩn bị phần mềm game." },
        { q: "Không biết tiếng Anh có sao không?", a: "Hoàn toàn không sao! Chúng tôi điều chỉnh bài học cho từng người, chào đón mọi lứa tuổi." },
        { q: "Buổi học có phải 1 kèm 1 không?", a: "Chúng tôi có cả hình thức 1 kèm 1 và nhóm." },
        { q: "Người lớn có tham gia được không?", a: "Có, người lớn cũng được chào đón!" },
        { q: "Có buổi học không có game không?", a: "Có, chúng tôi cũng cung cấp buổi học trực tuyến với giáo viên chuyên nghiệp." },
        { q: "Hủy buổi học thế nào?", a: "Vui lòng liên hệ qua form liên hệ." },
        { q: "Có những phương thức thanh toán nào?", a: "Chúng tôi chấp nhận chuyển khoản ngân hàng." },
      ],
    },
    footer: {
      ctaButton: "Liên hệ chúng tôi",
      copyright: "© 2024 PikoPiko English All Rights Reserved.",
    },
  },

  /* ================================================================
   *  ภาษาไทย
   * ================================================================ */
  th: {
    hero: {
      studentImage: "นักเรียน",
      teacherImage: "ครูผู้สอน",
    },
    heroInfo: {
      mottoLine: "\"เรียนภาษาอังกฤษอย่างสนุกและเป็นธรรมชาติ!\"",
      gameWord: "เกม",
      englishWord: "ภาษาอังกฤษ",
      serviceLine: "คือบริการที่เรานำเสนอ",
      onlineLineBefore: "เชื่อมต่อ",
      onlineHighlight: "ออนไลน์",
      onlineLineAfter: "กับครูสอนภาษาอังกฤษ",
      gameEnglishLineBefore: "และ",
      gameEnglishHighlight: "เล่นเกมเป็นภาษาอังกฤษ",
      gameEnglishLineAfter: "ด้วยกัน!",
    },
    description: {
      bodyLines: [
        "ผ่านการเล่นเกม",
        "คุณจะเรียนรู้วลีและสำนวนที่มีประโยชน์อย่างเป็นธรรมชาติ",
        "ตอนแรกอาจรู้สึกไม่กล้าพูดภาษาอังกฤษ",
        "แต่ผ่านเกม คุณจะสนุกกับการสื่อสาร",
        "ทักษะภาษาอังกฤษที่สะสมอย่างต่อเนื่องจะเห็นผล —",
        "นั่นคือการเรียนรู้ที่เรามอบให้",
      ],
      courseButtonLine1: "คอร์ส",
      courseButtonLine2: "& ราคา",
    },
    courses: {
      sectionTitle: "คอร์สเรียน & ราคา",
      course1Label: "คอร์ส 1",
      course1TitleLines: ["ตัวต่อตัว!", "เรียนภาษาอังกฤษผ่านเกม"],
      course2Label: "คอร์ส 2",
      course2TitleLines: ["เล่นเกมกับเพื่อน", "เรียนภาษาอังกฤษ"],
      priceLabel: "ราคา:",
      course1Price: "¥10,000",
      course2Price: "~¥8,000",
      priceUnit: "/เดือน (รวมภาษี)",
      frequencyLabel: "ความถี่:",
      frequency: "สัปดาห์ละ 1 ครั้ง (1 ชั่วโมง)",
      supportedGamesLabel: "เกมที่รองรับ",
      supportedGames: "Minecraft, Fortnite, เกม Steam",
    },
    trial: {
      ribbon: "ลองเลย!",
      title: "บทเรียนทดลอง",
      priceNumber: "¥1,500",
      priceUnit: "",
      priceTax: "(รวมภาษี)",
      contentLabel: "เนื้อหา:",
      contentDetail: "บทเรียน (45 นาที) + ให้คำปรึกษาฟรี (15 นาที)",
      note: "※ ก่อนจอง กรุณาติดต่อเราพร้อมชื่อโรงเรียน เราจะแนะนำคอร์สที่เหมาะสม",
      ctaTop: "สมัคร / ติดต่อ",
      ctaBottom: "คลิกที่นี่",
    },
    referral: {
      heading: "ส่วนลดแนะนำเพื่อน!",
      bodyLine1: "ใช้โปรแกรมแนะนำเพื่อน —",
      bodyLine2: "ทั้งคุณและเพื่อนจะได้รับ",
      bodyLine3Before: "ค่าเรียน",
      bodyLine3Highlight: "ลด 50%",
      bodyLine3After: " ในเดือนแรก!",
      subnote: "＊สมาชิกคอร์สตัวต่อตัวก็ได้รับส่วนลดด้วย",
      strikePrice: "¥10,000",
      firstMonthLabel: "เดือนแรก:",
      firstMonthPrice: "¥5,000",
      firstMonthUnit: "",
    },
    members: {
      title: "ทีมงาน",
      member1Name: "ทัตสึกิ ซากาโมโตะ",
      member1Role: "สมาชิกสนับสนุน",
      member1Desc: "รับผิดชอบการดำเนินงานและสนับสนุนบริการ",
      member2Name: "ยูกิ อิโดะ",
      member2Role: "สมาชิกสนับสนุน (ผู้สอน)",
      member2Desc: "เป็นผู้สอนภาษาอังกฤษสำหรับบทเรียน",
    },
    faq: {
      title: "FAQ",
      items: [
        { q: "ต้องเตรียมอะไรบ้าง?", a: "คอมพิวเตอร์หรือแท็บเล็ต และหูฟัง" },
        { q: "ซอฟต์แวร์เกมต้องทำอย่างไร?", a: "กรุณาเตรียมซอฟต์แวร์เกมด้วยตนเอง" },
        { q: "พูดภาษาอังกฤษไม่ได้เลยไม่เป็นไรหรือ?", a: "ไม่เป็นไรเลย! เราปรับบทเรียนให้เหมาะกับแต่ละคน ยินดีต้อนรับทุกวัย" },
        { q: "บทเรียนเป็นแบบตัวต่อตัวหรือเปล่า?", a: "เรามีทั้งแบบตัวต่อตัวและแบบกลุ่ม" },
        { q: "ผู้ใหญ่เรียนได้ไหม?", a: "ได้ ยินดีต้อนรับผู้ใหญ่ด้วย!" },
        { q: "มีบทเรียนที่ไม่มีเกมไหม?", a: "มี เรายังมีบทเรียนออนไลน์กับครูสอนภาษาอังกฤษที่มีประสบการณ์" },
        { q: "ยกเลิกบทเรียนอย่างไร?", a: "กรุณาติดต่อผ่านแบบฟอร์มสอบถาม" },
        { q: "มีวิธีการชำระเงินอะไรบ้าง?", a: "เรารับโอนเงินผ่านธนาคาร" },
      ],
    },
    footer: {
      ctaButton: "ติดต่อเรา",
      copyright: "© 2024 PikoPiko English สงวนลิขสิทธิ์",
    },
  },
};
