Kiran Mehta's Portfolio Website
Overview
This is a modern, responsive portfolio website built with React and Tailwind CSS, showcasing Kiran Mehta's skills, projects, and professional experience. The site features sophisticated animations, a clean UI, and a fully responsive design that works across all device sizes.

View Live Demo | GitHub stars

Portfolio Screenshot

Features
Modern UI/UX Design: Clean, professional interface with smooth animations

Fully Responsive: Works on mobile, tablet, and desktop devices

Interactive Elements: Animated buttons, hover effects, and transitions

Particle Background: Dynamic canvas-based particle system

Section Navigation: Smooth scrolling to different sections

Project Showcase: Highlighted projects with technology tags

Contact Form: Functional contact form with validation

Light/Dark Mode: Automatically adapts to system preferences

Technologies Used
Frontend: React 18

Styling: Tailwind CSS

Animations: Framer Motion

Icons: Lucide React

Build Tool: Vite

Version Control: Git

Project Structure
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
├── index.css
└── assets/
    └── resume.pdf
Getting Started
Prerequisites
Node.js (v16 or higher)

npm (v8 or higher)

Installation
Clone the repository:

bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev
Open your browser at:

http://localhost:5173
Customization Guide
Personal Information
Update your personal details in the following files:

Hero.jsx:

jsx
// Update name, title, and bio
<h1>Hi, I'm <span className="text-blue-600">Your Name</span></h1>
<h2>Your Job Title</h2>
<p>Your professional bio...</p>
Contact.jsx:

jsx
// Update contact information
contactMethods = [
  { title: "Email", details: "your@email.com" },
  { title: "Phone", details: "+1234567890" },
  { title: "Location", details: "Your City, Country" }
]
Projects
Add your projects in Projects.jsx:

jsx
const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  // Add more projects here
];
Skills
Update your skills in Skills.jsx:

jsx
const skills = {
  languages: ["JavaScript", "Python", "Java"],
  frameworks: ["React", "Node.js", "Express"],
  tools: ["Git", "Docker", "AWS"]
};
Profile Image
Place your profile image in the public folder

Update the image path in Hero.jsx:

jsx
<motion.img 
  src="/your-profile-image.jpg" 
  alt="Your Name" 
/>
Resume
Place your resume PDF in the public folder

Update the resume link in Navbar.jsx and Footer.jsx:

jsx
<a href="/your-resume.pdf" download>
Deployment
Build for Production
bash
npm run build
Deploy to Vercel
Create a Vercel account at vercel.com

Install Vercel CLI:

bash
npm install -g vercel
Deploy:

bash
vercel
Deploy to Netlify
Create a Netlify account at netlify.com

Drag and drop the dist folder to Netlify's dashboard

Or connect your GitHub repository for continuous deployment

Animations Customization
The portfolio uses Framer Motion for animations. You can adjust animations in each component:

Hero animations:

jsx
// Hero.jsx
const floating = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4, // Adjust duration
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
Stagger effects:

jsx
// App.jsx
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Adjust stagger delay
      delayChildren: 0.3
    }
  }
};
Adding New Sections
To add a new section:

Create a new component in components/

Add it to App.jsx:

jsx
import NewSection from './components/NewSection';

function App() {
  return (
    <div>
      {/* ...existing components */}
      <NewSection id="new-section" />
    </div>
  );
}
Add navigation to Navbar.jsx:

jsx
const navItems = [
  // ...existing items
  { id: 'new-section', label: 'New Section' }
];
Troubleshooting
Common Issues
Animations not working: Ensure you have installed Framer Motion

bash
npm install framer-motion
Tailwind styles not applied: Make sure Tailwind is properly configured in tailwind.config.js

Particles not showing: Check the console for canvas errors and ensure your browser supports Canvas API

Performance Optimization
Run production build:

bash
npm run build
Optimize images before adding them to the project

Use React.memo for components that don't need frequent re-renders

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Framer Motion for animations

Lucide Icons for beautiful icons

Tailwind CSS for utility-first styling

Vite for fast development environment

Kiran Mehta
Computer Science Engineer
GitHub | LinkedIn | Portfolio

