import Image from "next/image";
import Hero from "@/assets/hero.jpg"

export default function HeroSection() {
  return(
    <section>
      <Image src={Hero} alt="Hero" />
    </section>
  );
}
