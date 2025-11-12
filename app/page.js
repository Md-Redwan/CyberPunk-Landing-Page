import Image from "next/image";
import HeroSection from "./component/HeroSection";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto  border-x-2 border-amber-600">
        <HeroSection />
      </div>
    </main>
  );
}
