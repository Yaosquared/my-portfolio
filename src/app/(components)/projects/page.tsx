"use client";

import { useTheme } from "next-themes";

import Title from "@/components/title";
import { projectList } from "@/lib/data";
import ProjectCard from "@/components/project";

const Projects = () => {
  const { theme } = useTheme();

  const getImagePath = (lightImg: string, darkImg: string) => {
    if (theme === "light") {
      return lightImg;
    } else if (theme === "dark") {
      return darkImg;
    }
    return lightImg;
  };

  return (
    <article id="projects" className="p-5 sm:p-0 lg:mt-6">
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
