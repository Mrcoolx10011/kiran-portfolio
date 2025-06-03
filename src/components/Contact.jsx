// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  MessageSquare,
  CheckCircle
} from 'lucide-react';

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('form');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: "Email",
      details: "kiran100112@gmail.com",
      action: "Send me an email",
      link: "mailto:kiran100112@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-purple-500" />,
      title: "Phone",
      details: "+91 8780257946",
      action: "Call me",
      link: "tel:+918780257946"
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-500" />,
      title: "Location",
      details: "India",
      action: "View on map",
      link: "https://maps.app.goo.gl/m8hrQn7yrTXXDAV98"
    }
  ];
  
  const socialLinks = [
    { name: "GitHub", icon: <Github  className="w-5 h-5" />, link: "https://github.com/Mrcoolx10011" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/1kiranmehta/" },
    { name: "CodeWar", icon: <MessageSquare className="w-5 h-5" />, link: "https://www.codewars.com/users/Mrcoolx10011" }
  ];
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  // const floating = {
  //   initial: { y: 0 },
  //   animate: {
  //     y: [0, -10, 0],
  //     transition: {
  //       duration: 3,
  //       repeat: Infinity,
  //       ease: "easeInOut"
  //     }
  //   }
  // };

  return (
    <section id={id} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information & Social */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
              <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                <p className="opacity-90">Fill out the form or reach out directly</p>
              </div>
              
              <div className="p-8">
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
                      variants={fadeIn}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={index * 0.2}
                    >
                      <div className="bg-blue-50 p-3 rounded-lg mr-4">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                        <p className="text-gray-600 mb-3">{method.details}</p>
                        <a 
                          href={method.link} 
                          className="text-blue-600 font-medium inline-flex items-center hover:underline"
                        >
                          {method.action} <span className="ml-1">→</span>
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-blue-50 transition-colors group"
                        whileHover={{ y: -5 }}
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={index * 0.1}
                      >
                        <span className="text-blue-600 group-hover:text-blue-700 transition-colors">
                          {social.icon}
                        </span>
                        <span className="ml-2 font-medium">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
              <div className="p-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                <p className="opacity-90">I'll get back to you as soon as possible</p>
              </div>
              
              <div className="p-8">
                <div className="flex border-b border-gray-200 mb-6">
                  <button 
                    className={`px-4 py-2 font-medium ${activeTab === 'form' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('form')}
                  >
                    Contact Form
                  </button>
                  <button 
                    className={`px-4 py-2 font-medium ${activeTab === 'faq' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('faq')}
                  >
                    FAQ
                  </button>
                </div>
                
                {activeTab === 'form' ? (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {isSubmitted ? (
                      <motion.div 
                        className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        <div className="flex justify-center mb-4">
                          <CheckCircle className="w-12 h-12 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                        <p className="text-green-600">Thank you for reaching out. I'll get back to you soon.</p>
                      </motion.div>
                    ) : (
                      <>
                        <div className="relative">
                          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
                          <div className="relative">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                          <div className="relative">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
                          <div className="relative">
                            <input
                              type="text"
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="Project Inquiry"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Your Message</label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Type your message here..."
                            rows={5}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          ></textarea>
                        </div>
                        
                        <motion.button
                          type="submit"
                          className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg flex items-center justify-center shadow-lg transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5 mr-2" /> Send Message
                            </>
                          )}
                        </motion.button>
                      </>
                    )}
                  </form>
                ) : (
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-xl p-5">
                      <h3 className="font-bold text-lg mb-2">How quickly do you respond to messages?</h3>
                      <p className="text-gray-600">I typically respond to all inquiries within 24 hours on weekdays. If you contact me over the weekend, I'll get back to you first thing Monday morning.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-xl p-5">
                      <h3 className="font-bold text-lg mb-2">What types of projects do you work on?</h3>
                      <p className="text-gray-600">I specialize in web development using modern technologies like React, Next.js, and Node.js. I'm open to full-stack projects, frontend development, and API integrations.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-xl p-5">
                      <h3 className="font-bold text-lg mb-2">Do you offer freelance services?</h3>
                      <p className="text-gray-600">Yes, I'm available for freelance projects and contract work. Please include details about your project timeline and requirements in your message.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Location Map */}
        
      </div>
    </section>
  );
};

export default Contact;