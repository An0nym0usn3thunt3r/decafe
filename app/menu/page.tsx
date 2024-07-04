"use client";
import MenuCard from "@/components/MenuCard";
import React from "react";
import { motion } from "framer-motion";

const MenuPage = () => {
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
    <div className="pt-[10rem] max-w-7xl mx-auto text-white xl:px-0 px-5">
      <div className="flex flex-col gap-y-5">
        <h1 className="text-2xl lg:text-4xl tracking-wide font-semibold">
          Our Menu
        </h1>
        <p className="text-muted-foreground text-md lg:text-lg max-w-md lg:max-w-2xl font-medium">
          Your favorite local restaurant is now available for pick-up and
          delivery options now with Beyond Menu
        </p>
      </div>
      <div className="flex flex-col mt-10">
        <h4 className="text-lg lg:text-2xl tracking-wide font-semibold">
          Veg-category
        </h4>
        <motion.div
          className="grid mx-auto gap-x-10 lg:grid-cols-2 grid-cols-1 gap-y-10 xl:grid-cols-3 py-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </motion.div>
      </div>
      <div className="flex flex-col mt-10">
        <h4 className="text-lg lg:text-2xl tracking-wide font-semibold">
          Veg-category
        </h4>
        <motion.div
          className="grid mx-auto gap-x-10 lg:grid-cols-2 grid-cols-1 gap-y-10 xl:grid-cols-3 py-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </motion.div>
      </div>
    </div>
  );
};

export default MenuPage;
