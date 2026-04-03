import FadeInSection from "./FadeInSection";
import { SectionDivider, GroundDivider, PixelStar } from "./PixelArt";

export default function Members() {
  return (
    <>
      <GroundDivider />
      <section className="py-12 md:py-14 px-4 relative" id="members" style={{ background: "#1a1a2e" }}>
        <div className="absolute top-6 left-8"><PixelStar /></div>
        <div className="absolute top-10 right-10" style={{ animationDelay: "0.8s" }}><PixelStar /></div>

        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <SectionDivider />
              <h2 className="font-dot text-2xl md:text-4xl text-accent">メンバー紹介</h2>
              <SectionDivider />
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-10 max-w-2xl mx-auto">
              {/* Member 1 */}
              <div className="text-center">
                <div className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] mx-auto mb-3 md:mb-4
                  rounded-full border-[5px] md:border-[6px] border-white bg-gray-200 overflow-hidden flex items-center justify-center"
                  style={{ boxShadow: "inset -3px -3px 0 rgba(0,0,0,0.15), 5px 5px 0 rgba(0,0,0,0.2)" }}>
                  <div className="flex flex-col items-center">
                    <svg className="w-14 h-14 md:w-20 md:h-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <span className="text-gray-500 font-dot text-[0.5rem] md:text-xs">写真</span>
                  </div>
                </div>
                <h3 className="font-dot text-base md:text-xl text-white mb-1">坂本達輝</h3>
                <div className="inline-block bg-secondary text-white font-dot text-[0.55rem] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-sm mb-2">
                  サポートメンバー
                </div>
                <p className="font-body text-[0.6rem] md:text-xs text-gray-400 leading-relaxed">
                  サービスの運営・サポートを担当しています。
                </p>
              </div>

              {/* Member 2 */}
              <div className="text-center">
                <div className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] mx-auto mb-3 md:mb-4
                  rounded-full border-[5px] md:border-[6px] border-white bg-gray-200 overflow-hidden flex items-center justify-center"
                  style={{ boxShadow: "inset -3px -3px 0 rgba(0,0,0,0.15), 5px 5px 0 rgba(0,0,0,0.2)" }}>
                  <div className="flex flex-col items-center">
                    <svg className="w-14 h-14 md:w-20 md:h-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <span className="text-gray-500 font-dot text-[0.5rem] md:text-xs">写真</span>
                  </div>
                </div>
                <h3 className="font-dot text-base md:text-xl text-white mb-1">伊度悠希</h3>
                <div className="inline-block bg-primary text-white font-dot text-[0.55rem] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-sm mb-2">
                  サポートメンバー（講師）
                </div>
                <p className="font-body text-[0.6rem] md:text-xs text-gray-400 leading-relaxed">
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
