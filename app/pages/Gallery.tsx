import taipeiPhotos from "@/photos/taipei.json";
import Image from "next/image";

export function Gallery() {
  return (
    <section className="px-10 h-screen">
      <div className="columns-1 sm:columns-2 md:columns-3 gap-20">
        {taipeiPhotos.map((p, i) => (
          <div key={i} className="mb-20 break-inside-avoid">
            <Image
              src={p.src}
              alt={`taipei ${i}`}
              width={800} // arbitrary placeholder
              height={800} // preserves ratio once loaded
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
