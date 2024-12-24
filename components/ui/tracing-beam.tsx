"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const TracingBeam = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, bottom } = containerRef.current.getBoundingClientRect();
        setIsVisible(top < window.innerHeight && bottom > 0);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div ref={containerRef} className="relative w-full">
      <motion.div
        className="top-0 left-0 absolute w-full h-full pointer-events-none"
        animate={{
          background: isVisible
            ? `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
            : "none",
        }}
      />
      {children}
    </motion.div>
  );
};
