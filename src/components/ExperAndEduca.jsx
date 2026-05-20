// import { Mail, Github, Linkedin, Code, Award, Send, ExternalLink,Briefcase, Menu, X, Sun, Moon } from 'lucide-react';
// const ExperAndEduca = ({ isDark }) => {
//     const experiences = [
//     {
//       title: " React Developer",
//       company: "Rakibe Dynamics.",
//       period: "2025 - Present",
//       location: "Nashik, Maharashtra ,India",
//       description: "Leading development of scalable web applications, mentoring junior developers, and architecting microservices",
//       achievements: ["Increased app performance by 60%", "Led team of 5 developers", "Deployed 10+ production features"]
//     },
//     {
//       title: "Master of Computer Applications",
//       company: "Sandip University.",
//       period: "2022 - 2024",
//       location: "Nashik, Maharashtra, India",
//       description: "Developed and maintained multiple client projects using MERN stack and cloud technologies",
//       achievements: [" CGPA : 8.19 ","Built 8 client applications", "Reduced load time by 40%", "Implemented CI/CD pipeline"]
//     },
//     {
//       title: "Bachelor of Computer Science",
//       company: "SMBST College",
//       period: "2021 - 2022",
//       location: "Sangamner,Maharashtra, India",
//       description: "Contributed to various web development projects and learned modern development practices",
//       achievements: [" CGPA : 8.36 ","Completed 15+ features", "Fixed 100+ bugs", "Improved code quality by 30%"]
//     }
//   ];


//   return (
   
//     <section id="experience" className="relative py-20 px-4">
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
//   );
// };

// export default ExperAndEduca ;

import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const ExperAndEduca = ({ isDark }) => {
  const experiences = [
    {
      type: "experience",
      title: "React Developer",
      company: "Rakibe Dynamics",
      period: "2025 - Present",
      location: "Nashik, Maharashtra, India",
      description: "Leading development of scalable web applications, mentoring junior developers, and architecting modern solutions.",
      achievements: [
        "Increased app performance by 60%",
        "Led a team of 5 developers",
        "Deployed 10+ production features"
      ],
      iconColor: "from-cyan-500 to-blue-600"
    },
    {
      type: "education",
      title: "Master of Computer Applications",
      company: "Sandip University",
      period: "2022 - 2024",
      location: "Nashik, Maharashtra, India",
      description: "Specialized in Full-Stack Development with focus on MERN stack and Cloud Technologies.",
      achievements: [
        "CGPA: 8.19",
        "Built 8+ client applications",
        "Reduced load time by 40%"
      ],
      iconColor: "from-violet-500 to-purple-600"
    },
    {
      type: "education",
      title: "Bachelor of Computer Science",
      company: "SMBST College",
      period: "2021 - 2022",
      location: "Sangamner, Maharashtra, India",
      description: "Built strong foundation in programming, algorithms, and web development.",
      achievements: [
        "CGPA: 8.36",
        "Completed 15+ major projects",
        "Improved code quality significantly"
      ],
      iconColor: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${isDark ? 'from-cyan-400 via-purple-400 to-violet-400' : 'from-cyan-600 via-purple-600 to-violet-600'} bg-clip-text text-transparent`}>
            Experience & Education
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            My journey so far
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-10">
          {experiences.map((item, index) => (
            <div
              key={index}
              className={`group relative flex flex-col md:flex-row gap-8 backdrop-blur-xl rounded-3xl p-8 md:p-10 border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
                isDark 
                  ? 'bg-white/5 border-white/10 hover:border-cyan-400/40' 
                  : 'bg-white border-gray-200 hover:border-purple-300'
              }`}
            >
              {/* Icon / Logo Area - Improved */}
              <div className="flex-shrink-0 flex justify-center md:justify-start">
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br ${item.iconColor} flex items-center justify-center shadow-xl shadow-black/20 group-hover:scale-110 transition-transform duration-300`}>
                  {item.type === "experience" ? (
                    <Briefcase size={48} className="text-white" />
                  ) : (
                    <GraduationCap size={48} className="text-white" />
                  )}
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <h3 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <div className={`flex items-center gap-2 text-lg font-medium whitespace-nowrap ${isDark ? 'text-cyan-400' : 'text-purple-600'}`}>
                    <Calendar size={20} />
                    {item.period}
                  </div>
                </div>

                <div className={`flex items-center gap-2 text-lg mb-5 ${isDark ? 'text-purple-400' : 'text-purple-700 font-medium'}`}>
                  <span>{item.company}</span>
                  <span className="opacity-50">•</span>
                  <div className="flex items-center gap-1">
                    <MapPin size={18} />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {item.description}
                </p>

                {/* Achievements */}
                <div>
                  <h4 className={`flex items-center gap-2 text-lg font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    <Award size={22} className="text-amber-500" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className={`flex items-start gap-3 text-[17px] ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <div className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 ${isDark ? 'bg-emerald-400' : 'bg-emerald-600'}`}></div>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperAndEduca;