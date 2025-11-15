import Image from "next/image";
import HeroSection from "./component/HeroSection";
import NightMares from "./component/NightMares";
import Greetings from "./component/Greetings";
import NeonSectorOverview from "./component/NeonSectorOverview";

export default function Home() {
  return (
    <main>
      <div>
        <HeroSection />
        <NightMares />
        <Greetings />
        <NeonSectorOverview />
      </div>
    </main>
  );
}
