"use client";

import { Fragment } from "react";
import FadeInSection from "./FadeInSection";
import { PixelCharacter, GroundRow } from "./PixelArt";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Description() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden" style={{ background: "#1a1a2e" }}>
      {/* ===== Speech bubble + character area ===== */}
      <div className="px-4 py-10 md:py-14" style={{ background: "#1a1a2e" }}>
        <FadeInSection>
          <div className="max-w-lg mx-auto relative">
            {/* Speech bubble */}
            <div className="relative bg-white rounded-2xl p-5 md:p-8 mb-6"
              style={{
                border: "4px solid #333",
                boxShadow: "6px 6px 0 rgba(0,0,0,0.3)",
              }}>
              {/* Bubble tail */}
              <div className="absolute -bottom-[20px] left-[30%] w-0 h-0"
                style={{
                  borderLeft: "15px solid transparent",
                  borderRight: "15px solid transparent",
                  borderTop: "20px solid #333",
                }} />
              <div className="absolute -bottom-[14px] left-[30.5%] w-0 h-0"
                style={{
                  borderLeft: "12px solid transparent",
                  borderRight: "12px solid transparent",
                  borderTop: "17px solid white",
                }} />

              <p className="font-body text-xs md:text-sm leading-[2.2] text-gray-800">
                {t.description.bodyLines.map((line, i) => (
                  <Fragment key={i}>
                    {line}
                    {i < t.description.bodyLines.length - 1 && <br />}
                  </Fragment>
                ))}
              </p>
            </div>

            {/* Pixel character below speech bubble */}
            <div className="flex items-end gap-6 md:gap-10 mt-8">
              <div className="flex-shrink-0">
                <PixelCharacter />
              </div>

              {/* コース / 値段 signs */}
              <div className="flex gap-3 md:gap-4 ml-auto">
                <a href="#courses" className="block no-underline">
                  <div className="relative">
                    {/* Sign board */}
                    <div className="font-dot text-white text-base md:text-xl px-4 md:px-6 py-2 md:py-3 text-center"
                      style={{
                        background: "#4CAF50",
                        border: "3px solid #2E7D32",
                        boxShadow: "inset -2px -2px 0 rgba(0,0,0,0.2), inset 2px 2px 0 rgba(255,255,255,0.2), 3px 3px 0 rgba(0,0,0,0.2)",
                      }}>
                      {t.description.courseButtonLine1}
                    </div>
                    {/* Post */}
                    <div className="w-3 h-6 bg-[#8B4513] mx-auto" style={{ boxShadow: "inset -1px 0 0 rgba(0,0,0,0.2)" }} />
                  </div>
                </a>
                <a href="#courses" className="block no-underline">
                  <div className="relative">
                    <div className="font-dot text-white text-base md:text-xl px-4 md:px-6 py-2 md:py-3 text-center"
                      style={{
                        background: "#4CAF50",
                        border: "3px solid #2E7D32",
                        boxShadow: "inset -2px -2px 0 rgba(0,0,0,0.2), inset 2px 2px 0 rgba(255,255,255,0.2), 3px 3px 0 rgba(0,0,0,0.2)",
                      }}>
                      {t.description.courseButtonLine2}
                    </div>
                    <div className="w-3 h-6 bg-[#8B4513] mx-auto" style={{ boxShadow: "inset -1px 0 0 rgba(0,0,0,0.2)" }} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>

      {/* Ground transition */}
      <div className="relative">
        <GroundRow />
      </div>
    </section>
  );
}
