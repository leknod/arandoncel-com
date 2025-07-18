'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { brunoAce } from '@/lib/fonts';
import Logo from '@/assets/logo2.jpg';
import { InstagramIcon, FlickrIcon, TelegramIcon, EmailIcon, MenuIcon } from '@/components/icons'
import Menu from './Menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
  if (isMenuOpen) {
    document.body.classList.add("overflow-hidden");
    document.documentElement.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
    document.documentElement.classList.remove("overflow-hidden");
  }

  return () => {
    document.body.classList.remove("overflow-hidden");
    document.documentElement.classList.remove("overflow-hidden");
  };
}, [isMenuOpen]);

  return (
    <>
      <motion.header
        id="home"
        className={`sticky top-0 h-16 flex justify-between items-center pl-4 pr-6 py-4 bg-white shadow-md lg:shadow-lg z-40 md:px-10 md:py-2 ${brunoAce.className} antialiased`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="gap-4 hidden md:flex">
          <a href="https://www.instagram.com/macrogoshinski/"><InstagramIcon /></a>
          <a href="https://www.flickr.com/photos/24685723@N05/"><FlickrIcon /></a>
          <a href="https://t.me/Goshinski"><TelegramIcon /></a>
          <a href="mailto:arandoncel@gmail.com"><EmailIcon /></a>
        </div>
        <div className="flex flex-row items-center gap-2 md:gap-4">
          <Image src={Logo} alt="Logo" className="w-15 md:hidden"/>
          <span className="uppercase font-bold md:hidden">Aran Doncel</span>

          <motion.span
            className="uppercase font-bold hidden md:block"
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 2 }}>
              Aran Doncel
          </motion.span>
          <motion.div
          className="w-15 hidden md:block md:w-20"
          initial={{ opacity: 0, y: -75 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}>
            <Image src={Logo} alt="Logo"/>
          </motion.div>
          <motion.span
            className="uppercase font-bold hidden md:block"
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 2 }}>
              Photography
          </motion.span>
        </div>
        <button className="flex gap-2 cursor-pointer pl-10" onClick={() => setIsMenuOpen(true)}>
          <span className="uppercase font-bold hidden md:block">Menu</span>
          <MenuIcon />
        </button>
      </motion.header>
      <AnimatePresence>
        {isMenuOpen && (<Menu onClose={() => setIsMenuOpen(false)} />)}
      </AnimatePresence>
    </>
  );
}