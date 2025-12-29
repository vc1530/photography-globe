"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Home } from "./Home";
import { World } from "./World";
import GlobeLoader from "@/app/components/GlobeLoader";

gsap.registerPlugin(ScrollTrigger);

export function GlobeWrapper() {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const mm = window.matchMedia("(min-width: 768px)");
    gsap.to(globeRef.current, {
      x: mm.matches ? "20vw" : 0,
      y: mm.matches ? "100vh" : "-25vh",
      ease: "none",
      scrollTrigger: {
        trigger: "#scroll-container",
        start: "top top",
        end: "+=100%",
        scrub: true,
        onUpdate: (self) => {
          const worldText = document.getElementById("world-text");
          if (!worldText) {
            return;
          }
          if (self.progress === 1) {
            worldText.classList.add("fixed");
          } else {
            worldText.classList.remove("fixed");
          }
        },
      },
    });
  }, []);

  return (
    <section
      id="scroll-container"
      className="h-[200vh] overflow-x-hidden w-screen"
    >
      {" "}
      <div ref={globeRef} className="sticky top-0 transform z-0">
        <GlobeLoader />
      </div>
      <Home />
      <World />
    </section>
  );
}
