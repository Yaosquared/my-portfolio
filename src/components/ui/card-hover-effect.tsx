import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CombinedIconType, CategoryProps } from "@/lib/types";
import { MovingBorderBtn } from "@/components/ui/moving-border";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    text: string;
    icon: CombinedIconType;
    category: CategoryProps[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-3 lg:grid-cols-6 py-10", className)}>
      {items.map((item, idx) => {
        const Icon = item.icon;
        const isCore = item.category.includes("core");

        const cardContent = (
          <div className="py-6 md:py-10 z-50 relative space-y-5 justify-center">
            <Icon className="w-8 h-8 mx-auto" />
            <p className="text-base md:text-xl font-bold text-center dark:text-gray-300">
              {item.text}
            </p>
          </div>
        );

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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.05 },
                  }}
                />
              )}
            </AnimatePresence>
            {isCore ? (
              <MovingBorderBtn
                borderRadius="0.375rem"
                containerClassName="w-full h-full min-h-[120px]"
                borderClassName="h-20 w-20 bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]"
                className="bg-background hover:bg-accent transition-all duration-500 cursor-pointer text-foreground border-input"
                duration={3000}
              >
                {cardContent}
              </MovingBorderBtn>
            ) : (
              <div className="rounded-md w-full md:p-4 overflow-hidden border border-input bg-background hover:bg-accent relative z-20 transition-all duration-500 cursor-pointer">
                {cardContent}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
