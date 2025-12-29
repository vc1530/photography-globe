"use client";

import { LocalTime } from "./LocalTime";
import { useAppContext } from "../AppContext";
import { siteConfig } from "@/config/site";

export function Footer() {
  const { place } = useAppContext();
  return (
    <footer className="h-10 fixed bottom-0 left-0 w-full md:text-xl z-50 bg-inherit pt-2">
      <span className="flex font-fira absolute left-1/2 transform -translate-x-1/2 gap-4">
        <LocalTime
          timeZone={place.timeZone ?? siteConfig.common.homeTimeZone}
        />
        {place.label === "world" ? siteConfig.common.homeCity : place.label}
      </span>
    </footer>
  );
}
