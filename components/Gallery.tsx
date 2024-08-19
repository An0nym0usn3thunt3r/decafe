import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};
  return (
    <div className="pt-40 flex flex-col max-w-7xl mx-auto bg-[#15181E]">
      <h4 className="text-xl text-[#d67f2e] font-medium text-center">
        Gallery
      </h4>
      <h1 className="text-2xl text-center  lg:text-3xl tracking-wide font-semibold">
        Our latest news
      </h1>
      <div className="flex flex-row items-center ">
        <div
          className="w-full mt-5 h-px max-w-[40rem]  flex justify-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, #d67f2e 50%, rgba(149, 131, 198, 0.3) 67.2%, rgba(149, 131, 198, 0) 100%)",
          }}
        ></div>
        <div className="flex flex-col mt-5 ">
          <div
            className="w-0 h-0 
            border-l-[5px] border-l-transparent
            border-b-[10px] border-b-[#d67f2e]
            border-r-[5px] border-r-transparent"
          ></div>
          <div
            className="w-0 h-0 
            border-l-[5px] border-l-transparent
            border-t-[10px] border-t-[#d67f2e]
            border-r-[5px] border-r-transparent"
          ></div>
        </div>
        <div
          className="w-full mt-5 h-px max-w-xl  flex justify-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, #d67f2e 50%, rgba(149, 131, 198, 0.3) 67.2%, rgba(149, 131, 198, 0) 100%)",
          }}
        ></div>
      </div>
      <div className="mt-5">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl mx-auto z-10"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
