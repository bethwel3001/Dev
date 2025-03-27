import { motion } from 'framer-motion';
import { FiGithub, FiMail } from 'react-icons/fi';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Introduction Text */}
          <div className="mb-8">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Hi, I'm <span className="font-semibold">Be Tu</span>, alias Bethwel Kiplagat, the developer behind projects like 
              <span className="font-medium"> Eventify</span>, 
              <span className="font-medium"> ConnectLink</span>, and many more. I'm a passionate developer with a keen interest in technology and software.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              This website is a showcase of my work and a platform to connect with me. 
              Feel free to reach out for any queries or collaborations.
            </p>
          </div>

          {/* Social Links with Colored Icons */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <motion.a
              href="/portfolio"
              whileHover={{ y: -2 }}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Portfolio
            </motion.a>
            
            <motion.a
              href="mailto:kiplagatbethwelk@gmail.com"
              whileHover={{ y: -2 }}
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
            >
              <FiMail className="text-lg" /> Email
            </motion.a>
            
            <motion.a
              href="https://github.com/bethwel3001"
              target="_blank"
              whileHover={{ y: -2 }}
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
            >
              <FiGithub className="text-lg" /> GitHub
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/bethwel-kiplagat-1314912a0/"
              target="_blank"
              whileHover={{ y: -2 }}
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
            >
              <FaLinkedinIn className="text-lg" /> LinkedIn
            </motion.a>
            
            <motion.a
              href="https://wa.me/+254759112532"
              target="_blank"
              whileHover={{ y: -2 }}
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
            >
              <FaWhatsapp className="text-lg" /> WhatsApp
            </motion.a>
          </div>

          {/* Copyright inline with links */}
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            © 2025 Be Tu. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;