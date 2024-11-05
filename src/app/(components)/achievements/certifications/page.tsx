"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import Title from "@/components/title";
import { educCerts, carreerCerts } from "@/lib/data";

const Certifications = () => {
  const educPlugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const careerPlugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <article className="py-0 lg:py-10 sm:p-0 p-4 mt-10 lg:mt-6">
      <Title
        text="Certifications"
        className="flex flex-col items-center justify-center -rotate-2"
      />
      <h2 className="flex justify-center text-xl font-semibold mt-10 mb-3">
        Education
      </h2>
      <div className="flex justify-center">
        <Carousel
          plugins={[educPlugin.current]}
          className="w-[43.75rem]"
          onMouseEnter={educPlugin.current.stop}
          onMouseLeave={educPlugin.current.reset}
        >
          <CarouselContent>
            {educCerts.map((cert) => (
              <Dialog key={cert.id}>
                <DialogTrigger asChild>
                  <CarouselItem>
                    <AspectRatio ratio={16 / 12}>
                      <Image
                        src={cert.img}
                        alt={cert.alt}
                        fill
                        className="rounded-md object-cover border p-6 hover:cursor-pointer"
                      />
                    </AspectRatio>
                  </CarouselItem>
                </DialogTrigger>
                <DialogContent className="max-w-md md:max-w-5xl flex justify-center">
                  <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription>
                      <Image
                        src={cert.img}
                        alt={cert.alt}
                        width={cert.width}
                        height={cert.height}
                        className="rounded-md object-cover p-4 md:p-6"
                      />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <h2 className="flex justify-center text-xl font-semibold mt-10 mb-3">
        Seminars / Trainings
      </h2>
      <div className="flex justify-center">
        <Carousel
          plugins={[careerPlugin.current]}
          className="w-[43.75rem]"
          onMouseEnter={careerPlugin.current.stop}
          onMouseLeave={careerPlugin.current.reset}
        >
          <CarouselContent>
            {carreerCerts.map((cert) => (
              <Dialog key={cert.id}>
                <DialogTrigger asChild>
                  <CarouselItem>
                    <AspectRatio ratio={16 / 12}>
                      <Image
                        src={cert.img}
                        alt={cert.alt}
                        fill
                        className="rounded-md object-cover border p-6 hover:cursor-pointer"
                      />
                    </AspectRatio>
                  </CarouselItem>
                </DialogTrigger>
                <DialogContent className="max-w-md md:max-w-5xl flex justify-center">
                  <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription>
                      <Image
                        src={cert.img}
                        alt={cert.alt}
                        width={cert.width}
                        height={cert.height}
                        className="rounded-md object-cover p-4 md:p-6"
                      />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </article>
  );
};
export default Certifications;
