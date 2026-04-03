"use client";

import FadeInSection from "./FadeInSection";
import { SectionDivider, Coin, GroundDivider, PixelStar } from "./PixelArt";

function FallingCoins() {
  // Falling coin animation — absolute positioned coins at different delays
  const coins = [
    { left: "10%", delay: "0s", duration: "2.5s" },
    { left: "25%", delay: "0.6s", duration: "2.8s" },
    { left: "50%", delay: "1.2s", duration: "2.3s" },
    { left: "70%", delay: "0.3s", duration: "2.6s" },
    { left: "85%", delay: "0.9s", duration: "2.4s" },
  ];
  return (
    <>
      {coins.map((c, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: c.left,
            top: "-10px",
            animation: `coin-fall ${c.duration} ease-in infinite`,
            animationDelay: c.delay,
          }}
        >
          <Coin size={20} className="!animation-none" />
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

        {/* Stars */}
        <div className="absolute top-8 right-10"><PixelStar /></div>
        <div className="absolute bottom-10 left-8" style={{ animationDelay: "0.5s" }}><PixelStar /></div>

        <FadeInSection>
          <div className="max-w-lg mx-auto text-center">
            <SectionDivider />
            <h2 className="font-dot text-xl md:text-3xl mb-6 md:mb-8 inline-flex items-center gap-2 flex-wrap justify-center">
              <Coin size={24} />
              <span className="text-accent">お得な</span>
              <span className="text-primary">お友達割引付き</span>
              <Coin size={24} />
            </h2>

            <div className="font-body text-sm md:text-lg leading-loose mb-5 text-gray-800">
              <p>お友達の紹介割引を使うと、</p>
              <p>紹介した人・された人は</p>
              <p>
                レッスン料が
                <span className="font-dot text-primary text-xl md:text-2xl mx-1 font-bold">1ヶ月半額</span>
                に！
              </p>
            </div>

            <p className="text-xs md:text-sm text-gray-500 mb-6 md:mb-8 font-body">
              ＊マンツーマンコースをご利用の方も割引対象
            </p>

            {/* Price display */}
            <div className="bg-dark-navy rounded-lg p-6 md:p-8 pixel-border relative">
              <p className="font-dot text-2xl md:text-3xl text-gray-400 price-strike mb-2 mt-2">
                10,000円
              </p>
              <div className="flex items-center justify-center my-2 md:my-3">
                <span className="text-primary text-4xl md:text-5xl font-dot font-bold">↓</span>
              </div>
              <p className="font-body text-xs md:text-sm text-gray-300 mb-1">初月は</p>
              <p className="font-dot text-5xl md:text-7xl text-accent"
                style={{ textShadow: "3px 3px 0 #000, 0 0 20px rgba(255,215,0,0.4)" }}>
                5,000<span className="text-3xl md:text-4xl">円</span>
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
