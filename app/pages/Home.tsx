import { siteConfig } from "@/config/site";
import Counter from "@/app/components/Counter";
import { Instrument_Serif } from "next/font/google";
import { useAppContext } from "../AppContext";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export function Home() {
  const { mounted } = useAppContext();

  return (
    <section
      id="home"
      className={instrument.className + " h-screen w-screen -mt-[100vh]"}
    >
      {mounted && (
        <div className="h-full w-full flex flex-col items-center justify-center">
          <h3 className="fade-in md:text-5xl text-3xl z-10">
            so far, i&#39;ve been to
          </h3>
          <h1 className="text-9xl z-10 text-center">
            <Counter
              end={13}
              duration={1}
              colors={Object.values(siteConfig.colors)}
            />{" "}
            <span className="fade-in">countries</span>
          </h1>
          <h3 className="fade-in md:text-5xl text-3xl z-10">
            here&#39;s what they looked like through my eyes
          </h3>
        </div>
      )}
    </section>
  );
}
