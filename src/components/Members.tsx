import FadeInSection from "./FadeInSection";
import { SectionDivider } from "./PixelArt";

export default function Members() {
  return (
    <section className="bg-white py-12 md:py-14 px-4" id="members">
      <FadeInSection>
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-8 md:mb-10">
            <SectionDivider />
            <h2 className="font-dot text-2xl md:text-4xl text-primary">
              メンバー紹介
            </h2>
            <SectionDivider />
          </div>

          {/* Member cards */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
            {/* Member 1 - 坂本達輝 */}
            <div className="text-center">
              <div className="w-28 h-28 md:w-40 md:h-40 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full border-3 md:border-4 border-secondary overflow-hidden flex items-center justify-center shadow-lg">
                <svg
                  className="w-16 h-16 md:w-24 md:h-24 text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="pixel-border-light bg-gradient-to-b from-blue-50 to-white p-3 md:p-5 rounded-sm">
                <h3 className="font-dot text-base md:text-xl text-gray-800 mb-1">
                  坂本達輝
                </h3>
                <div className="inline-block bg-secondary text-white font-dot text-[0.6rem] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full mb-2 md:mb-3">
                  サポートメンバー
                </div>
                <p className="font-body text-xs md:text-sm text-gray-600 leading-relaxed hidden md:block">
                  サービスの運営・サポートを担当しています。
                </p>
              </div>
            </div>

            {/* Member 2 - 伊度悠希 */}
            <div className="text-center">
              <div className="w-28 h-28 md:w-40 md:h-40 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-red-100 to-red-200 rounded-full border-3 md:border-4 border-primary overflow-hidden flex items-center justify-center shadow-lg">
                <svg
                  className="w-16 h-16 md:w-24 md:h-24 text-red-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="pixel-border-light bg-gradient-to-b from-red-50 to-white p-3 md:p-5 rounded-sm">
                <h3 className="font-dot text-base md:text-xl text-gray-800 mb-1">
                  伊度悠希
                </h3>
                <div className="inline-block bg-primary text-white font-dot text-[0.6rem] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full mb-2 md:mb-3">
                  サポートメンバー（講師）
                </div>
                <p className="font-body text-xs md:text-sm text-gray-600 leading-relaxed hidden md:block">
                  英会話講師として、レッスンを担当しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
