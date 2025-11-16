import Image from "next/image";
import HeroSection from "./component/HeroSection";
import NightMares from "./component/NightMares";
import Greetings from "./component/Greetings";
import NeonSectorOverview from "./component/NeonSectorOverview";
import YourProtal from "./component/YourProtal";
import Faq from "./component/Faq";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main>
      <div className="bg-black text-white">
        <HeroSection />
        <NightMares />
        <Greetings />
        <NeonSectorOverview />
        <YourProtal />
        <Faq />
        <Footer />
      </div>
    </main>
  );
}
