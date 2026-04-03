import { PixelCloud, PixelBird, PixelVine, PixelBalloon, PixelStar } from "./PixelArt";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen" style={{ background: "#00C4FF" }}>
      {/* ===== BIRD — top left ===== */}
      <div className="absolute top-[3%] left-[2%] md:left-[4%]">
        <PixelBird className="scale-90 md:scale-125" />
      </div>

      {/* ===== VINE — top left, under bird ===== */}
      <div className="absolute top-[8%] left-[10%] md:left-[13%]">
        <PixelVine className="scale-90 md:scale-110" />
      </div>

      {/* ===== CLOUDS — large, right top, 2 stacked ===== */}
      <div className="absolute top-[4%] right-[0%] md:right-[1%]" style={{ animation: "cloud-float-slow 10s ease-in-out infinite" }}>
        <PixelCloud size="lg" />
      </div>
      <div className="absolute top-[8%] right-[12%] md:right-[10%]" style={{ animation: "cloud-float 9s ease-in-out infinite" }}>
        <PixelCloud size="lg" />
      </div>
      {/* Left middle cloud */}
      <div className="absolute top-[24%] left-[-2%] md:left-[1%]" style={{ animation: "cloud-float 8s ease-in-out infinite" }}>
        <PixelCloud size="md" />
      </div>

      {/* ===== BALLOON — bottom left ===== */}
      <div className="absolute bottom-[3%] left-[2%] md:left-[1%]">
        <PixelBalloon className="scale-75 md:scale-100" />
      </div>

      {/* ===== STARS ===== */}
      <div className="absolute top-[20%] right-[30%]"><PixelStar /></div>
      <div className="absolute top-[50%] left-[8%]" style={{ animationDelay: "0.7s" }}><PixelStar /></div>
      <div className="absolute bottom-[20%] right-[15%]" style={{ animationDelay: "1.3s" }}><PixelStar /></div>

      {/* ===== STUDENT PHOTO — left bottom, large ===== */}
      <div className="absolute bottom-[4%] md:bottom-[3%] left-[1%] md:left-[4%] z-20
        w-[180px] h-[180px] md:w-[280px] md:h-[280px]
        rounded-full border-[6px] md:border-[8px] border-white bg-gray-200 overflow-hidden flex items-center justify-center"
        style={{ boxShadow: "8px 8px 0 rgba(0,0,0,0.15)" }}>
        <div className="flex flex-col items-center">
          <svg className="w-16 h-16 md:w-28 md:h-28 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span className="text-gray-500 font-dot text-[0.6rem] md:text-sm mt-1">生徒イメージ</span>
        </div>
      </div>

      {/* ===== TEACHER PHOTO — right middle ===== */}
      <div className="absolute top-[25%] md:top-[22%] right-[1%] md:right-[4%] z-20
        w-[140px] h-[140px] md:w-[230px] md:h-[230px]
        rounded-full border-[6px] md:border-[8px] border-white bg-gray-200 overflow-hidden flex items-center justify-center"
        style={{ boxShadow: "8px 8px 0 rgba(0,0,0,0.15)" }}>
        <div className="flex flex-col items-center">
          <svg className="w-14 h-14 md:w-24 md:h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span className="text-gray-500 font-dot text-[0.6rem] md:text-sm mt-1">講師イメージ</span>
        </div>
      </div>

      {/* ===== TEXT ===== */}
      <div className="relative z-10 flex flex-col items-center px-2 pt-6 md:pt-10 pb-8 min-h-screen justify-center">
        <h1 className="font-dot leading-[1.05]">
          <span className="block text-[4rem] md:text-[7rem] lg:text-[9rem] tracking-wider"
            style={{ color: "#FF0000", WebkitTextStroke: "4px #fff", paintOrder: "stroke fill", textShadow: "5px 5px 0 rgba(0,0,0,0.1)" }}>
            ピコピコ
          </span>
          <span className="block text-[2.8rem] md:text-[5rem] lg:text-[6.5rem] tracking-wider"
            style={{ color: "#FF0000", WebkitTextStroke: "4px #fff", paintOrder: "stroke fill", textShadow: "5px 5px 0 rgba(0,0,0,0.1)" }}>
            イングリッシュ
          </span>
        </h1>

        <div className="mt-1 md:mt-3 font-dot leading-[1.05] flex flex-col items-center">
          <span className="block text-[4rem] md:text-[7rem] lg:text-[9rem] tracking-wider"
            style={{ color: "#C8FF00", WebkitTextStroke: "2px rgba(0,0,0,0.08)", paintOrder: "stroke fill", textShadow: "4px 4px 0 rgba(0,0,0,0.06)" }}>
            ゲーム
          </span>
          <span className="block text-[2.5rem] md:text-[4.5rem]"
            style={{ color: "#FF69B4", WebkitTextStroke: "2px #000", paintOrder: "stroke fill", textShadow: "3px 3px 0 rgba(0,0,0,0.15)" }}>
            で
          </span>
          <span className="block text-[3.5rem] md:text-[6.5rem] lg:text-[8rem] tracking-wider"
            style={{ color: "#FF0000", WebkitTextStroke: "3px rgba(0,0,0,0.12)", paintOrder: "stroke fill", textShadow: "4px 4px 0 rgba(0,0,0,0.08)", transform: "rotate(-5deg)" }}>
            英会話
          </span>
        </div>
      </div>
    </section>
  );
}
