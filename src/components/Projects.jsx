import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-12 sm:py-20 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-stone-100 overflow-hidden"
    >
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-16 tracking-wide px-4"
      >
        Projects
      </motion.h2>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`mb-8 sm:mb-16 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Box wrapper - wider on mobile */}
            <div
              className={`flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12
              w-full mx-auto ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-0
              bg-[#11111b] border border-stone-800 shadow-lg lg:bg-transparent lg:border-none lg:shadow-none -mx-4 sm:mx-auto`}
            >
              {/* Image Section - smaller on mobile */}
              <div className="relative group w-full flex flex-col items-center">
                <div className="overflow-hidden rounded-lg sm:rounded-xl shadow-lg w-full max-w-[240px] sm:max-w-[320px] md:max-w-[380px] lg:w-[420px] h-[140px] sm:h-[200px] md:h-[240px] lg:h-[280px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                  />
                </div>

                {/* Always visible View Code button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-stone-900 font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mt-3 hover:bg-stone-200 transition text-xs w-fit"
                >
                  <Github size={14} className="sm:size-[16px]" /> View Code
                </a>
              </div>

              {/* Content Section - more space now */}
              <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 sm:space-y-4 px-2 sm:px-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white w-full">
                  {project.title}
                </h3>

                <p className="text-stone-400 text-sm sm:text-sm md:text-base leading-relaxed sm:leading-loose w-full px-1 sm:px-0 text-left">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start w-full">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-stone-800 text-stone-300 px-2.5 py-1 rounded-full text-xs font-medium border border-stone-700 hover:bg-stone-700 transition whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;