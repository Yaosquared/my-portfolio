"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "@/components/mode-togler";
import { navLinks } from "@/lib/data";

const Navbar = () => {
  // Define the staggered animation properties
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <nav className="flex items-center justify-between py-6 z-10">
      <Link href="/">
        <motion.h2
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="text-lg font-bold"
        >
          <motion.div variants={imageVariant} initial="hidden" animate="show">
            <Image
              src="/portfolio-logo.svg"
              alt="Logo"
              width={54}
              height={54}
              className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-19 xl:h-19"
            />
          </motion.div>
        </motion.h2>
      </Link>
      <div className="flex items-center gap-12">
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="hidden items-center lg:flex text-lg gap-16"
        >
          {navLinks.map((nav, index) => (
            <motion.li key={index} variants={item}>
              <Link href={nav.url} target={nav.target}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {nav.label}
                </motion.div>
              </Link>
            </motion.li>
          ))}
          <motion.div variants={item}>
            <ModeToggle />
          </motion.div>
        </motion.ul>

        {/* // mobile nav */}
        <motion.div
          className="lg:hidden"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Sheet>
              <SheetTrigger>
                <FiMenu size={20} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription>
                    <ul className="flex flex-col text-lg gap-4 mt-12">
                      {navLinks.map((nav, index) => (
                        <li key={index}>
                          <Link target={nav.target} href={nav.url}>
                            {nav.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
