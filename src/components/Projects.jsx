import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project 1',
    description: 'A modern web application built with React and Tailwind CSS.',
    image: 'project1.jpg', // Replace with your image path
    link: '#',
  },
  {
    title: 'Project 2',
    description: 'An e-commerce platform with a responsive design.',
    image: 'project2.jpg', // Replace with your image path
    link: '#',
  },
  {
    title: 'Project 3',
    description: 'A portfolio website showcasing my skills and projects.',
    image: 'project3.jpg', // Replace with your image path
    link: '#',
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 1 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                <a
                  href={project.link}
                  className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;