// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Users } from 'lucide-react';

const Card = ({ children, className }) => (
  <div className={`border rounded-xl bg-white shadow-sm overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-6 border-b">
    {children}
  </div>
);

const CardTitle = ({ children }) => (
  <h3 className="text-xl font-bold">{children}</h3>
);

const CardContent = ({ children }) => (
  <div className="p-6">
    {children}
  </div>
);

const About = ({ id }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <GraduationCap className="text-blue-600" />
                </div>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className="font-semibold text-lg">Government Engineering College, Patan</h3>
                  <p className="text-gray-500 text-sm">2022 – 2025 · Patan, India</p>
                  <p className="mt-1">Bachelor of Engineering in Computer Science</p>
                  <p className="mt-1"><span className="font-semibold">CGPA:</span> 8.32/10.0</p>
                  <p className="mt-2 text-sm text-gray-600">
                    <span className="font-medium">Relevant Coursework:</span> Data Structures, Algorithms, Database Systems, Software Engineering, System Design
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg">ITM Vocational University, Vadodara</h3>
                  <p className="text-gray-500 text-sm">2019 – 2022 · Vadodara, India</p>
                  <p className="mt-1">Diploma in Computer Science</p>
                  <p className="mt-1"><span className="font-semibold">CGPA:</span> 9.5/10.0</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Achievements */}
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Trophy className="text-purple-600" />
                </div>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-2 h-2 rounded-full"></div>
                    </div>
                    <span><span className="font-semibold">LeetCode Annual Badge 2021</span> (Top 0.12% of all LeetCoders)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-2 h-2 rounded-full"></div>
                    </div>
                    <span>Google Cloud Swags - January 2023</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-2 h-2 rounded-full"></div>
                    </div>
                    <span>Google Cloud Camp Swags by GFG - January 2024</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-2 h-2 rounded-full"></div>
                    </div>
                    <span>SoloLearn Python Core Course Certification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Responsibilities */}
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="text-indigo-600" />
                </div>
                <CardTitle>Positions of Responsibility</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className="font-semibold text-lg">Tech Lead & Mentor</h3>
                  <p className="text-gray-600">Google Developer Student Club (GDSC)</p>
                  <p className="text-gray-500 text-sm">Jul 2023 – 2025</p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0"></span>
                      Directed a 15-member technical team, overseeing project milestones and engineering best practices.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0"></span>
                      Spearheaded 10+ workshops on System Design and Web Technologies, mentoring 25+ junior developers.
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg">Technical Blog Reviewer</h3>
                  <p className="text-gray-600">ITM Vocational University, Vadodara</p>
                  <p className="text-gray-500 text-sm">Dec 2019 – Jun 2022</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        {/* Extra-curricular */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-6">Extra / Co-curricular Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-3 h-3 rounded-full mt-1.5 mr-3"></div>
                <span>Reviewed articles for ITMVU magazine with a team of 4 technical writers</span>
              </li>
              <li className="flex items-start">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-3 h-3 rounded-full mt-1.5 mr-3"></div>
                <span>Selected as Tech-Lead for GDSC Patan 2023</span>
              </li>
              <li className="flex items-start">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-3 h-3 rounded-full mt-1.5 mr-3"></div>
                <span>Participated in 15-day AI Saksham Program by Edunet, Microsoft and TCS</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-3 h-3 rounded-full mt-1.5 mr-3"></div>
                <span>Active participant in Hacktoberfest (2019, 2020, 2021, 2023, 2024)</span>
              </li>
              <li className="flex items-start">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-3 h-3 rounded-full mt-1.5 mr-3"></div>
                <span>Communication Skills: English, Hindi, Gujarati</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;