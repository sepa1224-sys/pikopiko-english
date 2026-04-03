import FadeInSection from "./FadeInSection";
import { SectionDivider, Coin, GameController, GroundDivider } from "./PixelArt";

export default function Courses() {
  return (
    <>
      <GroundDivider />
      <section className="bg-gradient-to-b from-[#4A90D9] to-[#2A5A9A] py-12 md:py-14 px-4" id="courses">
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <SectionDivider />
              <h2 className="font-dot text-2xl md:text-4xl text-white inline-flex items-center gap-2 md:gap-3">
                <Coin size={24} />
                コース・値段
                <Coin size={24} />
              </h2>
              <SectionDivider />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">
              {/* Course 1 */}
              <div className="pixel-border rounded-sm overflow-hidden bg-white">
                <div className="bg-[#FF0000] text-white font-dot text-center py-2.5 text-xl md:text-2xl tracking-widest"
                  style={{ boxShadow: "inset 0 -3px 0 rgba(0,0,0,0.3), inset 0 3px 0 rgba(255,255,255,0.2)" }}>
                  コース1
                </div>
                <div className="p-4 md:p-5 bg-white">
                  <div className="flex justify-center mb-3"><GameController /></div>
                  <h3 className="font-dot text-[#FF0000] text-base md:text-lg text-center mb-3 leading-relaxed">
                    マンツーマン！<br />ゲームで英会話
                  </h3>
                  <div className="space-y-2 font-body text-xs md:text-sm text-gray-800">
                    <p><span className="font-dot text-[#FF0000]">価格:</span> <span className="font-dot text-lg md:text-xl text-black">10,000円</span><span className="text-[0.65rem] text-gray-500">/月（税込）</span></p>
                    <p><span className="font-dot text-[#FF0000]">頻度:</span> 基本週1回（1時間）</p>
                    <div className="bg-gray-50 rounded p-2.5">
                      <p className="font-dot text-[0.65rem] text-secondary mb-1">対応ゲーム</p>
                      <p className="font-dot text-xs md:text-sm text-black">マイクラ・Fortnite・Steam系</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course 2 */}
              <div className="pixel-border rounded-sm overflow-hidden bg-white">
                <div className="bg-[#FF0000] text-white font-dot text-center py-2.5 text-xl md:text-2xl tracking-widest"
                  style={{ boxShadow: "inset 0 -3px 0 rgba(0,0,0,0.3), inset 0 3px 0 rgba(255,255,255,0.2)" }}>
                  コース2
                </div>
                <div className="p-4 md:p-5 bg-white">
                  <div className="flex justify-center mb-3"><GameController /></div>
                  <h3 className="font-dot text-secondary text-base md:text-lg text-center mb-3 leading-relaxed">
                    友達とゲームで<br />英会話
                  </h3>
                  <div className="space-y-2 font-body text-xs md:text-sm text-gray-800">
                    <p><span className="font-dot text-secondary">価格:</span> <span className="font-dot text-lg md:text-xl text-black">〜8,000円</span><span className="text-[0.65rem] text-gray-500">/月（税込）</span></p>
                    <p><span className="font-dot text-secondary">頻度:</span> 基本週1回（1時間）</p>
                    <div className="bg-gray-50 rounded p-2.5">
                      <p className="font-dot text-[0.65rem] text-secondary mb-1">対応ゲーム</p>
                      <p className="font-dot text-xs md:text-sm text-black">マイクラ・Fortnite・Steam系</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
