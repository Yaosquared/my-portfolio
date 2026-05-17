"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Title from "@/components/title";
import { skillList, skillTabs } from "@/lib/data";
import { DisplayCategoryProps } from "@/lib/types";

const SkillsContent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());
  const activeTab = searchParams.get("skill") ?? "all";

  const setActiveTab = (tab: DisplayCategoryProps | "all") => {
    if (tab === "all") {
      params.delete("skill");
    } else {
      params.set("skill", tab);
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const filteredSkills =
    activeTab === "all"
      ? skillList
      : activeTab === "core"
        ? skillList.filter((skill) => skill.category.includes("core"))
        : skillList.filter((skill) => skill.displayCategory === activeTab);

  return (
    <>
      <div className="flex justify-center mt-6">
        <div className="inline-flex flex-wrap justify-center rounded-xl border border-border bg-muted p-1 gap-1">
          {skillTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <HoverEffect items={filteredSkills} key={activeTab} />
    </>
  );
};

const Skills = () => {
  return (
    <article className="xl:px-8 mt-10 lg:mt-4">
      <Title
        text="Skills"
        className="flex flex-col items-center justify-center rotate-2"
      />
      <Suspense fallback={null}>
        <SkillsContent />
      </Suspense>
    </article>
  );
};

export default Skills;
