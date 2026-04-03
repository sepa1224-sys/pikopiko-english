import { PixelCloud, PixelMountain, GroundRow, Pipe, QuestionBlock, PixelCharacter, PixelStar } from "./PixelArt";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ===== SKY BACKGROUND ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5C94FC] via-[#6CACFE] to-[#92C8FF]" />

      {/* ===== CLOUDS ===== */}
      <div className="absolute top-[5%] left-[4%]" style={{ animation: "cloud-float 7s ease-in-out infinite" }}>
        <PixelCloud className="scale-100 md:scale-125" />
      </div>
      <div className="absolute top-[8%] right-[6%]" style={{ animation: "cloud-float-slow 9s ease-in-out infinite" }}>
        <PixelCloud className="scale-75 md:scale-100" />
      </div>
      <div className="absolute top-[18%] left-[45%]" style={{ animation: "cloud-float 8s ease-in-out infinite", animationDelay: "2s" }}>
        <PixelCloud className="scale-60 md:scale-75" />
      </div>

      {/* ===== MOUNTAINS ===== */}
      <div className="absolute bottom-[56px] md:bottom-[76px] left-[-30px]">
        <PixelMountain variant="large" />
      </div>
      <div className="absolute bottom-[56px] md:bottom-[76px] right-[-10px]">
        <PixelMountain variant="small" />
      </div>
      <div className="absolute bottom-[56px] md:bottom-[76px] left-[50%] translate-x-[-50%] hidden md:block">
        <PixelMountain variant="small" />
      </div>

      {/* ===== QUESTION BLOCKS ===== */}
      <div className="absolute bottom-[110px] md:bottom-[150px] left-[10%]">
        <QuestionBlock size={32} />
      </div>
      <div className="absolute bottom-[130px] md:bottom-[170px] left-[25%]" style={{ animationDelay: "0.5s" }}>
        <QuestionBlock size={32} />
      </div>
      <div className="absolute bottom-[110px] md:bottom-[150px] right-[12%] hidden md:block">
        <QuestionBlock size={32} />
      </div>

      {/* ===== PIPE ===== */}
      <div className="absolute bottom-[56px] md:bottom-[76px] right-[10%] md:right-[15%]">
        <Pipe />
      </div>

      {/* ===== CHARACTER ===== */}
      <div className="absolute bottom-[56px] md:bottom-[76px] left-[12%] md:left-[18%]">
        <PixelCharacter />
      </div>

      {/* ===== STARS ===== */}
      <div className="absolute top-[30%] right-[20%]"><PixelStar /></div>
      <div className="absolute top-[15%] left-[25%]" style={{ animationDelay: "0.7s" }}><PixelStar /></div>

      {/* ===== GROUND ===== */}
      <div className="absolute bottom-0 left-0 right-0">
        <GroundRow />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-8 md:pt-14 pb-[140px] md:pb-[200px] text-center">
        {/* Title: ピコピコ / イングリッシュ — stacked, red */}
        <h1 className="font-dot leading-none">
          <span className="block text-primary text-[3rem] md:text-[5rem] lg:text-[6rem] tracking-wider"
            style={{ textShadow: "3px 3px 0 #000, -1px -1px 0 #000" }}>
            ピコピコ
          </span>
          <span className="block text-primary text-[2.2rem] md:text-[3.5rem] lg:text-[4.2rem] tracking-wider"
            style={{ textShadow: "3px 3px 0 #000, -1px -1px 0 #000" }}>
            イングリッシュ
          </span>
        </h1>

        {/* ゲーム で 英会話 — stacked vertically */}
        <div className="mt-4 md:mt-6 font-dot leading-none flex flex-col items-center">
          <span className="text-accent text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-bold"
            style={{ textShadow: "4px 4px 0 #000, -1px -1px 0 #000" }}>
            ゲーム
          </span>
          <span className="text-white text-[2rem] md:text-[3rem] my-0"
            style={{ textShadow: "2px 2px 0 #000" }}>
            で
          </span>
          <span className="text-white text-[3rem] md:text-[5rem] lg:text-[6rem] font-bold"
            style={{ textShadow: "4px 4px 0 #000, -1px -1px 0 #000" }}>
            英会話
          </span>
        </div>

        {/* White info box */}
        <div className="mt-5 md:mt-8 w-full max-w-[340px] md:max-w-md mx-auto bg-white/95 p-4 md:p-5 pixel-border shadow-2xl">
          <p className="text-gray-800 font-body text-xs md:text-sm leading-relaxed">
            「<span className="font-bold text-primary">楽しく自然と英語が身につく</span>」をモットーに
          </p>
          <div className="my-2 md:my-3 flex items-center justify-center gap-2 font-dot text-lg md:text-2xl">
            <span className="text-primary font-bold">ゲーム</span>
            <span className="text-gray-600">×</span>
            <span className="text-secondary font-bold">英会話</span>
          </div>
          <p className="text-gray-700 font-body text-xs md:text-sm">
            のサービスを展開しています。
          </p>
        </div>

        {/* Online text */}
        <div className="mt-4 md:mt-6 w-full max-w-[340px] md:max-w-md mx-auto font-body text-white text-xs md:text-sm leading-loose">
          <p>
            有名英会話講師と
            <span className="font-dot text-accent text-base md:text-xl font-bold bg-black/30 px-1.5 py-0.5 rounded mx-0.5">
              オンライン
            </span>
            で繋がりながら、
          </p>
          <p className="mt-1">
            <span className="font-dot text-base md:text-xl font-bold text-accent bg-black/30 px-1.5 py-0.5 rounded">
              ゲームを英語
            </span>
            <span className="ml-0.5">で一緒にプレイしていきます。</span>
          </p>
        </div>

        {/* PIKO PIKO ENGLISH */}
        <div className="mt-6 md:mt-8 font-dot leading-tight">
          <div className="text-accent text-3xl md:text-5xl tracking-[0.3em]"
            style={{ textShadow: "3px 3px 0 #000" }}>
            PIKO PIKO
          </div>
          <div className="text-white text-2xl md:text-4xl tracking-[0.3em]"
            style={{ textShadow: "3px 3px 0 #000" }}>
            ENGLISH
          </div>
        </div>
      </div>
    </section>
  );
}
