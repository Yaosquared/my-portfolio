"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Title from "@/components/title";

const Contact = () => {
  return (
    <article
      id="contact"
      className="w-[90%] md:w-[70%] lg:w-[50%] xl:w-[30%] mx-auto my-10 md:my-24 text-center"
    >
      <Card>
        <CardHeader>
          <CardTitle>
            <Title
              text="Contact Me"
              className="flex flex-col items-center justify-center rotate-2"
            />
          </CardTitle>
          <CardDescription className="text-base lg:text-lg">
            I&apos;m always interested in hearing about new learning
            opportunities, collaborating on coding projects, or simply
            connecting on social platforms.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.95,
              rotate: "2.5deg",
            }}
          >
            <Link target="_blank" href="mailto:marioyaoyao14@gmail.com">
              <Button variant="default" className="text-base p-6">
                Email
              </Button>
            </Link>
          </motion.div>
        </CardContent>
      </Card>
    </article>
  );
};

export default Contact;
