"use client";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import EducationSection from "./_components/EducationSection";
import ExperienceSection from "./_components/ExperienceSection";
import TechnologiesSection from "./_components/TechnologiesSection";
import TitleSection from "./_components/TitleSection";
const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center gap-2 p-10 max-sm:p-2 bg-primary">
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="w-full flex flex-col gap-10 max-sm:gap-8 text-offWhite"
      >
        <TitleSection />
        <TechnologiesSection />
        <ExperienceSection />
        <EducationSection />
        <Footer />
      </motion.div>

      {/* <div className="min-h-screen w-[1px] bg-secondary/40 animate-pulse" /> */}
    </div>
  );
};

export default Home;
