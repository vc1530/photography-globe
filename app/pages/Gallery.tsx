import taipeiPhotos from "@/photos/taipei.json";
import Image from "next/image";
import { Instrument_Serif } from "next/font/google";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export function Gallery() {
  return (
    <section className="w-screen bg-inherit">
      <div className="flex flex-col gap-2">
        <h3 className={instrument.className + " text-8xl text-center"}>
          MEMORIES OF TAIPEI
        </h3>
      </div>
      <div className="columns-1 sm:columns-2 gap-10 p-10">
        {taipeiPhotos.map((p, i) => (
          <div key={i} className="break-inside-avoid">
            <Image
              src={p.src}
              alt={`taipei ${i}`}
              width={800}
              height={800}
              className="mb-10 w-full h-auto rounded-lg hover:opacity-25 transition-opacity duration-300 ease-in-out"
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
