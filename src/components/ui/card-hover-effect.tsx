import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CombinedIconType } from "@/lib/types";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    text: string;
    icon: CombinedIconType;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-2  lg:grid-cols-6  py-10", className)}>
      {items.map((item, idx) => {
        const Icon = item.icon;

        return (
          <div
            key={item?.text}
            className="relative group block p-2 h-full w-full z-0"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-accent dark:bg-accent/90 block rounded-lg"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.5 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.5, delay: 0.1 },
                  }}
                />
              )}
              order border-input bg-background hover:bg-accent
              hover:text-accent-foreground
            </AnimatePresence>
            <div className="rounded-md w-full md:p-4 overflow-hidden border border-input bg-background hover:bg-accent relative z-20 transition-all duration-500 cursor-pointer">
              <div className="py-6 md:py-10 z-50 relative space-y-5 justify-center">
                <Icon className="w-8 h-8 mx-auto" />
                <p className="text-base md:text-xl font-bold text-center dark:text-gray-300">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
