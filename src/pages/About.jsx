import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCode, FiBook, FiGlobe, FiAward } from 'react-icons/fi';

const About = () => {
  const cards = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Developer",
      description: "Full-stack expertise with React, Node.js, and modern frameworks. Perfecting is my slogan.",
      borderColor: "border-blue-500"
    },
    {
      icon: <FiBook className="w-6 h-6" />,
      title: "Student",
      description: "Computer Science major with focus on Software Engineering, Fullstack development and IOT.",
      borderColor: "border-green-500"
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "GDG Lead",
      description: "Leading Google Developer Student Club at The Co-operative university of Kenya (2024-2025).",
      borderColor: "border-purple-500"
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Hackathons",
      description: "Participated on several hackathons and Tech-events, pitched with projects focused on social impact.",
      borderColor: "border-yellow-500"
    }
  ];

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'Python', icon: '🐍' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Docker', icon: '🐳' },
    { name: 'GraphQL', icon: '📊' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Git', icon: '🔄' }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`bg-white dark:bg-gray-800 p-5 md:p-6 rounded-xl shadow-lg border-t-4 ${card.borderColor} hover:shadow-xl transition-all`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="text-blue-500 dark:text-blue-400 mb-3">
                {card.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800 dark:text-white">{card.title}</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 md:mt-16 bg-gradient-to-r from-blue-500 to-purple-600 p-6 md:p-8 rounded-xl text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Tech Journey</h3>
          <p className="text-sm md:text-base">
            From coding my first "Hello World" to building scalable applications, I thrive on solving complex problems with elegant solutions. When I'm not coding, I mentor aspiring developers and organize tech events.
          </p>
        </motion.div>

        {/* Simplified Tech Stack */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-gray-900 dark:text-white">
            Technology Stack
          </h3>
          <div className="py-4">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {techStack.map((tech, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center w-16"
                >
                  <span className="text-2xl md:text-3xl">
                    {tech.icon}
                  </span>
                  <span className="text-xs md:text-sm mt-2 text-gray-600 dark:text-gray-400">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;