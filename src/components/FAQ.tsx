"use client";

import FadeInSection from "./FadeInSection";
import { SectionDivider, GroundDivider } from "./PixelArt";
import { useLanguage } from "@/contexts/LanguageContext";

function FAQCard({ q, a }: { q: string; a: string }) {
  return (
    <div className="bg-white rounded-md overflow-hidden" style={{
      border: "3px solid #eee",
      boxShadow: "4px 4px 0 rgba(0,0,0,0.08)",
    }}>
      {/* Question */}
      <div className="p-3 md:p-4 flex items-start gap-2 md:gap-3">
        <span className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#FF0000] text-white font-dot text-xs md:text-sm flex items-center justify-center mt-0.5">
          Q
        </span>
        <span className="font-body text-gray-900 text-xs md:text-sm flex-1 mt-1 font-medium">{q}</span>
      </div>
      {/* Answer */}
      <div className="px-3 md:px-4 pb-3 md:pb-4 flex items-start gap-2 md:gap-3 pl-4 md:pl-5">
        <span className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-secondary text-white font-dot text-xs md:text-sm flex items-center justify-center">
          A
        </span>
        <p className="font-body text-gray-600 text-xs md:text-sm leading-relaxed mt-1">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  return (
    <>
      <GroundDivider />
      <section className="bg-white py-12 md:py-14 px-4" id="faq">
        <FadeInSection>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <SectionDivider />
              <h2 className="font-dot text-3xl md:text-5xl text-[#FF0000]">{t.faq.title}</h2>
              <SectionDivider />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {t.faq.items.map((item, i) => (
                <FAQCard key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
