
import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Code, Award, Send, ExternalLink, Menu, X, Sun, Moon } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/input';
import About from './components/About';
import Projects from './components/Projects';
import ExperAndEduca from './components/ExperAndEduca';
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

      <ExperAndEduca isDark={isDark} />

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
// /////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState, useEffect } from 'react';
// import { Mail, Github, Linkedin, Code, Award, Send, ExternalLink, Menu, X, Sun, Moon, Download, Briefcase, Calendar, Users, Star, TrendingUp, Zap, Target, Rocket, Heart } from 'lucide-react';

// function App() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isDark, setIsDark] = useState(true);
//   const [activeTab, setActiveTab] = useState('all');
//   const [countUp, setCountUp] = useState({ projects: 0, clients: 0, experience: 0 });

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Counter animation
//   useEffect(() => {
//     const duration = 2000;
//     const steps = 60;
//     const increment = duration / steps;
   
//     let step = 0;
//     const timer = setInterval(() => {
//       step++;
//       setCountUp({
//         projects: Math.min(Math.floor((15 * step) / steps), 15),
//         clients: Math.min(Math.floor((50 * step) / steps), 50),
//         experience: Math.min(Math.floor((3 * step) / steps), 3)
//       });
     
//       if (step >= steps) clearInterval(timer);
//     }, increment);
//     return () => clearInterval(timer);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Thank you ${formData.name}! Your message has been received. I'll get back to you soon at ${formData.email}`);
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const skills = [
//     { name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-600", icon: "JS" },
//     { name: "React.js", level: 98, color: "from-cyan-400 to-blue-600", icon: "⚛️" },
//     { name: "Node.js", level: 90, color: "from-green-400 to-green-600", icon: "🟢" },
//     { name: "Python", level: 85, color: "from-blue-400 to-indigo-600", icon: "🐍" },
//     { name: "MongoDB", level: 88, color: "from-green-500 to-emerald-600", icon: "🍃" },
//     { name: "Tailwind CSS", level: 95, color: "from-teal-400 to-cyan-600", icon: "💨" },
//     { name: "Git & GitHub", level: 92, color: "from-orange-400 to-red-600", icon: "📦" },
//     { name: "AWS", level: 80, color: "from-amber-400 to-orange-600", icon: "☁️" },
//     { name: "Docker", level: 82, color: "from-blue-400 to-blue-600", icon: "🐳" },
//     { name: "TypeScript", level: 88, color: "from-blue-500 to-blue-700", icon: "TS" },
//     { name: "Next.js", level: 90, color: "from-gray-700 to-gray-900", icon: "▲" },
//     { name: "Redux", level: 85, color: "from-purple-500 to-purple-700", icon: "🔄" }
//   ];

//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description: "Full-stack MERN application with payment integration, real-time inventory management, and admin dashboard",
//       tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
//       gradient: "from-purple-500 to-pink-500",
//       category: "fullstack",
//       stats: { users: "10K+", rating: "4.8/5" }
//     },
//     {
//       title: "Real-Time Chat Application",
//       description: "WebSocket-based messaging platform with end-to-end encryption, group chats, and file sharing",
//       tech: ["React", "Socket.io", "Node.js", "PostgreSQL"],
//       gradient: "from-blue-500 to-cyan-500",
//       category: "fullstack",
//       stats: { messages: "1M+", uptime: "99.9%" }
//     },
//     {
//       title: "AI-Powered Analytics Dashboard",
//       description: "Data visualization platform with machine learning predictions and real-time insights",
//       tech: ["React", "Python", "TensorFlow", "D3.js"],
//       gradient: "from-green-500 to-teal-500",
//       category: "ai",
//       stats: { accuracy: "94%", data: "5TB+" }
//     },
//     {
//       title: "Social Media Platform",
//       description: "Full-featured social network with posts, stories, live streaming, and recommendation engine",
//       tech: ["Next.js", "GraphQL", "AWS", "MongoDB"],
//       gradient: "from-orange-500 to-red-500",
//       category: "fullstack",
//       stats: { users: "50K+", engagement: "85%" }
//     },
//     {
//       title: "Task Management System",
//       description: "Collaborative project management tool with Kanban boards, time tracking, and team analytics",
//       tech: ["React", "Firebase", "Tailwind", "Redux"],
//       gradient: "from-indigo-500 to-purple-500",
//       category: "frontend",
//       stats: { tasks: "100K+", teams: "500+" }
//     },
//     {
//       title: "Portfolio Builder SaaS",
//       description: "No-code platform for creating professional portfolios with templates and custom domains",
//       tech: ["React", "Node.js", "PostgreSQL", "AWS S3"],
//       gradient: "from-pink-500 to-rose-500",
//       category: "fullstack",
//       stats: { portfolios: "5K+", templates: "50+" }
//     }
//   ];

//   const experiences = [
//     {
//       title: "Senior Full Stack Developer",
//       company: "Tech Innovations Inc.",
//       period: "2023 - Present",
//       location: "Pune, India",
//       description: "Leading development of scalable web applications, mentoring junior developers, and architecting microservices",
//       achievements: ["Increased app performance by 60%", "Led team of 5 developers", "Deployed 10+ production features"]
//     },
//     {
//       title: "Full Stack Developer",
//       company: "Digital Solutions Ltd.",
//       period: "2022 - 2023",
//       location: "Mumbai, India",
//       description: "Developed and maintained multiple client projects using MERN stack and cloud technologies",
//       achievements: ["Built 8 client applications", "Reduced load time by 40%", "Implemented CI/CD pipeline"]
//     },
//     {
//       title: "Junior Developer",
//       company: "StartUp Hub",
//       period: "2021 - 2022",
//       location: "Remote",
//       description: "Contributed to various web development projects and learned modern development practices",
//       achievements: ["Completed 15+ features", "Fixed 100+ bugs", "Improved code quality by 30%"]
//     }
//   ];

//   const certifications = [
//     {
//       title: "AWS Certified Solutions Architect",
//       issuer: "Amazon Web Services",
//       year: "2024",
//       icon: "☁️",
//       color: "from-orange-500 to-yellow-500"
//     },
//     {
//       title: "Meta Front-End Developer Professional",
//       issuer: "Meta (Facebook)",
//       year: "2024",
//       icon: "⚛️",
//       color: "from-blue-500 to-cyan-500"
//     },
//     {
//       title: "Google Cloud Professional",
//       issuer: "Google Cloud",
//       year: "2023",
//       icon: "🌐",
//       color: "from-red-500 to-yellow-500"
//     },
//     {
//       title: "MongoDB Certified Developer",
//       issuer: "MongoDB University",
//       year: "2023",
//       icon: "🍃",
//       color: "from-green-500 to-emerald-500"
//     },
//     {
//       title: "Docker Certified Associate",
//       issuer: "Docker Inc.",
//       year: "2023",
//       icon: "🐳",
//       color: "from-blue-400 to-blue-600"
//     },
//     {
//       title: "Full Stack Web Development",
//       issuer: "Udemy",
//       year: "2022",
//       icon: "💻",
//       color: "from-purple-500 to-pink-500"
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "CTO, TechCorp",
//       image: "SJ",
//       text: "Mahesh delivered exceptional work on our e-commerce platform. His attention to detail and problem-solving skills are outstanding!",
//       rating: 5
//     },
//     {
//       name: "Rajesh Kumar",
//       role: "Product Manager, StartupXYZ",
//       image: "RK",
//       text: "Working with Mahesh was a pleasure. He consistently exceeded expectations and brought innovative solutions to complex challenges.",
//       rating: 5
//     },
//     {
//       name: "Emily Chen",
//       role: "Founder, DesignHub",
//       image: "EC",
//       text: "Highly skilled developer who transformed our vision into reality. The project was delivered on time and exceeded our quality standards.",
//       rating: 5
//     }
//   ];

//   const services = [
//     {
//       icon: <Code size={32} />,
//       title: "Web Development",
//       description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js",
//       gradient: "from-blue-500 to-cyan-500"
//     },
//     {
//       icon: <Zap size={32} />,
//       title: "API Development",
//       description: "RESTful and GraphQL APIs with robust authentication, caching, and documentation",
//       gradient: "from-yellow-500 to-orange-500"
//     },
//     {
//       icon: <Target size={32} />,
//       title: "UI/UX Design",
//       description: "Beautiful, responsive interfaces with focus on user experience and accessibility",
//       gradient: "from-purple-500 to-pink-500"
//     },
//     {
//       icon: <Rocket size={32} />,
//       title: "Performance Optimization",
//       description: "Speed optimization, SEO improvements, and scalability enhancements",
//       gradient: "from-green-500 to-teal-500"
//     }
//   ];

//   const filteredProjects = activeTab === 'all'
//     ? projects
//     : projects.filter(p => p.category === activeTab);

//   return (
//     <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900'}`}>
//       {/* Animated Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className={`absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob top-0 left-0 ${isDark ? 'bg-purple-500' : 'bg-purple-300'}`}></div>
//         <div className={`absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-0 right-0 ${isDark ? 'bg-cyan-500' : 'bg-cyan-300'}`}></div>
//         <div className={`absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-0 left-1/2 ${isDark ? 'bg-pink-500' : 'bg-pink-300'}`}></div>
//       </div>

//       {/* Navigation */}
//       <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? (isDark ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl shadow-purple-500/10' : 'bg-white/95 backdrop-blur-lg shadow-lg') : 'bg-transparent'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="text-2xl font-bold">
//               <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//                 Mahesh.dev
//               </span>
//             </div>
           
//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-8">
//               {['Home', 'About', 'Services', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className={`transition-colors duration-300 relative group ${isDark ? 'hover:text-cyan-400' : 'hover:text-purple-600'}`}
//                 >
//                   {item}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
//                 </a>
//               ))}
             
//               <button
//                 onClick={() => setIsDark(!isDark)}
//                 className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-200 hover:bg-gray-300'}`}
//               >
//                 {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-purple-600" />}
//               </button>
//             </div>
//             <div className="md:hidden flex items-center gap-4">
//               <button
//                 onClick={() => setIsDark(!isDark)}
//                 className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-200 hover:bg-gray-300'}`}
//               >
//                 {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-purple-600" />}
//               </button>
//               <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//                 {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//           {mobileMenuOpen && (
//             <div className="md:hidden pb-4 space-y-3">
//               {['Home', 'About', 'Services', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
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
//       <section id="home" classType="relative min-h-screen flex items-center justify-center px-4 pt-20">
//         {/* ... hero content you already had ... */}
//         {/* (keeping your existing hero section unchanged for brevity) */}
//       </section>

//       {/* About Section */}
//       <section id="about" className="relative py-20 px-4">
//         {/* ... your existing about section ... */}
//       </section>

//       {/* Services Section */}
//       <section id="services" className="relative py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${isDark ? 'from-cyan-400 to-purple-400' : 'from-cyan-600 to-purple-600'} bg-clip-text text-transparent`}>
//               My Services
//             </h2>
//             <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
//               High-quality development services tailored to your needs
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className={`group relative overflow-hidden rounded-3xl p-8 backdrop-blur-lg border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
//                   isDark
//                     ? 'bg-white/5 border-white/10 hover:border-cyan-400/50 hover:shadow-cyan-500/20'
//                     : 'bg-white/80 border-gray-200 hover:border-purple-400/50 hover:shadow-purple-500/20'
//                 }`}
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
//                 <div className={`relative z-10 mb-6 p-4 w-fit rounded-2xl bg-gradient-to-br ${service.gradient}`}>
//                   {service.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
//                 <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="relative py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${isDark ? 'from-cyan-400 to-purple-400' : 'from-cyan-600 to-purple-600'} bg-clip-text text-transparent`}>
//               Featured Projects
//             </h2>
//             <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
//               Some of my recent work that I'm proud of
//             </p>
//           </div>

//           <div className="flex justify-center gap-4 mb-12 flex-wrap">
//             {['all', 'fullstack', 'frontend', 'ai'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-6 py-3 rounded-full font-medium transition-all ${
//                   activeTab === tab
//                     ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
//                     : isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-200 hover:bg-gray-300'
//                 }`}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             ))}
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProjects.map((project, index) => (
//               <div
//                 key={index}
//                 className={`group relative overflow-hidden rounded-3xl backdrop-blur-lg border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
//                   isDark
//                     ? 'bg-white/5 border-white/10 hover:border-cyan-400/50 hover:shadow-cyan-500/20'
//                     : 'bg-white/80 border-gray-200 hover:border-purple-400/50 hover:shadow-purple-500/20'
//                 }`}
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
//                 <div className="relative p-8">
//                   <div className="flex justify-between items-start mb-4">
//                     <h3 className="text-2xl font-bold">{project.title}</h3>
//                     <ExternalLink size={20} className="opacity-60 group-hover:opacity-100" />
//                   </div>
//                   <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                  
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.tech.map((t, i) => (
//                       <span key={i} className={`px-3 py-1 rounded-full text-sm ${isDark ? 'bg-white/10' : 'bg-gray-200'}`}>
//                         {t}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex justify-between text-sm">
//                     <span className="flex items-center gap-1">
//                       <Users size={16} /> {project.stats.users || project.stats.portfolios}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <Star size={16} className="text-yellow-500" /> {project.stats.rating || project.stats.accuracy}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="relative py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${isDark ? 'from-cyan-400 to-purple-400' : 'from-cyan-600 to-purple-600'} bg-clip-text text-transparent`}>
//               Experience & Education
//             </h2>
//           </div>

//           <div className="space-y-8">
//             {experiences.map((exp, index) => (
//               <div
//                 key={index}
//                 className={`flex gap-6 backdrop-blur-lg rounded-3xl p-8 border transition-all duration-300 hover:shadow-2xl ${
//                   isDark ? 'bg-white/5 border-white/10 hover:border-cyan-400/50' : 'bg-white/80 border-gray-200 hover:border-purple-400/50'
//                 }`}
//               >
//                 <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${index === 0 ? 'from-cyan-500 to-purple-500' : 'from-purple-500 to-pink-500'}`}>
//                   <Briefcase size={32} className="text-white" />
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
//                     <h3 className="text-2xl font-bold">{exp.title}</h3>
//                     <span className={`text-sm ${isDark ? 'text-cyan-400' : 'text-purple-600'}`}>{exp.period}</span>
//                   </div>
//                   <p className={`font-medium mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
//                     {exp.company} • {exp.location}
//                   </p>
//                   <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>
//                   <ul className="space-y-1">
//                     {exp.achievements.map((ach, i) => (
//                       <li key={i} className={`flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
//                         <div className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-cyan-400' : 'bg-purple-600'}`}></div>
//                         {ach}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="relative py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${isDark ? 'from-cyan-400 to-purple-400' : 'from-cyan-600 to-purple-600'} bg-clip-text text-transparent`}>
//               Technical Skills
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {skills.map((skill, index) => (
//               <div key={index} className="space-y-3">
//                 <div className="flex justify-between">
//                   <div className="flex items-center gap-3">
//                     <span className="text-2xl">{skill.icon}</span>
//                     <span className="font-semibold text-lg">{skill.name}</span>
//                   </div>
//                   <span className={isDark ? 'text-cyan-400' : 'text-purple-600'}>{skill.level}%</span>
//                 </div>
//                 <div className={`w-full h-4 rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-200'} overflow-hidden`}>
//                   <div
//                     className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
//                     style={{ width: `${skill.level}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Certifications */}
//           <div className="mt-20">
//             <h3 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-cyan-400' : 'text-purple-600'}`}>
//               Certifications
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {certifications.map((cert, index) => (
//                 <div
//                   key={index}
//                   className={`rounded-2xl p-6 backdrop-blur-lg border text-center transition-all hover:scale-105 ${
//                     isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-gray-200'
//                   }`}
//                 >
//                   <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center text-4xl`}>
//                     {cert.icon}
//                   </div>
//                   <h4 className="font-bold text-lg mb-1">{cert.title}</h4>
//                   <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{cert.issuer}</p>
//                   <p className={`text-sm mt-2 ${isDark ? 'text-cyan-400' : 'text-purple-600'}`}>{cert.year}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="relative py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${isDark ? 'from-cyan-400 to-purple-400' : 'from-cyan-600 to-purple-600'} bg-clip-text text-transparent`}>
//               What Clients Say
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((t, index) => (
//               <div
//                 key={index}
//                 className={`rounded-3xl p-8 backdrop-blur-lg border transition-all hover:shadow-2xl ${
//                   isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-gray-200'
//                 }`}
//               >
//                 <div className="flex items-center gap-1 mb-4">
//                   {[...Array(t.rating)].map((_, i) => (
//                     <Star key={i} size={20} className="fill-yellow-500 text-yellow-500" />
//                   ))}
//                 </div>
//                 <p className={`italic mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>"{t.text}"</p>
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold">
//                     {t.image}
//                   </div>
//                   <div>
//                     <h4 className="font-bold">{t.name}</h4>
//                     <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="relative py-20 px-4">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${isDark ? 'from-cyan-400 to-purple-400' : 'from-cyan-600 to-purple-600'} bg-clip-text text-transparent`}>
//               Get In Touch
//             </h2>
//             <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
//               Have a project in mind? Let's work together!
//             </p>
//           </div>

//           <div className={`rounded-3xl p-8 md:p-12 backdrop-blur-lg border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-gray-200'}`}>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   required
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   className={`w-full px-6 py-4 rounded-2xl backdrop-blur-lg border transition-all focus:outline-none focus:ring-4 focus:ring-cyan-500/50 ${
//                     isDark ? 'bg-white/10 border-white/20 placeholder-gray-500' : 'bg-gray-100 border-gray-300'
//                   }`}
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   required
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   className={`w-full px-6 py-4 rounded-2xl backdrop-blur-lg border transition-all focus:outline-none focus:ring-4 focus:ring-purple-500/50 ${
//                     isDark ? 'bg-white/10 border-white/20 placeholder-gray-500' : 'bg-gray-100 border-gray-300'
//                   }`}
//                 />
//               </div>
//               <textarea
//                 rows="6"
//                 placeholder="Your Message"
//                 required
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 className={`w-full px-6 py-4 rounded-2xl backdrop-blur-lg border transition-all focus:outline-none focus:ring-4 focus:ring-pink-500/50 resize-none ${
//                   isDark ? 'bg-white/10 border-white/20 placeholder-gray-500' : 'bg-gray-100 border-gray-300'
//                 }`}
//               ></textarea>
//               <button
//                 type="submit"
//                 className="group relative px-12 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl font-bold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center gap-3 mx-auto"
//               >
//                 <Send size={22} className="group-hover:translate-x-1 transition-transform" />
//                 Send Message
//               </button>
//             </form>
//           </div>

//           <div className="mt-16 text-center">
//             <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
//               Or reach me directly at{' '}
//               <a href="mailto:maheshphatangare420@gmail.com" className="font-bold text-cyan-400 hover:underline">
//                 maheshphatangare420@gmail.com
//               </a>
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className={`py-12 border-t ${isDark ? 'border-white/10' : 'border-gray-300'}`}>
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <div className="flex justify-center gap-6 mb-6">
//             <a href="https://github.com/Maheshphatangare" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
//               <Github size={28} />
//             </a>
//             <a href="https://www.linkedin.com/in/mahesh-phatangare-91b032224/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
//               <Linkedin size={28} />
//             </a>
//             <a href="mailto:maheshphatangare420@gmail.com" className="hover:scale-125 transition-transform">
//               <Mail size={28} />
//             </a>
//           </div>
//           <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
//             © 2025 Mahesh Phatangare. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;