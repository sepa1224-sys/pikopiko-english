"use client";

import FadeInSection from "./FadeInSection";
import { SectionDivider, Coin, GroundDivider, PixelStar } from "./PixelArt";

function FallingCoins() {
  const coins = [
    { left: "8%", delay: "0s", dur: "2.5s" },
    { left: "22%", delay: "0.6s", dur: "2.8s" },
    { left: "45%", delay: "1.2s", dur: "2.3s" },
    { left: "68%", delay: "0.3s", dur: "2.6s" },
    { left: "88%", delay: "0.9s", dur: "2.4s" },
  ];
  return (
    <>
      {coins.map((c, i) => (
        <div key={i} className="absolute pointer-events-none"
          style={{ left: c.left, top: "-10px", animation: `coin-fall ${c.dur} ease-in infinite`, animationDelay: c.delay }}>
          <Coin size={20} />
        </div>
      ))}
    </>
  );
}

export default function Referral() {
  return (
    <>
      <GroundDivider />
      <section className="bg-white py-12 md:py-14 px-4 relative overflow-hidden">
        <FallingCoins />
        <div className="absolute top-8 right-10"><PixelStar /></div>
        <div className="absolute bottom-10 left-8" style={{ animationDelay: "0.5s" }}><PixelStar /></div>

        <FadeInSection>
          <div className="max-w-lg mx-auto text-center">
            <SectionDivider />
            <h2 className="font-dot text-xl md:text-3xl mb-6 md:mb-8">
              <span className="text-[#FF0000]">お得なお友達割引付き</span>
              <div className="h-1 w-[60%] mx-auto mt-1 bg-[#FF0000] rounded" />
            </h2>

            <div className="font-body text-sm md:text-lg leading-loose mb-5 text-gray-900">
              <p>お友達の紹介割引を使うと、</p>
              <p>紹介した人・された人は</p>
              <p>レッスン料が<span className="font-dot text-[#FF0000] text-xl md:text-2xl mx-1 font-bold">1ヶ月半額</span>に！</p>
            </div>

            <p className="text-xs md:text-sm text-gray-500 mb-6 md:mb-8 font-body">
              ＊マンツーマンコースをご利用の方も割引対象
            </p>

            {/* Price */}
            <div className="py-6 md:py-8">
              <p className="font-dot text-2xl md:text-3xl text-gray-500 price-strike mb-2">10,000円</p>
              <div className="flex items-center justify-center my-2">
                <span className="text-[#FF0000] text-5xl md:text-6xl font-dot font-bold">↓</span>
              </div>
              <p className="font-body text-sm text-gray-600 mb-1">初月は</p>
              <p className="font-dot text-[4rem] md:text-[5.5rem] text-[#FF0000] leading-none"
                style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.1)" }}>
                5,000<span className="text-3xl md:text-4xl">円</span>
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
