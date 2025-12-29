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
    if (mm.matches) {
      gsap.to(globeRef.current, {
        x: "20vw",
        ease: "none",
        scrollTrigger: {
          trigger: "#scroll-container",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    } else {
      gsap.to(globeRef.current, {
        y: "-25vw",
        ease: "none",
        scrollTrigger: {
          trigger: "#scroll-container",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section id="scroll-container">
      <div ref={globeRef} className="fixed top-0 transform z-0">
        <GlobeLoader />
      </div>
      <Home />
      <World />
    </section>
  );
}
