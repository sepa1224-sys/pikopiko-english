export default function Footer() {
  return (
    <footer className="bg-dark-navy py-10 px-4 text-white" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="font-dot mb-6">
          <p className="text-accent text-3xl tracking-[0.3em]">PIKO PIKO</p>
          <p className="text-white text-xl tracking-[0.3em]">ENGLISH</p>
        </div>

        {/* Contact CTA */}
        <div className="mb-8">
          <a
            href="#contact"
            className="pixel-btn inline-block bg-primary text-white font-dot text-lg px-8 py-4 rounded-sm hover:bg-red-600 transition-colors"
          >
            お問い合わせはこちら
          </a>
        </div>

        {/* Ground decoration */}
        <div className="flex justify-center gap-1 mb-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="w-4 h-4"
              style={{
                background: i % 2 === 0 ? "#C4A265" : "#A0824A",
                imageRendering: "pixelated",
              }}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          <p className="font-body text-sm text-gray-400">
            &copy; 2024 ピコピコイングリッシュ All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
