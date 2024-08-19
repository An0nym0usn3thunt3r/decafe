"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="flex flex-col-reverse lg:flex-row mt-20 items-center pb-10 w-full h-full max-w-7xl mx-auto justify-between px-5 bg-[#15181E] gap-y-10"
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        variants={item}
        className="flex flex-col items-center lg:items-start"
      >
        <h1 className="text-2xl md:text-4xl tracking-wide font-semibold">
        Welcome to Delicious Restro Cafe,
        </h1>
        <h1 className="text-2xl md:text-4xl tracking-wide font-semibold">
        where culinary passion meets a cozy atmosphere!
        </h1>
        <p className="text-muted-foreground text-md md:text-lg mt-2 lg:mt-10 max-w-md lg:max-w-2xl font-medium">
        At Delicious Restro Cafe, we pride ourselves on serving a diverse menu crafted from the freshest local ingredients. Whether you&apos;re in the mood for a hearty breakfast, a light lunch, or a delightful dinner, our chefs create dishes that are not only delicious but also beautifully presented.
        </p>
        <div className="flex flex-row py-10 gap-x-5">
          <Link href="/gallery">
          <button className="space-links text-sm md:text-base text-white px-3 py-2 rounded-md flex pr-5 bg-[#d67f2e] items-center">
            Gallery -&gt;
          </button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        variants={item}
        className="flex flex-col items-center lg:items-start"
      >
        <Image src={"/6.JPG"} alt="" width={400} height={300} className="rounded-3xl aspect-square" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
