import { Hero, AboutMe, MyWork, Contact } from '@/components/layout'
// import { ReactLenis } from 'lenis/react'

export default function Home() {
  return (
    <>
      {/* <ReactLenis root /> */}
      <Hero />
      <AboutMe />
      <MyWork />
      <Contact />
    </>
  );
}
