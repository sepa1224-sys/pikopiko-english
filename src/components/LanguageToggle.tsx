"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { languageNames, languageOrder, type Language } from "@/lib/translations";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const others = languageOrder.filter((l) => l !== lang);

  return (
    <div ref={ref} className="fixed top-3 right-3 md:top-4 md:right-4 z-[100]">
      {/* Current language button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        aria-expanded={open}
        className="font-dot text-white text-xs md:text-sm tracking-wider px-4 py-2 flex items-center gap-1.5 transition-[filter] hover:brightness-150"
        style={{
          background: "rgba(10, 10, 40, 0.85)",
          border: "3px solid #fff",
          boxShadow:
            "inset -2px -2px 0 0 rgba(0,0,0,0.55), inset 2px 2px 0 0 rgba(255,255,255,0.25), 3px 3px 0 0 rgba(0,0,0,0.45)",
          imageRendering: "pixelated",
          cursor: "pointer",
        }}
      >
        {languageNames[lang]}
        <span
          className="text-[0.55rem] leading-none transition-transform"
          style={{ transform: open ? "rotate(180deg)" : undefined }}
        >
          ▼
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="mt-1 overflow-hidden"
          style={{
            background: "rgba(10, 10, 40, 0.95)",
            border: "3px solid #fff",
            boxShadow:
              "inset -2px -2px 0 0 rgba(0,0,0,0.55), inset 2px 2px 0 0 rgba(255,255,255,0.25), 3px 3px 0 0 rgba(0,0,0,0.45)",
          }}
        >
          {others.map((l: Language) => (
            <button
              key={l}
              type="button"
              onClick={() => {
                setLang(l);
                setOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-white text-xs md:text-sm tracking-wider transition-colors hover:bg-white/20"
              style={{ cursor: "pointer" }}
            >
              {languageNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
