// import React from 'react';
// import '../App.css';
// export function Input({ value, onChange, placeholder, className }) {
//   return (
//     <input
//       type="text"
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       className={`px-4 py-2 rounded-md bg-white text-black w-full ${className}`}
//     />
//   );
// }
// src/components/Hero.jsx

// import { Github, Linkedin } from 'lucide-react';
// const Hero = ({ isDark }) => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
//       <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
//         <div className="relative inline-block">
//           <div className="w-40 h-40 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 animate-spin-slow">
//             <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
//               <div className="w-36 h-36 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600"></div>
//             </div>
//           </div>
//         </div>
       
//         <div className="space-y-4">
//           <h1 className={`text-5xl md:text-7xl font-bold bg-gradient-to-r ${isDark ? 'from-cyan-400 via-purple-400 to-pink-400' : 'from-cyan-600 via-purple-600 to-pink-600'} bg-clip-text text-transparent animate-gradient`}>
//             Mahesh Phatangare
//           </h1>
//           <p className={`text-2xl md:text-3xl font-light ${isDark ? 'text-cyan-300' : 'text-purple-600'}`}>
//             Full Stack Developer
//           </p>
//           <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
//             Crafting exceptional digital experiences with modern web technologies
//           </p>
//         </div>
//         <div className="flex gap-6 justify-center flex-wrap">
//           <a href="https://github.com/Maheshphatangare" target="_blank" rel="noopener noreferrer"
//              className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full overflow-hidden transition-transform hover:scale-105">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <span className="relative flex items-center gap-2">
//               <Github size={20} /> GitHub
//             </span>
//           </a>
//           <a href="https://www.linkedin.com/in/mahesh-phatangare-91b032224/" target="_blank" rel="noopener noreferrer"
//              className="group relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full overflow-hidden transition-transform hover:scale-105">
//             <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <span className="relative flex items-center gap-2">
//               <Linkedin size={20} /> LinkedIn
//             </span>
//           </a>
//         </div>
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
// src/components/Hero.jsx
// import { Github, Linkedin } from 'lucide-react';
// import profilePic from '../image/dp.jpg'; // Adjust the filename/path as needed (e.g., profile.png if it's PNG)

// const Hero = ({ isDark }) => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
//       <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
//         <div className="relative inline-block">
//           {/* Gradient border wrapper for the profile picture */}
//           <div className="w-40 h-40 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1">
//             <img
//               src={profilePic}
//               alt="Mahesh Phatangare"
//               className="w-full h-full rounded-full object-cover"
//             />
//           </div>
//         </div>
       
//         <div className="space-y-4">
//           <h1 className={`text-5xl md:text-7xl font-bold bg-gradient-to-r ${isDark ? 'from-cyan-400 via-purple-400 to-pink-400' : 'from-cyan-600 via-purple-600 to-pink-600'} bg-clip-text text-transparent animate-gradient`}>
//             Mahesh Phatangare
//           </h1>
//           <p className={`text-2xl md:text-3xl font-light ${isDark ? 'text-cyan-300' : 'text-purple-600'}`}>
//             Full Stack Developer
//           </p>
//           <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
//             Crafting exceptional digital experiences with modern web technologies
//           </p>
//         </div>
//         <div className="flex gap-6 justify-center flex-wrap">
//           <a href="https://github.com/Maheshphatangare" target="_blank" rel="noopener noreferrer"
//              className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full overflow-hidden transition-transform hover:scale-105">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <span className="relative flex items-center gap-2">
//               <Github size={20} /> GitHub
//             </span>
//           </a>
//           <a href="https://www.linkedin.com/in/mahesh-phatangare-91b032224/" target="_blank" rel="noopener noreferrer"
//              className="group relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full overflow-hidden transition-transform hover:scale-105">
//             <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <span className="relative flex items-center gap-2">
//               <Linkedin size={20} /> LinkedIn
//             </span>
//           </a>
//         </div>
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
// src/components/Hero.jsx
import React, { useState } from 'react';

import profilePic from '../image/dp.jpg';// Adjust path/filename as needed

// src/components/input.jsx (or rename to Hero.jsx for clarity)

import { Github, Linkedin, X } from 'lucide-react'; // Added X import for close button
 // Adjust path/filename as needed

const Hero = ({ isDark }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="relative inline-block">
            {/* Container: Larger size to reduce cropping */}
            <div 
              className="w-60 h-60 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 cursor-pointer hover:scale-105 transition-transform" 
              onClick={openModal}
            >
              <img
                src={profilePic}
                alt="Mahesh Phatangare"
                className="w-full h-full rounded-full object-cover object-[position:50%_20%]"  // Arbitrary: Centers horizontally, shifts up 20% to show more head
              />
            </div>
          </div>
         
          <div className="space-y-4">
            <h1 className={`p-8 text-5xl md:text-7xl font-bold bg-gradient-to-r ${isDark ? 'from-cyan-400 via-purple-400 to-pink-400' : 'from-cyan-600 via-purple-600 to-pink-600'} bg-clip-text text-transparent animate-gradient`}>
              Mahesh Phatangare
            </h1>
            <p className={`text-2xl md:text-3xl font-light ${isDark ? 'text-cyan-300' : 'text-purple-600'}`}>
              Full Stack Developer
            </p>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              Crafting exceptional digital experiences with modern web technologies
            </p>
          </div>
          <div className="flex gap-6 justify-center flex-wrap">
            <a href="https://github.com/Maheshphatangare" target="_blank" rel="noopener noreferrer"
               className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full overflow-hidden transition-transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                <Github size={20} /> GitHub
              </span>
            </a>
            <a href="https://www.linkedin.com/in/mahesh-phatangare-91b032224/" target="_blank" rel="noopener noreferrer"
               className="group relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full overflow-hidden transition-transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                <Linkedin size={20} /> LinkedIn
              </span>
            </a>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Large Profile Preview - No new page, just overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full mx-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className={`absolute -top-4 -right-4 p-2 rounded-full ${isDark ? 'bg-white/20 hover:bg-white/30' : 'bg-gray-800/20 hover:bg-gray-800/30'} text-white transition-colors z-10`}
            >
              <X size={24} />
            </button>
            <img
              src={profilePic}
              alt="Mahesh Phatangare - Full View"
              className="w-full h-auto max-w-[600px] max-h-[80vh] rounded-2xl object-contain shadow-2xl"  // Large, no cropping, contained; max-h-[80vh] for mobile fit
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;