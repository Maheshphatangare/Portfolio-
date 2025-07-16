// import React from 'react';
// import '../App.css';
// import dpImage from '../image/dp.jpg';



// function Header() {
//   return (
//     <header className="bg-blue-600 text-white py-6">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
//         <div className="flex items-center space-x-4">
//         <img
//   src={dpImage}
//   alt="Profile"
//   className="profile-image"
// />

//           <div>
//             <h1 className="text-3xl font-bold">Mahesh Phatangare</h1>
//             <p className="text-lg">Full Stack Developer</p>
//             <p className="text-sm"> Wakad, City pune ,Maharashtra,India</p>
//             <p className="text-sm">Email: maheshphatangare420@gmail.com</p>
//           </div>
//         </div>
//         <div className="button-container">
//           <a
//             href="https://github.com/Maheshphatangare"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-200 hover:text-white mr-4"
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
import React from 'react';
import '../App.css';
import dpImage from '../image/dp.jpg';

function Header() {
  return (
    <header className="bg-blue-600 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
          <img
            src={dpImage}
            alt="Profile"
            className="profile-image"
          />

          <div>
            <h1 className="text-3xl font-bold">Mahesh Phatangare</h1>
            <h3 className="text-lg">Full Stack Developer</h3>
            <p className="text-sm">Location: Wakad, City Pune, Maharashtra, India</p>
            <p className="text-sm">Email: maheshphatangare420@gmail.com</p>
          </div>
        </div>

        <div className="button-container mt-4 flex gap-4 flex-wrap justify-center">
          <a
            href="https://github.com/Maheshphatangare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mahesh-phatangare-91b032224/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
