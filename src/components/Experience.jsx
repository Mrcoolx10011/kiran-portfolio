// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Briefcase } from 'lucide-react';

const Experience = ({ id }) => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Briefcase className="text-blue-600" />
                  </div>
                  <div>
                    <CardTitle>Web Development Intern</CardTitle>
                    <p className="text-lg font-medium text-gray-600">Wsevolves</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-2 h-2 rounded-full mt-2 mr-3"></div>
                    <span>Contributed to the Menons Environment Exclusive LLP (NGO) project by designing responsive components and landing pages (Login, Sign-Up, Product Display) using Next.js and React.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-2 h-2 rounded-full mt-2 mr-3"></div>
                    <span>Integrated APIs for dynamic NGO-specific product listings and optimized backend functionalities using Node.js and MySQL.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-2 h-2 rounded-full mt-2 mr-3"></div>
                    <span>Deployed the backend application, configured the database, and ensured seamless production server integration.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;