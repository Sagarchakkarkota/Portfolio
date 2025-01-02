"use client";
import Image from "next/image";
import { logoArray } from "../home.constants";
import { motion } from "framer-motion";

const TechnologiesSection = () => {
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="p-2 md:p-4 rounded-lg shadow-blue/20 shadow-lg border border-blue/40 flex flex-col items-center justify-center gap-8 max-sm:gap-2"
    >
      <h1 className="text-3xl max-sm:text-xl">Technologies</h1>
      <div className="max-sm:max-w-[calc(100vw-20px)] flex gap-5 max-sm:overflow-auto py-2">
        {logoArray.map((logo) => (
          <button
            key={logo.alt}
            onClick={() => {
              window.open(logo.link, "_blank");
            }}
            className="p-1 flex-shrink-0 bg-primary"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="w-20 h-20 max-sm:w-12 max-sm:h-12 rounded-full p-4 max-sm:p-2 object-cover ring ring-transparent hover:ring-blue/20 hover:animate-bounce"
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default TechnologiesSection;
