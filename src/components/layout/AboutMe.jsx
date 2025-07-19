import Image from 'next/image';
import picture from '@/assets/about-me.jpg';
import { brunoAce } from '@/lib/fonts';

export default function AboutMe() {
  return(
    <section id="about-me" className="lg:flex lg:justify-center lg:items-center lg:gap-20 py-20 lg:py-24">
      <div className="px-4 mb-16 lg:mb-0 lg:w-96 lg:order-2 ">
        <span className="block pb-1">hello i'm</span>
        <span className={`block pb-1 text-3xl font-bold uppercase ${brunoAce.className} antialiased`}>Aran Doncel</span>
        <span className="block mb-6 font-bold text-green-700">macro photographer</span>
        <p className="mb-4">For the past decade, I’ve been exploring the hidden details of the world through my lens — drawn to textures, patterns, and life at a scale most people overlook. It all started with a spontaneous photo of a grasshopper taken with a phone, and that simple moment sparked a deep interest in macro photography.</p>
        <p className="mb-4">From there, I moved through different phases: a compact camera, then experimenting with reversed lenses on a DSLR — learning to build my own setups, control lighting, and work with razor-thin focus. Each step pushed me to be more precise and more patient.</p>
        <p className="mb-4">Today, I shoot with a professional Olympus mirrorless system, which allows me to capture the kind of detail and clarity I always chased. My work is all about revealing the extraordinary in the ordinary — turning everyday subjects into something worth pausing for.</p>
      </div>
      <div className="px-4 lg:px-0 lg:w-124">
        <Image src={picture} alt="about me" className="rounded-xl shadow-2xl shadow-black"></Image>
      </div>
    </section>
  );
}
