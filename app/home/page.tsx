import Image from "next/image";
import React from "react";
import { Images } from "../assets";
import { logoArray } from "./home.constants";
import TitleSection from "./_components/TitleSection";
import TechnologiesSection from "./_components/TechnologiesSection";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 p-10 w-full bg-black text-offWhite">
      <TitleSection />
      <div className="w-full h-1 bg-black relative overflow-hidden">
        <div className="h-full bg-white animation-fill" />
      </div>
      <TechnologiesSection />
    </div>
  );
};

export default Home;
