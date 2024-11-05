"use client";
import React from "react";
import { logoArray } from "../home.constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SectionWrapper from "@/components/wrappers/SectionWrapper";

const TechnologiesSection = () => {
  return (
    <SectionWrapper className="gap-8 flex-col">
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
    </SectionWrapper>
  );
};

export default TechnologiesSection;
