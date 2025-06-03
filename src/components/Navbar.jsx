// src/components/Navbar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Navbar = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white font-bold text-xl">KM</span>
          </motion.div>
          <h1 className="ml-3 text-xl font-bold">Kiran Mehta</h1>
        </div>
        
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'hover:bg-gray-100'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        
        <a 
          href="/resume.pdf" 
          download
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-md flex items-center shadow-md transition-all"
        >
          <Download className="mr-2 h-4 w-4" /> Resume
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;