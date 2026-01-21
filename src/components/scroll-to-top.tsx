"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDropupCircle } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scroll = () => {
    window.scrollTo({ top: 0 });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="fixed bottom-0 right-0 m-6 z-10"
    >
      <IoIosArrowDropupCircle
        onClick={scroll}
        size={64}
        className="hover:cursor-pointer"
      />
    </motion.div>
  );
};
export default ScrollToTop;
