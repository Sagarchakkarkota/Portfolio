import { Images } from "@/app/assets";
import Image from "next/image";
import React from "react";

const TitleSection = () => {
  return (
    <section className="w-full flex justify-center items-start">
      <div className="w-3/5 p-10">
        <h1 className="text-[3rem]">Sagar Chakkarkota</h1>
        <h3 className="text-3xl animate-pulse text-primary/80">
          React Js Developer
        </h3>
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
          className="w-80 opacity-70 rounded-lg"
        />
      </div>
    </section>
  );
};

export default TitleSection;
