// import React from 'react';
// import '../App.css';
// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-4 text-center">
//       <p>© 2025 Mahesh Phatangare . All rights reserved.</p>
//     </footer>
//   );
// }

// export default Footer;
// src/components/Footer.jsx
import { Mail, Github, Linkedin, Code, Award, Send, ExternalLink, Menu, X, Sun, Moon } from 'lucide-react';
const Footer = ({ isDark }) => {
  return (
    // <footer className="relative py-8 px-4 border-t border-white/10">
    //   <div className="max-w-6xl mx-auto text-center">
    //     <p className="text-gray-400">
    //       © 2025 Mahesh Phatangare. Crafted with passion and code.
    //     </p>
    //   </div>
    // </footer>
    <footer className={`py-12 border-t ${isDark ? 'border-white/10' : 'border-gray-300'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/Maheshphatangare" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/mahesh-phatangare-91b032224/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
              <Linkedin size={28} />
            </a>
            <a href="mailto:maheshphatangare420@gmail.com" className="hover:scale-125 transition-transform">
              <Mail size={28} />
            </a>
          </div>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Mahesh Phatangare. All rights reserved.
          </p>
        </div>
      </footer>
  );
};

export default Footer;