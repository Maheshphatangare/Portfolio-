


// import { Award, ExternalLink } from 'lucide-react';

// const Certifications = ({ certifications, isDark }) => {
//   return (
//     <section className="relative py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Title */}
//         <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${
//           isDark 
//             ? 'from-cyan-400 to-purple-400' 
//             : 'from-cyan-600 to-purple-600'
//         } bg-clip-text text-transparent`}>
//           Certifications & Achievements
//         </h2>

//         {/* Certifications Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {certifications.map((cert, index) => (
//             <div
//               key={index}
//               className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
//                 isDark
//                   ? 'bg-white/5 border border-white/10 hover:border-white/20'
//                   : 'bg-white border border-gray-200/70 shadow-lg hover:shadow-xl'
//               }`}
//             >
//               {/* Subtle Gradient Overlay on Hover */}
//               <div className={`absolute inset-0 bg-gradient-to-br ${cert.color || 'from-purple-500 to-pink-500'} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

//               <div className="relative p-8 text-center">
//                 {/* Certificate Icon */}
//                 <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${cert.color || 'from-purple-500 to-pink-500'} flex items-center justify-center shadow-xl`}>
//                   <Award size={36} className="text-white" />
//                 </div>

//                 {/* Title with Link */}
//                 <a
//                   href={cert.link || '#'}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block group/link"
//                 >
//                   <h3 className={`text-xl md:text-2xl font-bold mb-3 transition-all duration-300 group-hover/link:underline ${
//                     isDark ? 'text-white hover:text-cyan-300' : 'text-gray-900 hover:text-purple-700'
//                   }`}>
//                     {cert.title}
//                   </h3>
//                 </a>

//                 {/* Issuer & Year */}
//                 <p className={`text-lg font-medium mb-4 ${
//                   isDark ? 'text-gray-300' : 'text-gray-700'
//                 }`}>
//                   {cert.issuer}
//                 </p>
//                 <p className={`text-sm font-semibold tracking-wider ${
//                   isDark ? 'text-cyan-400' : 'text-purple-600'
//                 }`}>
//                   {cert.year}
//                 </p>

//                 {/* External Link Indicator */}
//                 {cert.link && (
//                   <div className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <ExternalLink 
//                       size={18} 
//                       className={`mx-auto ${isDark ? 'text-cyan-400' : 'text-purple-600'}`} 
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Optional: Fallback if no certifications */}
//         {certifications.length === 0 && (
//           <div className="text-center py-12">
//             <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
//               More certifications coming soon...
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Certifications;
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = ({ certifications, isDark }) => {
  return (
    <section id="certifications" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <h2 className={`text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r ${isDark ? 'from-cyan-400 via-purple-400 to-violet-400' : 'from-cyan-600 via-purple-600 to-violet-600'} bg-clip-text text-transparent`}>
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-xl border rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                isDark 
                  ? 'border-white/10 hover:border-cyan-400/30' 
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              {/* Certificate Image */}
              <div className="relative h-52 overflow-hidden bg-gray-900">
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${cert.color || 'from-purple-600 to-violet-600'}`}>
                    <Award size={80} className="text-white/80" />
                  </div>
                )}
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className={`text-xl font-bold leading-tight mb-3 min-h-[52px] line-clamp-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {cert.title}
                </h3>

                <p className={`font-medium mb-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                  {cert.issuer}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <Calendar size={16} />
                    <span>{cert.year}</span>
                  </div>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                        isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-purple-600 hover:text-purple-700'
                      }`}
                    >
                      View Certificate
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom Accent Bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${cert.color || 'from-cyan-400 to-purple-500'}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;