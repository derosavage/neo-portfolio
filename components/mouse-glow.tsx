"use client";

import { useEffect, useRef, useState } from "react";

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay so entry animation plays
    const timer = setTimeout(() => setVisible(true), 100);

    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className={`pointer-events-none fixed z-50 hidden h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-700 sm:block ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background:
          "radial-gradient(circle, rgba(97,240,207,0.12) 0%, transparent 70%)",
        maskImage: "radial-gradient(circle, black 20%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(circle, black 20%, transparent 70%)",
      }}
    />
  );
}
