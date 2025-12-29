"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";
import { siteConfig } from "@/config/site";
import { Instrument_Serif } from "next/font/google";
import { IPlace, useAppContext } from "../AppContext";
import {
  Country,
  State,
  City,
  ICity,
  ICountry,
  IState,
} from "country-state-city";
import { COUNTRY_TZ_MAP, PIN_TYPE } from "../constants";
import { GlobeInstance } from "globe.gl";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function GlobeLoader() {
  const globeInstance = useRef<GlobeInstance>(null);
  const { theme } = useTheme();
  const { setPlace, setMounted } = useAppContext();

  const [pins, setPins] = useState<IPlace[] | null>(null);

  function getCoordinatesMap(places: ICity[] | ICountry[] | IState[]) {
    const coordinatesMap: Record<string, { lat: number; lng: number }> = {};
    places.forEach((p) => {
      const { name, latitude, longitude } = p;
      let key;
      if ("countryCode" in p) {
        key = name.toUpperCase() + "+" + p.countryCode.toUpperCase();
      } else {
        key = name.toUpperCase() + "+" + p.isoCode.toUpperCase();
      }
      coordinatesMap[key] = { lat: Number(latitude), lng: Number(longitude) };
    });
    return coordinatesMap;
  }

  //get pins data
  useEffect(() => {
    //create a map of all coordinates for faster search
    const cityMap: Record<string, { lat: number; lng: number }> =
      getCoordinatesMap(City.getAllCities());
    const stateMap: Record<string, { lat: number; lng: number }> =
      getCoordinatesMap(State.getAllStates());
    const countryMap: Record<string, { lat: number; lng: number }> =
      getCoordinatesMap(Country.getAllCountries());

    const fetchedPins: IPlace[] = [];

    siteConfig.pins.forEach((p: IPlace) => {
      const { label, countryCode } = p;
      const key = label.toUpperCase() + "+" + countryCode?.toUpperCase();
      let coordinatesMap;

      switch (p.type) {
        case PIN_TYPE.CITY:
          coordinatesMap = cityMap;
          break;
        case PIN_TYPE.STATE:
          coordinatesMap = stateMap;
          break;
        case PIN_TYPE.COUNTRY:
          coordinatesMap = countryMap;
          break;
        default:
          coordinatesMap = cityMap;
          break;
      }

      const { lat, lng } = coordinatesMap[key];

      //geo-tz doesn't work for a select few timezones
      //so we predefine those
      if (countryCode && COUNTRY_TZ_MAP[countryCode]) {
        fetchedPins.push({
          ...p,
          ...coordinatesMap[key],
          timeZone: COUNTRY_TZ_MAP[countryCode],
        });
      } else {
        fetch(`/api/timezones?lat=${lat}&lon=${lng}`)
          .then((res) => res.json())
          .then((data) => {
            fetchedPins.push({
              ...p,
              ...coordinatesMap[key],
              timeZone: data.timezone,
            });
          })
          .catch(console.error);
      }
    });

    setPins(fetchedPins);
  }, []);

  useEffect(() => {
    if (!document.getElementById("globe-container")) return;

    (async () => {
      const Globe = (await import("globe.gl")).default;
      const res = await fetch("/data/countries.geojson");
      const countries = await res.json();

      const backgroundColor = window
        .getComputedStyle(document.body)
        .getPropertyValue("background-color");

      const textColor = window
        .getComputedStyle(document.body)
        .getPropertyValue("color");

      const mm = window.matchMedia("(min-width: 768px)");
      const alt = mm.matches ? 2.2 : 3.2;

      globeInstance.current = new Globe(
        document.getElementById("globe-container")!
      )
        .backgroundColor("rgba(0,0,0,0)")
        .globeMaterial(
          new THREE.MeshBasicMaterial({
            color: backgroundColor,
            transparent: true,
            opacity: 0.75,
          })
        )
        .atmosphereColor(siteConfig.colors.accent)
        .atmosphereAltitude(0.2)
        .polygonsData(countries.features)
        .polygonCapColor("rgba(0,0,0,0)")
        .polygonSideColor(() => "rgba(0,0,0,0)")
        .polygonStrokeColor(() => textColor)
        .pointOfView({ lat: 20, lng: 0, altitude: alt })
        .htmlElementsData(pins as object[])
        .htmlAltitude(() => 0.02)
        .htmlElement((p: object) => {
          const el = document.createElement("div");
          const elClasses = [
            "relative",
            "flex",
            "justify-center",
            "pointer-events-auto",
            "cursor-pointer",
          ];
          el.classList.add(...elClasses);

          el.onmouseenter = () => {
            label.classList.add("border-[var(--accent)]");
          };
          el.onmouseleave = () => {
            label.classList.remove("border-[var(--accent)]");
          };
          el.onclick = () => {
            setPlace(p as IPlace);
          };

          const pin = document.createElement("span");

          pin.innerText = "📍";
          const pinClasses = ["text-xl", "absolute", "-translate-y-1"];
          pin.classList.add(...pinClasses);

          const label = document.createElement("div");
          label.innerText = (p as IPlace).label;
          const labelClasses = [
            instrument.className,
            "h-8",
            "p-1",
            "border-1",
            "rounded",
            "-translate-y-10",
            "bg-[var(--background)]",
            "z-100",
            "pointer-events-none",
          ];
          label.classList.add(...labelClasses);

          el.appendChild(pin);
          el.appendChild(label);
          return el;
        });

      const controls = globeInstance.current.controls();
      controls.enableZoom = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.3;

      setMounted(true);
    })();
  }, [pins, setPlace, setMounted]);

  //theme change
  useEffect(() => {
    if (!globeInstance.current) return;

    const isDarkMode = theme === "dark";

    const backgroundColor = isDarkMode ? "#000000" : "#FFFFFF";
    const textColor = isDarkMode ? "#FFFFFF" : "#000000";

    globeInstance.current
      .globeMaterial(
        new THREE.MeshBasicMaterial({
          color: backgroundColor,
          transparent: true,
          opacity: 0.75,
        })
      )
      .polygonStrokeColor(() => textColor);
  }, [theme]);

  return (
    <div id="globe-container" className="z-1 relative w-full h-screen"></div>
  );
}
