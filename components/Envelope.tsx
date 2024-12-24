import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/public/images/team/logo.svg";
import { getTheme, themeConfig } from "@/utils/theme";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const theme = getTheme();
  const bgColor = theme === "christmas" ? "bg-red-600" : "bg-purple-600";
  const borderColor =
    theme === "christmas" ? "border-t-red-700" : "border-t-purple-700";

  return (
    <div
      className={`relative ${bgColor} shadow-xl rounded-lg w-64 h-48 transition-transform duration-300 cursor-pointer overflow-hidden hover:scale-105`}
      onClick={onOpen}
    >
      <div className="absolute inset-0">
        <div className="top-2 left-2 absolute animate-twinkle">✨</div>
        <div className="top-2 right-2 absolute animate-twinkle delay-75">
          ✨
        </div>
        <div className="bottom-2 left-2 absolute animate-twinkle delay-150">
          ✨
        </div>
        <div className="right-2 bottom-2 absolute animate-twinkle delay-200">
          ✨
        </div>

        <div className="top-4 left-1/4 absolute animate-bounce delay-100">
          🎄
        </div>
        <div className="top-6 right-1/4 absolute animate-bounce delay-300">
          ⛄
        </div>
        <div className="bottom-6 left-1/3 absolute animate-spin-slow">❄️</div>
        <div className="right-1/3 bottom-8 absolute animate-spin-slow delay-150">
          ❄️
        </div>
        <div className="top-1/2 left-4 absolute animate-pulse">🎁</div>
        <div className="top-1/2 right-4 absolute animate-pulse delay-200">
          🎁
        </div>
      </div>

      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src={logo}
          alt="Company logo"
          width={100}
          height={100}
          className="bg-white mt-10 p-2 rounded-md transition-transform duration-300 hover:scale-105 object-contain"
          unoptimized={false}
        />
      </div>

      <div
        className={`top-0 left-0 absolute border-t-[96px] ${borderColor} border-l-[128px] border-l-transparent w-0 h-0 transition-transform hover:rotate-3`}
      />
      <div
        className={`top-0 right-0 absolute border-t-[96px] ${borderColor} border-r-[128px] border-r-transparent w-0 h-0 transition-transform hover:-rotate-3`}
      />
    </div>
  );
}
