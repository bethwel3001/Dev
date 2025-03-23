import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <motion.h1
          className="text-5xl font-bold text-gray-800 dark:text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-gray-600 dark:text-gray-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I build amazing web experiences
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;