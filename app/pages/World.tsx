"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { Instrument_Serif } from "next/font/google";
import { useAppContext } from "../AppContext";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

gsap.registerPlugin(ScrambleTextPlugin);

export function World() {
  const { place } = useAppContext();
  const tween = useRef<gsap.core.Tween | null>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    tween.current?.kill();

    if (
      place.label !== "world" &&
      !document.getElementById("header")?.classList.contains("fade-out")
    ) {
      document.getElementById("header")?.classList.add("fade-out");
      const placeLabel = document.getElementById("place-label");
      if (placeLabel) {
        placeLabel.innerText = "word";
      }
      tween.current = gsap.to(textRef.current, {
        duration: 1,
        scrambleText: {
          text: place.label,
          speed: 1,
        },
        ease: "none",
      });
    }

    return () => {
      tween.current?.kill();
    };
  }, [place.label]);

  return (
    <section id="world" className={instrument.className + " h-screen"}>
      <div className="flex flex-col z-10 md:w-1/2 md:p-40 p-10 pt-[62vh">
        <div className={"md:text-6xl text-3xl"}>
          <h1 id="header">
            welcome, take a<br></br>glimpse into my{" "}
          </h1>
          <span
            id="place-label"
            key={place.label}
            ref={textRef}
            className={"text-[var(--secondary)]"}
          >
            {place.label}
          </span>
        </div>
        <p key={place.label} className="fade-in-fast md:text-3xl text-xl mt-4">
          {place.description}
        </p>
      </div>
    </section>
  );
}
