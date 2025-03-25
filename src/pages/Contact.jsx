import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Contact Info - Now matching form height */}
          <motion.div 
            className="lg:w-1/2 flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-full flex flex-col">
              <h3 className="text-xl font-bold mb-5 text-gray-800 dark:text-white">Contact Info</h3>
              
              <div className="space-y-4 flex-grow">
                <div className="flex items-start">
                  <FiMail className="text-blue-500 dark:text-blue-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Email</h4>
                    <a href="mailto:betu@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                      BeTu@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiMapPin className="text-blue-500 dark:text-blue-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">Kisumu, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Connect</h4>
                <div className="flex space-x-3">
                  <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                    <FiLinkedin className="text-gray-700 dark:text-gray-300" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                    <FiTwitter className="text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Refined */}
          <motion.div 
            className="lg:w-1/2 flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md h-full flex flex-col">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-4 flex-grow">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="flex items-center justify-center w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors mt-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;