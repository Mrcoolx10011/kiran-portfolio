// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Card = ({ children, className }) => (
  <div className={`border rounded-xl bg-white shadow-sm overflow-hidden flex flex-col ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-6">
    {children}
  </div>
);

const CardTitle = ({ children }) => (
  <h3 className="text-xl font-bold">{children}</h3>
);

const CardContent = ({ children }) => (
  <div className="p-6 flex-grow">
    {children}
  </div>
);

const CardFooter = ({ children }) => (
  <div className="p-6 border-t">
    {children}
  </div>
);

const Projects = ({ id }) => {
  const projects = [
    {
      title: "Artificial Intelligence (AI) Powered Automated Systems",
      description: "A secure, webhook-based asynchronous communication system for bi-directional audio streams. Leverages prompt engineering and context management to automate the resolution of 80% of common user queries.",
      technologies: ["Python", "Gemini AI", "Flask", "Ngrok"],
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
      link: "#",
      githubLink: "#",
      badge: "GitHub",
    },
    {
      title: "CleverMeta Marketplace",
      description: "A full-stack platform with secure transaction handling and an API-driven architecture. Refactored backend logic to reduce operational costs by 70%, significantly improving system cost-efficiency.",
      technologies: ["React", "Node.js", "Polygon (Web3)"],
      image: "https://images.unsplash.com/photo-1640231912426-0d5feab0b9f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE5GVHxlbnwwfHwwfHx8MA%3D%3D",
      link: "https://clever-meta-nft-minting.vercel.app/",
      githubLink: "#",
      badge: "Live Demo",
    },
    {
      title: "NGO E-commerce Platform",
      description: "A responsive e-commerce platform for an NGO featuring product listings, user authentication, and secure transactions. Built with Next.js, React, Node.js, and MySQL.",
      technologies: ["Next.js", "React", "Node.js", "MySQL"],
      image: "https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RSUyMGNvbW1lcmNlfGVufDB8fDB8fHww",
      link: "https://ngo-fianl.vercel.app/",
      githubLink: "#",
      badge: "Live Demo",
    },
    {
      title: "Tobi – Smart To-Do App",
      description: "A modern, gamified, and beautifully animated To-Do List web application built with React. Features task analytics, XP system, drag-and-drop, and multi-theme support.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Lucide", "Chart.js"],
      image: "https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG8lMjBkbyUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
      link: "https://advanced-todo-m8f7.vercel.app/",
      githubLink: "#",
      badge: "Live Demo",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={index * 0.2}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-10"></div>
                  {project.badge && (
                    <span className="absolute top-3 right-3 z-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                      {project.badge}
                    </span>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.githubLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-4 w-4 mr-2" /> Code
                    </motion.a>
                    <motion.a
                      href={project.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-md flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" /> Demo
                    </motion.a>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
