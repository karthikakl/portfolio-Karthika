import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/image/profile2.jpg";
import image from "../assets/image/image.jpg"
import { DISCRIPTION_CONTENT } from "../constants";
import { FiDownload } from "react-icons/fi";

const Description = () => {
  return (
    <section
      id="about"
      className="py-24 bg-[#0a0a12] text-stone-100"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-20 gap-16">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          {/* Name */}
          <h2 className="text-5xl sm:text-6xl font-bold mb-3 text-white">
            Karthika KL
          </h2>

          {/* MERN Stack Developer Title */}
          <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-teal-400">
           MERN Stack Developer
          </h3>

          {/* Description */}
          <p className="text-lg text-stone-400 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
            {DISCRIPTION_CONTENT}
          </p>

          {/* Resume Download Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 border border-stone-700 text-stone-300 hover:text-white px-5 py-3 rounded-full hover:bg-stone-800 transition-all duration-300"
          >
            <FiDownload className="text-lg" />
            Download Resume
          </a>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full blur-3xl opacity-25 animate-pulse"></div>
            <img
              src={profile}
              alt="Karthika KL"
              className="relative w-64 sm:w-72 lg:w-80 h-auto rounded-3xl border-4 border-stone-700 shadow-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Description;
