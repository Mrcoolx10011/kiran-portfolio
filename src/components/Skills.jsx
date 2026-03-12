// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Cloud, Wrench, BookOpen } from 'lucide-react';

const skillCategories = [
  {
    label: "Languages",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    bg: "from-blue-50 to-cyan-50",
    border: "border-blue-100",
    skills: ["Java", "Python", "JavaScript (ES6+)", "C/C++", "SQL (MySQL, PostgreSQL)"],
  },
  {
    label: "Backend & Systems",
    icon: Server,
    color: "from-purple-500 to-indigo-500",
    bg: "from-purple-50 to-indigo-50",
    border: "border-purple-100",
    skills: ["Node.js", "Express", "RESTful API Design", "System Optimization"],
  },
  {
    label: "DevOps & Cloud",
    icon: Cloud,
    color: "from-sky-500 to-blue-600",
    bg: "from-sky-50 to-blue-50",
    border: "border-sky-100",
    skills: ["Docker", "CI/CD Pipelines", "Linux Shell Scripting", "Git", "AWS"],
  },
  {
    label: "Tools & Frameworks",
    icon: Wrench,
    color: "from-violet-500 to-purple-600",
    bg: "from-violet-50 to-purple-50",
    border: "border-violet-100",
    skills: ["React", "Next.js", "Flask", "Gemini AI", "Vonage API"],
  },
  {
    label: "Methodologies",
    icon: BookOpen,
    color: "from-indigo-500 to-blue-500",
    bg: "from-indigo-50 to-blue-50",
    border: "border-indigo-100",
    skills: ["Agile SDLC", "Technical Documentation", "Software Design"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Skills = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            A well-rounded skill set across languages, systems, cloud, and modern frameworks.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skillCategories.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={catIdx}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`bg-gradient-to-br ${cat.bg} border ${cat.border} rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`bg-gradient-to-br ${cat.color} p-2.5 rounded-xl shadow-md`}>
                    <Icon className="text-white w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-800">{cat.label}</h3>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1.5 bg-white rounded-lg shadow-sm border border-gray-200 text-sm text-gray-700 font-medium cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.08 + idx * 0.06, duration: 0.25 }}
                      whileHover={{
                        scale: 1.08,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;