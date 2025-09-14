"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import Footer from "./(components)/footer/page";
import Hero from "./(components)/hero/page";
import Projects from "./(components)/projects/page";
import Skills from "./(components)/skills/page";
import Contact from "./(components)/contact/page";
import ScrollToTop from "@/components/scroll-to-top";
import { useEffect, useState } from "react";
import PreLoader from "@/components/preloader";
import Navbar from "./(components)/navigation/page";

const Page = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      // first page load or manual refresh
      const timer = setTimeout(() => {
        setShowPreloader(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowPreloader(false);
    }
  }, []);

  if (showPreloader) {
    return <PreLoader />;
  }

  return (
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
  );
};

export default Page;
