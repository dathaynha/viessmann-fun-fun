"use client";

import { useState } from "react";
import { Music, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { getTheme } from "@/utils/theme";

interface ChristmasMusicProps {
  audio: HTMLAudioElement | null;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export default function ChristmasMusic({
  audio,
  isPlaying,
  setIsPlaying,
}: ChristmasMusicProps) {
  const theme = getTheme();
  const buttonColor =
    theme === "christmas"
      ? "bg-red-500 hover:bg-red-600"
      : "bg-purple-500 hover:bg-purple-600";
  const sparkleColor = theme === "christmas" ? "bg-yellow-300" : "bg-gold-400";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const toggleMusic = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="right-4 bottom-4 z-50 fixed">
      <div className="relative">
        {/* Sparkles effect */}
        {isPlaying && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute ${sparkleColor} rounded-full w-1 h-1`}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0],
                  x: [0, (i % 2 === 0 ? 1 : -1) * Math.random() * 50],
                  y: [-20 - i * 10],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </>
        )}

        <motion.button
          onClick={toggleMusic}
          className={`relative ${buttonColor} shadow-lg p-3 rounded-full text-white`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: isPlaying
              ? [
                  "0 0 0 0 rgba(239, 68, 68, 0)",
                  "0 0 20px 5px rgba(239, 68, 68, 0.5)",
                ]
              : "0 0 0 0 rgba(239, 68, 68, 0)",
          }}
          transition={{
            duration: 1,
            repeat: isPlaying ? Infinity : 0,
            repeatType: "reverse",
          }}
          aria-label={isPlaying ? "Pause Music" : "Play Music"}
        >
          <motion.div
            animate={{
              rotate: isPlaying ? 360 : 0,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {isPlaying ? <VolumeX size={24} /> : <Music size={24} />}
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
