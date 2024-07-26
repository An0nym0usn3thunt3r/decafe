"use client";
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import MenuCard from "./MenuCard";
import { motion } from "framer-motion";
import Link from "next/link";

const Menu = () => {
  const containerVariants = {
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
      <h4 className="text-xl text-[#AB8A54] font-medium text-center">
        From Our Menu
      </h4>
      <h1 className="text-2xl text-center  lg:text-3xl tracking-wide font-semibold">
        Most popular dishes
      </h1>
      <div className="flex flex-row items-center ">
        <div
          className="w-full mt-5 h-px max-w-[40rem]  flex justify-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, #AB8A54 50%, rgba(149, 131, 198, 0.3) 67.2%, rgba(149, 131, 198, 0) 100%)",
          }}
        ></div>
        <div className="flex flex-col mt-5 ">
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
          className="w-full mt-5 h-px max-w-xl  flex justify-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, #AB8A54 50%, rgba(149, 131, 198, 0.3) 67.2%, rgba(149, 131, 198, 0) 100%)",
          }}
        ></div>
      </div>
      <motion.div
        className="grid mx-auto gap-x-10 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-y-10 xl:grid-cols-3 py-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MenuCard src="/chole.jpg" title="Chana Puri" />
        <MenuCard src="/pizza.jpg" title="Margarita Pizza" />
        <MenuCard src="/panip.jpg" title="Pani Puri" />
        <MenuCard src="/papdi.jpg" title="Dahi Papdi Chaat" />
        <MenuCard src="/mexi.jpg" title="Mexican Sandwich" />
        <MenuCard src="/panip.jpg" title="Pani Puri" />
      </motion.div>
      <div className="flex justify-end pr-2">
        <Link href="/menu">
        <button className="space-links text-sm md:text-base text-white px-3 py-2 rounded-md flex pr-5 bg-[#AB8A54]">
            View All Menu -&gt;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
