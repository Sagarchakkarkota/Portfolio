"use client";
import React, { useEffect, useState } from "react";
import TitleSection from "./_components/TitleSection";
import TechnologiesSection from "./_components/TechnologiesSection";
import ExperienceSection from "./_components/ExperienceSection";
import { motion } from "framer-motion";
import EducationSection from "./_components/EducationSection";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center gap-2 p-10 bg-primary">
      {/* <div className="min-h-screen w-[1px] bg-secondary/40 animate-pulse" /> */}
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="flex flex-col w-full  text-offWhite"
      >
        <TitleSection />
        <TechnologiesSection />
        <ExperienceSection />
        <EducationSection />
      </motion.div>

      {/* <div className="min-h-screen w-[1px] bg-secondary/40 animate-pulse" /> */}
    </div>
  );
};

export default Home;
