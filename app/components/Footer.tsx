"use client";

import { LocalTime } from "./LocalTime";
import { useAppContext } from "../AppContext";
import { siteConfig } from "@/config/site";
import { Fira_Code } from "next/font/google";

const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export function Footer() {
  const { place } = useAppContext();
  return (
    <footer className="fixed bottom-0 left-0 w-screen md:text-xl z-50 pt-2">
      <span
        className={
          fira.className +
          " flex absolute left-1/2 transform -translate-x-1/2 gap-4"
        }
      >
        <LocalTime
          timeZone={place.timeZone ?? siteConfig.common.homeTimeZone}
        />
        {place.label === "world" ? siteConfig.common.homeCity : place.label}
      </span>
    </footer>
  );
}
