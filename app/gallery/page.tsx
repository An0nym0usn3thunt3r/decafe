'use client'
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import React from "react";

const GalleryPage = () => {
  return (
    <div className="mt-[10rem] text-white max-w-7xl mx-auto xl:px-0 px-5">
      <div className="flex flex-col gap-y-5">
        <h1 className="text-2xl lg:text-4xl tracking-wide font-semibold">
        Our Atmosphere
        </h1>
        <p className="text-muted-foreground text-md lg:text-lg max-w-md lg:max-w-2xl font-medium">
        Step into our inviting space, where every detail is designed to make you feel at home. With warm lighting, comfortable seating, and a friendly staff, we provide the perfect backdrop for any occasion—be it a casual catch-up with friends, a romantic dinner, or a family celebration.
        </p>
        <ParallaxScroll images={images} />
      </div>
    </div>
  );
};

export default GalleryPage;

const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg"
  ];
