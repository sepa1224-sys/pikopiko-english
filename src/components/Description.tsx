import FadeInSection from "./FadeInSection";
import { QuestionBlock, BrickRow } from "./PixelArt";

export default function Description() {
  return (
    <section className="bg-dark-navy py-10 md:py-12 px-4 relative">
      <FadeInSection>
        <div className="max-w-lg mx-auto">
          {/* Decorative bricks on top */}
          <div className="flex justify-center mb-5 md:mb-6 overflow-hidden">
            <BrickRow count={8} />
          </div>

          {/* Question blocks */}
          <div className="flex justify-center gap-3 mb-5 md:mb-6">
            <QuestionBlock />
            <QuestionBlock />
            <QuestionBlock />
          </div>

          {/* RPG-style message box */}
          <div className="rpg-box relative">
            <p className="font-body text-xs md:text-sm leading-[2] text-white">
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
            {/* Blinking cursor like RPG */}
            <span className="inline-block w-2.5 h-2.5 md:w-3 md:h-3 bg-white mt-2 blink-cursor" />
          </div>

          {/* Course label at bottom right, like the screenshot */}
          <div className="flex justify-end mt-5 md:mt-6">
            <a href="#courses" className="pixel-btn bg-primary text-white font-dot text-base md:text-lg px-5 md:px-6 py-2.5 md:py-3 no-underline">
              コース
              <br />
              <span className="text-accent">値段</span>
            </a>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
