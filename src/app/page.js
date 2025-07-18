'use client'
import { Header, HeroSection, AboutMe, MyWork, Contact, Footer } from '@/components/layout'
import { ReactLenis } from 'lenis/react'

export default function Home() {
  return (
    <>
      <ReactLenis root />
      <Header />
      <HeroSection />
      <AboutMe />
      <MyWork />
      <Contact />
      <Footer />
    </>
  );
}
