"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { socialList } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="border-t mt-20 mb-10 flex flex-col text-center items-center gap-2">
      <h3 className="text-xl">Mario Yaoyao II &middot; Student</h3>
      <div className="flex flex-row gap-4">
        {socialList.map((social, index) => {
          const Icon = social.icon;

          return (
            <Link
              key={social.id}
              href={social.link}
              aria-label={social.label}
              target="_blank"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                  rotate: "2.5deg",
                }}
              >
                <Icon className="w-6 h-6" />
              </motion.div>
            </Link>
          );
        })}
      </div>
      <p className="text-md">&copy; 2024. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
