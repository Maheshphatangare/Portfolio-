
// src/components/Projects.jsx
// import { Code, ExternalLink } from 'lucide-react';

// const Projects = ({ projects, isDark }) => {
//   return (
//     <section id="projects" className="relative py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="p-2 text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//           Featured Projects
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group relative bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
//             >
//               <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
             
//               <div className="relative">
//                 <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}>
//                   <Code size={24} />
//                 </div>
               
//                 <h3 className="text-xl font-bold mb-3">{project.title}</h3>
//                 <p className="text-gray-400 mb-4">{project.description}</p>
               
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech, i) => (
//                     <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-300">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
               
//                 {/* <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
//                   View Project <ExternalLink size={16} />
//                 </button> */}
//                 <a
//   href={project.link}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
// >
//   View Project <ExternalLink size={16} />
// </a>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { Code, ExternalLink } from 'lucide-react';

const Projects = ({ projects, isDark }) => {
  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${
          isDark 
            ? 'from-cyan-400 to-purple-400' 
            : 'from-cyan-600 to-purple-600'
        } bg-clip-text text-transparent`}>
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                isDark
                  ? 'bg-white/5 border border-white/10 hover:border-white/20'
                  : 'bg-white border border-gray-200/80 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>

              {/* Card Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <Code size={28} className="text-white" />
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className={`mb-6 leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        isDark
                          ? 'bg-white/10 text-cyan-300 border border-cyan-300/20'
                          : 'bg-gradient-to-r from-cyan-50 to-purple-50 text-purple-700 border border-purple-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href={project.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-semibold transition-all duration-300 group/link ${
                    isDark
                      ? 'text-cyan-400 hover:text-cyan-300'
                      : 'text-purple-600 hover:text-purple-700'
                  }`}
                >
                  View Project
                  <ExternalLink size={18} className="group-hover/link:translate-x-1 transition-transform" />
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