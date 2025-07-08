import Header from "@/components/layout/Header";
import HeroSection from "@/components/layout/HeroSection";
import AboutMe from "@/components/layout/AboutMe";
import Gallery from "@/components/layout/Gallery";
import Contact from "@/components/layout/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMe />
      <Gallery />
      <Contact />
    </>
  );
}
