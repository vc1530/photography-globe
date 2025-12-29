import taipeiPhotos from "@/photos/taipei.json";
import Image from "next/image";

export function PhotoAnimation() {
  return (
    <section className="absolute h-screen">
      {taipeiPhotos.map((p, i) => (
        <div key={i} className="relative w-full">
          <Image
            src={p.src}
            alt={`taipei ${i}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </section>
  );
}
