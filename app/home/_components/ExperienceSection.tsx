import { motion } from "framer-motion";
import { useState } from "react";

const ExperienceSection = () => {
  const [isReadMore, setReadMore] = useState(false);

  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="p-2 md:p-4 rounded-lg shadow-blue/40 shadow-lg border border-blue/40 flex flex-col items-center justify-center gap-8 max-sm:gap-2"
    >
      <h1 className="text-3xl max-sm:text-xl">Experience</h1>
      <div className="flex max-sm:flex-col gap-5 max-sm:gap-2 justify-center items-center">
        <div className="w-48 max-sm:w-full">
          <h1 className="text-md max-sm:text-sm font-semibold">
            Fyntune Solutions
          </h1>
          <p className="text-sm">Sep, 2023 - Present</p>
        </div>
        <div className="">
          {isReadMore ? (
            <p className="flex-1 max-sm:text-xs">
              Over the past month, I focused on UI fixes for Term and Investment
              Insurance Platforms, enhancing user interface consistency and
              improving user experience through React.js, Redux Toolkit Query,
              and MUI. In Corporate Travel and Affinity Insurance Platforms, I
              joined the development team to contribute to high-quality frontend
              development using React.js, Next.js, TypeScript, and Tailwind CSS.
              I utilized TanStack Query for efficient API caching, implemented
              Headless UI components for accessible and customizable interfaces,
              and integrated RESTful APIs with Axios to streamline data flow.
              Additionally, I designed reusable UI components and templates,
              ensuring responsive, cohesive, and efficient user interfaces
              across devices. Throughout these projects, I maintained best
              practices in frontend development, focusing on DRY principles,
              performance optimization, and code maintainability to deliver
              robust and user-friendly platforms.
              <button
                onClick={() => {
                  setReadMore(false);
                }}
                className="text-blue text-xs"
              >
                Read less
              </button>
            </p>
          ) : (
            <p className="flex-1 max-sm:text-xs">
              Over the past month, I focused on UI fixes for Term and Investment
              Insurance Platforms, enhancing user interface consistency and
              improving user experience through React.js, Redux Toolkit Query,
              and...
              <button
                onClick={() => setReadMore(true)}
                className="text-blue text-xs"
              >
                Read More
              </button>
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
