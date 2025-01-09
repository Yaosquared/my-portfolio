import Image from "next/image";

import Title from "@/components/title";
import { expList } from "@/lib/data";

const Experience = () => {
  return (
    <article className="py-4 lg:pt-10 lg:pb-4 sm:p-0 lg:mt-6">
      <Title
        text="Experience"
        className="flex flex-col items-center justify-center -rotate-2"
      />
      <div className="flex flex-col justify-center items-center text-base pt-8 sm:text-lg">
        {expList.map((element) => (
          <div key={element.id} className="flex m-4 relative gap-8">
            <div className="hidden item-start w-72 relative sm:flex gap-8">
              <div className="flex justify-center w-[80%] text-gray-500 pt-0.5 gap-8">
                {element.date}
              </div>
              <Image
                src={element.img}
                width={100}
                height={100}
                alt="logo"
                className="w-[20%] h-16 object-cover p-1 rounded-full border shadow-sm dark:shadow-zinc-900 z-20"
              />
            </div>
            <div className="border rounded-lg px-8 py-4 w-full text-center z-10 shadow-md dark:shadow-zinc-900 sm:w-96">
              <div className="text-xl font-semibold">{element.title}</div>
              <div className="text-accent-foreground mb-6 sm:mb-8 text-sm">
                {element.location}
                <span className="sm:hidden"> | {element.date}</span>
              </div>
              <div className="text-base xl:text-lg mb-4 text-center">
                {element.description}
              </div>
              <div className="flex flex-wrap mb-6 justify-center gap-2">
                {element.tech.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-primary border hover:bg-primary/90 border-slate-800 dark:border-slate-400 ease-in-out duration-300 backdrop-blur-xl text-primary-foreground text-sm antialiased rounded-xl px-3 py-1 cursor-pointer"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
              <Image
                src={element.img}
                width={100}
                height={100}
                alt="logo"
                className="w-8 h-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden"
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
export default Experience;
