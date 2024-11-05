import SectionWrapper from "@/components/wrappers/SectionWrapper";
import React from "react";

const ExperienceSection = () => {
  return (
    <SectionWrapper className="gap-8 flex-col">
      <h1 className="text-3xl">Experience</h1>
      <div className="flex gap-5">
        <div className="w-48">
          <h1 className="text-md font-semibold">Fyntune Solutions</h1>
          <p className="text-sm">Sep, 2023 - Present</p>
        </div>
        <p className="flex-1">
          Over the past month, I focused on UI fixes for Term and Investment
          Insurance Platforms, enhancing user interface consistency and
          improving user experience through React.js, Redux Toolkit Query, and
          MUI. In Corporate Travel and Affinity Insurance Platforms, I joined
          the development team to contribute to high-quality frontend
          development using React.js, Next.js, TypeScript, and Tailwind CSS. I
          utilized TanStack Query for efficient API caching, implemented
          Headless UI components for accessible and customizable interfaces, and
          integrated RESTful APIs with Axios to streamline data flow.
          Additionally, I designed reusable UI components and templates,
          ensuring responsive, cohesive, and efficient user interfaces across
          devices. Throughout these projects, I maintained best practices in
          frontend development, focusing on DRY principles, performance
          optimization, and code maintainability to deliver robust and
          user-friendly platforms.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
