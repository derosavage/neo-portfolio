"use client";

import { useEffect, useRef } from "react";

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-50 hidden h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-300 sm:block"
      style={{
        background:
          "radial-gradient(circle, rgba(97,240,207,0.15) 0%, transparent 70%)",
        maskImage: "radial-gradient(circle, black 20%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(circle, black 20%, transparent 70%)",
      }}
    />
  );
}