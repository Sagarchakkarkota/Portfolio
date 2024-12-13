import { motion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa";

const EducationSection = () => {
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="p-2 md:p-4 rounded-lg shadow-blue/40 shadow-lg border border-blue/40 flex flex-col items-center justify-center gap-8 max-sm:gap-2"
    >
      <h1 className="text-3xl max-sm:text-xl">Education</h1>
      <div className="w-full flex max-sm:flex-col gap-5 max-sm:gap-2 max-sm:justify-center items-center">
        <div className="w-48 max-sm:hidden">
          <FaUserGraduate className="size-32 max-sm:size-12" />
        </div>
        <div className="flex-1 max-sm:w-full">
          <h1 className="text-md max-sm:text-sm font-semibold">
            B. N. Bandodkar College - Thane Bachelor of Science in Zoology
          </h1>
          <p className="text-sm">2017 - 2020 | Mumbai University</p>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationSection;
