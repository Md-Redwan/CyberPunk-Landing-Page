import Image from "next/image";
import HeroSection from "./component/HeroSection";
import NightMares from "./component/NightMares";
import Greetings from "./component/Greetings";

export default function Home() {
  return (
    <main>
      <div>
        <HeroSection />
        <NightMares />
        <Greetings />
      </div>
    </main>
  );
}
