// import React from 'react';
// import '../App.css';
// function About() {
//   return (
//     <section className="py-8">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
//       <p className="text-gray-600 leading-relaxed">
//       🧑‍💻 About Me
// Hello! I'm Mahesh Phatangare, a passionate and detail-oriented software developer. I specialize in building full-stack web applications using technologies like React, Java Spring Boot, and Firebase. I enjoy solving problems through code and turning ideas into real-life applications.

// I have a strong foundation in computer science and hands-on experience with both frontend and backend development. I'm always eager to learn new tools, contribute to open-source projects, and collaborate with other developers to create impactful solutions.

// Outside of coding, I enjoy exploring new tech trends, reading about software architecture, and improving my skills through continuous learning.
//       </p>
//     </section>
//   );
// }

// export default About;
// src/components/About.jsx
const About = ({ isDark }) => {
  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r ${isDark ? 'from-cyan-400 to-purple-400' : 'from-cyan-600 to-purple-600'} bg-clip-text text-transparent`}>
          About Me
        </h2>
        <div className={`backdrop-blur-lg rounded-3xl p-8 md:p-12 border transition-all duration-300 hover:shadow-2xl ${isDark ? 'bg-white/5 border-white/10 hover:border-cyan-400/50 hover:shadow-cyan-500/20' : 'bg-white/80 border-gray-200 hover:border-purple-400/50 hover:shadow-purple-500/20'}`}>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Hello! I'm <span className={isDark ? 'text-cyan-400 font-semibold' : 'text-purple-600 font-semibold'}>Mahesh Phatangare</span>, a passionate and detail-oriented software developer specializing in building full-stack web applications.
            I work with cutting-edge technologies like <span className={isDark ? 'text-purple-400' : 'text-purple-600'}>React</span>, <span className={isDark ? 'text-green-400' : 'text-green-600'}>Java Spring Boot</span>, and <span className={isDark ? 'text-yellow-400' : 'text-yellow-600'}>Firebase</span> to transform ideas into real-world applications.
          </p>
          <p className={`text-lg leading-relaxed mt-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            With a strong foundation in computer science and hands-on experience in both frontend and backend development, I'm constantly exploring new technologies,
            contributing to open-source projects, and collaborating with developers worldwide to create impactful solutions.
          </p>
          <p className={`text-lg leading-relaxed mt-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Based in <span className={isDark ? 'text-cyan-400' : 'text-purple-600'}>Pune, Maharashtra, India</span>, I'm always eager to take on new challenges and push the boundaries of what's possible in web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;