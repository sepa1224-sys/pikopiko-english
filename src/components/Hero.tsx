import { PixelCloud, PixelMountain, GroundBlocks, Pipe, PixelCharacter } from "./PixelArt";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#6EC6FF] via-secondary to-[#4A7FD8]">
      {/* Clouds */}
      <div
        className="absolute top-[4%] left-[3%] md:left-[5%]"
        style={{ animation: "cloud-float 6s ease-in-out infinite" }}
      >
        <PixelCloud />
      </div>
      <div
        className="absolute top-[6%] right-[5%] md:right-[8%]"
        style={{ animation: "cloud-float-slow 8s ease-in-out infinite" }}
      >
        <PixelCloud className="scale-60 md:scale-75" />
      </div>
      <div
        className="absolute top-[14%] left-[50%] md:left-[55%]"
        style={{ animation: "cloud-float 7s ease-in-out infinite" }}
      >
        <PixelCloud className="scale-40 md:scale-50" />
      </div>
      <div
        className="absolute top-[3%] left-[35%] hidden md:block"
        style={{ animation: "cloud-float-slow 9s ease-in-out infinite" }}
      >
        <PixelCloud className="scale-90" />
      </div>

      {/* Mountains - responsive sizing */}
      <div className="absolute bottom-[60px] md:bottom-[80px] left-[-30px] md:left-[-20px]">
        <PixelMountain className="scale-75 md:scale-110" />
      </div>
      <div className="absolute bottom-[60px] md:bottom-[80px] right-[-40px] md:right-[-30px]">
        <PixelMountain className="scale-x-[-1] scale-60 md:scale-90" />
      </div>
      <div className="absolute bottom-[80px] left-[35%] hidden md:block">
        <PixelMountain className="scale-60 opacity-50" />
      </div>

      {/* Pipes */}
      <div className="absolute bottom-[30px] md:bottom-[40px] right-[5%] md:right-[8%] scale-75 md:scale-100">
        <Pipe />
      </div>
      <div className="absolute bottom-[40px] left-[8%] hidden md:block">
        <Pipe />
      </div>

      {/* Pixel character */}
      <div className="absolute bottom-[30px] left-[5%] md:bottom-[40px] md:left-[20%] scale-75 md:scale-100">
        <PixelCharacter />
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <GroundBlocks />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-8 md:pt-12 pb-24 md:pb-32 text-center">
        {/* Main title */}
        <div className="mb-3 md:mb-4">
          <h1 className="font-dot drop-shadow-[3px_3px_0px_rgba(0,0,0,0.5)] md:drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
            <span className="block text-white text-[2.5rem] md:text-7xl lg:text-8xl tracking-wider leading-tight">
              ピコピコ
            </span>
            <span className="block text-white text-[2rem] md:text-6xl lg:text-7xl tracking-wider leading-tight">
              イングリッシュ
            </span>
          </h1>
        </div>

        {/* Game x English - large and prominent */}
        <div className="mt-3 md:mt-4 font-dot flex flex-wrap items-end justify-center gap-1">
          <span
            className="text-primary text-5xl md:text-8xl font-bold drop-shadow-[3px_3px_0px_rgba(0,0,0,0.3)] leading-none"
            style={{ WebkitTextStroke: "1px #b02030" }}
          >
            ゲーム
          </span>
          <span className="text-white text-2xl md:text-5xl mb-1 md:mb-2">で</span>
          <span className="text-accent text-5xl md:text-8xl font-bold drop-shadow-[3px_3px_0px_rgba(0,0,0,0.3)] leading-none">
            英会話
          </span>
        </div>

        {/* ABC decoration */}
        <div className="font-dot text-white text-xl md:text-2xl tracking-[0.5em] mt-1 md:mt-2 opacity-70">
          A B C
        </div>

        {/* White info box */}
        <div className="mt-5 md:mt-6 w-full max-w-[340px] md:max-w-sm mx-auto bg-white rounded-lg p-4 md:p-5 pixel-border-light shadow-xl">
          <p className="text-gray-800 font-body text-xs md:text-sm leading-relaxed">
            「<span className="font-bold text-primary">楽しく自然と英語が身につく</span>」をモットーに
          </p>
          <div className="my-2 md:my-3 flex items-center justify-center gap-2 font-dot text-lg md:text-xl">
            <span className="text-primary font-bold">ゲーム</span>
            <span className="text-gray-600">×</span>
            <span className="text-secondary font-bold">英会話</span>
          </div>
          <p className="text-gray-700 font-body text-xs md:text-sm">
            のサービスを展開しています。
          </p>
        </div>

        {/* Online connection text */}
        <div className="mt-5 md:mt-6 w-full max-w-[340px] md:max-w-sm mx-auto font-body text-white text-xs md:text-sm leading-loose">
          <p>
            有名英会話講師と
            <span className="font-dot text-accent text-base md:text-xl font-bold bg-black/20 px-1.5 md:px-2 py-0.5 rounded">
              オンライン
            </span>
            で繋がりながら、
          </p>
          <p className="mt-1 md:mt-2">
            <span className="font-dot text-base md:text-xl font-bold text-primary bg-white/20 px-1.5 md:px-2 py-0.5 rounded">
              ゲームを英語
            </span>
            で一緒にプレイしていきます。
          </p>
        </div>

        {/* PIKO PIKO ENGLISH logo */}
        <div className="mt-6 md:mt-8 font-dot">
          <div className="text-accent text-3xl md:text-6xl tracking-[0.3em] md:tracking-[0.4em] drop-shadow-[2px_2px_0px_rgba(0,0,0,0.6)] md:drop-shadow-[3px_3px_0px_rgba(0,0,0,0.6)] leading-tight">
            PIKO PIKO
          </div>
          <div className="text-white text-2xl md:text-5xl tracking-[0.3em] md:tracking-[0.4em] drop-shadow-[2px_2px_0px_rgba(0,0,0,0.6)] md:drop-shadow-[3px_3px_0px_rgba(0,0,0,0.6)]">
            ENGLISH
          </div>
        </div>
      </div>
    </section>
  );
}
