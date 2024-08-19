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
          <MenuCard src="/Pani Puri.JPG" title="Pani Puri" />
          <MenuCard src="/Dahi Papdi Chaat.webp" title="Dahi Papdi Chat" />
          <MenuCard src="/sev puri.webp" title="Sev Puri" />
          <MenuCard src="/Bhel.webp" title="Bhel" />
          <MenuCard src="/Ragada Petties.webp" title="Ragada petties" />
          <MenuCard src="/samosa chaat.webp" title="Samosa Chaat" />
          <MenuCard src="/dahipuri.jpg" title="Dahi Puri" />
          <MenuCard src="/dahibhalle.jpg" title="Dahi Bhalla" />
          <MenuCard src="/chillipaneer.jpeg" title="Paneer Chilli" />
          <MenuCard src="/alootikkichat.webp" title="Aloo Tikki Chaat" />
          <MenuCard src="/chinesebhel.jpg" title="Chinese Bhel" />
          <MenuCard src="/gangaghatkichat.JPG" title="Ganga Ghat ki Chaat" />
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
          <MenuCard src="/breadbutter.jpg" title="Bread Butter" />
          <MenuCard src="/vegsandvich.jpg" title="Vegetable sandwich" />
          <MenuCard src="/vegcheesesandvich.webp" title="Veg cheese sandwich" />
          <MenuCard src="/cheesecorn.webp" title="Cheese corn peri peri sandwich" />
          <MenuCard src="/mexican-torta-e1523296104751.jpg" title="Mexican Sandwich" />
          <MenuCard src="/mayosand.jpg" title="Mayo toast sandwich" />
          <MenuCard src="/paneer.jpg" title="Paneer takatak sandwich" />
          {/* <MenuCard src="/panip.jpg" title="Cheesy Tex-Mex Focaccia" /> */}
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
          <MenuCard src="/alootikki.jpg" title="Aloo Tikki Burger" />
          <MenuCard src="/vegburger.jpg" title="Vegetable Burger" />
          <MenuCard src="/vegcheese.jpg" title="Cheese Burger(veg)" />
          <MenuCard src="/paneerburger.jpg" title="Paneer Takatak Burger" />
          <MenuCard src="/frenchfries.jpg" title="French-Fries" />
          <MenuCard src="/periperi.webp" title="Peri Peri French-Fries" />
          <MenuCard src="/mexicanfries.jpg" title="Mexican Fries" />
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
          <MenuCard src="/masalapav.jpeg" title="Butter Masala - Pav" />
          <MenuCard src="/butterbhaji.webp" title="Butter Bhaaji - Pav" />
          <MenuCard src="/buttercheese.jpg" title="Cheese Bhaaji - Pav" />
          <MenuCard src="/vegpulao.jpg" title="Veg pulao" />
          <MenuCard src="/vegtawa.jpg" title="Veg Tawa pulao" />
          <MenuCard src="/chanapuri.webp" title="Chana Puri/Kulche" />
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
          <MenuCard src="/vegwrap.jpg" title="Vegetable Wraps" />
          <MenuCard src="/vegcheese.webp" title="Veg cheese Wraps" />
          <MenuCard src="/paneerwrap.jpg" title="Paneer Masala Wraps" />
          <MenuCard src="/paneercheese.jpg" title="Cheesy Peri-Peri Wraps" />
          <MenuCard src="/cornwrap.jpg" title="Cheesy corn salsa Wraps" />
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
          <MenuCard src="/paneertikka.jpg" title="Paneer tikka garlic bread" />
          <MenuCard src="/4cheese.jpg" title="four cheese garlic bread" />
          <MenuCard src="/creamcheese.jpeg" title="Cream Cheese garlic bread" />
          <MenuCard src="/stuffed.webp" title="Stuffed garlic bread" />
          <MenuCard src="/cheesydip.jpg" title="Cheesy dip" />
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
          <MenuCard src="/classicmojito.jpg" title="Classic Mojito" />
          <MenuCard src="/orange.jpg" title="Orange Peach Blossom" />
          <MenuCard src="/bluelagoon.jpg" title="Blue Lagoon" />
          <MenuCard src="/covercucumbergrapefruitcocktail.jpg" title="Orange Cucumber Fizz" />
          <MenuCard src="/PeachBelini.jpg" title="Frozen Peach Bellini" />
          <MenuCard
            src="/cranberrymocktail.jpg"
            title="Cranberry Mocktail with Pomogranatee"
          />
          <MenuCard src="/cucumber.jpeg" title="Cucumber 2 Green Apple Granite" />
          <MenuCard src="/sexon.jpeg" title="Sex on the Beach" />
          <MenuCard src="/blue.jpg" title="Berry Basil Martini" />
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
          <MenuCard src="/oreoshake.jpg" title="Oreo Shake" />
          <MenuCard src="/cashewpista.webp" title="Cashew Pista Shake" />
          <MenuCard src="/vanilla.jpg" title="Vanilla Shake" />
          <MenuCard src="/strawberry.webp" title="Strawberry Shake" />
          <MenuCard src="/dark.jpg" title="Dark Chocolate Shake" />
          <MenuCard src="/kitkat.jpg" title="Kitkat Shake" />
          <MenuCard src="/brownie.jpeg" title="Brownie Shake" />
          <MenuCard src="/frappe.jpg" title="Mint Coffee Frappe" />
        </motion.div>
      </div>
    </div>
  );
};

export default MenuPage;
