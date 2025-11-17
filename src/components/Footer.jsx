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
const Footer = ({ isDark }) => {
  return (
    <footer className="relative py-8 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © 2025 Mahesh Phatangare. Crafted with passion and code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;