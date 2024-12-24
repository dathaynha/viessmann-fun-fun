import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [snowflakes, setSnowflakes] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateSnowflakes = () => {
      return Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${5 + Math.random() * 10}s`,
            animationDelay: `-${Math.random() * 5}s`,
          }}
        />
      ));
    };

    setSnowflakes(generateSnowflakes());
  }, []);

  return (
    <div className={inter.className}>
      <Component {...pageProps} />
      {snowflakes}
    </div>
  );
}
