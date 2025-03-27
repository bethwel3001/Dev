import { motion } from 'framer-motion';
import { FiGithub, 
         FiExternalLink, 
         FiChevronLeft, 
         FiChevronRight } from 'react-icons/fi';
         
import { useState } from 'react';

// Import images
import EventifyImage from '../assets/Eventify.jpg';
import Connectlink from '../assets/Connectlink.png'
import AI from '../assets/image.png'
import Fundi from '../assets/Fundi.png'
import Travel from '../assets/Travel.png'
import Pika from '../assets/Pika.png'


const projects = [
  {
    title: "Eventify App",
    description: "Full-stack Event management app with React, Flask, and Stripe integration.",
    tags: ["React", "Flask", "MySQL"],
    github: "https://github.com/bethwel3001/Eventify---Event-booking-platform.git",
    live: "https://shiny-buttercream-f01411.netlify.app/",
    image: EventifyImage 
  },
  {
    title: "Project ConnectLink",
    description: "Fullstack web Application that connects youths to organizations and vice versa.",
    tags: ["Flask", "React", "Mysql"],
    github: "https://github.com/bethwel3001/Preject-Connect-Link.git",
    live: "#",
    image: Connectlink 
  },
  {
    title: "AI Chatbot",
    description: "Conversational AI using TensorFlow and natural language processing.",
    tags: ["Python", "TensorFlow", "NLP"],
    github: "https://github.com/bethwel3001/CHATBOT-V1.git",
    live: "#",
    image: AI 
  },
  {
    title: "Fundi Scrapper",
    description: "Web App for scrapping data from websites, processes the content, and outputs it in a structured format.",
    tags: ["Flask", "Beautifulsoup4", "Javascript"],
    github: "https://github.com/bethwel3001/Project-web-scrapper.git",
    live: "#",
    image: Fundi
  },
  {
    title: "Color Pika!",
    description: "A site for generating color palletes for UI design or erbsite designs, aimed for frontend developers.",
    tags: ["React", "Vite", "Framer motion"],
    github: "https://github.com/bethwel3001/Project-color-Pika.git",
    live: "serene-lokum-7b39c8.netlify.app",
    image: Pika 
  },
  {
    title: "Travel website",
    description: "A website for travellers and tourists, identifies key travel destinations in Africa.",
    tags: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/bethwel3001/travel-website-assignment.git",
    live: "#",
    image: Travel 
  },
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const visibleProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <section id="projects" className="py-16 md:py-20 bg-white dark:bg-gray-800">
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
          {/* Desktop Arrows */}
          <button 
            onClick={prevPage}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            aria-label="Previous projects"
          >
            <FiChevronLeft className="text-xl" />
          </button>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                className="group bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2.5 py-1 bg-gray-200 dark:bg-gray-600 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

{/* added "not-allowed" cursor (🚫) when hovering over projects that don't have a live link: */
}
                <div className="flex space-x-4">
                <a 
                  href={project.github !== "#" ? project.github : undefined}
                  className={`flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm ${
                    project.github === "#" ? 'cursor-not-allowed opacity-70' : ''
                  }`}
                  onClick={project.github === "#" ? (e) => e.preventDefault() : undefined}
                >
                  <FiGithub className="mr-1.5" /> Git Repo
                </a>
                <a 
                  href={project.live !== "#" ? project.live : undefined}
                  className={`flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm ${
                    project.live === "#" ? 'cursor-not-allowed opacity-70' : ''
                  }`}
                  onClick={project.live === "#" ? (e) => e.preventDefault() : undefined}
                >
                  <FiExternalLink className="mr-1.5" /> Live Demo
                </a>
              </div>
              </div>
              </motion.div>
            ))}
          </div>
          <button 
            onClick={nextPage}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            aria-label="Next projects"
          >
            <FiChevronRight className="text-xl" />
          </button>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-center mt-8 space-x-4">
            <button onClick={prevPage} className="p-2 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <FiChevronLeft />
            </button>
            <div className="flex items-center space-x-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <span 
                  key={i} 
                  className={`w-2 h-2 rounded-full ${currentPage === i ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                />
              ))}
            </div>
            <button onClick={nextPage} className="p-2 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;