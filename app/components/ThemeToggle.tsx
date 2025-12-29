"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import moon from "@/public/moon.png";
import sun from "@/public/sun.png";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showSun, setShowSun] = useState(resolvedTheme === "light");

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
    setShowSun((prev) => !prev);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="w-16 h-16 flex items-center justify-center z-10"
      onClick={toggleTheme}
    >
      <Image
        className={
          (showSun ? "opacity-100" : "opacity-0") +
          " transition-all absolute duration-500 w-16 aspect-square"
        }
        src={sun}
        alt="sun"
      />
      <Image
        className={
          (!showSun ? "opacity-100" : "opacity-0") +
          " transition-all absolute duration-500 w-16 aspect-square"
        }
        loading="eager"
        src={moon}
        alt="moon"
      />
    </div>
  );
}
