"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { siteConfig } from "@/config/site";

export function ThemeVars() {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--accent", siteConfig.colors.accent);
    root.style.setProperty("--secondary", siteConfig.colors.secondary);
    root.style.setProperty("--tertiary", siteConfig.colors.tertiary);
    root.style.setProperty(
      "--background",
      theme === "dark" ? "#000000" : "#ffffff"
    );
    root.style.setProperty(
      "--text-color",
      theme === "dark" ? "#ffffff" : "#000000"
    );
  }, [theme]);

  return null;
}
