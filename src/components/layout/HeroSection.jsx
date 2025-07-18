import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Sign from '@/assets/sign.png';
import { ScrollDownIcon } from '@/components/icons/';

export default function HeroSection() {
  return(
    <>
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute w-full h-[calc(100dvh-64px)] bg-black/50" />
        <div className="w-full h-[calc(100dvh-64px)] flex flex-col items-center pb-4 bg-[url('/images/hero3.jpg')] md:bg-[url('/images/hero2.jpg')] bg-cover bg-center">
          <Image src={Sign} alt="Sign of Aran Doncel" className="w-50 md:w-100 my-auto z-30 select-none pointer-events-none"/>
          <Link href={"#about-me"}><ScrollDownIcon /></Link>
        </div>
      </motion.section>
    </>
  );
}
