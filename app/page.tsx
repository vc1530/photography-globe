import { GlobeWrapper } from "./pages/GlobeWrapper";
import { Gallery } from "./pages/Gallery";
import { Transition } from "./pages/Transition";

export default function main() {
  return (
    <main id="main" className="w-screen overflow-x-hidden">
      <GlobeWrapper />
      {/* <Transition /> */}
      <Gallery />
    </main>
  );
}
