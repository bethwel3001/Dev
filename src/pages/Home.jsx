import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { FiGithub, FiMail } from 'react-icons/fi';

const Home = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const roles = ["Developer", "Designer", "Student", "Tech Enthusiast"];
  const [currentRole, setCurrentRole] = useState(0);

  // Role rotation every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="h-screen flex items-center justify-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
          >
            <img 
              src="/assets/profile.jpg" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="text-center md:text-left mt-6 md:mt-0">
            <motion.h1 
              className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4"
              initial={{ y: -50 }}
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <motion.a
                href="https://github.com/bethwel3001"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition-colors"
              >
                <FiGithub className="text-lg" />
                GitHub
              </motion.a>
              
              <motion.a
                href="mailto:kiplagabethwek@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors"
              >
                <FiMail className="text-lg" />
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