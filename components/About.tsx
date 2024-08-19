"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col gap-y-10 lg:items-start items-center lg:flex-row mt-[15rem] max-w-7xl mx-auto px-5 gap-x-[10rem] bg-[#15181E]"
    >
      <Image
        src={
          "/DSCN5037.JPG"
        }
        alt=""
        width={380}
        height={380}
        className="rounded-3xl aspect-square"
      />
      <motion.div
        animate={{ y: 20 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex flex-col items-center lg:items-start"
      >
        <h1 className="text-2xl mt-2 lg:text-3xl tracking-wide font-semibold">
          The spot for authentic cuisine and
        </h1>
        <h1 className="text-2xl lg:text-3xl tracking-wide font-semibold mb-5">
          great customer service
        </h1>
        <p className="text-md text-muted-foreground mt-2">
        Delicious Restro Cafe is your go-to spot for quick and delicious Indian fast food. We serve up flavorful favorites like spicy curries, savory wraps, and crispy snacks, all made with fresh ingredients. Enjoy the convenience of fast service and takeout, perfect for a satisfying meal on the go!
        </p>
      </motion.div>
    </div>
  );
};

export default About;
