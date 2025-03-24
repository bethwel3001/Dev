// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const roles = ["Developer", "Designer", "Student", "Tech Enthusiast"];

  return (
    <section id="home" className="h-screen flex items-center justify-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
          >
            <img 
              src="/assets/profile.jpg" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="text-center md:text-left">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm Be Tu
            </motion.h1>
            <motion.div
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="mr-2">I'm a</span>
              <span className="text-blue-500 dark:text-blue-400 font-semibold">
                {roles[0]}
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;