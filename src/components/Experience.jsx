// src/components/Experience.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: "Junior Software Developer",
    company: "WSEvolves",
    period: "May 2025 – Present",
    location: "Vadodara, India",
    type: "Full-Time",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    dotColor: "bg-blue-500",
    bullets: [
      'Engineered "SupportAI," a full-stack customer support platform using React, Node.js, and MongoDB, featuring real-time live chat and AI-powered ticket auto-detection.',
      "Implemented automated ticket routing, response templates, a client management dashboard, significantly improving agent efficiency.",
      "Integrated multi-channel communication with session persistence and automated workflows to streamline team collaboration.",
      "Built a secure authentication system and RESTful APIs with a responsive Tailwind CSS UI, ensuring data security and cross-device compatibility.",
    ],
  },
  {
    title: "Full-Stack Intern",
    company: "WSEvolves",
    period: "Jan 2025 – May 2025",
    location: "Vadodara, India",
    type: "Internship",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    dotColor: "bg-purple-500",
    bullets: [
      "Architected and deployed scalable REST APIs using Node.js, handling 1,000+ concurrent requests with 99.5% uptime.",
      "Streamlined database performance by optimising MySQL queries and caching, reducing response latency by 40%.",
      "Enhanced system frontend efficiency using React/Next.js, leading to 30% faster page load times for 500+ daily users.",
      "Facilitated the delivery of critical system features 2 weeks ahead of schedule in an Agile team.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: [0.19, 1, 0.22, 1] },
  }),
};

const bulletVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const ExperienceCard = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline dot */}
      <motion.div
        className={`absolute left-0 top-6 w-5 h-5 rounded-full ${exp.dotColor} border-4 border-white shadow-md z-10`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 300 }}
      />

      <motion.div
        className={`border ${exp.borderColor} rounded-2xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden`}
        whileHover={{ y: -4 }}
      >
        {/* Card header */}
        <div className={`p-5 md:p-6 ${exp.bgColor}`}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className={`bg-gradient-to-br ${exp.color} p-3 rounded-xl shadow-md flex-shrink-0`}>
                <Briefcase className="text-white w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800">{exp.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <p className={`font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                    {exp.company}
                  </p>
                  <span className="text-gray-400">·</span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white border border-gray-200 text-gray-600">
                    {exp.type}
                  </span>
                </div>
              </div>
            </div>
            <motion.button
              onClick={() => setExpanded((v) => !v)}
              className="flex-shrink-0 p-1.5 rounded-lg hover:bg-white/70 transition-colors text-gray-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={expanded ? "Collapse" : "Expand"}
            >
              {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </motion.button>
          </div>

          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gray-400" />
              {exp.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-gray-400" />
              {exp.location}
            </span>
          </div>
        </div>

        {/* Expandable bullet points */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="bullets"
              variants={bulletVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="p-5 md:p-6 space-y-3">
                {exp.bullets.map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                  >
                    <span
                      className={`mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br ${exp.color}`}
                    />
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Experience = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Professional experience building full-stack products and scalable systems.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="relative">
            <motion.div
              className="absolute left-[9px] top-6 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 z-0"
              initial={{ height: 0 }}
              whileInView={{ height: "calc(100% - 24px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} index={index} />
              ))}
            </div>
          </div>

          {/* Currently working badge */}
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Currently working at WSEvolves
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;