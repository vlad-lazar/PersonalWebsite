"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface NyanCat {
  id: number;
  top: number;
  duration: number;
  delay: number;
  size: number;
}

export function NyanCats() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Debug logging
  console.log("Nyan Cats - mounted:", mounted, "theme:", theme, "showing:", mounted && theme === "rainbow");

  if (!mounted || theme !== "rainbow") {
    console.log("Nyan Cats returning null");
    return null;
  }

  console.log("Nyan Cats RENDERING!");

  const nyanCats: NyanCat[] = [
    { id: 1, top: 15, duration: 15, delay: 0, size: 60 },
    { id: 2, top: 45, duration: 20, delay: 5, size: 50 },
    { id: 3, top: 75, duration: 18, delay: 10, size: 55 },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes nyan-fly-anim {
          0% {
            left: -100px;
            transform: translateY(0px);
          }
          50% {
            left: 50%;
            transform: translateY(-10px);
          }
          100% {
            left: calc(100% + 100px);
            transform: translateY(0px);
          }
        }
        @keyframes rainbow-trail-anim {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 0%; }
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 998 }}>
        {nyanCats.map((cat) => (
        <div
          key={cat.id}
          style={{
            position: 'absolute',
            top: `${cat.top}%`,
            width: `${cat.size}px`,
            height: `${cat.size * 0.6}px`,
            animation: `nyan-fly-anim ${cat.duration}s linear infinite`,
            animationDelay: `${cat.delay}s`,
            willChange: 'left, transform',
          }}
        >
          {/* Nyan Cat Body */}
          <div className="relative w-full h-full">
            {/* Rainbow Trail */}
            <div
              className="absolute right-full top-1/2 -translate-y-1/2 h-full"
              style={{
                width: `${cat.size * 2}px`,
                background: 'repeating-linear-gradient(0deg, #ff0000 0px, #ff0000 4px, #ffff00 4px, #ffff00 8px, #00ff00 8px, #00ff00 12px, #00ffff 12px, #00ffff 16px, #0000ff 16px, #0000ff 20px, #ff00ff 20px, #ff00ff 24px)',
                backgroundSize: '24px 24px',
                animation: 'rainbow-trail-anim 0.5s linear infinite',
                opacity: 1,
              }}
            />

            {/* Cat emoji or simple design */}
            <div
              className="relative z-10 text-center"
              style={{
                fontSize: `${cat.size * 0.6}px`,
                lineHeight: 1,
                filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))',
              }}
            >
              🐱
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
