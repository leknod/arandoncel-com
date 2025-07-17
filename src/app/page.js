'use client'
import Header from "@/components/layout/Header";
import HeroSection from "@/components/layout/HeroSection";
import AboutMe from "@/components/layout/AboutMe";
import MyWork from "@/components/layout/MyWork";
import Contact from "@/components/layout/Contact";
import Footer from "@/components/layout/Footer";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        >
        <Header />
        <HeroSection />
      </motion.div>
      <AboutMe />
      <MyWork />
      <Contact />
      <Footer />
    </>
  );
}
