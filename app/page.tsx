import { GlobeWrapper } from "./pages/GlobeWrapper";
import { Gallery } from "./pages/Gallery";
import { Transition } from "./pages/Transition";

export default function main() {
  return (
    <main className="snap-y snap-mandatory">
      <GlobeWrapper />
      <Transition />
      <Gallery />
    </main>
  );
}
