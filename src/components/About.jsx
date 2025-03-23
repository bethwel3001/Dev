import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">About Me</h2>
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 mb-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Hi, I'm a passionate web developer with experience in React, JavaScript, and Tailwind CSS. I love building modern, responsive, and user-friendly websites.
          </motion.p>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            When I'm not coding, I enjoy contributing to open-source projects, attending tech events, and exploring new technologies.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;