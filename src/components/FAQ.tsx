"use client";

import { useState } from "react";
import FadeInSection from "./FadeInSection";
import { SectionDivider } from "./PixelArt";

const faqData = [
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
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white pixel-border-light rounded-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-3 md:py-4 px-3 md:px-4 flex items-start gap-2 md:gap-3 hover:bg-gray-50 transition-colors"
      >
        <span className="font-dot text-primary text-xs md:text-base flex-shrink-0 mt-0.5 bg-primary/10 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded">
          Q.
        </span>
        <span className="font-body text-gray-800 text-xs md:text-sm flex-1 mt-0.5 md:mt-1">
          {q}
        </span>
        <span
          className={`font-dot text-secondary text-base md:text-xl flex-shrink-0 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded transition-transform ${
            isOpen ? "rotate-45 bg-secondary/10" : "bg-gray-100"
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-3 md:px-4 pb-3 md:pb-4 pl-8 md:pl-[3.25rem]">
          <div className="flex items-start gap-2 md:gap-3">
            <span className="font-dot text-accent text-xs md:text-base flex-shrink-0 bg-accent/10 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded">
              A.
            </span>
            <p className="font-body text-gray-600 text-xs md:text-sm leading-relaxed mt-0.5 md:mt-1">
              {a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-gray-50 py-12 md:py-14 px-4" id="faq">
      <FadeInSection>
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-8 md:mb-10">
            <SectionDivider />
            <h2 className="font-dot text-3xl md:text-5xl text-primary">
              Q&A
            </h2>
            <SectionDivider />
          </div>

          {/* FAQ items - 2 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {faqData.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
