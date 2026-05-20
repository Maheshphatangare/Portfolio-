
// const Skills = ({ skills, isDark }) => {
//   return (
//     <section id="skills" className="relative py-20 px-4">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="p-2 text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//           Skills & Expertise
//         </h2>
//         <div className="space-y-6">
//           {skills.map((skill, index) => (
//             <div key={index} className="group">
//               <div className="flex justify-between mb-2">
//                 <span className="text-lg font-semibold">{skill.name}</span>
//                 {/* <span className="text-cyan-400">{skill.level}%</span> */}
//               </div>
//               <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
//                 <div
//                   className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
//                   style={{ width: `${skill.level}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
import { Code2, BarChart3, Database, Award } from 'lucide-react';

const Skills = ({ isDark }) => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 size={28} />,
      categoryColor: "from-cyan-500 to-blue-500",
      skills: [
        { name: "React.js", level: 92, color: "from-cyan-400 to-blue-600" },
        { name: "Next.js", level: 88, color: "from-purple-400 to-violet-600" },
        { name: "TypeScript", level: 85, color: "from-blue-400 to-indigo-600" },
        { name: "Tailwind CSS", level: 95, color: "from-teal-400 to-cyan-500" },
        { name: "JavaScript (ES6+)", level: 90, color: "from-yellow-400 to-orange-500" },
      ]
    },
    {
      title: "Data Analysis & Visualization",
      icon: <BarChart3 size={28} />,
      categoryColor: "from-violet-500 to-purple-600",
      skills: [
        { name: "Python", level: 90, color: "from-violet-400 to-purple-600" },
        { name: "Power BI", level: 92, color: "from-amber-400 to-orange-500" },
        { name: "Tableau", level: 85, color: "from-emerald-400 to-teal-600" },
        { name: "Pandas & NumPy", level: 88, color: "from-blue-400 to-cyan-500" },
        { name: "SQL", level: 82, color: "from-pink-400 to-rose-500" },
        { name: "Matplotlib / Seaborn / Plotly", level: 87, color: "from-violet-400 to-fuchsia-500" },
      ]
    },
    {
      title: "Backend & Tools",
      icon: <Database size={28} />,
      categoryColor: "from-emerald-500 to-teal-600",
      skills: [
        { name: "Java Spring Boot", level: 78, color: "from-green-400 to-emerald-600" },
        { name: "Firebase", level: 80, color: "from-orange-400 to-red-500" },
        { name: "REST APIs", level: 85, color: "from-purple-400 to-violet-600" },
        { name: "Git & GitHub", level: 88, color: "from-orange-400 to-amber-600" },
        { name: "Postman", level: 85, color: "from-cyan-400 to-blue-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${isDark ? 'from-cyan-400 via-purple-400 to-violet-400' : 'from-cyan-600 via-purple-600 to-violet-600'} bg-clip-text text-transparent`}>
            Skills & Expertise
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`group backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                isDark
                  ? 'bg-white/5 border-white/10 hover:border-white/30'
                  : 'bg-white border-gray-200 hover:border-purple-300'
              }`}
            >
              {/* Category Header */}
              <div className={`inline-flex items-center gap-4 mb-8`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.categoryColor} flex items-center justify-center text-white shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List with Individual Colors */}
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium text-lg ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm font-semibold ${isDark ? 'text-cyan-400' : 'text-purple-600'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-700 group-hover/skill:scale-x-105 origin-left`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className={`mt-16 text-center p-6 rounded-3xl ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
          <p className={`text-lg flex items-center justify-center gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <Award className="text-amber-500" size={26} />
            Always learning new technologies and improving my craft
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;