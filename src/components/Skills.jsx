// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ id }) => {
  const skills = {
    languages: ["C", "C++", "Java", "JavaScript", "Python", "PHP", "HTML", "CSS"],
    frameworks: ["React", "NextJs", "Node", "Express", "REST Framework"],
    tools: ["Git", "MySQL", "MongoDB", "PostManAPI", "Google Cloud"]
  };
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id={id} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Languages */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 h-full">
              <h3 className="text-xl font-bold mb-6 text-center">Languages</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.languages.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                      color: "white"
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Frameworks */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 h-full">
              <h3 className="text-xl font-bold mb-6 text-center">Frameworks & Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.frameworks.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                      color: "white"
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Tools */}
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 h-full">
              <h3 className="text-xl font-bold mb-6 text-center">Tools & Platforms</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.tools.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                      color: "white"
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;