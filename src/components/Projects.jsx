// import React from 'react';
// import '../App.css';
// function Projects() {
//   const projects = [
//     {
//       title: "Book Store API",
//       description: "A complete backend system for managing an online bookstore. Developed with Java, Spring Boot, and MySQL.",
//       link: "https://github.com/Maheshphatangare/BookStoreapi",
//     },
//     {
//       title: "Voting Application",
//       description: "A full-stack web app where users can register, log in, and vote securely. Built using Java, Spring Boot, Thymeleaf, JPA, and H2 Database. It includes user authentication and admin features to manage elections.",
//       link: "https://github.com/Maheshphatangare/Voting-Systemm",
//     },
//     {
//       title: "Portfolio Website",
//       description: "A personal portfolio website (this one!) built with React and Vite, styled with Tailwind CSS to showcase my work and skills.",
//       link: "https://github.com/johndoe/portfolio",
//     },
//     {
//       title: "SpendReckoner",
//       description: "A personal expense tracking application hosted on GitHub. Built with React, Java Spring Boot, and MySQL, SpendReckoner helps users:.",
//       link: "https://github.com/Maheshphatangare/spendreckoner",
//     },
//   ];

//   return (
//     <section className="py-8">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project, index) => (
//           <div key={index} className="bg-white p-6 rounded-lg shadow-md project-card">
//             <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
//             <p className="text-gray-600 mt-2">{project.description}</p>
//             <a
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 hover:underline mt-4 inline-block"
//             >
//               View Project
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;
// src/components/Projects.jsx
import { Code, ExternalLink } from 'lucide-react';

const Projects = ({ projects, isDark }) => {
  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="p-2 text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
             
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}>
                  <Code size={24} />
                </div>
               
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
               
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-300">
                      {tech}
                    </span>
                  ))}
                </div>
               
                {/* <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                  View Project <ExternalLink size={16} />
                </button> */}
                <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
>
  View Project <ExternalLink size={16} />
</a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;