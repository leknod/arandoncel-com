import Image from "next/image";
import picture from "@/assets/about-me.jpg";
import { brunoAce } from "@/lib/fonts";

export default function AboutMe() {
  return(
    <section className="py-20 md:flex md:justify-center md:items-center md:gap-20 md:py-24">
      <div className="px-4 mb-16 md:w-96 md:order-2 md:mb-0">
        <span className="block pb-1">hello i'm</span>
        <span className={`block pb-1 text-3xl font-bold uppercase ${brunoAce.className} antialiased`}>Aran Doncel</span>
        <span className="block mb-6 font-bold text-green-700">macro photographer</span>
        <p className="mb-4">I'm a 33-year-old macro photography enthusiast from Spain. For the past decade, I've been exploring the hidden details of the world through my lens — drawn to textures, patterns, and life at a scale most people overlook.</p>
        <p className="mb-4">What started with a spontaneous shot of a grasshopper using a phone quickly turned into an obsession. Over the years, I've evolved from compact cameras to DIY reversed-lens setups, and now shoot with a professional Olympus mirrorless system. My work is all about precision, patience, and revealing the extraordinary in the ordinary.</p>
      </div>
      <div className="md:w-1/4">
        <Image src={picture} alt="about me" className="md:rounded-xl"></Image>
      </div>
    </section>
  );
}
