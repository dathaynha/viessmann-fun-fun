"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const SparklesCore = ({
  id,
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
}: {
  id: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}) => {
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number }>
  >([]);

  useEffect(() => {
    const particleCount = particleDensity || 50;
    const newParticles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: (minSize || 1) + Math.random() * ((maxSize || 3) - (minSize || 1)),
    }));
    setParticles(newParticles);
  }, [minSize, maxSize, particleDensity]);

  return (
    <div
      className={className}
      style={{ background: background || "transparent" }}
    >
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particleColor || "#FFF",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
