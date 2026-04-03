import FadeInSection from "./FadeInSection";
import { SectionDivider, GroundDivider, PixelStar } from "./PixelArt";

function PixelCircleFrame({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-3 md:mb-4">
      {/* Pixel-style border ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `4px solid ${color}`,
          boxShadow: `inset -3px -3px 0 rgba(0,0,0,0.2), inset 3px 3px 0 rgba(255,255,255,0.2), 4px 4px 0 rgba(0,0,0,0.2)`,
        }}
      />
      <div className="absolute inset-1 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default function Members() {
  return (
    <>
      <GroundDivider />
      <section className="bg-dark-navy py-12 md:py-14 px-4 relative" id="members">
        <div className="absolute top-6 left-8"><PixelStar /></div>
        <div className="absolute top-10 right-10" style={{ animationDelay: "0.8s" }}><PixelStar /></div>

        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <SectionDivider />
              <h2 className="font-dot text-2xl md:text-4xl text-accent">
                メンバー紹介
              </h2>
              <SectionDivider />
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-2xl mx-auto">
              {/* Member 1 */}
              <div className="text-center">
                <PixelCircleFrame color="#5B8DEE">
                  <svg className="w-16 h-16 md:w-20 md:h-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </PixelCircleFrame>
                <h3 className="font-dot text-base md:text-xl text-white mb-1">坂本達輝</h3>
                <div className="inline-block bg-secondary text-white font-dot text-[0.55rem] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-sm mb-2">
                  サポートメンバー
                </div>
                <p className="font-body text-[0.65rem] md:text-xs text-gray-400 leading-relaxed hidden md:block">
                  サービスの運営・サポートを担当しています。
                </p>
              </div>

              {/* Member 2 */}
              <div className="text-center">
                <PixelCircleFrame color="#E63946">
                  <svg className="w-16 h-16 md:w-20 md:h-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </PixelCircleFrame>
                <h3 className="font-dot text-base md:text-xl text-white mb-1">伊度悠希</h3>
                <div className="inline-block bg-primary text-white font-dot text-[0.55rem] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-sm mb-2">
                  サポートメンバー（講師）
                </div>
                <p className="font-body text-[0.65rem] md:text-xs text-gray-400 leading-relaxed hidden md:block">
                  英会話講師として、レッスンを担当しています。
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
