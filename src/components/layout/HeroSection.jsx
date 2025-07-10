import Image from "next/image";
import Hero from "@/assets/hero.jpg"

export default function HeroSection() {
  return(
    <section className="flex-1 bg-[url('/hero.jpg')] w-full h-full bg-cover bg-center" />
  );
}
