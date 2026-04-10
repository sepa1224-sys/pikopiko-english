"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { t, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.toggle.aria}
      className="fixed top-3 right-3 md:top-4 md:right-4 z-[100] font-dot text-white text-xs md:text-sm tracking-wider px-4 py-2 transition-[filter,transform] hover:brightness-150 active:translate-x-[2px] active:translate-y-[2px]"
      style={{
        background: "rgba(10, 10, 40, 0.85)",
        border: "3px solid #ffffff",
        boxShadow:
          "inset -2px -2px 0 0 rgba(0,0,0,0.55), inset 2px 2px 0 0 rgba(255,255,255,0.25), 3px 3px 0 0 rgba(0,0,0,0.45)",
        imageRendering: "pixelated",
        cursor: "pointer",
      }}
    >
      {t.toggle.label}
    </button>
  );
}
