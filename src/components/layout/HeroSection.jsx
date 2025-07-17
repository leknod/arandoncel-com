import Image from "next/image";
import Sign from '@/assets/sign.png';
import ScrollDownIcon from "../icons/ScrollDownIcon";

export default function HeroSection() {
  return(
    <>
      <div className="absolute w-full h-[calc(100dvh-64px)] bg-black/50" />
      <section className="flex-1 w-full h-[calc(100dvh-64px)] flex flex-col items-center pb-4 bg-[url('/images/hero.jpg')] bg-cover bg-center">
        <Image src={Sign} alt="Sign of Aran Doncel" className="w-100 my-auto z-30"/>
        <ScrollDownIcon />
      </section>
    </>
  );
}
