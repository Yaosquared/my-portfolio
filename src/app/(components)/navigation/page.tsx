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
  return (
    <nav className="flex items-center justify-between py-6 z-10">
      <Link href="/">
        <motion.h2
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="text-lg font-bold"
        >
          <Image
            src="/portfolio-logo.svg"
            alt="Logo"
            width={54}
            height={54}
            className="md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20"
          />
        </motion.h2>
      </Link>
      <div className="flex items-center gap-12">
        <ul className="hidden items-center lg:flex text-lg gap-16">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <Link href={nav.url} target={nav.target}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {nav.label}
                </motion.div>
              </Link>
            </li>
          ))}
          <ModeToggle />
        </ul>

        {/* // mobile nav */}
        <div className="lg:hidden">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
