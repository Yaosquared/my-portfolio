"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";

import Title from "@/components/title";
import { skillList } from "@/lib/data";

const Skills = () => {
  return (
    <article className="xl:px-8 mt-10 lg:mt-4">
      <Title
        text="Skills"
        className="flex flex-col items-center justify-center rotate-2"
      />
      <HoverEffect items={skillList} />
    </article>
  );
};

export default Skills;
