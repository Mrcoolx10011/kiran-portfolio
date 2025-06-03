// src/components/Hero.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Phone, Code,  ArrowRight } from 'lucide-react';

const Hero = ({ id }) => {
  // Create animated particles
  useEffect(() => {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    const colors = [
      'rgba(147, 197, 253, 0.4)', 
      'rgba(199, 210, 254, 0.4)', 
      'rgba(216, 180, 254, 0.4)'
    ];
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.5 - 0.75;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop
    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Connect particles that are close
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(147, 197, 253, ${0.3 - distance/400})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animateParticles);
    };
    
    animateParticles();
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
    }
  };
  
  const floating = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingFast = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id={id} className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Particle background canvas */}
      <canvas 
        id="particle-canvas" 
        className="absolute top-0 left-0 w-full h-full z-0"
      ></canvas>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-white/80 z-10"></div>
      
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center relative z-20">
        <motion.div 
          className="md:w-1/2 mb-12 md:mb-0"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} className="mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm px-3 py-1 rounded-full inline-flex items-center">
              <span className="h-2 w-2 bg-white rounded-full mr-2 animate-pulse"></span>
              Available for opportunities
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-800"
            variants={item}
          >
            <div className="overflow-hidden">
              <motion.div 
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Kiran Mehta</span>
              </motion.div>
            </div>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-4xl text-gray-600 mb-8 font-medium"
            variants={item}
          >
            <div className="overflow-hidden">
              <motion.div 
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Computer Science Engineer
              </motion.div>
            </div>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-700 mb-10 max-w-xl leading-relaxed bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-gray-100 shadow-sm"
            variants={item}
          >
            Passionate about building innovative web applications and solving complex problems with code. Currently pursuing BE in Computer Science at Government Engineering College, Patan.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 mb-10"
            variants={item}
          >
            <a href="#projects">
              <motion.div 
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg shadow-lg flex items-center"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Work</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.div>
            </a>
            <a href="#contact">
              <motion.div 
                className="px-6 py-3 bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 rounded-lg flex items-center shadow-sm"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contact Me</span>
                <Mail className="ml-2 h-4 w-4" />
              </motion.div>
            </a>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-6 mb-8"
            variants={item}
          >
            <div className="flex items-center text-gray-700 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
              <Mail className="h-5 w-5 mr-2 text-blue-500" />
              <span>kiran100112@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-700 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
              <Phone className="h-5 w-5 mr-2 text-blue-500" />
              <span>+91 8780257946</span>
            </div>
          </motion.div>
          
          {/* Social links */}
          <motion.div 
            className="mt-6 flex gap-4"
            variants={item}
          >
           
              
      
            
              
           
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Main profile image container */}
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80"
              variants={floating}
              initial="initial"
              animate="animate"
            >
              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-30"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              {/* Profile image */}
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-full h-full flex items-center justify-center">
                  <motion.img 
                    src="/randomuser1.png" 
                    alt="Kiran Mehta" 
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-6 -left-6 bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, type: "spring" }}
                variants={floatingFast}
              >
                <span>BE</span>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/4 -right-8 bg-gradient-to-r from-purple-500 to-purple-600 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, type: "spring" }}
                variants={floating}
              >
                <span>GD</span>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-0 -left-10 bg-gradient-to-r from-indigo-500 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                variants={floatingFast}
              >
                <Code className="w-6 h-6" />
              </motion.div>
            </motion.div>
            
            {/* Achievement badge */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg rounded-xl p-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, type: "spring", stiffness: 300 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="text-xl font-bold text-white">Top 0.12%</div>
                <div className="text-blue-100 text-sm">LeetCode 2021</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 1.8, duration: 0.5 }
        }}
      >
        <a href="#about" className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white block shadow-md">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </a>
      </motion.div>
      
      {/* Animated background shapes */}
      <motion.div 
        className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-blue-300/30 blur-xl z-0"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-20 w-24 h-24 rounded-full bg-purple-300/30 blur-xl z-0"
        animate={{ 
          scale: [1, 1.8, 1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, -180, -360]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-blue-300/30 to-purple-300/30 blur-xl z-0"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.2, 0.05],
          borderRadius: ["20%", "50%", "20%"]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </section>
  );
};

export default Hero;