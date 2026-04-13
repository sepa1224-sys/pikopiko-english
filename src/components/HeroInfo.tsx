"use client";

import FadeInSection from "./FadeInSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroInfo() {
  const { t } = useLanguage();
  return (
    <section className="overflow-hidden">
      {/* ===== Top: Yellow motto area ===== */}
      <div className="bg-[#FFD700] py-10 md:py-14 px-4 relative">
        {/* Controller image at top */}
        <div className="flex justify-center mb-4 md:mb-6">
          <div className="w-[80px] h-[60px] md:w-[120px] md:h-[90px] relative">
            <svg viewBox="0 0 120 90" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
              {/* Simple pixel controller */}
              <rect x="10" y="20" width="100" height="50" rx="8" fill="#E63946" />
              <rect x="15" y="25" width="90" height="40" rx="5" fill="#CC2233" />
              {/* D-pad */}
              <rect x="25" y="38" width="20" height="6" fill="#222" />
              <rect x="32" y="31" width="6" height="20" fill="#222" />
              {/* Buttons */}
              <circle cx="85" cy="38" r="5" fill="#4CAF50" />
              <circle cx="95" cy="45" r="5" fill="#2196F3" />
              {/* Sticks */}
              <circle cx="45" cy="55" r="4" fill="#333" />
              <circle cx="70" cy="55" r="4" fill="#333" />
            </svg>
          </div>
        </div>

        <FadeInSection>
          <div className="max-w-2xl mx-auto text-center">
            {/* Motto in quotes */}
            <p className="font-dot text-lg md:text-2xl lg:text-3xl text-gray-900 leading-relaxed mb-2">
              <span className="text-2xl md:text-3xl lg:text-4xl">「</span>
              <span className="font-bold">{t.heroInfo.mottoLine}</span>
              <span className="text-2xl md:text-3xl lg:text-4xl">」</span>
            </p>
            <p className="font-dot text-base md:text-xl text-gray-800 mb-6 md:mb-8">
              をモットーに
            </p>

            {/* ゲーム × 英会話 — big colorful text */}
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-3 md:mb-4 relative">
              {/* ABC decoration */}
              <div className="absolute -top-2 -right-2 md:top-0 md:right-[10%] font-dot text-[#FF0000] text-lg md:text-2xl font-bold opacity-80 rotate-12">
                A<span className="text-[#4CAF50] text-sm md:text-lg mx-0.5">B</span><span className="text-[#2196F3] text-base md:text-xl">C</span>
              </div>

              <span className="font-dot text-[3rem] md:text-[5rem] lg:text-[7rem] font-bold leading-none"
                style={{ color: "#7ED957", WebkitTextStroke: "2px rgba(0,0,0,0.15)", paintOrder: "stroke fill", textShadow: "4px 4px 0 rgba(0,0,0,0.1)" }}>
                {t.heroInfo.gameWord}
              </span>
              <span className="font-dot text-[2rem] md:text-[3rem] text-gray-700">×</span>
              <span className="font-dot text-[3rem] md:text-[5rem] lg:text-[7rem] font-bold leading-none"
                style={{ color: "#E63946", WebkitTextStroke: "2px rgba(0,0,0,0.15)", paintOrder: "stroke fill", textShadow: "4px 4px 0 rgba(0,0,0,0.1)" }}>
                {t.heroInfo.englishWord}
              </span>
            </div>

            <p className="font-dot text-base md:text-xl text-gray-800">
              {t.heroInfo.serviceLine}
            </p>
          </div>
        </FadeInSection>
      </div>

      {/* ===== Bottom: Dark section with online / game-english ===== */}
      <div className="bg-[#1a1a2e] py-10 md:py-14 px-4">
        <FadeInSection>
          <div className="max-w-2xl mx-auto text-center">
            {/* 我々英会話講師と オンライン で繋ぎながら */}
            <div className="mb-4 md:mb-6">
              <p className="font-body text-white text-sm md:text-lg leading-loose">
                {t.heroInfo.onlineLineBefore}
              </p>
              <p className="font-dot text-[2.5rem] md:text-[4.5rem] lg:text-[6rem] font-bold leading-none my-2 md:my-3"
                style={{ color: "#FFD700", WebkitTextStroke: "2px rgba(0,0,0,0.3)", paintOrder: "stroke fill", textShadow: "4px 4px 0 rgba(0,0,0,0.3)" }}>
                {t.heroInfo.onlineHighlight}
              </p>
              <p className="font-body text-white text-sm md:text-lg leading-loose">
                {t.heroInfo.onlineLineAfter}
              </p>
            </div>

            {/* ゲームを英語 で一緒にプレイしていきます */}
            <div className="mb-6 md:mb-8">
              <p className="font-dot text-[2.5rem] md:text-[4.5rem] lg:text-[6rem] font-bold leading-none my-2 md:my-3"
                style={{ color: "#7ED957", WebkitTextStroke: "2px rgba(0,0,0,0.3)", paintOrder: "stroke fill", textShadow: "4px 4px 0 rgba(0,0,0,0.3)" }}>
                {t.heroInfo.gameEnglishHighlight}
              </p>
              <p className="font-body text-white text-sm md:text-lg leading-loose">
                {t.heroInfo.gameEnglishLineAfter}
              </p>
            </div>

            {/* PIKO PIKO ENGLISH */}
            <div className="mt-6 md:mt-8 font-dot text-center leading-tight">
              <div className="text-accent text-3xl md:text-5xl tracking-[0.3em]"
                style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.3)" }}>
                PIKO PIKO
              </div>
              <div className="text-white text-2xl md:text-4xl tracking-[0.3em]"
                style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.3)" }}>
                ENGLISH
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
