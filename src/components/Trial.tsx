import FadeInSection from "./FadeInSection";

export default function Trial() {
  return (
    <section
      className="relative bg-gradient-to-b from-accent/30 to-accent/10 py-12 md:py-14 px-4"
      id="trial"
    >
      <FadeInSection>
        <div className="max-w-lg mx-auto text-center">
          {/* "まずは！" badge */}
          <div className="inline-block mb-3 md:mb-4 relative">
            <div className="bg-primary text-white font-dot text-xl md:text-3xl px-6 md:px-8 py-2.5 md:py-3 pixel-btn transform -rotate-2">
              まずは！
            </div>
          </div>

          {/* Trial lesson card */}
          <div className="bg-white pixel-border p-5 md:p-8 rounded-sm shadow-xl">
            <h3 className="font-dot text-xl md:text-3xl text-primary mb-4 md:mb-6">
              体験レッスン
            </h3>

            <div className="space-y-3 md:space-y-4">
              <div className="bg-primary/5 rounded-lg p-3 md:p-4">
                <p className="font-dot text-2xl md:text-4xl text-primary">
                  1,500<span className="text-base md:text-lg">円</span>
                  <span className="text-xs md:text-sm text-gray-500 font-body ml-1">
                    （税込）
                  </span>
                </p>
              </div>

              <div className="font-body text-xs md:text-sm text-gray-700 text-left space-y-2 bg-gray-50 rounded-lg p-3 md:p-4">
                <p>
                  <span className="font-dot text-secondary">内容:</span>{" "}
                  レッスン（45分）＋ 無料カウンセリング（15分）
                </p>
              </div>

              {/* Note */}
              <div className="bg-accent/10 rounded p-2.5 md:p-3 border-l-4 border-accent">
                <p className="text-[0.7rem] md:text-xs text-gray-600 font-body leading-relaxed text-left">
                  ※予約前に問い合わせから学校名、
                  お話を元にコース内容をご提案させて頂きます。
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 md:mt-8">
              <a
                href="#contact"
                className="pixel-btn inline-block bg-primary text-white font-dot text-lg md:text-2xl px-8 md:px-10 py-4 md:py-5 rounded-sm hover:bg-red-600 transition-colors leading-relaxed"
              >
                <span className="text-accent text-xs md:text-sm block mb-1">
                  ▼ ▼ ▼
                </span>
                申込・お問い合わせは
                <br />
                こちら
              </a>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
