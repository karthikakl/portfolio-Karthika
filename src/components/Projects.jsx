import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-stone-100"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-bold mb-16 tracking-wide"
      >
        Projects
      </motion.h2>

      <div className="container mx-auto px-6 lg:px-16">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`mb-20 flex flex-col lg:flex-row items-center gap-10 ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image Section */}
            <div className="relative group w-full lg:w-1/2 flex flex-col items-center">
              <div className="overflow-hidden rounded-2xl shadow-lg w-[320px] h-[220px] sm:w-[380px] sm:h-[250px] lg:w-[400px] lg:h-[260px]">
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
                className="flex items-center gap-2 bg-white text-stone-900 font-semibold px-5 py-2 rounded-full mt-4 hover:bg-stone-200 transition"
              >
                <Github size={18} /> View Code
              </a>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left">
              <h3 className="text-3xl font-semibold text-white">{project.title}</h3>
              <p className="text-stone-400 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-stone-800 text-stone-300 px-3 py-1.5 rounded-full text-sm font-medium border border-stone-700 hover:bg-stone-700 transition"
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
