"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function RainbowSparkles() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Debug logging
  console.log("Sparkles - mounted:", mounted, "theme:", theme, "showing:", mounted && theme === "rainbow");

  if (!mounted || theme !== "rainbow") {
    console.log("Sparkles returning null");
    return null;
  }

  console.log("Sparkles RENDERING!");

  // More sparkles for visual effect - still static for performance
  const sparklePositions = [
    { x: 10, y: 20, delay: 0, size: 20 },
    { x: 85, y: 15, delay: 0.5, size: 15 },
    { x: 30, y: 60, delay: 1, size: 25 },
    { x: 70, y: 70, delay: 1.5, size: 20 },
    { x: 50, y: 30, delay: 2, size: 15 },
    { x: 20, y: 80, delay: 2.5, size: 20 },
    { x: 90, y: 50, delay: 3, size: 25 },
    { x: 15, y: 45, delay: 0.8, size: 20 },
    { x: 65, y: 25, delay: 1.3, size: 15 },
    { x: 40, y: 85, delay: 1.8, size: 25 },
    { x: 75, y: 40, delay: 2.3, size: 20 },
    { x: 25, y: 10, delay: 2.8, size: 15 },
    { x: 95, y: 75, delay: 3.3, size: 20 },
    { x: 5, y: 55, delay: 0.3, size: 25 },
    { x: 55, y: 5, delay: 1.1, size: 15 },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes sparkle-anim {
          0%, 100% {
            opacity: 0.5;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 999 }}>
        {sparklePositions.map((pos, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              width: `${pos.size}px`,
              height: `${pos.size}px`,
              background: 'radial-gradient(circle, #ff1493 0%, #00ffff 50%, transparent 70%)',
              borderRadius: '50%',
              animation: 'sparkle-anim 4s ease-in-out infinite',
              animationDelay: `${pos.delay}s`,
              boxShadow: '0 0 20px #ff1493, 0 0 30px #00ffff',
            }}
          />
        ))}
      </div>
    </>
  );
}
