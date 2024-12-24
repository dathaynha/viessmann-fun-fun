"use client";
import { cn } from "@/libs/utils";
import React, { useEffect, useRef, useState } from "react";
import { getTheme } from "@/utils/theme";

interface BackgroundGradientProps extends React.HTMLProps<HTMLDivElement> {
  containerClassName?: string;
  className?: string;
  children: React.ReactNode;
}

export const BackgroundGradient = ({
  className,
  containerClassName,
  children,
}: BackgroundGradientProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const theme = getTheme();
  const gradientColor =
    theme === "christmas" ? "rgba(255,0,0,.1)" : "rgba(255,182,255,.1)";

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-full w-full overflow-hidden rounded-xl",
        containerClassName,
      )}
    >
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${gradientColor}, transparent 40%)`,
        }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
