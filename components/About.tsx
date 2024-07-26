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
          "https://i.pinimg.com/736x/02/cc/a8/02cca83b946444209845c04331e552d4.jpg"
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
        <h4 className="text-xl text-[#AB8A54] font-medium">About us</h4>
        <h1 className="text-2xl mt-2 lg:text-3xl tracking-wide font-semibold">
          The spot for authentic cuisine and
        </h1>
        <h1 className="text-2xl lg:text-3xl tracking-wide font-semibold mb-5">
          great customer service
        </h1>
        <div className="flex flex-row items-center">
          <div className="flex flex-col">
            <div
              className="w-0 h-0 
            border-l-[5px] border-l-transparent
            border-b-[10px] border-b-[#AB8A54]
            border-r-[5px] border-r-transparent"
            ></div>
            <div
              className="w-0 h-0 
            border-l-[5px] border-l-transparent
            border-t-[10px] border-t-[#AB8A54]
            border-r-[5px] border-r-transparent"
            ></div>
          </div>
          <div
            className="w-full h-px max-w-xl "
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, #AB8A54 0%, rgba(149, 131, 198, 0.3) 67.2%, rgba(149, 131, 198, 0) 100%)",
            }}
          ></div>
        </div>
        <p className="text-md text-muted-foreground mt-2">
          Indian Cafe serves the Chamberburg area with delicious indian cuisine.
          Our speciality dishes have been well-crafted to create a delightfull
          culinary experience. Enjoy the convenience of pickup or delivery when
          ordering through Beyond Menu.
        </p>
        <button className="space-links text-sm md:text-base text-white px-3 py-2 rounded-md flex pr-5 bg-[#AB8A54]">
          Learn more -&gt;
        </button>
      </motion.div>
    </div>
  );
};

export default About;
