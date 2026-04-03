import FadeInSection from "./FadeInSection";
import { SectionDivider, Coin } from "./PixelArt";

export default function Courses() {
  return (
    <section className="bg-white py-12 md:py-14 px-4" id="courses">
      <FadeInSection>
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-8">
            <SectionDivider />
            <h2 className="font-dot text-2xl md:text-4xl text-primary inline-flex items-center gap-2 md:gap-3">
              <Coin />
              コース・値段
              <Coin />
            </h2>
            <SectionDivider />
          </div>

          {/* Course cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">
            {/* Course 1 */}
            <div className="relative overflow-hidden rounded-sm">
              <div
                className="bg-primary text-white font-dot text-center py-2.5 md:py-3 text-xl md:text-2xl tracking-wider"
                style={{
                  boxShadow:
                    "inset -3px -3px 0 rgba(0,0,0,0.3), inset 3px 3px 0 rgba(255,255,255,0.2)",
                }}
              >
                コース1
              </div>
              <div className="pixel-border bg-white p-4 md:p-5 border-t-0">
                <h3 className="font-dot text-primary text-base md:text-lg text-center mb-3 md:mb-4 leading-relaxed">
                  マンツーマン！
                  <br />
                  ゲームで英会話
                </h3>
                <div className="space-y-2 md:space-y-3 font-body text-xs md:text-sm text-gray-700">
                  <p>
                    <span className="font-dot text-primary">価格:</span>{" "}
                    <span className="font-dot text-lg md:text-xl text-gray-900">
                      10,000円
                    </span>
                    <span className="text-xs text-gray-500">/月（税込）</span>
                  </p>
                  <p>
                    <span className="font-dot text-primary">頻度:</span>{" "}
                    基本週1回（1時間）
                  </p>
                  <div className="bg-gray-50 rounded p-2.5 md:p-3 mt-2">
                    <p className="font-dot text-xs text-secondary mb-1">
                      対応ゲーム
                    </p>
                    <p className="font-dot text-xs md:text-sm">
                      マイクラ・Fortnite・Steam系
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 2 */}
            <div className="relative overflow-hidden rounded-sm">
              <div
                className="bg-secondary text-white font-dot text-center py-2.5 md:py-3 text-xl md:text-2xl tracking-wider"
                style={{
                  boxShadow:
                    "inset -3px -3px 0 rgba(0,0,0,0.3), inset 3px 3px 0 rgba(255,255,255,0.2)",
                }}
              >
                コース2
              </div>
              <div className="pixel-border bg-white p-4 md:p-5 border-t-0">
                <h3 className="font-dot text-secondary text-base md:text-lg text-center mb-3 md:mb-4 leading-relaxed">
                  友達とゲームで
                  <br />
                  英会話
                </h3>
                <div className="space-y-2 md:space-y-3 font-body text-xs md:text-sm text-gray-700">
                  <p>
                    <span className="font-dot text-secondary">価格:</span>{" "}
                    <span className="font-dot text-lg md:text-xl text-gray-900">
                      〜8,000円
                    </span>
                    <span className="text-xs text-gray-500">/月（税込）</span>
                  </p>
                  <p>
                    <span className="font-dot text-secondary">頻度:</span>{" "}
                    基本週1回（1時間）
                  </p>
                  <div className="bg-gray-50 rounded p-2.5 md:p-3 mt-2">
                    <p className="font-dot text-xs text-secondary mb-1">
                      対応ゲーム
                    </p>
                    <p className="font-dot text-xs md:text-sm">
                      マイクラ・Fortnite・Steam系
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
