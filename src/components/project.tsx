"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaGithub } from "react-icons/fa";
import { ProjectCardProps } from "@/lib/types";

const ProjectCard = ({ project, index, getImagePath }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="flex flex-col xl:flex-row w-full py-6"
    >
      <div className="xl:shadow-md flex justify-center bg-slate-50 dark:bg-neutral-950 dark:border rounded-tl-xl rounded-tr-xl">
        <Link href={project.siteLink} target={project.target}>
          <Image
            src={getImagePath(project.lightImg, project.darkImg)}
            alt={`Project ${project.id}`}
            width={800}
            height={800}
            className="rounded-t-xl xl:rounded-tr-none xl:rounded-l-xl border border-b-0 xl:border-b border-r-0 border-accent"
          />
        </Link>
      </div>
      <div className="border xl:border-l-0 border-accent bg-transparent hover:bg-accent dark:hover:bg-accent/90 transition ease-in-out duration-500 flex flex-col w-full xl:w-1/2 p-6 rounded-b-xl xl:rounded-bl-none xl:rounded-r-xl justify-between shadow-md">
        <div>
          <h1 className="text-xl xl:text-2xl font-bold">{project.title}</h1>
          <p className="text-base xl:text-lg py-2 mb-2">{project.desc}</p>
          <TooltipProvider>
            <div className="flex flex-row space-x-4 pl-5">
              <Link
                href={project.siteLink}
                target={project.target}
                className="flex items-center cursor-pointer"
              >
                <Tooltip>
                  <TooltipTrigger>
                    <Image
                      src={project.logo}
                      alt={`${project.title} Logo`}
                      width={40}
                      height={40}
                      className="cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{`Go to ${project.title}`}</p>
                  </TooltipContent>
                </Tooltip>
              </Link>
              <Link
                href={project.repoLink}
                target="_blank"
                className="flex items-center cursor-pointer"
              >
                <Tooltip>
                  <TooltipTrigger>
                    <FaGithub size={34} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{`Go to ${project.title} repository`}</p>
                  </TooltipContent>
                </Tooltip>
              </Link>
            </div>
          </TooltipProvider>
        </div>
        <div>
          <h2 className="text-lg xl:text-xl font-bold mt-4">
            Technologies Used:
          </h2>
          <ul className="flex flex-wrap gap-2 py-2 pl-5">
            {project.tech.map((tech: string, techIndex: number) => (
              <li
                key={techIndex}
                className="bg-accent-foreground hover:bg-accent-foreground/80 ease-in-out duration-300 border backdrop-blur-xl text-primary-foreground text-sm antialiased rounded-xl px-3 py-1 cursor-pointer"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
