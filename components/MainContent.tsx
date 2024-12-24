"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { SparklesCore } from "@/components/ui/sparkles";
import {
  TreesIcon as ChristmasTree,
  Gift,
  Snowflake,
  Star,
  Sparkles,
  Music,
  Heart,
} from "lucide-react";
import { getTheme, themeConfig } from "@/utils/theme";

interface MainContentProps {
  theme: "christmas" | "newYear";
}

const teamMembers = [
  {
    name: "Bharath",
    role: "PM",
    image: "/images/team/Bharath.jpg",
    note: "Thank you for your exceptional leadership and guidance throughout the year.",
    description:
      "Leading with vision and empowering the team to achieve excellence.",
    achievements: [
      "Successful project deliveries",
      "Team growth",
      "Strategic planning",
    ],
    funFact: "Always starts the day with a cup of masala chai ☕",
  },
  {
    name: "Sebastian",
    role: "SA",
    image: "/images/team/Sebastian.jpg",
    note: "Your architectural insights have been invaluable to our projects.",
    description:
      "Crafting robust and scalable solutions with architectural expertise.",
    achievements: [
      "System optimization",
      "Technical leadership",
      "Innovation driver",
    ],
    funFact: "Can debug complex issues while playing chess ♟️",
  },
  {
    name: "Tung & DA",
    role: "Old DevOps",
    image: "/images/team/Tung&DA.jpg",
    note: "Your DevOps wizardry has kept our systems running smoothly.",
    description: "Masters of automation and infrastructure optimization.",
    achievements: [
      "CI/CD pipeline improvements",
      "System reliability",
      "Zero downtime",
    ],
    funFact: "The dynamic duo of deployment magic 🚀",
  },
  {
    name: "Tung & Son",
    role: "DevOps Lead",
    image: "/images/team/Tung&Son.jpg",
    note: "Congratulations on your new addition to the family!",
    description: "Balancing work excellence with family joy.",
    achievements: ["Work-life harmony", "Team support", "Continuous growth"],
    funFact: "New parent superheroes 👶",
  },
  {
    name: "Son",
    role: "New DevOps",
    image: "/images/team/Son.jpg",
    note: "Welcome to the DevOps team!",
    description: "Bringing fresh energy and innovative ideas to DevOps.",
    achievements: [
      "Quick learning",
      "Process improvements",
      "Team collaboration",
    ],
    funFact: "Already automated his coffee breaks ⚡",
  },
  {
    name: "Tuan",
    role: "New DevOps",
    image: "/images/team/Tuan.jpg",
    note: "Your quick learning and adaptability have been remarkable.",
    description: "Rapidly mastering DevOps practices with enthusiasm.",
    achievements: [
      "System monitoring",
      "Infrastructure management",
      "Quick solutions",
    ],
    funFact: "Dreams in YAML 💭",
  },
  {
    name: "Dang",
    role: "BE",
    image: "/images/team/Dang.jpg",
    note: "Your backend expertise has been crucial to our success. Thank you for your hard work.",
    description:
      "Building robust and scalable backend solutions with precision.",
    achievements: [
      "API optimization",
      "Database management",
      "System architecture",
    ],
    funFact: "Can write SQL queries in his sleep 💻",
  },
  {
    name: "Tri",
    role: "BE",
    image: "/images/team/Tri.jpg",
    note: "Your contributions to our backend systems have been outstanding. We're grateful for your dedication.",
    description:
      "Crafting efficient backend solutions with attention to detail.",
    achievements: [
      "Performance optimization",
      "Code quality",
      "Technical documentation",
    ],
    funFact: "Debugs better with coffee ☕",
  },
  {
    name: "Dat",
    role: "FE",
    image: "/images/team/Dat.jpg",
    note: "Your frontend skills have brought our designs to life beautifully. Thank you for your creativity and attention to detail.",
    description:
      "Creating engaging user experiences with modern web technologies.",
    achievements: [
      "UI/UX implementation",
      "Performance optimization",
      "Component architecture",
    ],
    funFact: "Pixel-perfect vision 👀",
  },
];

const Decoration = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => (
  <motion.div
    className={`absolute text-red-500 ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

export default function MainContent({ theme }: MainContentProps) {
  const { gradient, primaryColor, secondaryColor, emoji, title } =
    themeConfig[theme];

  return (
    <TracingBeam>
      <div className="snap-mandatory snap-y w-full h-screen overflow-y-scroll">
        <div className="relative flex justify-center items-center snap-start w-full h-screen">
          <div className="absolute inset-0 w-full h-full">
            <SparklesCore
              id="tsparticles"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#fff"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="z-10 text-center"
          >
            <h1
              className={`font-bold text-6xl ${
                theme === "christmas"
                  ? "bg-gradient-to-r from-green-400 to-red-400"
                  : "bg-gradient-to-r from-purple-400 to-gold-400"
              } bg-clip-text text-transparent animate-gradient`}
            >
              {title} {emoji}
            </h1>
            <motion.p
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mt-4 text-green-400 text-xl"
            >
              Scroll down to meet our team ↓
            </motion.p>
          </motion.div>
        </div>

        <div className="relative w-full">
          <Decoration className="top-60 left-0">
            <ChristmasTree size={40} />
          </Decoration>
          <Decoration className="top-60 right-0">
            <Star size={40} />
          </Decoration>
          <Decoration className="bottom-60 left-0">
            <Gift size={40} />
          </Decoration>
          <Decoration className="right-60 bottom-60">
            <Snowflake size={40} />
          </Decoration>

          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="flex justify-center items-center px-4 snap-start w-full h-screen"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full max-w-4xl"
              >
                <BackgroundGradient className="flex md:flex-row flex-col gap-6 bg-white/10 dark:bg-zinc-900/10 p-8 rounded-[22px]">
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative mx-auto w-48 h-48"
                    >
                      <Image
                        src={member.image}
                        alt={`${member.name}'s portrait`}
                        fill
                        className="rounded-full object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-orange-500/20 rounded-full animate-pulse" />
                    </motion.div>

                    <motion.h2
                      whileHover={{ scale: 1.05 }}
                      className="bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500 mt-6 font-bold text-3xl text-center text-transparent"
                    >
                      {member.name}
                    </motion.h2>

                    {member.role && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-2 font-medium text-center text-emerald-400 text-lg"
                      >
                        {member.role}
                      </motion.p>
                    )}
                  </div>

                  <div className="flex-1 space-y-6">
                    <div className="relative">
                      <SparklesCore
                        id="tsparticles"
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={100}
                        className="absolute inset-0"
                        particleColor="#fff"
                      />
                      <p className="relative z-10 text-white/90 leading-relaxed">
                        {member.note}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <p className="text-sm text-white/70">
                        {member.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.achievements?.map((achievement, i) => (
                          <span
                            key={i}
                            className="bg-white/10 px-2 py-1 rounded-full text-white/80 text-xs"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/5 p-3 rounded-lg text-sm text-white/60"
                      >
                        {member.funFact}
                      </motion.div>
                    </div>
                  </div>
                </BackgroundGradient>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </TracingBeam>
  );
}
