import FadeInSection from "./FadeInSection";
import { SectionDivider, Coin } from "./PixelArt";

export default function Referral() {
  return (
    <section className="bg-dark-navy py-12 md:py-14 px-4 text-white">
      <FadeInSection>
        <div className="max-w-lg mx-auto text-center">
          {/* Heading */}
          <SectionDivider />
          <h2 className="font-dot text-xl md:text-3xl mb-6 md:mb-8 inline-flex items-center gap-2 flex-wrap justify-center">
            <Coin />
            <span className="text-accent">お得な</span>
            <span className="text-white">お友達割引付き</span>
            <Coin />
          </h2>

          {/* Description */}
          <div className="font-body text-sm md:text-lg leading-loose mb-5 md:mb-6">
            <p>お友達の紹介割引を使うと、</p>
            <p>紹介した人・された人は</p>
            <p>
              レッスン料が
              <span className="font-dot text-accent text-xl md:text-2xl mx-1">
                1ヶ月半額
              </span>
              に！
            </p>
          </div>

          <p className="text-xs md:text-sm text-gray-400 mb-6 md:mb-8 font-body">
            ＊マンツーマンコースをご利用の方も割引対象
          </p>

          {/* Price display */}
          <div className="bg-white/5 rounded-lg p-6 md:p-8 pixel-border-light relative overflow-hidden">
            <div className="absolute top-2 left-3 md:left-4">
              <Coin />
            </div>
            <div className="absolute top-2 right-3 md:right-4">
              <Coin />
            </div>

            <p className="font-dot text-2xl md:text-3xl text-gray-400 price-strike mb-2 md:mb-3 mt-4">
              10,000円
            </p>
            <div className="flex items-center justify-center my-2 md:my-3">
              <span className="text-accent text-3xl md:text-4xl font-dot">
                ↓
              </span>
            </div>
            <p className="font-body text-xs md:text-sm text-gray-300 mb-1 md:mb-2">
              初月は
            </p>
            <p
              className="font-dot text-5xl md:text-7xl text-accent drop-shadow-[2px_2px_0px_rgba(0,0,0,0.6)] md:drop-shadow-[3px_3px_0px_rgba(0,0,0,0.6)]"
              style={{ WebkitTextStroke: "1px #B8860B" }}
            >
              5,000<span className="text-3xl md:text-4xl">円</span>
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
