import FadeInSection from "./FadeInSection";
import { QuestionBlock, BrickRow, PixelStar } from "./PixelArt";

export default function Description() {
  return (
    <section className="bg-dark-navy py-10 md:py-14 px-4 relative">
      {/* Decorative stars */}
      <div className="absolute top-6 left-6"><PixelStar /></div>
      <div className="absolute top-10 right-8" style={{ animationDelay: "0.5s" }}><PixelStar /></div>

      <FadeInSection>
        <div className="max-w-lg mx-auto">
          {/* Bricks */}
          <div className="flex justify-center mb-5 overflow-hidden">
            <BrickRow count={10} />
          </div>

          {/* Question blocks */}
          <div className="flex justify-center gap-2 mb-5">
            <QuestionBlock size={36} />
            <QuestionBlock size={36} />
            <QuestionBlock size={36} />
          </div>

          {/* RPG box */}
          <div className="rpg-box relative">
            <p className="font-body text-xs md:text-sm leading-[2.2] text-white">
              ゲームプレイを通じて、
              <br />
              自然と簡単なフレーズや言い回しを身につけていきます。
              <br />
              最初は英語を話すことに抵抗があるかもしれませんが、
              <br />
              ゲームを通じて楽しくやりとりしていきます。
              <br />
              コツコツと積み上げた英語力は確実に力がついている、
              <br />
              そんな学びを提供します。
            </p>
            <span className="inline-block w-2.5 h-2.5 bg-white mt-2 blink-cursor" />
          </div>

          {/* "コース・値段" link button */}
          <div className="flex justify-end mt-5">
            <a href="#courses" className="pixel-btn bg-primary text-white font-dot text-base px-5 py-2.5 no-underline text-center leading-relaxed">
              コース<br /><span className="text-accent">値段</span>
            </a>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
