import Image from "next/image";
import HeroSection from "./component/HeroSection";
import NightMares from "./component/NightMares";
import Greetings from "./component/Greetings";
import NeonSectorOverview from "./component/NeonSectorOverview";
import YourProtal from "./component/YourProtal";
import Faq from "./component/Faq";

export default function Home() {
  return (
    <main>
      <div>
        <HeroSection />
        <NightMares />
        <Greetings />
        <NeonSectorOverview />
        <YourProtal />
        <Faq />
      </div>
    </main>
  );
}
