// src/components/Footer.jsx
import React from 'react';
import { Github, Linkedin, Twitter, Code } from 'lucide-react';
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">KM</span>
              </div>
              <h1 className="ml-3 text-xl font-bold">Kiran Mehta</h1>
            </div>
            <p className="mt-3 text-gray-400 max-w-md">
              Computer Science Engineer passionate about building innovative solutions and web applications.
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <motion.a 
              href="https://github.com/Mrcoolx10011" 
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors"
              whileHover={{ y: -5 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/1kiranmehta/" 
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition-colors"
              whileHover={{ y: -5 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="#" 
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors"
              whileHover={{ y: -5 }}
            >
              <Twitter className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="https://www.codewars.com/users/Mrcoolx10011" 
              className="bg-gray-800 p-3 rounded-full hover:bg-yellow-600 transition-colors"
              whileHover={{ y: -5 }}
            >
              <Code className="h-5 w-5" />
            </motion.a>
          </div>
          
          <div className="text-center md:text-right">
            <motion.a 
              href="/resume.pdf" 
              download
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>© {currentYear} Kiran Mehta. All rights reserved.</p>
          <p className="mt-2 text-sm">Designed and built with React, Tailwind CSS, and ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;