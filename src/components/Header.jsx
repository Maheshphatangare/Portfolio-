
// import React from 'react';
// import '../App.css';
// import dpImage from '../image/dp.jpg';

// function Header() {
//   return (
//     <header className="bg-blue-600 text-white py-6">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
//         <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
//           <img
//             src={dpImage}
//             alt="Profile"
//             className="profile-image"
//           />

//           <div>
//             <h1 className="text-3xl font-bold">Mahesh Phatangare</h1>
//             <h3 className="text-lg">Full Stack Developer</h3>
//             <p className="text-sm">Location: Wakad, City Pune, Maharashtra, India</p>
//             <p className="text-sm">Email: maheshphatangare420@gmail.com</p>
//           </div>
//         </div>

//         <div className="button-container mt-4 flex gap-4 flex-wrap justify-center">
//           <a
//             href="https://github.com/Maheshphatangare"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-200 hover:text-white"
//           >
//             GitHub
//           </a>
//           <a
//             href="https://www.linkedin.com/in/mahesh-phatangare-91b032224/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-200 hover:text-white"
//           >
//             LinkedIn
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
// src/components/Header.jsx
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = ({ isScrolled, isDark, setIsDark, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? (isDark ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-lg shadow-lg') : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            MP
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors duration-300 relative group ${isDark ? 'hover:text-cyan-400' : 'hover:text-purple-600'}`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
           
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-purple-600" />}
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-all duration-300 ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-purple-600" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block transition-colors duration-300 ${isDark ? 'hover:text-cyan-400' : 'hover:text-purple-600'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;