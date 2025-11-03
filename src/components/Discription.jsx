import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/image/profile2.jpg";
import { DISCRIPTION_CONTENT } from "../constants";
import { FiDownload } from "react-icons/fi";

const Description = () => {
  return (
    <section
      id="about"
      className="py-14 sm:py-20 md:py-24 bg-[#0a0a12] text-stone-100 overflow-hidden"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center px-3 sm:px-6 lg:px-20 gap-10 sm:gap-16">
        
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          {/* Text Container */}
          <div className="w-full sm:w-auto text-center lg:text-left bg-[#11111b] border border-stone-800 rounded-2xl p-5 sm:p-8 shadow-lg lg:shadow-none max-w-lg">
            {/* Name */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 text-white leading-tight">
              Karthika KL
            </h2>

            {/* MERN Stack Developer Title */}
            <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-5 md:mb-6 text-teal-400">
              MERN Stack Developer
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-stone-400 leading-relaxed max-w-[90%] sm:max-w-md md:max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8">
              {DISCRIPTION_CONTENT}
            </p>

            {/* Resume Download Button */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="/Karthika_KL_Full_Stack_Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 border border-stone-700 text-stone-300 hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-stone-800 transition-all duration-300 text-xs sm:text-sm md:text-base shadow-md hover:shadow-xl hover:scale-105"
              >
                <FiDownload className="text-base sm:text-lg" />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative flex justify-center">
            {/* Glowing Background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full blur-3xl opacity-25 animate-pulse"></div>

            {/* Profile Image */}
            <img
              src={profile}
              alt="Karthika KL"
              className="relative w-40 sm:w-56 md:w-72 lg:w-80 h-auto rounded-3xl border-4 border-stone-700 shadow-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Description;
