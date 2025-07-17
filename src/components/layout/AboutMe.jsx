import Image from "next/image";
import picture from "@/assets/about-me.jpg";
import { brunoAce } from "@/lib/fonts";

export default function AboutMe() {
  return(
    <section id="about-me" className="py-20 md:flex md:justify-center md:items-center md:gap-20 md:py-24">
      <div className="px-4 mb-16 md:w-96 md:order-2 md:mb-0">
        <span className="block pb-1">hello i'm</span>
        <span className={`block pb-1 text-3xl font-bold uppercase ${brunoAce.className} antialiased`}>Aran Doncel</span>
        <span className="block mb-6 font-bold text-green-700">macro photographer</span>
        <p className="mb-4">For the past decade, I’ve been exploring the hidden details of the world through my lens — drawn to textures, patterns, and life at a scale most people overlook. It all started with a spontaneous photo of a grasshopper taken with a phone, and that simple moment sparked a deep interest in macro photography.</p>
        <p className="mb-4">From there, I moved through different phases: a compact camera, then experimenting with reversed lenses on a DSLR — learning to build my own setups, control lighting, and work with razor-thin focus. Each step pushed me to be more precise and more patient.</p>
        <p className="mb-4">Today, I shoot with a professional Olympus mirrorless system, which allows me to capture the kind of detail and clarity I always chased. My work is all about revealing the extraordinary in the ordinary — turning everyday subjects into something worth pausing for.</p>
      </div>
      <div className="md:w-124">
        <Image src={picture} alt="about me" className="md:rounded-xl md:shadow-2xl shadow-black"></Image>
      </div>
    </section>
  );
}
