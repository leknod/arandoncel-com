import Link from 'next/link';
import { motion } from 'framer-motion';
import CloseIcon from "../icons/CloseIcon";
import InstagramIcon from "../icons/InstagramIcon";
import FlickrIcon from "../icons/FlickerIcon";
import TelegramIcon from "../icons/TelegramIcon";
import EmailIcon from "../icons/EmailIcon";
import { brunoAce } from "@/lib/fonts";

export default function Nav({ onClose }) {
  return(
    <>
      <motion.div
        className="absolute inset-0 bg-black/75 transition-opacity duration-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} />

      <motion.nav
        className={`fixed top-0 right-0 h-dvh w-4/5 px-10 py-10 flex items-end flex-col gap-16 bg-white md:w-72 md:gap-8 md:py-20 ${brunoAce.className} antialiased`}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.4 }}>
        <div>
          <button className="cursor-pointer" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <ul className="flex flex-col gap-4 text-xl font-semibold uppercase text-right md:gap-6">
          <li><Link href={"/"} onClick={onClose}>Home</Link></li>
          <li><Link href={"#about-me"} onClick={onClose}>About Me</Link></li>
          <li><Link href={"#my-work"} onClick={onClose}>My Work</Link></li>
          <li><Link href={"#contact"} onClick={onClose}>Contact</Link></li>
        </ul>
        <div className="flex gap-4 md:hidden">
          <a href="https://www.instagram.com/macrogoshinski/"><InstagramIcon /></a>
          <a href="https://www.flickr.com/photos/24685723@N05/"><FlickrIcon /></a>
          <a href="https://t.me/Goshinski"><TelegramIcon /></a>
          <a href="mailto:arandoncel@gmail.com"><EmailIcon /></a>
        </div>
      </motion.nav>
    </>
  );
}
