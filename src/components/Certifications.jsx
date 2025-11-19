
// import { Award } from 'lucide-react';

// const Certifications = ({ certifications, isDark }) => {
//   return (
//     <section className="relative py-20 px-4">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//           Certifications
//         </h2>
//         <div className="space-y-4">
//           {certifications.map((cert, index) => (
//             <div
//               key={index}
//               className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:translate-x-2"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
//                   <Award size={24} />
//                 </div>
//                 {/* <div className="flex-1">
//                   <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
//                   <p className="text-gray-400">{cert.issuer} • {cert.year}</p>
//                 </div> */}
//                 <div className="flex-1">
//   <a
//     href={cert.link}
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <h3 className="text-xl font-bold mb-1 text-cyan-400 hover:text-cyan-300 transition-colors">
//       {cert.title}
//     </h3>
//   </a>

//   <p className="text-gray-400">
//     {cert.issuer} • {cert.year}
//   </p>
// </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;


import { Award, ExternalLink } from 'lucide-react';

const Certifications = ({ certifications, isDark }) => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${
          isDark 
            ? 'from-cyan-400 to-purple-400' 
            : 'from-cyan-600 to-purple-600'
        } bg-clip-text text-transparent`}>
          Certifications & Achievements
        </h2>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                isDark
                  ? 'bg-white/5 border border-white/10 hover:border-white/20'
                  : 'bg-white border border-gray-200/70 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Subtle Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color || 'from-purple-500 to-pink-500'} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className="relative p-8 text-center">
                {/* Certificate Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${cert.color || 'from-purple-500 to-pink-500'} flex items-center justify-center shadow-xl`}>
                  <Award size={36} className="text-white" />
                </div>

                {/* Title with Link */}
                <a
                  href={cert.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/link"
                >
                  <h3 className={`text-xl md:text-2xl font-bold mb-3 transition-all duration-300 group-hover/link:underline ${
                    isDark ? 'text-white hover:text-cyan-300' : 'text-gray-900 hover:text-purple-700'
                  }`}>
                    {cert.title}
                  </h3>
                </a>

                {/* Issuer & Year */}
                <p className={`text-lg font-medium mb-4 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {cert.issuer}
                </p>
                <p className={`text-sm font-semibold tracking-wider ${
                  isDark ? 'text-cyan-400' : 'text-purple-600'
                }`}>
                  {cert.year}
                </p>

                {/* External Link Indicator */}
                {cert.link && (
                  <div className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink 
                      size={18} 
                      className={`mx-auto ${isDark ? 'text-cyan-400' : 'text-purple-600'}`} 
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Fallback if no certifications */}
        {certifications.length === 0 && (
          <div className="text-center py-12">
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              More certifications coming soon...
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;