"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const isAchievementsRoute = pathname === "/achievements";

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
          whileHover={!isAchievementsRoute ? { scale: 1.03 } : {}}
          whileTap={!isAchievementsRoute ? { scale: 0.95 } : {}}
          className="text-lg font-bold"
        >
          <motion.div
            variants={!isAchievementsRoute ? imageVariant : {}}
            initial={!isAchievementsRoute ? "hidden" : false}
            animate={!isAchievementsRoute ? "show" : false}
          >
            <Image
              src="/ysqrd-logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="w-12 h-12 md:w-16 md:h-16 lg:w-14 lg:h-14 xl:w-19 xl:h-19"
            />
          </motion.div>
        </motion.h2>
      </Link>
      <div className="flex items-center gap-12">
        <motion.ul
          variants={!isAchievementsRoute ? container : {}}
          initial={!isAchievementsRoute ? "hidden" : false}
          animate={!isAchievementsRoute ? "show" : false}
          className="hidden items-center lg:flex text-lg gap-16"
        >
          {navLinks.map((nav, index) => (
            <motion.li key={index} variants={!isAchievementsRoute ? item : {}}>
              <Link href={nav.url} target={nav.target}>
                <motion.div
                  whileHover={!isAchievementsRoute ? { scale: 1.03 } : {}}
                  whileTap={!isAchievementsRoute ? { scale: 0.95 } : {}}
                >
                  {nav.label}
                </motion.div>
              </Link>
            </motion.li>
          ))}
          <motion.div variants={!isAchievementsRoute ? item : {}}>
            <ModeToggle />
          </motion.div>
        </motion.ul>

        {/* // mobile nav */}
        <motion.div
          className="lg:hidden"
          variants={!isAchievementsRoute ? container : {}}
          initial={!isAchievementsRoute ? "hidden" : false}
          animate={!isAchievementsRoute ? "show" : false}
        >
          <motion.div variants={!isAchievementsRoute ? item : {}}>
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
