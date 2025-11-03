import React from "react";
import { EXPERIENCE } from "../constants";
import { motion } from "framer-motion";

const highlightKeywords = (text) => {
  const tealKeywords = [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.io",
    "SaaS",
    "cloud integration",
    "full-stack development",
    "frontend–backend integration",
  ];

  const amberKeywords = [
    "Finance Section",
    "Estimate Management",
    "Expense Management",
    "Payment Management",
    "Customer Module",
  ];

  let highlightedText = text;

  tealKeywords.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");
    highlightedText = highlightedText.replace(
      regex,
      `<span class="text-teal-400 font-semibold">${word}</span>`
    );
  });

  amberKeywords.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");
    highlightedText = highlightedText.replace(
      regex,
      `<span class="text-amber-400 font-semibold">${word}</span>`
    );
  });

  return highlightedText;
};

const Experience = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      <div className="text-center">
        <p className="text-lg font-bold">{EXPERIENCE.role}</p>
        <p className="text-lg">{EXPERIENCE.company}</p>
        <p className="text-lg text-gray-400">{EXPERIENCE.duration}</p>
      </div>

      <ul className="mt-6 max-w-2xl mx-auto list-disc list-inside text-left text-lg">
        {EXPERIENCE.highlights.map((point, index) => (
          <motion.li
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="mb-3 leading-relaxed text-gray-200"
            dangerouslySetInnerHTML={{ __html: highlightKeywords(point) }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Experience;
