import { motion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa";

const EducationSection = () => {
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="p-10 flex items-center justify-center gap-5"
    >
      <div className="w-48">
        <FaUserGraduate className="size-32" />
      </div>
      <div className="flex-1">
        <h1 className="text-md font-semibold">
          B. N. Bandodkar College - Thane Bachelor of Science in Zoology
        </h1>
        <p className="text-sm">2017 - 2020 | Mumbai University</p>
      </div>
    </motion.div>
  );
};

export default EducationSection;
