import FadeInSection from "./FadeInSection";
import { QuestionBlock, Pipe, PixelMountain, PixelCloud, GroundRow, PixelStar } from "./PixelArt";

export default function Description() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#1a1a2e" }}>
      {/* ===== Mario stage background ===== */}
      <div className="relative">
        {/* Sky area */}
        <div className="bg-gradient-to-b from-[#5C94FC] to-[#87CEEB] pt-6 pb-20 md:pb-28 px-4 relative overflow-hidden">
          {/* Clouds */}
          <div className="absolute top-[8%] left-[5%]" style={{ animation: "cloud-float 7s ease-in-out infinite" }}>
            <PixelCloud size="md" />
          </div>
          <div className="absolute top-[5%] right-[8%]" style={{ animation: "cloud-float-slow 9s ease-in-out infinite" }}>
            <PixelCloud size="sm" />
          </div>

          {/* Mountains */}
          <div className="absolute bottom-[60px] left-[-20px]">
            <PixelMountain variant="large" />
          </div>
          <div className="absolute bottom-[60px] right-[-10px]">
            <PixelMountain variant="small" />
          </div>

          {/* Question blocks */}
          <div className="absolute bottom-[80px] left-[20%]">
            <QuestionBlock size={32} />
          </div>
          <div className="absolute bottom-[100px] left-[35%]" style={{ animationDelay: "0.4s" }}>
            <QuestionBlock size={32} />
          </div>
          <div className="absolute bottom-[80px] right-[20%]" style={{ animationDelay: "0.8s" }}>
            <QuestionBlock size={32} />
          </div>

          {/* Pipe */}
          <div className="absolute bottom-[20px] right-[12%]">
            <Pipe />
          </div>

          {/* Stars */}
          <div className="absolute top-[15%] left-[40%]"><PixelStar /></div>
          <div className="absolute top-[25%] right-[25%]" style={{ animationDelay: "0.6s" }}><PixelStar /></div>
        </div>

        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0">
          <GroundRow />
        </div>
      </div>

      {/* ===== RPG Box + button ===== */}
      <div className="px-4 py-10 md:py-14" style={{ background: "#1a1a2e" }}>
        <FadeInSection>
          <div className="max-w-lg mx-auto">
            <div className="rpg-box relative">
              <p className="font-body text-xs md:text-sm leading-[2.2] text-white">
                ゲームプレイを通じて、<br />
                自然と簡単なフレーズや言い回しを身につけていきます。<br />
                最初は英語を話すことに抵抗があるかもしれませんが、<br />
                ゲームを通じて楽しくやりとりしていきます。<br />
                コツコツと積み上げた英語力は確実に力がついている、<br />
                そんな学びを提供します。
              </p>
              <span className="inline-block w-2.5 h-2.5 bg-white mt-2 blink-cursor" />
            </div>

            <div className="flex justify-end mt-5">
              <a href="#courses" className="pixel-btn bg-primary text-white font-dot text-base px-5 py-2.5 no-underline text-center leading-relaxed">
                コース<br /><span className="text-accent">値段</span>
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
