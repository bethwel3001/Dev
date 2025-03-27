import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { FiGithub, FiMail } from 'react-icons/fi';
import profileImage from '../assets/profile.jpg';

const Home = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const roles = ["Software Engineer", "Fullstack Developer", "Tech Enthusiast"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="h-screen flex items-center justify-center px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md md:max-w-4xl"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
             {/* Perfect circle with maintained size */}
             <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative aspect-square w-40 md:w-72 rounded-full overflow-hidden border-[5px] border-white dark:border-green-800 shadow-xl md:shadow-2xl"
          >
            <img 
              src={profileImage} 
              alt="Profile"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          
          <div className="text-center md:text-left w-full">
            <motion.h1 
              className="text-2xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm Be Tu
            </motion.h1>
            
            <motion.div
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 min-h-[2rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="mr-2">I'm a</span>
              <span className="text-blue-500 dark:text-blue-400 font-semibold">
                {roles[currentRole]}
              </span>
            </motion.div>

            <motion.p
              className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-5 md:mb-8 px-6 md:px-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I am a developer with a passion for programming and technology. I am skilled in Python, React, JavaScript and many other programming languages.
            </motion.p>

            <div className="flex flex-row gap-3 justify-center md:justify-start">
              <motion.a
                href="https://github.com/bethwel3001"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-1 px-4 py-2 bg-green-600 text-white rounded-md text-sm md:text-base hover:bg-green-700 transition-colors w-28 md:w-32"
              >
                <FiGithub className="text-base md:text-lg" />
                GitHub
              </motion.a>
              
              <motion.a
                href="mailto:kiplagabethwelk@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-1 px-4 py-2 bg-blue-500 text-white rounded-md text-sm md:text-base hover:bg-blue-600 transition-colors w-28 md:w-32"
              >
                <FiMail className="text-base md:text-lg" />
                Hire Me
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;