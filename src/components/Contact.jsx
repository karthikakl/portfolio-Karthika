import React from "react";
import { CONTACT } from "../constants";
import { SiMinutemailer } from "react-icons/si";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`;

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-stone-100 border-t border-stone-800"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-bold mb-12 tracking-wide"
      >
        Get in Touch
      </motion.h2>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-20">
        {/* Left: Illustration or Icon */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <div className="bg-gradient-to-tr from-stone-800 to-stone-700 p-8 rounded-full shadow-2xl shadow-stone-900/40 hover:scale-105 transition">
            <SiMinutemailer className="text-6xl text-gray-200" />
          </div>
          <p className="text-stone-400 text-sm max-w-xs">
            Feel free to reach out for collaborations, opportunities, or just to
            say hello 👋
          </p>
        </motion.div>

        {/* Right: Contact Details */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.7 }}
          className="bg-stone-900/50 border border-stone-800 rounded-2xl p-8 w-full max-w-md shadow-xl backdrop-blur-md hover:border-stone-700 transition"
        >
          <div className="flex flex-col space-y-6">
            {/* Address */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-stone-800 rounded-full">
                <FaMapMarkerAlt className="text-xl text-stone-300" />
              </div>
              <p className="text-stone-300">{CONTACT.address}</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-stone-800 rounded-full">
                <FaPhoneAlt className="text-xl text-stone-300" />
              </div>
              <p className="text-stone-300">{CONTACT.phoneNo}</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-stone-800 rounded-full">
                <SiMinutemailer className="text-xl text-stone-300" />
              </div>
              <a
                href={emailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-white border-b border-transparent hover:border-stone-500 transition"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
