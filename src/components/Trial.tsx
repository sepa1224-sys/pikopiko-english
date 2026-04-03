import FadeInSection from "./FadeInSection";
import { GroundDivider, PixelStar } from "./PixelArt";

export default function Trial() {
  return (
    <>
      <GroundDivider />
      <section className="relative py-12 md:py-14 px-4 overflow-hidden" id="trial" style={{ background: "#1a1a2e" }}>
        <div className="absolute top-4 left-[10%]"><PixelStar /></div>
        <div className="absolute top-8 right-[8%]" style={{ animationDelay: "0.6s" }}><PixelStar /></div>

        <FadeInSection>
          <div className="max-w-lg mx-auto text-center">
            {/* "まずは！" — yellow bg + red text ribbon */}
            <div className="inline-block mb-4 relative">
              <div className="font-dot text-xl md:text-3xl px-8 md:px-10 py-2 md:py-3 transform -rotate-3"
                style={{
                  background: "#FFD700",
                  color: "#FF0000",
                  border: "4px solid #222",
                  boxShadow: "inset -3px -3px 0 rgba(0,0,0,0.3), inset 3px 3px 0 rgba(255,255,255,0.3), 5px 5px 0 rgba(0,0,0,0.3)",
                }}>
                まずは！
              </div>
            </div>

            {/* Card */}
            <div className="bg-white pixel-border p-5 md:p-8 shadow-2xl">
              <h3 className="font-dot text-2xl md:text-3xl text-[#FF0000] mb-5 md:mb-6">
                体験レッスン
              </h3>

              <div className="space-y-3 md:space-y-4">
                <div className="bg-red-50 rounded-lg p-3 md:p-4">
                  <p className="font-dot text-3xl md:text-4xl text-[#FF0000]">
                    1,500<span className="text-base md:text-lg">円</span>
                    <span className="text-[0.65rem] md:text-xs text-gray-500 font-body ml-1">（税込）</span>
                  </p>
                </div>

                <div className="font-body text-xs md:text-sm text-gray-800 text-left bg-gray-50 rounded-lg p-3 md:p-4">
                  <p><span className="font-dot text-secondary">内容:</span> レッスン（45分）＋ 無料カウンセリング（15分）</p>
                </div>

                <div className="bg-yellow-50 rounded p-2.5 md:p-3 border-l-4 border-accent">
                  <p className="text-[0.65rem] md:text-xs text-gray-600 font-body leading-relaxed text-left">
                    ※予約前に問い合わせから学校名、お話を元にコース内容をご提案させて頂きます。
                  </p>
                </div>
              </div>

              {/* CTA — flat red pixel button */}
              <div className="mt-6 md:mt-8">
                <a href="#contact"
                  className="cta-bounce inline-block font-dot text-lg md:text-2xl px-8 md:px-12 py-4 md:py-5 leading-relaxed text-white"
                  style={{
                    background: "#FF0000",
                    border: "4px solid #222",
                    boxShadow: "inset -4px -4px 0 rgba(0,0,0,0.35), inset 4px 4px 0 rgba(255,255,255,0.25), 6px 6px 0 rgba(0,0,0,0.3)",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}>
                  申込・お問い合わせは<br /><span className="text-2xl md:text-3xl">こちら</span>
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
