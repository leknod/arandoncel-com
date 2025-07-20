'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { brunoAce } from '@/lib/fonts';
import { CloseIcon, InstagramIcon, FlickrIcon, TelegramIcon, EmailIcon } from '@/components/icons';

export default function Menu({ onClose }) {
  return(
    <>
      <motion.div
        className="fixed inset-0 z-40 bg-black/75 transition-opacity duration-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} />

      <motion.aside
        className={`fixed top-0 right-0 z-50 flex flex-col justify-between items-end md:gap-8 w-4/5 md:w-72 px-10 py-10 md:py-20 h-dvh ${brunoAce.className} antialiased bg-white`}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.4 }}>
        <div className="flex flex-col gap-16">
          <div className="flex justify-end">
            <button className="cursor-pointer" onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
          <nav>
            <ul className="flex flex-col gap-4 md:gap-6 text-right text-xl font-semibold uppercase">
              <li><Link href={"#home"} onClick={onClose}>Home</Link></li>
              <li><Link href={"#about-me"} onClick={onClose}>About Me</Link></li>
              <li><Link href={"#my-work"} onClick={onClose}>My Work</Link></li>
              <li><Link href={"#contact"} onClick={onClose}>Contact</Link></li>
            </ul>
          </nav>
          <div className="flex md:hidden gap-4">
            <a href="https://www.instagram.com/macrogoshinski/"><InstagramIcon /></a>
            <a href="https://www.flickr.com/photos/24685723@N05/"><FlickrIcon /></a>
            <a href="https://t.me/Goshinski"><TelegramIcon /></a>
            <a href="mailto:arandoncel@gmail.com"><EmailIcon /></a>
          </div>
        </div>
        <a href="https://coff.ee/macrogoshinski" target="_blank">
          <p className="text-right">Buy me a ☕ if you'd like to support what I do!</p>
        </a>
      </motion.aside>
    </>
  );
}
