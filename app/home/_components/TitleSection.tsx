"use client";
import { Images } from "@/app/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const TitleSection = () => {
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="p-10 flex items-center justify-center"
    >
      <div className="w-6/12">
        <h1 className="text-[3rem]">Sagar Chakkarkota</h1>
        <div className="flex justify-start items-center">
          <button
            onClick={() => {
              window.open("https://react.dev/", "_blank");
            }}
            className="bg-primary"
          >
            <Image
              src={Images.reactLogo}
              alt={"react logo"}
              className="w-20 h-20 rounded-full p-4 object-cover ring ring-transparent animate-spin"
            />
          </button>
          <h3 className="text-3xl text-secondary/80">React Js Developer</h3>
        </div>
        <p className="text-sm mt-6">
          Experienced in developing user-friendly insurance platforms using
          React.js, Next.js, TypeScript, and Tailwind CSS. Skilled in ensuring
          UI consistency, performance optimization, and seamless API integration
          with Axios. Proficient in managing data using TanStack Query, with a
          focus on improving user experiences through effective frontend
          solutions.
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image
          src={Images.profile}
          alt="Profile picture"
          className="object-cover opacity-90 rounded-lg"
        />
      </div>
    </motion.div>
  );
};

export default TitleSection;
