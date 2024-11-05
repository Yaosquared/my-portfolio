"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import Title from "@/components/title";
import { projectList } from "@/lib/data";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const { theme } = useTheme();

  const getImagePath = (lightImg: string, darkImg: string) => {
    if (theme === "light") {
      return lightImg;
    } else if (theme === "dark") {
      return darkImg;
    }
    return lightImg; // Default to light image if theme is undefined
  };

  return (
    <article id="projects" className="p-5 sm:p-0 lg:mt-6">
      <Title
        text="Projects"
        className="flex flex-col items-center justify-center -rotate-2"
      />
      <div className="flex flex-col lg:m-10">
        {projectList.map((project) => {
          return (
            <div
              key={project.id}
              className="flex flex-col xl:flex-row w-full py-6"
            >
              <div className="xl:shadow-md">
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
                  <h1 className="text-xl xl:text-2xl font-bold">
                    {project.title}
                  </h1>
                  <p className="text-lg xl:text-xl py-2 mb-2">{project.desc}</p>
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
                  <ul className="flex flex-wrap gap-4 py-2 pl-5">
                    {project.tech.map((tech, techIndex) => (
                      <li
                        key={techIndex}
                        className="bg-accent-foreground hover:bg-accent-foreground/90 ease-in-out duration-300 border backdrop-blur-xl text-primary-foreground text-sm antialiased rounded-xl px-2 py-1 cursor-pointer"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Projects;
