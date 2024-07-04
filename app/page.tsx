import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#15181E] pt-[5rem] lg:pt-[10rem] text-white">
        <Hero />
        <About />
        <Menu />
        <Gallery />
    </div>
  );
}
