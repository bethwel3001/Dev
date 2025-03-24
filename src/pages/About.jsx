import { motion } from 'framer-motion';
import { FiCode, FiBook, FiGlobe, FiAward } from 'react-icons/fi';

const About = () => {
  const cards = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Developer",
      description: "Full-stack expertise with React, Node.js, and modern frameworks."
    },
    {
      icon: <FiBook className="w-8 h-8" />,
      title: "Student",
      description: "Computer Science major with a focus on AI and distributed systems."
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "GDSC Lead",
      description: "Leading Google Developer Student Club at my university."
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Hackathons",
      description: "Won 3 hackathons with projects focused on social impact."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-blue-500 dark:text-blue-400 mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-xl text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">My Journey</h3>
          <p>
            From coding my first "Hello World" to building scalable applications, I thrive on solving complex problems with elegant solutions. When I'm not coding, I mentor aspiring developers and organize tech events.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;