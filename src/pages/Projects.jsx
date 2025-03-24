import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce app with React, Node.js, and Stripe integration.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    image: "/images/ecommerce.jpg"
  },
  {
    title: "AI Chatbot",
    description: "Conversational AI using TensorFlow and natural language processing.",
    tags: ["Python", "TensorFlow", "NLP"],
    github: "#",
    live: "#",
    image: "/images/chatbot.jpg"
  },
  {
    title: "Portfolio v1",
    description: "My first portfolio built with vanilla HTML/CSS/JS.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
    image: "/images/portfolio.jpg"
  },{
    title: "AI Chatbot",
    description: "Conversational AI using TensorFlow and natural language processing.",
    tags: ["Python", "TensorFlow", "NLP"],
    github: "#",
    live: "#",
    image: "/images/chatbot.jpg"
  },
  // Add more projects as needed
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <section id="projects" className="py-16 md:py-20 bg-white dark:bg-gray-800 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="relative">
          {/* Left Arrow - Desktop */}
          <button 
            onClick={prevPage}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            aria-label="Previous projects"
          >
            <FiChevronLeft className="text-xl text-gray-700 dark:text-gray-300" />
          </button>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={`${currentPage}-${index}`}
                className="group relative bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 bg-gray-200 dark:bg-gray-600 rounded-full text-xs md:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm md:text-base"
                    >
                      <FiGithub className="mr-1.5" /> Code
                    </a>
                    <a 
                      href={project.live} 
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm md:text-base"
                    >
                      <FiExternalLink className="mr-1.5" /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow - Desktop */}
          <button 
            onClick={nextPage}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            aria-label="Next projects"
          >
            <FiChevronRight className="text-xl text-gray-700 dark:text-gray-300" />
          </button>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevPage}
              className="bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous projects"
            >
              <FiChevronLeft className="text-lg text-gray-700 dark:text-gray-300" />
            </button>
            <div className="flex items-center space-x-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <span 
                  key={i} 
                  className={`w-2 h-2 rounded-full ${currentPage === i ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                />
              ))}
            </div>
            <button 
              onClick={nextPage}
              className="bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next projects"
            >
              <FiChevronRight className="text-lg text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;