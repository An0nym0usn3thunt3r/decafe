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
          Chit Chat
        </h4>
        <motion.div
          className="grid mx-auto gap-x-10 md:grid-cols-2 grid-cols-1 gap-y-10 xl:grid-cols-3 py-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MenuCard src="/panip.jpg" title="Pani Puri" />
          <MenuCard src="/papdi.jpg" title="Dahi Papdi Chat" />
          <MenuCard src="/pizza.jpg" title="Sev Puri" />
          <MenuCard src="/chole.jpg" title="Bhel" />
          <MenuCard src="/pizza.jpg" title="Ragada petties" />
          <MenuCard src="/panip.jpg" title="Samosa Chaat" />
          <MenuCard src="/chole.jpg" title="Dahi Puri" />
          <MenuCard src="/pizza.jpg" title="Dahi Bhalla" />
          <MenuCard src="/panip.jpg" title="Paneer Chilli" />
          <MenuCard src="/chole.jpg" title="Aloo Tikki Chaat" />
          <MenuCard src="/pizza.jpg" title="Chinese Bhel" />
          <MenuCard src="/panip.jpg" title="Ganga Ghat ki Chaat" />
        </motion.div>
      </div>
      <div className="flex flex-col mt-10">
        <h4 className="text-lg lg:text-2xl tracking-wide font-semibold">
          Sides
        </h4>
        <motion.div
          className="grid mx-auto gap-x-10 md:grid-cols-2 grid-cols-1 gap-y-10 xl:grid-cols-3 py-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MenuCard src="/chole.jpg" title="Bread Butter" />
          <MenuCard src="/pizza.jpg" title="Vegetable sandwich" />
          <MenuCard src="/panip.jpg" title="Veg cheese sandwich" />
          <MenuCard src="/chole.jpg" title="Cheese corn peri peri sandwich" />
          <MenuCard src="/mexi.jpg" title="Mexican sandwich" />
          <MenuCard src="/panip.jpg" title="Mayo toast sandwich" />
          <MenuCard src="/pizza.jpg" title="Paneer takatak sandwich" />
          <MenuCard src="/panip.jpg" title="Cheesy Tex-Mex Focaccia" />
        </motion.div>
      </div>
      <div className="flex flex-col mt-10">
        <h4 className="text-lg lg:text-2xl tracking-wide font-semibold">
          Bun Run Fries
        </h4>
        <motion.div
          className="grid mx-auto gap-x-10 md:grid-cols-2 grid-cols-1 gap-y-10 xl:grid-cols-3 py-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MenuCard src="/chole.jpg" title="Aloo Tikki Burger" />
          <MenuCard src="/pizza.jpg" title="Vegetable Burger" />
          <MenuCard src="/panip.jpg" title="Cheese Burger(veg)" />
          <MenuCard src="/chole.jpg" title="Paneer Takatak Burger" />
          <MenuCard src="/mexi.jpg" title="French-Fries" />
          <MenuCard src="/panip.jpg" title="Ulta Pulta Burger" />
          <MenuCard src="/pizza.jpg" title="Peri Peri French-Fries" />
          <MenuCard src="/panip.jpg" title="Mexican Fries" />
        </motion.div>
      </div>
      <div className="flex flex-col mt-10">
        <h4 className="text-lg lg:text-2xl tracking-wide font-semibold">
          Bhaji Bonanza& Channa Bazaar
        </h4>
        <motion.div
          className="grid mx-auto gap-x-10 md:grid-cols-2 grid-cols-1 gap-y-10 xl:grid-cols-3 py-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MenuCard src="/chole.jpg" title="Butter Masala - Pav" />
          <MenuCard src="/pizza.jpg" title="Butter Bhaji - Pav" />
          <MenuCard src="/panip.jpg" title="Cheese Bhaaji - Pav" />
          <MenuCard src="/chole.jpg" title="Veg pulao" />
          <MenuCard src="/mexi.jpg" title="Veg Tawa pulao" />
          <MenuCard src="/chole.jpg" title="Chana Puri / Kulche" />
        </motion.div>
      </div>
      <div className="flex flex-col mt-10">
        <h4 className="text-lg lg:text-2xl tracking-wide font-semibold">
          Wrap It Up
        </h4>
        <motion.div
          className="grid mx-auto gap-x-10 md:grid-cols-2 grid-cols-1 gap-y-10 xl:grid-cols-3 py-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MenuCard src="/chole.jpg" title="Vegetable Wraps" />
          <MenuCard src="/pizza.jpg" title="Veg cheese Wraps" />
          <MenuCard src="/panip.jpg" title="Paneer Masala Wraps" />
          <MenuCard src="/chole.jpg" title="Cheesy Peri-Peri Wraps" />
          <MenuCard src="/mexi.jpg" title="Cheesy corn salsa Wraps" />
        </motion.div>
      </div>
      <div className="flex flex-col mt-10">
        <h4 className="text-lg lg:text-2xl tracking-wide font-semibold">
          Pizzaterria
        </h4>
        <motion.div
          className="grid mx-auto gap-x-10 md:grid-cols-2 grid-cols-1 gap-y-10 xl:grid-cols-3 py-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MenuCard src="/chole.jpg" title="Onion Capsicum pizza" />
          <MenuCard src="/pizza.jpg" title="Margarita pizza" />
          <MenuCard src="/pizza.jpg" title="Double cheese Margarita pizza" />
          <MenuCard src="/chole.jpg" title="Tandoori paneer pizza" />
          <MenuCard src="/mexi.jpg" title="Mexican pizza" />
          <MenuCard src="/mexi.jpg" title="Pesto Veg pizza" />
          <MenuCard src="/mexi.jpg" title="Farm fresh pizza" />
          <MenuCard src="/mexi.jpg" title="Cheesy pizza" />
          <MenuCard src="/mexi.jpg" title="All in house pizza(special)" />
        </motion.div>
      </div>
      <div className="flex flex-col mt-10">
        <h4 className="text-lg lg:text-2xl tracking-wide font-semibold">
          Breads
        </h4>
        <motion.div
          className="grid mx-auto gap-x-10 md:grid-cols-2 grid-cols-1 gap-y-10 xl:grid-cols-3 py-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MenuCard src="/chole.jpg" title="Paneer tikka garlic bread" />
          <MenuCard src="/pizza.jpg" title="four cheese garlic bread" />
          <MenuCard src="/pizza.jpg" title="Cream Cheese garlic bread" />
          <MenuCard src="/chole.jpg" title="Stuffed garlic bread" />
          <MenuCard src="/mexi.jpg" title="Cheesy dip" />
        </motion.div>
      </div>
      <div className="flex flex-col mt-10">
        <h4 className="text-lg lg:text-2xl tracking-wide font-semibold">
          Signature Snacks
        </h4>
        <motion.div
          className="grid mx-auto gap-x-10 md:grid-cols-2 grid-cols-1 gap-y-10 xl:grid-cols-3 py-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MenuCard src="/chole.jpg" title="Burger Combo" />
          <MenuCard src="/pizza.jpg" title="Sandwich Combo" />
          <MenuCard src="/pizza.jpg" title="Pizza Combo" />
          <MenuCard src="/chole.jpg" title="Bhaji Pav Combo" />
          <MenuCard src="/mexi.jpg" title="Channa Puri Combo" />
        </motion.div>
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

export default MenuPage;
