"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { MovingBorderBtn } from "@/components/ui/moving-border";

import { navLinks } from "@/lib/data";

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

const Hero = () => {
  const resumeUrl = navLinks[3]?.url;

  return (
    <article className="min-h-[87vh] flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-around relative">
      <motion.div
        className="text-center lg:text-left lg:w-3/6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-4xl lg:text-7xl font-bold py-6"
          variants={item}
        >
          Hi 👋, I&apos;m
          <span className="bg-clip-text text-transparent bg-gradient-to-r to-[#89E3F1] from-[#29456D] dark:to-[#29456D] dark:from-[#89E3F1]">
            &nbsp;Mario.
          </span>
        </motion.h1>
        <motion.p className="text-lg dark:text-gray-300" variants={item}>
          A Software Engineer with degree in Bachelor of Engineering Technology,
          Major in Computer Engineering Technology from Technological University
          of the Philippines - Cavite.
        </motion.p>
        <motion.div
          className="flex gap-2 py-4 justify-center lg:justify-start"
          variants={item}
        >
          <Link target="_blank" href={resumeUrl}>
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.95,
                rotate: "2.5deg",
              }}
            >
              <Button
                variant="outline"
                className="md:text-md font-semibold p-5 md:p-6"
              >
                Resume
              </Button>
            </motion.div>
          </Link>
          <Link target="_blank" href="mailto:marioyaoyao14@gmail.com">
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.95,
                rotate: "2.5deg",
              }}
            >
              <Button
                variant="default"
                className="md:text-md font-semibold p-5 md:p-6"
              >
                Contact Me
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate="show"
        className="w-72 h-full lg:w-auto lg:h-auto relative"
      >
        <Image
          src="/my-photo.jpeg"
          width={400}
          height={400}
          alt="my photo"
          className="rounded-xl"
        />
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10 rotate-2">
          <MovingBorderBtn
            borderRadius="0.5rem"
            className="p-3 font-semibold cursor-default"
          >
            {/* <p>📣 Available for Work!</p> */}
            <p>🚀 Software Engineer @ QTech Inc.</p>
          </MovingBorderBtn>
        </div>
      </motion.div>
    </article>
  );
};

export default Hero;
