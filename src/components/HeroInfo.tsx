"use client";

import FadeInSection from "./FadeInSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroInfo() {
  const { t } = useLanguage();
  return (
    <section className="bg-gradient-to-b from-[#00BFFF] to-[#0099CC] py-8 md:py-12 px-4">
      <FadeInSection>
        <div className="max-w-md mx-auto">
          {/* White info box */}
          <div className="bg-white/95 p-4 md:p-5 pixel-border shadow-2xl">
            <p className="text-gray-800 font-body text-xs md:text-sm leading-relaxed text-center">
              <span className="font-bold text-primary">{t.heroInfo.mottoLine}</span>
            </p>
            <div className="my-2 md:my-3 flex items-center justify-center gap-2 font-dot text-lg md:text-2xl">
              <span className="text-primary font-bold">{t.heroInfo.gameWord}</span>
              <span className="text-gray-600">×</span>
              <span className="text-secondary font-bold">{t.heroInfo.englishWord}</span>
            </div>
            <p className="text-gray-700 font-body text-xs md:text-sm text-center">
              {t.heroInfo.serviceLine}
            </p>
          </div>

          {/* Online text */}
          <div className="mt-5 md:mt-6 font-body text-white text-xs md:text-sm leading-loose text-center">
            <p>
              {t.heroInfo.onlineLineBefore}
              <span className="font-dot text-accent text-base md:text-xl font-bold bg-black/30 px-1.5 py-0.5 rounded mx-0.5">
                {t.heroInfo.onlineHighlight}
              </span>
              {t.heroInfo.onlineLineAfter}
            </p>
            <p className="mt-1">
              {t.heroInfo.gameEnglishLineBefore}
              <span className="font-dot text-base md:text-xl font-bold text-accent bg-black/30 px-1.5 py-0.5 rounded">
                {t.heroInfo.gameEnglishHighlight}
              </span>
              <span className="ml-0.5">{t.heroInfo.gameEnglishLineAfter}</span>
            </p>
          </div>

          {/* PIKO PIKO ENGLISH */}
          <div className="mt-5 md:mt-6 font-dot text-center leading-tight">
            <div className="text-accent text-2xl md:text-4xl tracking-[0.3em]"
              style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.3)" }}>
              PIKO PIKO
            </div>
            <div className="text-white text-xl md:text-3xl tracking-[0.3em]"
              style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.3)" }}>
              ENGLISH
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
