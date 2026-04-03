export function PixelCloud({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="80"
      height="40"
      viewBox="0 0 80 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="20" y="0" width="40" height="10" fill="white" />
      <rect x="10" y="10" width="60" height="10" fill="white" />
      <rect x="0" y="20" width="80" height="10" fill="white" />
      <rect x="10" y="30" width="60" height="10" fill="white" />
    </svg>
  );
}

export function PixelMountain({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="200"
      height="120"
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="90" y="0" width="20" height="20" fill="#6B8E6B" />
      <rect x="70" y="20" width="60" height="20" fill="#6B8E6B" />
      <rect x="50" y="40" width="100" height="20" fill="#5A7D5A" />
      <rect x="30" y="60" width="140" height="20" fill="#4A6C4A" />
      <rect x="10" y="80" width="180" height="20" fill="#3A5B3A" />
      <rect x="0" y="100" width="200" height="20" fill="#2A4A2A" />
      {/* Snow cap */}
      <rect x="90" y="0" width="20" height="10" fill="white" />
      <rect x="80" y="10" width="40" height="10" fill="#E8E8E8" />
    </svg>
  );
}

export function PixelBlock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-10 h-10 bg-yellow-500 border-2 border-yellow-700 flex items-center justify-center ${className}`}
      style={{ imageRendering: "pixelated" }}
    >
      <span className="text-yellow-800 font-bold text-lg font-dot">?</span>
    </div>
  );
}

export function QuestionBlock() {
  return (
    <div className="block-bounce inline-block">
      <div
        className="w-12 h-12 bg-accent border-3 border-yellow-700 flex items-center justify-center rounded-sm"
        style={{
          boxShadow:
            "inset -3px -3px 0 rgba(0,0,0,0.3), inset 3px 3px 0 rgba(255,255,255,0.3)",
        }}
      >
        <span className="text-yellow-800 font-bold text-xl font-dot">?</span>
      </div>
    </div>
  );
}

export function Coin({ className = "" }: { className?: string }) {
  return (
    <div className={`coin-anim inline-block ${className}`}>
      <div className="w-8 h-8 bg-accent rounded-full border-2 border-yellow-600 flex items-center justify-center">
        <span className="text-yellow-800 font-bold text-xs">$</span>
      </div>
    </div>
  );
}

export function GroundBlocks() {
  return (
    <div className="flex w-full">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="w-[40px] h-[40px] flex-shrink-0"
          style={{
            background:
              i % 2 === 0
                ? "linear-gradient(135deg, #C4A265 25%, #A0824A 25%, #A0824A 50%, #C4A265 50%, #C4A265 75%, #A0824A 75%)"
                : "linear-gradient(135deg, #A0824A 25%, #8B6914 25%, #8B6914 50%, #A0824A 50%, #A0824A 75%, #8B6914 75%)",
            backgroundSize: "20px 20px",
            imageRendering: "pixelated",
          }}
        />
      ))}
    </div>
  );
}

export function Pipe({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="w-16 h-6 bg-green-600 border-2 border-green-800 rounded-t-sm" />
      <div className="w-12 h-16 bg-green-500 border-x-2 border-b-2 border-green-700" />
    </div>
  );
}

export function BrickRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="w-10 h-10 border border-yellow-900"
          style={{
            background:
              "linear-gradient(to bottom, #D2691E 0%, #B8560E 100%)",
            imageRendering: "pixelated",
          }}
        />
      ))}
    </div>
  );
}

export function PixelCharacter() {
  // Simple 8-bit style character (like a game character)
  return (
    <svg
      width="48"
      height="64"
      viewBox="0 0 48 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: "pixelated" }}
    >
      {/* Hat */}
      <rect x="12" y="0" width="24" height="8" fill="#E63946" />
      <rect x="8" y="8" width="32" height="8" fill="#E63946" />
      {/* Face */}
      <rect x="8" y="16" width="32" height="8" fill="#FFD4A0" />
      <rect x="12" y="16" width="4" height="4" fill="#333" /> {/* Eye L */}
      <rect x="28" y="16" width="4" height="4" fill="#333" /> {/* Eye R */}
      <rect x="16" y="24" width="16" height="4" fill="#FFD4A0" />
      {/* Body */}
      <rect x="8" y="28" width="32" height="8" fill="#5B8DEE" />
      <rect x="12" y="28" width="8" height="8" fill="#FFD700" /> {/* Belt */}
      <rect x="4" y="36" width="40" height="8" fill="#5B8DEE" />
      {/* Arms */}
      <rect x="0" y="32" width="8" height="12" fill="#FFD4A0" />
      <rect x="40" y="32" width="8" height="12" fill="#FFD4A0" />
      {/* Legs */}
      <rect x="8" y="44" width="12" height="12" fill="#333" />
      <rect x="28" y="44" width="12" height="12" fill="#333" />
      {/* Shoes */}
      <rect x="4" y="56" width="16" height="8" fill="#8B4513" />
      <rect x="28" y="56" width="16" height="8" fill="#8B4513" />
    </svg>
  );
}

export function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-4">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-accent rotate-45" />
        <div className="w-4 h-4 bg-primary rotate-45" />
        <div className="w-3 h-3 bg-accent rotate-45" />
        <div className="w-4 h-4 bg-secondary rotate-45" />
        <div className="w-3 h-3 bg-accent rotate-45" />
      </div>
    </div>
  );
}
