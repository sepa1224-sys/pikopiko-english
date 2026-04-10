"use client";

import Image from "next/image";
import FadeInSection from "./FadeInSection";
import { SectionDivider, GroundDivider, PixelStar } from "./PixelArt";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Members() {
  const { t } = useLanguage();
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
              <h2 className="font-dot text-2xl md:text-4xl text-accent">{t.members.title}</h2>
              <SectionDivider />
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-10 max-w-2xl mx-auto">
              {/* Member 1 */}
              <div className="text-center">
                <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] mx-auto mb-3 md:mb-4
                  rounded-full border-[5px] md:border-[6px] border-white bg-gray-200 overflow-hidden"
                  style={{ boxShadow: "inset -3px -3px 0 rgba(0,0,0,0.15), 5px 5px 0 rgba(0,0,0,0.2)" }}>
                  <Image
                    src="/images/member-sakamoto.png"
                    alt={t.members.member1Name}
                    fill
                    sizes="(max-width: 768px) 140px, 180px"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-dot text-base md:text-xl text-white mb-1">{t.members.member1Name}</h3>
                <div className="inline-block bg-secondary text-white font-dot text-[0.55rem] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-sm mb-2">
                  {t.members.member1Role}
                </div>
                <p className="font-body text-[0.6rem] md:text-xs text-gray-400 leading-relaxed">
                  {t.members.member1Desc}
                </p>
              </div>

              {/* Member 2 */}
              <div className="text-center">
                <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] mx-auto mb-3 md:mb-4
                  rounded-full border-[5px] md:border-[6px] border-white bg-gray-200 overflow-hidden"
                  style={{ boxShadow: "inset -3px -3px 0 rgba(0,0,0,0.15), 5px 5px 0 rgba(0,0,0,0.2)" }}>
                  <Image
                    src="/images/member-ido.png"
                    alt={t.members.member2Name}
                    fill
                    sizes="(max-width: 768px) 140px, 180px"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-dot text-base md:text-xl text-white mb-1">{t.members.member2Name}</h3>
                <div className="inline-block bg-primary text-white font-dot text-[0.55rem] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-sm mb-2">
                  {t.members.member2Role}
                </div>
                <p className="font-body text-[0.6rem] md:text-xs text-gray-400 leading-relaxed">
                  {t.members.member2Desc}
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
