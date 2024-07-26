"use client";
import MenuCard from "@/components/MenuCard";
import React from "react";
import { motion } from "framer-motion";

const TurquoiseParty = () => {
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
          MockTails
        </h4>
        <motion.div
          className="grid mx-auto gap-x-10 md:grid-cols-2 grid-cols-1 gap-y-10 xl:grid-cols-3 py-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MenuCard src="/chole.jpg" title="Classic Mojito" />
          <MenuCard src="/pizza.jpg" title="Orange Peach Blossom" />
          <MenuCard src="/pizza.jpg" title="Blue Lagoon" />
          <MenuCard src="/chole.jpg" title="Orange Cucunber Fizz" />
          <MenuCard src="/mexi.jpg" title="Frozen Peach Bellini" />
          <MenuCard
            src="/mexi.jpg"
            title="Cranberry Moktail with Pomogranatee"
          />
          <MenuCard src="/mexi.jpg" title="Cucumber 2 Green Apple Granite" />
          <MenuCard src="/mexi.jpg" title="Sex on the Beach" />
          <MenuCard src="/mexi.jpg" title="Berry Basil Martini" />
        </motion.div>
      </div>
      <div className="flex flex-col mt-10">
        <h4 className="text-lg lg:text-2xl tracking-wide font-semibold">
          Creamy Crush
        </h4>
        <motion.div
          className="grid mx-auto gap-x-10 md:grid-cols-2 grid-cols-1 gap-y-10 xl:grid-cols-3 py-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MenuCard src="/chole.jpg" title="Oreo Shake" />
          <MenuCard src="/pizza.jpg" title="Kashew Pista Shake" />
          <MenuCard src="/pizza.jpg" title="Vanilla Shake" />
          <MenuCard src="/chole.jpg" title="Strawberry Shake" />
          <MenuCard src="/mexi.jpg" title="Dark Chocolate Shake" />
          <MenuCard src="/mexi.jpg" title="Kitkat Shake" />
          <MenuCard src="/mexi.jpg" title="Chocolate Shake" />
          <MenuCard src="/mexi.jpg" title="Brownie Shake" />
          <MenuCard src="/mexi.jpg" title="Chunkey Munkey Coffee" />
          <MenuCard src="/mexi.jpg" title="Mint Coffee Frappe" />
          <MenuCard src="/mexi.jpg" title="Delicious Restro Cold coffee" />
        </motion.div>
      </div>
      <div className="flex flex-col mt-10">
        <h4 className="text-lg lg:text-2xl tracking-wide font-semibold">
          Frozen Favorites
        </h4>
        <motion.div
          className="grid mx-auto gap-x-10 md:grid-cols-2 grid-cols-1 gap-y-10 xl:grid-cols-3 py-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MenuCard src="/chole.jpg" title="Vanilla" />
          <MenuCard src="/pizza.jpg" title="Strawberry" />
          <MenuCard src="/pizza.jpg" title="Kesar Pista" />
          <MenuCard src="/chole.jpg" title="Chocolate " />
          <MenuCard src="/mexi.jpg" title="Rich Coffee" />
          <MenuCard src="/mexi.jpg" title="Kaju Draksh" />
        </motion.div>
      </div>
    </div>
  );
};

export default TurquoiseParty;
