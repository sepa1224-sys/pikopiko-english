/* ===== Pixel Cloud — large, white + lavender like original ===== */
export function PixelCloud({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const w = size === "lg" ? 192 : size === "md" ? 128 : 80;
  const h = size === "lg" ? 80 : size === "md" ? 56 : 36;
  return (
    <svg className={className} width={w} height={h} viewBox="0 0 24 10" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
      {/* Main body - white */}
      <rect x="4" y="2" width="4" height="1" fill="#fff" />
      <rect x="14" y="1" width="4" height="1" fill="#fff" />
      <rect x="2" y="3" width="8" height="1" fill="#fff" />
      <rect x="12" y="2" width="8" height="1" fill="#fff" />
      <rect x="1" y="4" width="22" height="1" fill="#fff" />
      <rect x="0" y="5" width="24" height="1" fill="#fff" />
      {/* Soft lavender shadow */}
      <rect x="0" y="6" width="24" height="1" fill="#E8E0F0" />
      <rect x="1" y="7" width="22" height="1" fill="#D8D0E8" />
      <rect x="3" y="8" width="18" height="1" fill="#C8C0D8" />
      <rect x="6" y="9" width="12" height="1" fill="#B8B0C8" />
    </svg>
  );
}

/* ===== Pixel Bird — orange/pink, flapping ===== */
export function PixelBird({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="80" height="64" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
      {/* Wing up */}
      <rect x="2" y="0" width="2" height="2" fill="#E8A07A" />
      <rect x="0" y="2" width="2" height="2" fill="#E8A07A" />
      <rect x="4" y="2" width="2" height="2" fill="#E8A07A" />
      {/* Body */}
      <rect x="6" y="4" width="8" height="6" fill="#E8907A" />
      <rect x="4" y="6" width="2" height="4" fill="#E8907A" />
      <rect x="14" y="4" width="2" height="4" fill="#E8907A" />
      {/* Head */}
      <rect x="14" y="2" width="4" height="4" fill="#E8A07A" />
      {/* Eye */}
      <rect x="16" y="3" width="1" height="1" fill="#333" />
      {/* Beak */}
      <rect x="18" y="4" width="2" height="2" fill="#FFD700" />
      {/* Belly */}
      <rect x="8" y="8" width="4" height="2" fill="#FFC8B0" />
      {/* Tail */}
      <rect x="2" y="6" width="2" height="2" fill="#D07060" />
      <rect x="0" y="5" width="2" height="2" fill="#D07060" />
      {/* Feet */}
      <rect x="8" y="12" width="2" height="2" fill="#FFD700" />
      <rect x="12" y="12" width="2" height="2" fill="#FFD700" />
      <rect x="6" y="14" width="2" height="2" fill="#FFD700" />
      <rect x="14" y="14" width="2" height="2" fill="#FFD700" />
    </svg>
  );
}

/* ===== Pixel Vine — green trailing vine ===== */
export function PixelVine({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="32" height="160" viewBox="0 0 8 40" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
      {/* Stem */}
      <rect x="3" y="0" width="2" height="40" fill="#4A7A20" />
      {/* Leaves left */}
      <rect x="0" y="4" width="3" height="2" fill="#6BC030" />
      <rect x="0" y="3" width="2" height="1" fill="#6BC030" />
      <rect x="0" y="12" width="3" height="2" fill="#5AAE28" />
      <rect x="0" y="11" width="2" height="1" fill="#5AAE28" />
      <rect x="0" y="22" width="3" height="2" fill="#6BC030" />
      <rect x="0" y="21" width="2" height="1" fill="#6BC030" />
      <rect x="0" y="32" width="3" height="2" fill="#5AAE28" />
      <rect x="0" y="31" width="2" height="1" fill="#5AAE28" />
      {/* Leaves right */}
      <rect x="5" y="8" width="3" height="2" fill="#6BC030" />
      <rect x="6" y="7" width="2" height="1" fill="#6BC030" />
      <rect x="5" y="17" width="3" height="2" fill="#5AAE28" />
      <rect x="6" y="16" width="2" height="1" fill="#5AAE28" />
      <rect x="5" y="27" width="3" height="2" fill="#6BC030" />
      <rect x="6" y="26" width="2" height="1" fill="#6BC030" />
      <rect x="5" y="36" width="3" height="2" fill="#5AAE28" />
      <rect x="6" y="35" width="2" height="1" fill="#5AAE28" />
    </svg>
  );
}

/* ===== Pixel Balloon — magenta/pink ===== */
export function PixelBalloon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="40" height="64" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
      {/* Balloon body */}
      <rect x="3" y="0" width="4" height="1" fill="#FF00FF" />
      <rect x="2" y="1" width="6" height="1" fill="#FF00FF" />
      <rect x="1" y="2" width="8" height="1" fill="#FF20FF" />
      <rect x="1" y="3" width="8" height="1" fill="#FF20FF" />
      <rect x="1" y="4" width="8" height="1" fill="#E000E0" />
      <rect x="1" y="5" width="8" height="1" fill="#E000E0" />
      <rect x="2" y="6" width="6" height="1" fill="#C000C0" />
      <rect x="3" y="7" width="4" height="1" fill="#C000C0" />
      <rect x="4" y="8" width="2" height="1" fill="#A000A0" />
      {/* Highlight */}
      <rect x="3" y="2" width="2" height="2" fill="#FF80FF" />
      {/* Knot */}
      <rect x="4" y="9" width="2" height="1" fill="#800080" />
      {/* String */}
      <rect x="5" y="10" width="1" height="6" fill="#333" />
    </svg>
  );
}

/* ===== Pixel Mountain — layered green ===== */
export function PixelMountain({ variant = "large" }: { variant?: "large" | "small" }) {
  if (variant === "small") {
    return (
      <svg width="120" height="80" viewBox="0 0 15 10" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
        <rect x="6" y="0" width="3" height="2" fill="#5A9E2F" />
        <rect x="4" y="2" width="7" height="2" fill="#4A8C22" />
        <rect x="2" y="4" width="11" height="2" fill="#3D7A1A" />
        <rect x="0" y="6" width="15" height="2" fill="#2E6B10" />
        <rect x="0" y="8" width="15" height="2" fill="#246008" />
        {/* snow */}
        <rect x="6" y="0" width="3" height="1" fill="#fff" />
      </svg>
    );
  }
  return (
    <svg width="240" height="160" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
      <rect x="13" y="0" width="4" height="2" fill="#5A9E2F" />
      <rect x="10" y="2" width="10" height="2" fill="#5A9E2F" />
      <rect x="7" y="4" width="16" height="2" fill="#4A8C22" />
      <rect x="4" y="6" width="22" height="2" fill="#4A8C22" />
      <rect x="2" y="8" width="26" height="2" fill="#3D7A1A" />
      <rect x="0" y="10" width="30" height="2" fill="#3D7A1A" />
      <rect x="0" y="12" width="30" height="2" fill="#2E6B10" />
      <rect x="0" y="14" width="30" height="2" fill="#246008" />
      <rect x="0" y="16" width="30" height="4" fill="#1A5200" />
      {/* snow */}
      <rect x="13" y="0" width="4" height="1" fill="#fff" />
      <rect x="11" y="1" width="8" height="1" fill="#E8F0E8" />
    </svg>
  );
}

/* ===== Question Block — bouncing ===== */
export function QuestionBlock({ size = 40 }: { size?: number }) {
  return (
    <div className="block-bounce inline-block" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
        {/* border */}
        <rect width="16" height="16" fill="#222" />
        <rect x="1" y="1" width="14" height="14" fill="#E09C20" />
        {/* highlight */}
        <rect x="1" y="1" width="14" height="1" fill="#F0C848" />
        <rect x="1" y="1" width="1" height="14" fill="#F0C848" />
        {/* shadow */}
        <rect x="1" y="14" width="14" height="1" fill="#A06800" />
        <rect x="14" y="1" width="1" height="14" fill="#A06800" />
        {/* ? mark */}
        <rect x="5" y="3" width="6" height="2" fill="#fff" />
        <rect x="9" y="5" width="2" height="2" fill="#fff" />
        <rect x="6" y="7" width="4" height="2" fill="#fff" />
        <rect x="6" y="7" width="2" height="2" fill="#fff" />
        <rect x="6" y="11" width="2" height="2" fill="#fff" />
      </svg>
    </div>
  );
}

/* ===== Coin — spinning ===== */
export function Coin({ className = "", size = 28 }: { className?: string; size?: number }) {
  return (
    <div className={`coin-anim inline-block ${className}`}>
      <svg width={size} height={size} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
        <rect x="3" y="0" width="6" height="1" fill="#DAA520" />
        <rect x="1" y="1" width="10" height="1" fill="#FFD700" />
        <rect x="0" y="2" width="12" height="8" fill="#FFD700" />
        <rect x="1" y="10" width="10" height="1" fill="#DAA520" />
        <rect x="3" y="11" width="6" height="1" fill="#B8860B" />
        {/* $ */}
        <rect x="5" y="3" width="2" height="6" fill="#B8860B" />
        <rect x="4" y="4" width="4" height="1" fill="#B8860B" />
        <rect x="4" y="7" width="4" height="1" fill="#B8860B" />
      </svg>
    </div>
  );
}

/* ===== Pixel Star ===== */
export function PixelStar({ className = "" }: { className?: string }) {
  return (
    <div className={`sparkle inline-block ${className}`}>
      <svg width="16" height="16" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
        <rect x="3" y="0" width="2" height="2" fill="#FFD700" />
        <rect x="0" y="3" width="8" height="2" fill="#FFD700" />
        <rect x="2" y="2" width="4" height="4" fill="#FFD700" />
        <rect x="1" y="5" width="2" height="1" fill="#FFD700" />
        <rect x="5" y="5" width="2" height="1" fill="#FFD700" />
        <rect x="0" y="6" width="2" height="1" fill="#FFD700" />
        <rect x="6" y="6" width="2" height="1" fill="#FFD700" />
      </svg>
    </div>
  );
}

/* ===== Pipe — Mario-style green pipe ===== */
export function Pipe({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="64" height="80" viewBox="0 0 16 20" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
      {/* lip */}
      <rect x="0" y="0" width="16" height="4" fill="#30A030" />
      <rect x="0" y="0" width="16" height="1" fill="#50D050" />
      <rect x="0" y="0" width="1" height="4" fill="#50D050" />
      <rect x="15" y="0" width="1" height="4" fill="#1A7A1A" />
      <rect x="0" y="3" width="16" height="1" fill="#1A7A1A" />
      {/* body */}
      <rect x="2" y="4" width="12" height="16" fill="#30A030" />
      <rect x="2" y="4" width="1" height="16" fill="#50D050" />
      <rect x="13" y="4" width="1" height="16" fill="#1A7A1A" />
    </svg>
  );
}

/* ===== Ground — grass on top + brick pattern ===== */
export function GroundRow() {
  return (
    <div className="w-full">
      {/* grass strip */}
      <div className="h-2 md:h-3 w-full" style={{ background: "#5A9E2F", imageRendering: "pixelated" }} />
      {/* brick row */}
      <div className="flex w-full overflow-hidden" style={{ imageRendering: "pixelated" }}>
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 border-r border-b"
            style={{
              background: i % 2 === 0
                ? "linear-gradient(180deg, #C84C09 0%, #A83C06 100%)"
                : "linear-gradient(180deg, #B04408 0%, #903206 100%)",
              borderColor: "#7A2800",
            }}
          />
        ))}
      </div>
      <div className="flex w-full overflow-hidden" style={{ imageRendering: "pixelated" }}>
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 border-r border-b"
            style={{
              background: i % 2 === 1
                ? "linear-gradient(180deg, #C84C09 0%, #A83C06 100%)"
                : "linear-gradient(180deg, #B04408 0%, #903206 100%)",
              borderColor: "#7A2800",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ===== Ground Divider between sections ===== */
export function GroundDivider() {
  return (
    <div className="w-full overflow-hidden" style={{ imageRendering: "pixelated" }}>
      <div className="h-2" style={{ background: "#5A9E2F" }} />
      <div className="flex w-full">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="w-8 h-6 flex-shrink-0 border-r"
            style={{
              background: i % 2 === 0 ? "#C84C09" : "#B04408",
              borderColor: "#7A2800",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ===== Brick Row ===== */
export function BrickRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0" style={{ imageRendering: "pixelated" }}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="w-8 h-8 md:w-10 md:h-10 border-r border-b"
          style={{
            background: i % 2 === 0 ? "#C84C09" : "#B04408",
            borderColor: "#7A2800",
          }}
        />
      ))}
    </div>
  );
}

/* ===== Section Divider — diamond pattern ===== */
export function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-3">
      <div className="flex items-center gap-1.5">
        <PixelStar />
        <div className="w-3 h-3 bg-primary rotate-45" />
        <Coin size={18} />
        <div className="w-3 h-3 bg-secondary rotate-45" />
        <PixelStar />
      </div>
    </div>
  );
}

/* ===== Game Controller Icon ===== */
export function GameController() {
  return (
    <svg width="32" height="24" viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
      <rect x="2" y="2" width="12" height="8" rx="0" fill="#555" />
      <rect x="0" y="4" width="2" height="4" fill="#555" />
      <rect x="14" y="4" width="2" height="4" fill="#555" />
      {/* d-pad */}
      <rect x="3" y="5" width="3" height="1" fill="#333" />
      <rect x="4" y="4" width="1" height="3" fill="#333" />
      {/* buttons */}
      <rect x="10" y="4" width="2" height="1" fill="#E63946" />
      <rect x="12" y="5" width="2" height="1" fill="#5B8DEE" />
    </svg>
  );
}

/* ===== Pixel Character ===== */
export function PixelCharacter() {
  return (
    <svg width="48" height="64" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
      {/* hat */}
      <rect x="3" y="0" width="6" height="2" fill="#E63946" />
      <rect x="2" y="2" width="8" height="1" fill="#E63946" />
      {/* face */}
      <rect x="2" y="3" width="8" height="3" fill="#FFD4A0" />
      <rect x="3" y="4" width="2" height="1" fill="#333" />
      <rect x="7" y="4" width="2" height="1" fill="#333" />
      {/* body */}
      <rect x="2" y="6" width="8" height="3" fill="#5B8DEE" />
      <rect x="4" y="7" width="2" height="1" fill="#FFD700" />
      {/* arms */}
      <rect x="0" y="7" width="2" height="2" fill="#FFD4A0" />
      <rect x="10" y="7" width="2" height="2" fill="#FFD4A0" />
      {/* legs */}
      <rect x="2" y="9" width="3" height="3" fill="#333" />
      <rect x="7" y="9" width="3" height="3" fill="#333" />
      {/* shoes */}
      <rect x="1" y="12" width="4" height="2" fill="#8B4513" />
      <rect x="7" y="12" width="4" height="2" fill="#8B4513" />
    </svg>
  );
}
