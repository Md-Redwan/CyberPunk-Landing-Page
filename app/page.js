import Image from "next/image";
import HeroSection from "./component/HeroSection";
import NightMares from "./component/NightMares";

export default function Home() {
  return (
    <main>
      <div>
        <HeroSection />
        <NightMares />
      </div>
    </main>
  );
}
