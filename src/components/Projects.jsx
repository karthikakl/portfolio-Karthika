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

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`mb-12 sm:mb-20 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-12 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="relative group w-full lg:w-1/2 flex flex-col items-center">
              <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg w-full max-w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px] h-[200px] sm:h-[250px] md:h-[270px]">
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
                className="flex items-center gap-2 bg-white text-stone-900 font-semibold px-4 sm:px-5 py-2 rounded-full mt-4 hover:bg-stone-200 transition text-xs sm:text-sm"
              >
                <Github size={16} className="sm:size-[18px]" /> View Code
              </a>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-4 md:px-6 space-y-3 sm:space-y-5">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white break-words px-2 sm:px-0">
                {project.title}
              </h3>

              <p className="text-stone-400 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose mx-auto lg:mx-0 max-w-full break-words px-2 sm:px-0">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start px-2 sm:px-0">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-stone-800 text-stone-300 px-3 py-1.5 rounded-full text-xs font-medium border border-stone-700 hover:bg-stone-700 transition whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;