
// // src/components/input.jsx (or rename to Hero.jsx for clarity)
// import React, { useState, useEffect } from 'react';
// import { Github, Linkedin, X } from 'lucide-react';
// import profilePic from '../image/dp.jpg'; // Adjust path/filename as needed

// const Hero = ({ isDark }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentRole, setCurrentRole] = useState('Full Stack Developer');

//   useEffect(() => {
//     const roles = ['Full Stack Developer', 'Frontend Developer', 'Web Developer'];
//     let index = 0;
//     const interval = setInterval(() => {
//       setCurrentRole(roles[index]);
//       index = (index + 1) % roles.length;
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <>
//       <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto w-full">
//           {/* Left: Profile Picture - Larger Vertical Rectangle with Animation */}
//           <div className="relative group animate-[slide-in-left_0.8s_ease-out] hover:scale-105 transition-transform cursor-pointer" onClick={openModal}>
//             <div className="w-64 h-80 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 p-1 shadow-2xl"> {/* Bigger: 256px x 320px for laptop */}
//               <img
//                 src={profilePic}
//                 alt="Mahesh Phatangare"
//                 className="w-full h-full rounded-xl object-cover object-[position:50%_20%]"  // Rectangle, shifts up to show more head
//               />
//             </div>
//             {/* Optional: Floating animation badge or glow */}
//             <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
//           </div>

//           {/* Right: Name, Role, Description, Social - Text Animations */}
//           <div className="text-left space-y-6 flex-1 max-w-2xl animate-[slide-in-right_0.8s_ease-out]">
//             <div className="space-y-4">
//               <h1 className={`p-3 text-5xl md:text-7xl font-bold bg-gradient-to-r ${isDark ? 'from-cyan-400 via-purple-400 to-pink-400' : 'from-cyan-600 via-purple-600 to-pink-600'} bg-clip-text text-transparent animate-gradient`}>
//                 Mahesh Phatangare
//               </h1>
//               <p className={`text-2xl md:text-3xl font-light ${isDark ? 'text-cyan-300' : 'text-purple-600'} animate-[fade-up_0.6s_ease-out] animation-delay-200 transition-opacity duration-500 opacity-100`}>
//                 <span className="animate-role-change">{currentRole}</span> {/* Animated role */}
//               </p>
//               <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} animate-[fade-up_0.6s_ease-out] animation-delay-400`}>
//                 Crafting exceptional digital experiences with modern web technologies
//               </p>
//             </div>
//             {/* <div className="flex gap-6 flex-wrap animate-[fade-up_0.6s_ease-out] animation-delay-600">
//               <a href="https://github.com/Maheshphatangare" target="_blank" rel="noopener noreferrer"
//                  className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full overflow-hidden transition-transform hover:scale-105">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <span className="relative flex items-center gap-2">
//                   <Github size={20} /> GitHub
//                 </span>
//               </a>
//               <a href="https://www.linkedin.com/in/mahesh-phatangare-91b032224/" target="_blank" rel="noopener noreferrer"
//                  className="group relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full overflow-hidden transition-transform hover:scale-105">
//                 <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <span className="relative flex items-center gap-2">
//                   <Linkedin size={20} /> LinkedIn
//                 </span>
//               </a>
//             </div> */}
//           <div className="flex gap-8 flex-wrap justify-center items-center">
//   {/* GitHub Button - Horizontal & Compact */}
//   <a
//     href="https://github.com/Maheshphatangare"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="group relative flex items-center gap-5 px-8 py-5 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
//     style={{ transformStyle: 'preserve-3d' }}
//   >
//     {/* Depth Shadow Layer */}
//     <div className="absolute inset-0 bg-cyan-600 rounded-3xl scale-95 opacity-40 blur-xl group-hover:opacity-70 transition-all duration-500 -z-10"></div>

//     {/* Main Card */}
//     <div className={`relative flex items-center gap-5 rounded-3xl px-2 py-4 backdrop-blur-2xl transition-all ${
//       isDark
//         ? 'bg-black/40 border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20'
//         : 'bg-white/80 border-2 border-cyan-600/40 shadow-2xl shadow-cyan-500/30'
//     }`}>
//       {/* Animated Blobs */}
//       <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
//         <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500 rounded-full mix-blend-multiply blur-3xl opacity-40 group-hover:opacity-70 animate-blob"></div>
//         <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-purple-600 rounded-full mix-blend-multiply blur-3xl opacity-30 group-hover:opacity-60 animate-blob animation-delay-2000"></div>
//       </div>

//       {/* Icon */}
//       <div className="p-3 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
//         <Github size={32} className="text-white" />
//       </div>

//       {/* Text */}
//       <div className="text-left">
//         <div className={`text-xl font-black tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
//           GitHub
//         </div>
//         <div className={`text-xs font-bold opacity-70 ${isDark ? 'text-cyan-300' : 'text-cyan-600'}`}>
//           @Maheshphatangare
//         </div>
//       </div>

//       {/* Shine Sweep */}
//       <div className="absolute top-0 left-0 w-full h-full">
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-1000"></div>
//       </div>
//     </div>
//   </a>

//   {/* LinkedIn Button - Horizontal & Compact */}
//   <a
//     href="https://www.linkedin.com/in/mahesh-phatangare-91b032224/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="group relative flex items-center gap-5 px-8 py-5 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
//     style={{ transformStyle: 'preserve-3d' }}
//   >
//     {/* Depth Shadow Layer */}
//     <div className="absolute inset-0 bg-purple-600 rounded-3xl scale-95 blur-xl opacity-40 group-hover:opacity-70 transition-all duration-500 -z-10"></div>

//     {/* Main Card */}
//     <div className={`relative flex items-center gap-5 rounded-3xl px-2 py-4 backdrop-blur-2xl transition-all ${
//       isDark
//         ? 'bg-black/40 border-2 border-purple-500/50 shadow-2xl shadow-purple-500/20'
//         : 'bg-white/80 border-2 border-purple-600/40 shadow-2xl shadow-purple-500/30'
//     }`}>
//       {/* Animated Blobs */}
//       <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
//         <div className="absolute -top-6 -right-6 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply blur-3xl opacity-40 group-hover:opacity-70 animate-blob animation-delay-1000"></div>
//         <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-purple-600 rounded-full mix-blend-multiply blur-3xl opacity-30 group-hover:opacity-60 animate-blob animation-delay-3000"></div>
//       </div>

//       {/* Icon */}
//       <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
//         <Linkedin size={32} className="text-white" />
//       </div>

//       {/* Text */}
//       <div className="text-left">
//         <div className={`text-xl font-black tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
//           LinkedIn
//         </div>
//         <div className={`text-xs font-bold opacity-70 ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>
//           Let's Connect
//         </div>
//       </div>

//       {/* Shine Sweep */}
//       <div className="absolute top-0 left-0 w-full h-full">
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-1000"></div>
//       </div>
//     </div>
//   </a>
// </div>
//           </div>
//         </div>
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
//           </div>
//         </div>
//       </section>

//       {/* Modal for Large Profile Preview - No new page, just overlay */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
//           <div className="relative max-w-4xl max-h-full mx-auto" onClick={(e) => e.stopPropagation()}>
//             <button
//               onClick={closeModal}
//               className={`absolute -top-4 -right-4 p-2 rounded-full ${isDark ? 'bg-white/20 hover:bg-white/30' : 'bg-gray-800/20 hover:bg-gray-800/30'} text-white transition-colors z-10`}
//             >
//               <X size={24} />
//             </button>
//             <img
//               src={profilePic}
//               alt="Mahesh Phatangare - Full View"
//               className="w-full h-auto max-w-[600px] max-h-[80vh] rounded-2xl object-contain shadow-2xl"  // Large, no cropping, contained; max-h-[80vh] for mobile fit
//             />
//           </div>
//         </div>
//       )}

//       <style>{`
//         @keyframes slide-in-left {
//           from { opacity: 0; transform: translateX(-50px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes slide-in-right {
//           from { opacity: 0; transform: translateX(50px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes fade-up {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes role-change {
//           0% { opacity: 1; transform: translateY(0); }
//           20% { opacity: 0; transform: translateY(-10px); }
//           80% { opacity: 0; transform: translateY(10px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//           @keyframes blob {
//   0%, 100% { transform: translate(0px, 0px) scale(1); }
//   33% { transform: translate(30px, -30px) scale(1.1); }
//   66% { transform: translate(-20px, 20px) scale(0.9); }
// }
// .animate-blob { animation: blob 7s infinite; }
// .animation-delay-1000 { animation-delay: 1s; }
// .animation-delay-2000 { animation-delay: 2s; }
// .animation-delay-3000 { animation-delay: 3s; }

// .perspective-1000 { perspective: 1000px; }
// .translate-z-[-20px] { transform: translateZ(-20px); }


//         .animate-role-change {
//           animation: role-change 1s ease-in-out;
//         }
//         .animation-delay-200 { animation-delay: 0.2s; }
//         .animation-delay-400 { animation-delay: 0.4s; }
//         .animation-delay-600 { animation-delay: 0.6s; }
//       `}</style>
//     </>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, X } from 'lucide-react';
//import profilePic from '../image/dp.jpg'; // Update path if needed
import profilePic from '../image/dp3.png';
const Hero = ({ isDark }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = ['Full Stack Developer', 'Frontend Developer', 'Web Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
     <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
  <div className="max-w-7xl mx-auto w-full">
    {/* This is the magic line → pushes everything nicely to the left */}
    <div className="grid lg:grid-cols-2 gap-16 items-center justify-start max-w-6xl mx-auto xl:ml-0 xl:mr-auto">
      
      {/* Profile Picture - Now starts more from the left */}
      <div className="relative flex justify-center lg:justify-end">
        <div
          className="group relative cursor-zoom-in transition-all duration-500 hover:scale-105"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>

          {/* <div className="w-80 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
            <img
              src={profilePic}
              alt="Mahesh Phatangare"
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
            />
          </div> */}

          <div className="relative group">
  {/* Floating Container */}
  <div className="relative animate-float">
    {/* Rotating Gradient Border */}
    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000"></div>
    
    {/* Main Glass Frame */}
    <div className="relative backdrop-blur-xl bg-white/10 border-2 border-white/20 rounded-3xl p-2 shadow-2xl">
      <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/50 p-1">
        <img
          src={profilePic} // Your PNG with transparent background
          alt="Mahesh Phatangare"
          className="w-full h-full object-contain rounded-3xl transition-all duration-700 
                     group-hover:scale-105 group-hover:rotate-1 
                     shadow-2xl"
          style={{ 
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
            background: 'transparent' 
          }}
        />
      </div>
    </div>

    {/* Subtle Inner Glow */}
    <div className="absolute inset-0 rounded-3xl shadow-inner shadow-white/10 pointer-events-none"></div>

    {/* Floating Orbs (Decorative) */}
    <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-400 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
  </div>

  {/* Click Hint */}
  {/* <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500">
    👆 Click to view full photo
  </div> */}
</div>

          {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to enlarge
          </div> */}
        </div>
      </div>

      {/* Text Content - Aligned left and shifted left */}
      <div className="text-left space-y-8 max-w-xl">
        <p className={`text-xl font-medium ${isDark ? 'text-cyan-400' : 'text-purple-600'}`}>
          Hi there, I'm
        </p>

        <h1 className={`text-6xl md:text-7xl lg:text-8xl font-black leading-tight`}>
          <span className={`bg-gradient-to-r ${isDark ? 'from-cyan-400 via-purple-400 to-pink-400' : 'from-cyan-600 via-purple-600 to-pink-600'} bg-clip-text text-transparent`}>
            Mahesh Phatangare
          </span>
        </h1>

        <div className="h-16 flex items-center">
          <p className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
            {roles[currentRoleIndex]}
            <span className="inline-block w-1 h-10 bg-cyan-400 ml-2 animate-pulse"></span>
          </p>
        </div>

        <p className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
          Building fast, beautiful, and scalable web applications with modern technologies.
        </p>

        {/* Social Buttons - Left aligned */}
        <div className="flex gap-6 pt-6 flex-wrap">
          <a
            href="https://github.com/Maheshphatangare"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
          >
            <Github size={26} className="group-hover:rotate-12 transition-transform" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mahesh-phatangare-91b032224/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            <Linkedin size={26} className="group-hover:rotate-12 transition-transform" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>

    {/* Scroll Indicator - Also moved slightly left */}
    <div className="absolute bottom-10 left-1/4 -translate-x-1/2 md:left-1/3">
      <div className={`w-8 h-14 border-2 ${isDark ? 'border-cyan-400' : 'border-purple-600'} rounded-full flex justify-center`}>
        <div className={`w-1 h-4 ${isDark ? 'bg-cyan-400' : 'bg-purple-600'} rounded-full mt-3 animate-bounce`}></div>
      </div>
    </div>
  </div>
</section>

      {/* Photo Modal - Medium Size, Beautiful & Clean */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking photo
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            >
              <X size={36} />
              <span className="sr-only">Close</span>
            </button>

            {/* Enlarged Photo */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10">
              <img
                src={profilePic}
                alt="Mahesh Phatangare"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            {/* Optional Caption */}
            <p className="text-center text-white/80 mt-6 text-lg font-medium">
              Mahesh Phatangare
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }

        .animate-float {
          animation: float 12s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
};

export default Hero;
