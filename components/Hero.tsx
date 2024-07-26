"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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
          The spot for authentic cuisine and
        </h1>
        <h1 className="text-2xl md:text-4xl tracking-wide font-semibold">
          great customer service
        </h1>
        <p className="text-muted-foreground text-md md:text-lg mt-2 lg:mt-10 max-w-md lg:max-w-2xl font-medium">
          Your favorite local restaurant is now available for pick-up and
          delivery options now with Beyond Menu
        </p>
        <div className="flex flex-row py-10 gap-x-5">
          <button className="px-14 py-3 rounded-md border-x-2 border-y-[3px] tracking-wider font-medium border-[#AB8A54]">
            Order Online
          </button>
          <button className="space-links text-sm md:text-base text-white px-3 py-2 rounded-md flex pr-5 bg-[#AB8A54] items-center">
            Menu -&gt;
          </button>
        </div>
      </motion.div>
      <motion.div
        variants={item}
        className="flex flex-col items-center lg:items-start"
      >
        <Image src={"/welcome.png"} alt="" width={400} height={300} />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
