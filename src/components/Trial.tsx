import FadeInSection from "./FadeInSection";
import { GroundDivider, PixelStar } from "./PixelArt";

export default function Trial() {
  return (
    <>
      <GroundDivider />
      <section className="relative bg-gradient-to-b from-[#FFF8DC] to-[#FFE4A0] py-12 md:py-14 px-4 overflow-hidden" id="trial">
        {/* Star decorations */}
        <div className="absolute top-4 left-[10%]"><PixelStar /></div>
        <div className="absolute top-8 right-[8%]" style={{ animationDelay: "0.6s" }}><PixelStar /></div>
        <div className="absolute bottom-6 left-[5%]" style={{ animationDelay: "1.2s" }}><PixelStar /></div>

        <FadeInSection>
          <div className="max-w-lg mx-auto text-center">
            {/* "まずは！" ribbon badge */}
            <div className="inline-block mb-3 relative">
              <div className="bg-primary text-white font-dot text-xl md:text-3xl px-8 md:px-10 py-2 md:py-3 pixel-btn transform -rotate-3"
                style={{ clipPath: "polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)" }}>
                まずは！
              </div>
            </div>

            {/* Card */}
            <div className="bg-white pixel-border p-5 md:p-8 shadow-2xl">
              <h3 className="font-dot text-2xl md:text-3xl text-primary mb-5 md:mb-6"
                style={{ textShadow: "2px 2px 0 rgba(230,57,70,0.15)" }}>
                体験レッスン
              </h3>

              <div className="space-y-3 md:space-y-4">
                <div className="bg-primary/5 rounded-lg p-3 md:p-4">
                  <p className="font-dot text-3xl md:text-4xl text-primary">
                    1,500<span className="text-base md:text-lg">円</span>
                    <span className="text-[0.65rem] md:text-xs text-gray-500 font-body ml-1">（税込）</span>
                  </p>
                </div>

                <div className="font-body text-xs md:text-sm text-gray-700 text-left bg-gray-50 rounded-lg p-3 md:p-4">
                  <p><span className="font-dot text-secondary">内容:</span> レッスン（45分）＋ 無料カウンセリング（15分）</p>
                </div>

                <div className="bg-accent/15 rounded p-2.5 md:p-3 border-l-4 border-accent">
                  <p className="text-[0.65rem] md:text-xs text-gray-600 font-body leading-relaxed text-left">
                    ※予約前に問い合わせから学校名、お話を元にコース内容をご提案させて頂きます。
                  </p>
                </div>
              </div>

              {/* CTA — game start button */}
              <div className="mt-6 md:mt-8">
                <a href="#contact"
                  className="cta-bounce pixel-btn inline-block bg-primary text-white font-dot text-lg md:text-2xl px-8 md:px-12 py-4 md:py-5 rounded-sm leading-relaxed">
                  <span className="text-accent text-[0.65rem] md:text-xs block mb-1 tracking-widest">▼ PRESS START ▼</span>
                  申込・お問い合わせは<br />こちら
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
