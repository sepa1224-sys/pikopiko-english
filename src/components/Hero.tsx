import { PixelCloud, PixelBird, PixelVine, PixelBalloon } from "./PixelArt";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen" style={{ background: "#00BFFF" }}>
      {/* ===== PIXEL BIRD — top left ===== */}
      <div className="absolute top-[4%] left-[3%] md:left-[4%]">
        <PixelBird />
      </div>

      {/* ===== VINE — top left, below bird ===== */}
      <div className="absolute top-[10%] left-[12%] md:left-[14%]">
        <PixelVine />
      </div>

      {/* ===== CLOUDS — large, white+lavender ===== */}
      {/* Left middle */}
      <div className="absolute top-[26%] left-[0%] md:left-[2%]" style={{ animation: "cloud-float 8s ease-in-out infinite" }}>
        <PixelCloud size="lg" />
      </div>
      {/* Right top — two clouds side by side */}
      <div className="absolute top-[6%] right-[0%] md:right-[2%]" style={{ animation: "cloud-float-slow 10s ease-in-out infinite" }}>
        <PixelCloud size="lg" />
      </div>
      <div className="absolute top-[10%] right-[15%] md:right-[14%]" style={{ animation: "cloud-float 9s ease-in-out infinite", animationDelay: "1s" }}>
        <PixelCloud size="md" />
      </div>

      {/* ===== BALLOON — bottom left ===== */}
      <div className="absolute bottom-[5%] left-[3%] md:left-[2%]">
        <PixelBalloon />
      </div>

      {/* ===== STUDENT PHOTO — left bottom, large circle ===== */}
      <div className="absolute bottom-[8%] md:bottom-[5%] left-[2%] md:left-[5%] w-[160px] h-[160px] md:w-[260px] md:h-[260px] rounded-full border-4 md:border-[6px] border-white bg-gray-200 overflow-hidden flex items-center justify-center shadow-xl z-20"
        style={{ boxShadow: "6px 6px 0 rgba(0,0,0,0.2)" }}>
        <div className="flex flex-col items-center text-center">
          <svg className="w-12 h-12 md:w-20 md:h-20 text-gray-400 mb-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span className="text-gray-500 font-dot text-[0.5rem] md:text-xs">生徒イメージ</span>
        </div>
      </div>

      {/* ===== TEACHER PHOTO — right middle, slightly smaller circle ===== */}
      <div className="absolute top-[28%] md:top-[25%] right-[2%] md:right-[5%] w-[130px] h-[130px] md:w-[220px] md:h-[220px] rounded-full border-4 md:border-[6px] border-white bg-gray-200 overflow-hidden flex items-center justify-center shadow-xl z-20"
        style={{ boxShadow: "6px 6px 0 rgba(0,0,0,0.2)" }}>
        <div className="flex flex-col items-center text-center">
          <svg className="w-10 h-10 md:w-16 md:h-16 text-gray-400 mb-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span className="text-gray-500 font-dot text-[0.5rem] md:text-xs">講師イメージ</span>
        </div>
      </div>

      {/* ===== TEXT CONTENT ===== */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-6 md:pt-10 pb-8 min-h-screen justify-center">
        {/* ピコピコ — bright red + white outline */}
        <h1 className="font-dot leading-[1.1]">
          <span
            className="block text-[3.5rem] md:text-[6rem] lg:text-[7.5rem] tracking-wider"
            style={{
              color: "#FF0000",
              WebkitTextStroke: "3px #fff",
              paintOrder: "stroke fill",
              textShadow: "4px 4px 0 rgba(0,0,0,0.15)",
            }}
          >
            ピコピコ
          </span>
          {/* イングリッシュ */}
          <span
            className="block text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem] tracking-wider"
            style={{
              color: "#FF0000",
              WebkitTextStroke: "3px #fff",
              paintOrder: "stroke fill",
              textShadow: "4px 4px 0 rgba(0,0,0,0.15)",
            }}
          >
            イングリッシュ
          </span>
        </h1>

        {/* ゲーム — lime green with outline */}
        <div className="mt-2 md:mt-4 font-dot leading-[1.1] flex flex-col items-center">
          <span
            className="block text-[3.5rem] md:text-[6rem] lg:text-[7.5rem] tracking-wider"
            style={{
              color: "#BFFF00",
              WebkitTextStroke: "2px rgba(0,0,0,0.15)",
              paintOrder: "stroke fill",
              textShadow: "3px 3px 0 rgba(0,0,0,0.1)",
            }}
          >
            ゲーム
          </span>

          {/* で — pink/neon */}
          <span
            className="block text-[2.5rem] md:text-[4rem] my-0"
            style={{
              color: "#FF69B4",
              WebkitTextStroke: "2px #000",
              paintOrder: "stroke fill",
              textShadow: "3px 3px 0 rgba(0,0,0,0.2)",
              fontFamily: "var(--font-dot)",
            }}
          >
            で
          </span>

          {/* 英会話 — red, slightly tilted */}
          <span
            className="block text-[3rem] md:text-[5.5rem] lg:text-[7rem] tracking-wider"
            style={{
              color: "#FF0000",
              WebkitTextStroke: "2px rgba(0,0,0,0.2)",
              paintOrder: "stroke fill",
              textShadow: "4px 4px 0 rgba(0,0,0,0.12)",
              transform: "rotate(-5deg)",
              fontFamily: "var(--font-dot)",
            }}
          >
            英会話
          </span>
        </div>
      </div>
    </section>
  );
}
