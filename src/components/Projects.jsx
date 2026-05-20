
// import { Code, ExternalLink } from 'lucide-react';

// const Projects = ({ projects, isDark }) => {
//   return (
//     <section id="projects" className="relative py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Title */}
//         <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${
//           isDark 
//             ? 'from-cyan-400 to-purple-400' 
//             : 'from-cyan-600 to-purple-600'
//         } bg-clip-text text-transparent`}>
//           Featured Projects
//         </h2>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
//                 isDark
//                   ? 'bg-white/5 border border-white/10 hover:border-white/20'
//                   : 'bg-white border border-gray-200/80 shadow-lg hover:shadow-xl'
//               }`}
//             >
//               {/* Gradient Overlay on Hover */}
//               <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>

//               {/* Card Content */}
//               <div className="relative p-8">
//                 {/* Icon */}
//                 <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 shadow-lg`}>
//                   <Code size={28} className="text-white" />
//                 </div>

//                 {/* Title */}
//                 <h3 className={`text-2xl font-bold mb-3 ${
//                   isDark ? 'text-white' : 'text-gray-900'
//                 }`}>
//                   {project.title}
//                 </h3>

//                 {/* Description */}
//                 <p className={`mb-6 leading-relaxed ${
//                   isDark ? 'text-gray-300' : 'text-gray-600'
//                 }`}>
//                   {project.description}
//                 </p>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2 mb-8">
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                         isDark
//                           ? 'bg-white/10 text-cyan-300 border border-cyan-300/20'
//                           : 'bg-gradient-to-r from-cyan-50 to-purple-50 text-purple-700 border border-purple-200'
//                       }`}
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* View Project Link */}
//                 <a
//                   href={project.link || '#'}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`inline-flex items-center gap-2 font-semibold transition-all duration-300 group/link ${
//                     isDark
//                       ? 'text-cyan-400 hover:text-cyan-300'
//                       : 'text-purple-600 hover:text-purple-700'
//                   }`}
//                 >
//                   View Project
//                   <ExternalLink size={18} className="group-hover/link:translate-x-1 transition-transform" />
//                 </a>
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
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title - Bigger & Attractive */}
        <h2 className={`text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r ${
          isDark 
            ? 'from-cyan-400 via-purple-400 to-violet-400' 
            : 'from-cyan-600 via-purple-600 to-violet-600'
        } bg-clip-text text-transparent`}>
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative flex flex-col h-full overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl ${
                isDark
                  ? 'bg-white/5 border border-white/10 hover:border-cyan-400/30'
                  : 'bg-white border border-gray-200 shadow-xl hover:shadow-2xl'
              }`}
            >
              {/* Gradient Top Accent */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              {/* Card Content */}
              <div className="flex-1 p-8 pb-6 flex flex-col">
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform`}>
                  <Code size={32} className="text-white" />
                </div>

                {/* Title - Bigger */}
                <h3 className={`text-3xl font-bold mb-4 leading-tight ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>

                {/* Description - Improved */}
                <p className={`flex-1 leading-relaxed mb-8 text-[17px] ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                        isDark
                          ? 'bg-white/10 text-cyan-300 border border-cyan-300/30 hover:bg-cyan-400/10'
                          : 'bg-gradient-to-r from-cyan-50 to-purple-50 text-purple-700 border border-purple-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Project Button - Always at Bottom */}
              <div className={`p-8 pt-0 border-t ${isDark ? 'border-white/10' : 'border-gray-100'} mt-auto`}>
                <a
                  href={project.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 group-hover:scale-105 active:scale-95 ${
                    isDark
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-lg shadow-cyan-500/30'
                      : 'bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg shadow-purple-500/30'
                  }`}
                >
                  View Project
                  <ExternalLink size={22} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-3xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;