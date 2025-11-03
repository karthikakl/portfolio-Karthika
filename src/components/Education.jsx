import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-stone-100"
    >
      {/* Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-bold mb-16 tracking-wide"
      >
        Education
      </motion.h2>

      {/* Education Card */}
      <div className="flex justify-center px-6">
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="relative bg-stone-900/50 border border-stone-800 rounded-2xl shadow-xl max-w-xl w-full p-8 text-center hover:border-stone-700 transition-all backdrop-blur-md"
        >
          {/* Floating Icon */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-stone-800 p-4 rounded-full shadow-md border border-stone-700">
            <FaGraduationCap className="text-3xl text-stone-300" />
          </div>

          {/* Content */}
          <div className="mt-6 space-y-3">
            <h3 className="text-2xl font-semibold text-white">
              {EDUCATION.degree}
            </h3>
            <p className="text-lg text-stone-400">{EDUCATION.department}</p>
            <p className="text-lg text-stone-300">{EDUCATION.institution}</p>
            <p className="text-md text-stone-400 font-medium">
              Year of Completion:{" "}
              <span className="text-stone-200">{EDUCATION.year}</span>
            </p>
          </div>

          {/* Decorative underline glow */}
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-stone-700 via-stone-400 to-stone-700 mx-auto rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
