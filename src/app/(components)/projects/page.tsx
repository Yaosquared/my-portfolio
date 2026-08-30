"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { projectList } from "@/lib/data";
import Title from "@/components/title";
import ProjectCard from "@/components/project";

const Projects = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getImagePath = (lightImg: string, darkImg: string) => {
    // Before hydration completes, always match the server's output (light).
    if (!mounted) return lightImg;
    return resolvedTheme === "dark" ? darkImg : lightImg;
  };

  return (
    <article id="projects" className="xl:p-5 sm:p-0 lg:mt-6">
      <Title
        text="Projects"
        className="flex flex-col items-center justify-center -rotate-2"
      />
      <div className="flex flex-col lg:m-10">
        {projectList.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            getImagePath={getImagePath}
          />
        ))}
      </div>
    </article>
  );
};

export default Projects;
