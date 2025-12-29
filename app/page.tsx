import { GlobeWrapper } from "./pages/GlobeWrapper";
import { Gallery } from "./pages/Gallery";

export default function main() {
  return (
    <main className="snap-y snap-mandatory">
      <GlobeWrapper />
      <Gallery />
    </main>
  );
}
