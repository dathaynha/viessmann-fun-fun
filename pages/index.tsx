import { useState, useEffect } from "react";
import Envelope from "@/components/Envelope";
import MainContent from "@/components/MainContent";
import ChristmasScene from "@/components/christmas-scene";
import ChristmasMusic from "@/components/ChristmasMusic";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { getTheme, themeConfig } from "@/utils/theme";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    // Clean up previous audio
    if (audio) {
      audio.pause();
      audio.src = "";
    }

    // Create new audio with current theme
    const audioElement = new Audio(themeConfig[theme].music);
    audioElement.loop = true;
    setAudio(audioElement);

    // If it was playing before, start playing the new audio
    if (isPlaying) {
      audioElement.play().catch(console.error);
    }
  }, [theme]);

  const handleOpen = () => {
    setIsOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleThemeChange = (newTheme: "christmas" | "newYear") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <main
      className={`relative flex justify-center items-center w-full min-h-screen ${
        theme === "christmas"
          ? "bg-gradient-to-b from-green-900 to-red-900"
          : "bg-gradient-to-b from-purple-900 to-slate-900"
      }`}
    >
      <ChristmasScene />
      <ChristmasMusic
        audio={audio}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <ThemeSwitcher onThemeChange={handleThemeChange} />
      <div className="z-10 flex justify-center items-center w-full min-h-screen">
        {isOpen ? (
          <MainContent theme={theme} />
        ) : (
          <Envelope onOpen={handleOpen} />
        )}
      </div>
    </main>
  );
}
