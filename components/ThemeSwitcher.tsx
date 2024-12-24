"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { getTheme, themeConfig, ThemeType } from "@/utils/theme";

interface ThemeSwitcherProps {
  onThemeChange: (theme: "christmas" | "newYear") => void;
}

export const ThemeSwitcher = ({ onThemeChange }: ThemeSwitcherProps) => {
  const [theme, setTheme] = useState<ThemeType>(getTheme());
  const [mouseEnter, setMouseEnter] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "christmas" ? "newYear" : "christmas";
    setTheme(newTheme);
    onThemeChange(newTheme);
  };

  return (
    <motion.div
      className="top-4 right-4 z-50 fixed"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <button onClick={toggleTheme} className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-red-600 opacity-60 group-hover:opacity-100 blur rounded-lg transition animate-tilt duration-1000 group-hover:duration-200" />
        <div className="relative flex items-center gap-2 bg-black px-4 py-2 rounded-lg leading-none">
          <span className="text-white">
            {theme === "christmas" ? "🎄" : "🎉"}
          </span>
          <span
            className={`text-sm font-medium bg-clip-text text-transparent ${
              theme === "christmas"
                ? "bg-gradient-to-r from-green-400 to-red-400"
                : "bg-gradient-to-r from-purple-400 to-gold-400"
            }`}
          >
            Switch to {theme === "christmas" ? "New Year" : "Christmas"}
          </span>
        </div>

        {/* Glow effect */}
        {mouseEnter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="-z-10 absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-red-500 opacity-50 blur-xl rounded-lg animate-pulse" />
          </motion.div>
        )}
      </button>
    </motion.div>
  );
};
