import FadeInSection from "./FadeInSection";
import { SectionDivider, GroundDivider } from "./PixelArt";

const faqData = [
  { q: "用意するものは何ですか？", a: "PC・タブレット・ヘッドセット" },
  { q: "レッスンで使うゲームのソフトはどうすればいいですか？", a: "ゲームソフトはご自身で準備をお願いしております。" },
  { q: "英語が全くできなくても大丈夫ですか？", a: "大丈夫です。一人一人に合わせて授業を提供しますので、何歳からでもお受けしております。" },
  { q: "レッスンはマンツーマンですか？", a: "基本的にマンツーマンレッスンとグループレッスンどちらも対応しています。" },
  { q: "大人も対象ですか？", a: "大人も受け付けております。" },
  { q: "ゲーム以外のレッスンはありますか？", a: "有名英会話講師とオンラインレッスンは行っております。" },
  { q: "レッスンのキャンセルはどうすればいいですか？", a: "お問い合わせフォームよりご連絡ください。" },
  { q: "支払い方法は何がありますか？", a: "銀行振込にて対応しております。" },
];

function FAQCard({ q, a }: { q: string; a: string }) {
  return (
    <div className="bg-white rounded-md overflow-hidden" style={{
      border: "3px solid #eee",
      boxShadow: "4px 4px 0 rgba(0,0,0,0.08)",
    }}>
      {/* Question */}
      <div className="p-3 md:p-4 flex items-start gap-2 md:gap-3">
        <span className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#FF0000] text-white font-dot text-xs md:text-sm flex items-center justify-center mt-0.5">
          Q
        </span>
        <span className="font-body text-gray-900 text-xs md:text-sm flex-1 mt-1 font-medium">{q}</span>
      </div>
      {/* Answer */}
      <div className="px-3 md:px-4 pb-3 md:pb-4 flex items-start gap-2 md:gap-3 pl-4 md:pl-5">
        <span className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-secondary text-white font-dot text-xs md:text-sm flex items-center justify-center">
          A
        </span>
        <p className="font-body text-gray-600 text-xs md:text-sm leading-relaxed mt-1">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <GroundDivider />
      <section className="bg-white py-12 md:py-14 px-4" id="faq">
        <FadeInSection>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <SectionDivider />
              <h2 className="font-dot text-3xl md:text-5xl text-[#FF0000]">Q&A</h2>
              <SectionDivider />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {faqData.map((item, i) => (
                <FAQCard key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
