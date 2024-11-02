"use client";
import React from "react";
import { logoArray } from "../home.constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TechnologiesSection = () => {
  const router = useRouter();
  return (
    <section className="flex gap-5 flex-col items-center justify-center">
      <h1 className="text-3xl">Technologies</h1>
      <div className="flex gap-5">
        {logoArray.map((logo) => (
          <button
            key={logo.alt}
            onClick={() => {
              router.push(String(logo.link));
            }}
            className="bg-black"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="max-w-20 h-full rounded-full p-4 object-contain ring ring-transparent hover:ring-primary/20 hover:animate-bounce"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
