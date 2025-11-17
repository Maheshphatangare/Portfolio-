// import React from 'react';
// import '../App.css';
//  // Updated to import index.css (assuming it's in src/)

// function Skills() {
//   const skills = [
//     "JavaScript",
//     "React.js",
//     "Node.js",
//     "Python",
//     "MongoDB",
//     "Tailwind CSS",
//     "Git",
//     "AWS",
//   ];

//   return (
//     <section>
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
//       <div className="skills-container flex flex-wrap gap-4">
//         {skills.map((skill, index) => (
//           <span
//             key={index}
//             className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
//           >
//             {skill}
//           </span>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Skills;
// src/components/Skills.jsx
const Skills = ({ skills, isDark }) => {
  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="p-2 text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold">{skill.name}</span>
                {/* <span className="text-cyan-400">{skill.level}%</span> */}
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;