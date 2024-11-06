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
      className="p-10 flex flex-col items-center justify-center gap-8"
    >
      <h1 className="text-3xl">Technologies</h1>
      <div className="flex gap-5">
        {logoArray.map((logo) => (
          <button
            key={logo.alt}
            onClick={() => {
              window.open(logo.link, "_blank");
            }}
            className="bg-primary"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="w-20 h-20 rounded-full p-4 object-cover ring ring-transparent hover:ring-secondary/20 hover:animate-bounce"
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default TechnologiesSection;
