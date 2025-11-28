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

  if (!mounted || theme !== "rainbow") return null;

  const nyanCats: NyanCat[] = [
    { id: 1, top: 15, duration: 15, delay: 0, size: 60 },
    { id: 2, top: 45, duration: 20, delay: 5, size: 50 },
    { id: 3, top: 75, duration: 18, delay: 10, size: 55 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {nyanCats.map((cat) => (
        <div
          key={cat.id}
          className="nyan-cat"
          style={{
            position: 'absolute',
            top: `${cat.top}%`,
            width: `${cat.size}px`,
            height: `${cat.size * 0.6}px`,
            animationDuration: `${cat.duration}s`,
            animationDelay: `${cat.delay}s`,
          }}
        >
          {/* Nyan Cat Body */}
          <div className="relative w-full h-full">
            {/* Rainbow Trail */}
            <div
              className="absolute right-full top-1/2 -translate-y-1/2 rainbow-trail h-full"
              style={{ width: `${cat.size * 2}px` }}
            />

            {/* Cat emoji or simple design */}
            <div
              className="relative z-10 text-center"
              style={{ fontSize: `${cat.size * 0.6}px`, lineHeight: 1 }}
            >
              🐱
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
