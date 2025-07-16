import React from 'react';
import '../App.css';
 // Updated to import index.css (assuming it's in src/)

function Skills() {
  const skills = [
    "JavaScript",
    "React.js",
    "Node.js",
    "Python",
    "MongoDB",
    "Tailwind CSS",
    "Git",
    "AWS",
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
      <div className="skills-container flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;