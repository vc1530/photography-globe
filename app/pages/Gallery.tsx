import taipeiPhotos from "@/photos/taipei.json";
import Image from "next/image";

export function Gallery() {
  return (
    <section className="h-screen bg-inherit">
      <div className="columns-1 sm:columns-2 gap-10 p-10">
        {taipeiPhotos.map((p, i) => (
          <div key={i} className="break-inside-avoid">
            <Image
              src={p.src}
              alt={`taipei ${i}`}
              width={800} // arbitrary placeholder
              height={800} // preserves ratio once loaded
              className="mb-10 w-full h-auto rounded-lg"
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
