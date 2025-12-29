"use client";
import { createContext, useContext, useState, useRef, Ref } from "react";
import { siteConfig } from "@/config/site";

export interface IPlace {
  label: string;
  lat?: number;
  lng?: number;
  description?: string;
  countryCode?: string;
  timeZone?: string;
  type?: string;
}

const PlaceInit = {
  label: "world",
  description: "spin the globe and choose a pin to get started.",
  timeZone: siteConfig.common.homeTimeZone,
};

type AppState = {
  place: IPlace;
  setPlace: (place: IPlace) => void;
  mounted: boolean;
  setMounted: (mounted: boolean) => void;
};

const AppContext = createContext<AppState | null>(null);

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [place, setPlace] = useState<IPlace>(PlaceInit);
  const [mounted, setMounted] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ place, setPlace, mounted, setMounted }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within AppProviders");
  return ctx;
}
