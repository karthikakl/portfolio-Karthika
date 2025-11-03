import React from "react";
import { DiPostgresql } from "react-icons/di";
import { FaNodeJs, FaAws, FaDocker, FaGitAlt } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { RiReactjsLine, RiNextjsFill } from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiFramer,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      {/* Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Technologies
      </motion.h2>

      {/* Core Tech Icons */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiTypescript className="text-7xl text-sky-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <RiNextjsFill className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiMongodb className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiExpress className="text-7xl text-gray-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <DiPostgresql className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiRedux className="text-7xl text-purple-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiTailwindcss className="text-7xl text-cyan-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <GrGraphQl className="text-7xl text-pink-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4"
        >
          <SiFramer className="text-7xl text-indigo-400" />
        </motion.div>
      </motion.div>

      {/* Other Tools & Concepts */}
      {/* Animated Scrolling Badges */}
      <motion.div
        className="overflow-hidden mt-16"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <motion.div
          className="flex whitespace-nowrap gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 25, // speed (reduce for faster)
            ease: "linear",
          }}
        >
          {/* Duplicate badges twice for seamless loop */}
          {[
            "Firebase",
            "AWS",
            "Docker",
            "Git",
            "GitHub",
            "Postman",
            "Figma",
            "RESTful APIs",
            "WebSocket",
            "JWT Auth",
            "MVC Architecture",
            "Clean Architecture",
            "OOP",
            "DSA",
          ].map((item, i) => (
            <span
              key={i}
              className="px-5 py-2.5 text-sm font-medium tracking-wide rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/40 text-indigo-300 shadow-md hover:shadow-indigo-500/30 transition duration-300"
            >
              {item}
            </span>
          ))}
          {[
            "Firebase",
            "AWS",
            "Docker",
            "Git",
            "GitHub",
            "Postman",
            "Figma",
            "RESTful APIs",
            "WebSocket",
            "JWT Auth",
            "MVC Architecture",
            "Clean Architecture",
            "OOP",
            "DSA",
          ].map((item, i) => (
            <span
              key={`dup-${i}`}
              className="px-5 py-2.5 text-sm font-medium tracking-wide rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/40 text-indigo-300 shadow-md hover:shadow-indigo-500/30 transition duration-300"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
