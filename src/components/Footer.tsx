import { GroundDivider, Coin } from "./PixelArt";

export default function Footer() {
  return (
    <>
      <GroundDivider />
      <footer className="bg-dark-navy py-10 px-4 text-white" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="font-dot mb-6">
            <p className="text-accent text-2xl md:text-3xl tracking-[0.3em]">PIKO PIKO</p>
            <p className="text-white text-lg md:text-xl tracking-[0.3em]">ENGLISH</p>
          </div>

          {/* CTA */}
          <div className="mb-6">
            <a href="#contact" className="pixel-btn inline-block bg-primary text-white font-dot text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-sm">
              お問い合わせはこちら
            </a>
          </div>

          {/* Coins */}
          <div className="flex justify-center gap-3 mb-5">
            <Coin size={20} />
            <Coin size={20} />
            <Coin size={20} />
          </div>

          <div className="border-t border-gray-700 pt-5">
            <p className="font-body text-xs md:text-sm text-gray-500">
              &copy; 2024 ピコピコイングリッシュ All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
