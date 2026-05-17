"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import Footer from "./(components)/footer/page";
import Hero from "./(components)/hero/page";
import Projects from "./(components)/projects/page";
import Skills from "./(components)/skills/page";
import Contact from "./(components)/contact/page";
import ScrollToTop from "@/components/scroll-to-top";
import PreLoader from "@/components/preloader";
import Navbar from "./(components)/navigation/page";

const Page = () => {
  return (
    <>
      <PreLoader />
      <main>
        <Navbar />
        <div>
          <BackgroundBeams className="z-[-1]" />
          <Hero />
        </div>
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTop />
        <Footer />
      </main>
    </>
  );
};

export default Page;
