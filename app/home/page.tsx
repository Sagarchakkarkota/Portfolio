"use client";
import React, { useEffect, useState } from "react";
import TitleSection from "./_components/TitleSection";
import TechnologiesSection from "./_components/TechnologiesSection";
import ExperienceSection from "./_components/ExperienceSection";
// import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center gap-2 p-10 bg-primary">
      <div className="min-h-screen w-[1px] bg-secondary/40 animate-pulse" />
      {/* <motion.div> */}
      <div className="flex flex-col w-full  text-offWhite">
        <TitleSection />
        <TechnologiesSection />
        <ExperienceSection />
      </div>
      {/* </motion.div> */}

      <div className="min-h-screen w-[1px] bg-secondary/40 animate-pulse" />
    </div>
  );
};

export default Home;
