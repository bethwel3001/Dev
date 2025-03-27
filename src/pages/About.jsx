import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiCode, FiBook, FiGlobe, FiAward } from 'react-icons/fi';
import { 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiPython,
  SiMongodb,
  // SiDocker,
  SiGraphql,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVercel,
  SiGithub,
  SiGit
} from 'react-icons/si';
import { SiFlask } from 'react-icons/si';
import { SiFastapi } from 'react-icons/si';

const About = () => {
  const cards = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Developer",
      description: "Full-stack expertise with React, Node.js, and modern frameworks. Perfecting is my slogan.",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: <FiBook className="w-6 h-6" />,
      title: "Student",
      description: "Computer Science major with focus on Software Engineering, Fullstack development and IOT.",
      borderColor: "border-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "GDG Lead",
      description: "Leading Google Developer Student Club at The Co-operative university of Kenya (2024-2025).",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Hackathons",
      description: "Participated on several hackathons and Tech-events, pitched with projects focused on social impact.",
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
    }
  ];

  const techStack = [
    { name: 'React', icon: <SiReact className="w-full h-full" />, color: "text-blue-500" },
    { name: 'Node.js', icon: <SiNodedotjs className="w-full h-full" />, color: "text-green-500" },
    { name: 'TypeScript', icon: <SiTypescript className="w-full h-full" />, color: "text-blue-600" },
    { name: 'Tailwind', icon: <SiTailwindcss className="w-full h-full" />, color: "text-cyan-400" },
    { name: 'Python', icon: <SiPython className="w-full h-full" />, color: "text-yellow-500" },
    { name: 'MongoDB', icon: <SiMongodb className="w-full h-full" />, color: "text-green-600" },
    // { name: 'Docker', icon: <SiDocker className="w-full h-full" />, color: "text-blue-400" },
    { name: 'GraphQL', icon: <SiGraphql className="w-full h-full" />, color: "text-pink-600" },
    { name: 'SQL', icon: <SiMysql className="w-full h-full" />, color: "text-blue-600" },
    { name: 'HTML', icon: <SiHtml5 className="w-full h-full" />, color: "text-orange-500" },
    { name: 'CSS', icon: <SiCss3 className="w-full h-full" />, color: "text-blue-500" },
    { name: 'JavaScript', icon: <SiJavascript className="w-full h-full" />, color: "text-yellow-400" },
    { name: 'Vercel', icon: <SiVercel className="w-full h-full" />, color: "text-black dark:text-white" },
    { name: 'GitHub', icon: <SiGithub className="w-full h-full" />, color: "text-gray-800 dark:text-gray-200" },
    { name: 'Git', icon: <SiGit className="w-full h-full" />, color: "text-red-500" },
    { name: 'Flask', icon: <SiFlask className="w-full h-full" />, color: "text-gray-800 dark:text-gray-200"
    },
    { name: 'FastAPI', icon: <SiFastapi className="w-full h-full" />, color: "text-green-600"
    }
  ];

  // Animation state for tech stack
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section id="about" className="py-Flask's black color16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Enhanced Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`${card.bgColor} p-5 md:p-6 rounded-xl shadow-lg border-2 ${card.borderColor} hover:shadow-xl transition-all group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -5,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className={`${card.borderColor.replace('border', 'text')} mb-4 group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800 dark:text-white">{card.title}</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Journey */}
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

        {/* Enhanced Tech Stack */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-gray-900 dark:text-white">
            Technology Stack
          </h3>
          <div className="py-4">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
              {techStack.map((tech, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center justify-center w-16 sm:w-20"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ 
                    scale: 1, 
                    opacity: 1,
                    transition: { 
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 100
                    }
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    y: -5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  animate={{
                    y: [0, -5, 0],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }
                  }}
                  onHoverStart={() => setHoveredTech(index)}
                  onHoverEnd={() => setHoveredTech(null)}
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center bg-white dark:bg-gray-800 shadow-md ${hoveredTech === index ? 'shadow-lg' : ''} transition-all`}>
                    <motion.div
                      className={`w-8 h-8 sm:w-10 sm:h-10 ${tech.color}`}
                      whileHover={{ scale: 1.2 }}
                    >
                      {tech.icon}
                    </motion.div>
                  </div>
                  <span className="text-xs sm:text-sm mt-2 text-gray-600 dark:text-gray-400 font-medium">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;