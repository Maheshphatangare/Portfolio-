// // // src/App.jsx
// // import Header from './components/Header'; // Changed from '/components/Header'
// // import About from './components/About';
// // import Projects from './components/Projects';
// // import Skills from './components/Skills';
// // import Certifications from './components/Certifications';
// // import Contact from './components/Contact';
// // import Footer from './components/Footer';

// // function App() {
// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       <Header />
// //       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         <About />
// //         <Projects />
// //         <Skills />
// //         <Certifications />
// //         <Contact />
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default App;
// // src/App.jsx
import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Code, Award, Send, ExternalLink, Menu, X, Sun, Moon } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/input';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been received. I'll get back to you soon at ${formData.email}`);
    setFormData({ name: '', email: '', message: '' });
  };

  const skills = [
    { name: "JavaScript", level: 100, color: "from-yellow-400 to-yellow-600" },
    { name: "React.js", level: 90, color: "from-cyan-400 to-blue-600" },
    { name: "React-Native", level: 80, color: "from-green-400 to-green-600" },
    { name: "Java", level: 70, color: "from-blue-400 to-indigo-600" },
    { name: "MongoDB", level: 60, color: "from-green-500 to-emerald-600" },
    { name: "Tailwind CSS", level: 50, color: "from-teal-400 to-cyan-600" },
    { name: "Git", level: 40, color: "from-orange-400 to-red-600" },
    { name: "MY SQL", level: 30, color: "from-amber-400 to-orange-600" },
    { name: "FireBase", level: 20, color: "from-teal-400 to-cyan-600" },
  ];

  const projects = [
    {
      title: "AgroFarm (React JS Web Application)",
      description: `Developed a full-stack/front-end application using React JS for a modern, responsive user interface.
Implemented a feature for product browsing/filtering (e.g.,
filtering agricultural products by category, price, or availability).
Designed and built responsive components ensuring optimal
display across mobile and desktop devices.`,
      tech: ["React.js", "UseTransation", "Tailwind", "React-Router"],
      gradient: "from-purple-500 to-pink-500",
      link:"https://agrofarm.rakibedynamics.in/"
      
    },
    // {
    //   title: "Task Management System",
    //   description: "Collaborative project management tool with real-time updates using WebSockets",
    //   tech: ["React", "Firebase", "Tailwind"],
    //   gradient: "from-blue-500 to-cyan-500"
    // },
{
  title: "Voting Application",
  description: `Built a full-stack Java application with RESTful APIs for secure voting and data retrieval using Spring Boot and MySQL. Optimized SQL queries to improve API response time by 40%, enhancing user experience. Ensured 100% secure and transparent voting processes, eliminating manual inefficiencies.`,
  tech: ["React.js", "Vite ","Spring-boot","java", "My SQL", "Tailwind"],
  gradient: "from-red-500 to-teal-500"
},
    {
      title: "LED Screen Manager",
      description: "Developed a dynamic LED screen content management platform that allows users to create, edit, and display custom designs on LED screens for advertising purposes. Integrated a canvas editor to add text, images, and videos, which can be instantly previewed and pushed to live LED displays",
      tech: ["React", "FireBase", "FabricJS","Tailwind"],
      gradient: "from-green-500 to-teal-500",
      link: "https://your-project-link.com"
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      year: "2024"
    },
    {
      title: "Java Certification",
      issuer: "HackerRank",
      year: "2024",
      link: "https://www.hackerrank.com/certificates/86765f281aa8"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      year: "2023"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob top-0 left-0 ${isDark ? 'bg-purple-500' : 'bg-purple-300'}`}></div>
        <div className={`absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-0 right-0 ${isDark ? 'bg-cyan-500' : 'bg-cyan-300'}`}></div>
        <div className={`absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-0 left-1/2 ${isDark ? 'bg-pink-500' : 'bg-pink-300'}`}></div>
      </div>

      <Header
        isScrolled={isScrolled}
        isDark={isDark}
        setIsDark={setIsDark}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <Hero isDark={isDark} />

      <About isDark={isDark} />

      <Projects projects={projects} isDark={isDark} />

      <Skills skills={skills} isDark={isDark} />

      <Certifications certifications={certifications} isDark={isDark} />

      <Contact
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        isDark={isDark}
      />

      <Footer isDark={isDark} />

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          40% { opacity: 1; }
          80% { transform: translateY(20px); opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-scroll { animation: scroll 2s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default App;
// import React, { useState, useEffect } from 'react';
// import { Mail, Github, Linkedin, Code, Award, Send, ExternalLink, Menu, X, Sun, Moon } from 'lucide-react';

// function App() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isDark, setIsDark] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Thank you ${formData.name}! Your message has been received. I'll get back to you soon at ${formData.email}`);
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const skills = [
//     { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
//     { name: "React.js", level: 95, color: "from-cyan-400 to-blue-600" },
//     { name: "Node.js", level: 85, color: "from-green-400 to-green-600" },
//     { name: "Python", level: 80, color: "from-blue-400 to-indigo-600" },
//     { name: "MongoDB", level: 85, color: "from-green-500 to-emerald-600" },
//     { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-cyan-600" },
//     { name: "Git", level: 88, color: "from-orange-400 to-red-600" },
//     { name: "AWS", level: 75, color: "from-amber-400 to-orange-600" },
//   ];

//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description: "Full-stack MERN application with payment integration and real-time inventory management",
//       tech: ["React", "Node.js", "MongoDB", "Stripe"],
//       gradient: "from-purple-500 to-pink-500"
//     },
//     {
//       title: "Task Management System",
//       description: "Collaborative project management tool with real-time updates using WebSockets",
//       tech: ["React", "Firebase", "Tailwind"],
//       gradient: "from-blue-500 to-cyan-500"
//     },
//     {
//       title: "AI Chat Application",
//       description: "Real-time messaging app with AI-powered suggestions and sentiment analysis",
//       tech: ["React", "Python", "AWS"],
//       gradient: "from-green-500 to-teal-500"
//     }
//   ];

//   const certifications = [
//     {
//       title: "AWS Certified Developer – Associate",
//       issuer: "Amazon Web Services",
//       year: "2024"
//     },
//     {
//       title: "React Professional Certification",
//       issuer: "Coursera",
//       year: "2024"
//     },
//     {
//       title: "Full Stack Web Development",
//       issuer: "Udemy",
//       year: "2023"
//     }
//   ];

//   return (
//     <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900'}`}>
//       {/* Animated Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className={`absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob top-0 left-0 ${isDark ? 'bg-purple-500' : 'bg-purple-300'}`}></div>
//         <div className={`absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-0 right-0 ${isDark ? 'bg-cyan-500' : 'bg-cyan-300'}`}></div>
//         <div className={`absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-0 left-1/2 ${isDark ? 'bg-pink-500' : 'bg-pink-300'}`}></div>
//       </div>

//       {/* Navigation */}
//       <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? (isDark ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-lg shadow-lg') : 'bg-transparent'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//               MP
//             </div>
            
//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-8">
//               {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className={`transition-colors duration-300 relative group ${isDark ? 'hover:text-cyan-400' : 'hover:text-purple-600'}`}
//                 >
//                   {item}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
//                 </a>
//               ))}
              
//               {/* Theme Toggle */}
//               <button
//                 onClick={() => setIsDark(!isDark)}
//                 className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-200 hover:bg-gray-300'}`}
//               >
//                 {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-purple-600" />}
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden flex items-center gap-4">
//               <button
//                 onClick={() => setIsDark(!isDark)}
//                 className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-200 hover:bg-gray-300'}`}
//               >
//                 {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-purple-600" />}
//               </button>
//               <button 
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               >
//                 {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {mobileMenuOpen && (
//             <div className="md:hidden pb-4 space-y-3">
//               {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className={`block transition-colors duration-300 ${isDark ? 'hover:text-cyan-400' : 'hover:text-purple-600'}`}
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
//         <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
//           <div className="relative inline-block">
//             <div className="w-40 h-40 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 animate-spin-slow">
//               <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
//                 <div className="w-36 h-36 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600"></div>
//               </div>
//             </div>
//           </div>
          
//           <div className="space-y-4">
//             <h1 className={`text-5xl md:text-7xl font-bold bg-gradient-to-r ${isDark ? 'from-cyan-400 via-purple-400 to-pink-400' : 'from-cyan-600 via-purple-600 to-pink-600'} bg-clip-text text-transparent animate-gradient`}>
//               Mahesh Phatangare
//             </h1>
//             <p className={`text-2xl md:text-3xl font-light ${isDark ? 'text-cyan-300' : 'text-purple-600'}`}>
//               Full Stack Developer
//             </p>
//             <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
//               Crafting exceptional digital experiences with modern web technologies
//             </p>
//           </div>

//           <div className="flex gap-6 justify-center flex-wrap">
//             <a href="https://github.com/Maheshphatangare" target="_blank" rel="noopener noreferrer" 
//                className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full overflow-hidden transition-transform hover:scale-105">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               <span className="relative flex items-center gap-2">
//                 <Github size={20} /> GitHub
//               </span>
//             </a>
//             <a href="https://www.linkedin.com/in/mahesh-phatangare-91b032224/" target="_blank" rel="noopener noreferrer"
//                className="group relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full overflow-hidden transition-transform hover:scale-105">
//               <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               <span className="relative flex items-center gap-2">
//                 <Linkedin size={20} /> LinkedIn
//               </span>
//             </a>
//           </div>

//           <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//             <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
//               <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="relative py-20 px-4">
//         <div className="max-w-4xl mx-auto">
//           <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r ${isDark ? 'from-cyan-400 to-purple-400' : 'from-cyan-600 to-purple-600'} bg-clip-text text-transparent`}>
//             About Me
//           </h2>
//           <div className={`backdrop-blur-lg rounded-3xl p-8 md:p-12 border transition-all duration-300 hover:shadow-2xl ${isDark ? 'bg-white/5 border-white/10 hover:border-cyan-400/50 hover:shadow-cyan-500/20' : 'bg-white/80 border-gray-200 hover:border-purple-400/50 hover:shadow-purple-500/20'}`}>
//             <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
//               Hello! I'm <span className={isDark ? 'text-cyan-400 font-semibold' : 'text-purple-600 font-semibold'}>Mahesh Phatangare</span>, a passionate and detail-oriented software developer specializing in building full-stack web applications. 
//               I work with cutting-edge technologies like <span className={isDark ? 'text-purple-400' : 'text-purple-600'}>React</span>, <span className={isDark ? 'text-green-400' : 'text-green-600'}>Java Spring Boot</span>, and <span className={isDark ? 'text-yellow-400' : 'text-yellow-600'}>Firebase</span> to transform ideas into real-world applications.
//             </p>
//             <p className={`text-lg leading-relaxed mt-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
//               With a strong foundation in computer science and hands-on experience in both frontend and backend development, I'm constantly exploring new technologies, 
//               contributing to open-source projects, and collaborating with developers worldwide to create impactful solutions.
//             </p>
//             <p className={`text-lg leading-relaxed mt-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
//               Based in <span className={isDark ? 'text-cyan-400' : 'text-purple-600'}>Pune, Maharashtra, India</span>, I'm always eager to take on new challenges and push the boundaries of what's possible in web development.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="relative py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//             Featured Projects
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <div 
//                 key={index}
//                 className="group relative bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
                
//                 <div className="relative">
//                   <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}>
//                     <Code size={24} />
//                   </div>
                  
//                   <h3 className="text-xl font-bold mb-3">{project.title}</h3>
//                   <p className="text-gray-400 mb-4">{project.description}</p>
                  
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tech.map((tech, i) => (
//                       <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-300">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
                  
//                   <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
//                     View Project <ExternalLink size={16} />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="relative py-20 px-4">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//             Skills & Expertise
//           </h2>
//           <div className="space-y-6">
//             {skills.map((skill, index) => (
//               <div key={index} className="group">
//                 <div className="flex justify-between mb-2">
//                   <span className="text-lg font-semibold">{skill.name}</span>
//                   <span className="text-cyan-400">{skill.level}%</span>
//                 </div>
//                 <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
//                   <div 
//                     className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
//                     style={{ width: `${skill.level}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Certifications Section */}
//       <section className="relative py-20 px-4">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//             Certifications
//           </h2>
//           <div className="space-y-4">
//             {certifications.map((cert, index) => (
//               <div 
//                 key={index}
//                 className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:translate-x-2"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
//                     <Award size={24} />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
//                     <p className="text-gray-400">{cert.issuer} • {cert.year}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="relative py-20 px-4">
//         <div className="max-w-2xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//             Get In Touch
//           </h2>
//           <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
//                 <input 
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => setFormData({...formData, name: e.target.value})}
//                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all text-white placeholder-gray-500"
//                   placeholder="Your Name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
//                 <input 
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({...formData, email: e.target.value})}
//                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all text-white placeholder-gray-500"
//                   placeholder="your@email.com"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
//                 <textarea 
//                   rows="4"
//                   value={formData.message}
//                   onChange={(e) => setFormData({...formData, message: e.target.value})}
//                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all text-white placeholder-gray-500 resize-none"
//                   placeholder="Your message here..."
//                 ></textarea>
//               </div>
//               <button 
//                 onClick={handleSubmit}
//                 className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-cyan-500/50"
//               >
//                 Send Message 
//                 <Send size={20} className="group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
            
//             <div className="mt-8 pt-8 border-t border-white/10 text-center">
//               <p className="text-gray-400 mb-3">Or reach me directly at:</p>
//               <a 
//                 href="mailto:maheshphatangare420@gmail.com" 
//                 className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
//               >
//                 <Mail size={20} />
//                 maheshphatangare420@gmail.com
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative py-8 px-4 border-t border-white/10">
//         <div className="max-w-6xl mx-auto text-center">
//           <p className="text-gray-400">
//             © 2025 Mahesh Phatangare. Crafted with passion and code.
//           </p>
//         </div>
//       </footer>

//       <style>{`
//         @keyframes blob {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//         }
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         @keyframes scroll {
//           0% { transform: translateY(0); opacity: 0; }
//           40% { opacity: 1; }
//           80% { transform: translateY(20px); opacity: 0; }
//           100% { opacity: 0; }
//         }
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-blob { animation: blob 7s infinite; }
//         .animation-delay-2000 { animation-delay: 2s; }
//         .animation-delay-4000 { animation-delay: 4s; }
//         .animate-gradient { 
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
//         .animate-scroll { animation: scroll 2s ease-in-out infinite; }
//         .animate-fade-in { animation: fade-in 1s ease-out; }
//         .animate-spin-slow { animation: spin 8s linear infinite; }
//         @keyframes spin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default App;