"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function RainbowSparkles() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || theme !== "rainbow") return null;

  // More sparkles for visual effect - still static for performance
  const sparklePositions = [
    { x: 10, y: 20, delay: 0, size: 4 },
    { x: 85, y: 15, delay: 0.5, size: 3 },
    { x: 30, y: 60, delay: 1, size: 5 },
    { x: 70, y: 70, delay: 1.5, size: 4 },
    { x: 50, y: 30, delay: 2, size: 3 },
    { x: 20, y: 80, delay: 2.5, size: 4 },
    { x: 90, y: 50, delay: 3, size: 5 },
    { x: 15, y: 45, delay: 0.8, size: 4 },
    { x: 65, y: 25, delay: 1.3, size: 3 },
    { x: 40, y: 85, delay: 1.8, size: 5 },
    { x: 75, y: 40, delay: 2.3, size: 4 },
    { x: 25, y: 10, delay: 2.8, size: 3 },
    { x: 95, y: 75, delay: 3.3, size: 4 },
    { x: 5, y: 55, delay: 0.3, size: 5 },
    { x: 55, y: 5, delay: 1.1, size: 3 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {sparklePositions.map((pos, i) => (
        <div
          key={i}
          className="absolute sparkle"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            width: `${pos.size}px`,
            height: `${pos.size}px`,
            animationDelay: `${pos.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
