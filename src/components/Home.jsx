import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg'; // Replace with your image path

const roles = ["Computer Science Student", "Startup Founder", "Techie", "Gamer"];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000); // Change role every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="home"
      className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-12"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
        </motion.div>
        <div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Hi, I'm [Your Name]
          </motion.h1>
          <motion.p
            className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            I'm a{' '}
            <span className="text-blue-500 dark:text-blue-400 font-semibold">
              {roles[currentRole]}
            </span>
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;