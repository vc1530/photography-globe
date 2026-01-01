"use client";

import { useEffect } from "react";
import taipeiPhotos from "@/photos/taipei.json";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Transition() {
  useEffect(() => {
    const bg = document.getElementById("background");
    if (!bg) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#transition",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Fade in from 0 → 1 in first 25% of scroll
    tl.fromTo(bg, { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1 })
      // Hold fully visible until 75%
      .to(bg, { opacity: 1, scale: 1, duration: 0.5 })
      // Fade out from 75% → 100%
      .to(bg, { opacity: 0, scale: 1.1, duration: 0.25 });
  }, []);

  return (
    <section
      id="transition"
      className="-mt-[100vh] h-[200vh] overflow-y-hidden absolute w-screen overflow-x-hidden z-0"
    >
      <div id="background" className="absolute inset-0">
        <Image
          className="object-cover z-0"
          src={taipeiPhotos[2].src}
          alt="taipei"
          fill
          loading="eager"
        />
      </div>
    </section>
  );
}
