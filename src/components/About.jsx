


// const About = ({ isDark }) => {
//   return (
//     <section id="about" className="relative py-24 px-4 overflow-hidden">
//       <div className="max-w-5xl mx-auto">
        
//         {/* Heading */}
//         <h2 className={`text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r ${isDark ? 'from-cyan-400 via-purple-400 to-violet-400' : 'from-cyan-600 via-purple-600 to-violet-600'} bg-clip-text text-transparent`}>
//           About Me
//         </h2>

//         <div className={`backdrop-blur-xl rounded-3xl p-10 md:p-16 border transition-all duration-500 hover:shadow-2xl ${isDark ? 'bg-white/5 border-white/10 hover:border-cyan-400/40' : 'bg-white border-gray-200 hover:border-purple-400/40'}`}>

//           {/* Intro */}
//           <p className={`text-2xl md:text-3xl leading-tight font-medium mb-10 ${isDark ? 'text-white' : 'text-gray-800'}`}>
//             Hello! I'm <span className={isDark ? 'text-cyan-400' : 'text-purple-700 font-semibold'}>Mahesh Phatangare</span>
//           </p>

//           {/* Main Description - Bigger Font */}
//           <p className={`text-xl md:text-2xl leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
//             A passionate <span className="font-semibold text-emerald-500">Frontend Engineer</span> and 
//             <span className="font-semibold text-violet-500"> Data Analyst</span> who loves turning ideas into 
//             beautiful, fast, and meaningful digital experiences.
//           </p>

//           {/* Detailed Paragraphs */}
//           <div className="space-y-8 text-lg md:text-xl leading-relaxed">
//             <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
//               I specialize in building modern, responsive, and high-performance web applications using 
//               <span className={isDark ? 'text-cyan-400 font-medium' : 'text-cyan-600 font-medium'}> React, Next.js, TypeScript, and Tailwind CSS</span>. 
//               With a keen eye for design and user experience, I create interfaces that are not only visually stunning but also highly functional.
//             </p>

//             <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
//               On the other side, I dive deep into data. Using <span className={isDark ? 'text-violet-400 font-medium' : 'text-violet-600 font-medium'}>Python, Power BI, Tableau, and Excel</span>, 
//               I analyze complex datasets and transform them into clear, actionable insights and interactive dashboards that help businesses make smarter decisions.
//             </p>

//             <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
//               My unique combination of frontend development and data analytics allows me to build 
//               <span className="font-semibold text-amber-500"> data-driven web applications</span> that look beautiful and deliver real value.
//             </p>
//           </div>

//           {/* Location & Status */}
//           <div className="mt-12 flex flex-wrap gap-4">
//             <div className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-lg ${isDark ? 'bg-white/10 text-cyan-400' : 'bg-purple-50 text-purple-700'}`}>
//               📍 Nashik, Maharashtra, India
//             </div>
//             <div className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-lg ${isDark ? 'bg-white/10 text-emerald-400' : 'bg-emerald-50 text-emerald-700'}`}>
//               🌱 Open to New Opportunities
//             </div>
//           </div>

//           {/* Closing Statement */}
//           <p className={`mt-14 text-xl italic font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
//             "I believe great technology should be both beautiful and intelligent. 
//             That's what I strive to create every day."
//           </p>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
const About = ({ isDark }) => {
  return (
    <section id="about" className="relative py-28 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Heading */}
        <h2 className={`text-6xl md:text-7xl font-bold text-center mb-16 bg-gradient-to-r ${isDark ? 'from-cyan-400 via-purple-400 to-violet-400' : 'from-cyan-600 via-purple-600 to-violet-600'} bg-clip-text text-transparent`}>
          About Me
        </h2>

        <div className={`backdrop-blur-2xl rounded-3xl p-12 md:p-20 border transition-all duration-500 hover:shadow-3xl ${isDark 
          ? 'bg-white/5 border-white/10 hover:border-cyan-400/50' 
          : 'bg-white/90 border-gray-200 hover:border-purple-400/50'}`}>

          {/* Name + Big Intro */}
          <p className={`text-4xl md:text-5xl font-semibold mb-8 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Hi, I'm <span className={isDark ? 'text-cyan-400' : 'text-purple-700'}>Mahesh Phatangare</span>
          </p>

          {/* Big Role Description */}
          <p className={`text-2xl md:text-3xl leading-tight font-medium mb-12 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
            A passionate <span className="text-emerald-500 font-semibold">Frontend Engineer</span> &amp; 
            <span className="text-violet-500 font-semibold"> Data Analyst</span> who builds 
            beautiful, fast, and data-driven digital experiences.
          </p>

          {/* Main Content - Bigger & Cleaner */}
          <div className="space-y-10 text-lg md:text-xl leading-relaxed">
            <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              I specialize in creating modern, high-performance web applications using 
              <span className={isDark ? 'text-cyan-400 font-semibold' : 'text-cyan-600 font-semibold'}> React, Next.js, TypeScript & Tailwind CSS</span>. 
              My focus is on delivering exceptional user experiences with pixel-perfect design and smooth interactions.
            </p>

            <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              On the data side, I turn complex information into clear insights using 
              <span className={isDark ? 'text-violet-400 font-semibold' : 'text-violet-600 font-semibold'}> Python, Pandas, Power BI, Tableau & Excel</span>. 
              I love building interactive dashboards that help people understand data at a glance.
            </p>

            <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              By combining strong frontend skills with data analytics, I create powerful 
              <span className="font-semibold text-amber-500"> data-driven applications</span> that are not only visually stunning but also deliver real business value.
            </p>
          </div>

          {/* Highlights / Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16">
            <div className={`p-6 rounded-2xl text-center ${isDark ? 'bg-white/10' : 'bg-gray-50'}`}>
              <div className="text-4xl mb-2">🚀</div>
              <div className={`text-xl font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>Modern Tech</div>
              <div className="text-sm mt-1 opacity-75">React • Next.js • TypeScript</div>
            </div>
            
            <div className={`p-6 rounded-2xl text-center ${isDark ? 'bg-white/10' : 'bg-gray-50'}`}>
              <div className="text-4xl mb-2">📊</div>
              <div className={`text-xl font-semibold ${isDark ? 'text-violet-400' : 'text-violet-600'}`}>Data Driven</div>
              <div className="text-sm mt-1 opacity-75">Python • Power BI • Tableau</div>
            </div>

            <div className={`p-6 rounded-2xl text-center ${isDark ? 'bg-white/10' : 'bg-gray-50'}`}>
              <div className="text-4xl mb-2">🌍</div>
              <div className={`text-xl font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>Based in</div>
              <div className="text-sm mt-1 opacity-75">Nashik, Maharashtra</div>
            </div>
          </div>

          {/* Final Quote */}
          <p className={`mt-16 text-2xl italic font-light text-center max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            "I believe the best digital products are both <span className="font-medium text-amber-500">beautiful</span> and <span className="font-medium text-amber-500">intelligent</span>."
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;