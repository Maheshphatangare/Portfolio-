// // src/components/Certifications.jsx
// import React from 'react';
// import '../App.css';
// function Certifications() {
//   const certifications = [
//     {
//       title: "AWS Certified Developer – Associate",
//       issuer: "Amazon Web Services",
//       link: "https://aws.amazon.com/certification/certified-developer-associate/",
//     },
//     {
//       title: "React Professional Certification",
//       issuer: "Coursera",
//       link: "https://coursera.org",
//     },
//     {
//       title: "Full Stack Web Development",
//       issuer: "Udemy",
//       link: "https://udemy.com",
//     },
//   ];

//   return (
//     <section className="py-8">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">Certifications</h2>
//       <ul className="list-disc list-inside text-gray-600">
//         {certifications.map((cert, index) => (
//           <li key={index} className="mb-2">
//             <span className="font-medium">{cert.title}</span> – {cert.issuer}
//             {cert.link && (
//               <a
//                 href={cert.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:underline ml-2"
//               >
//                 [View Certificate]
//               </a>
//             )}
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }

// export default Certifications;
// src/components/Certifications.jsx
import { Award } from 'lucide-react';

const Certifications = ({ certifications, isDark }) => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:translate-x-2"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Award size={24} />
                </div>
                {/* <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                  <p className="text-gray-400">{cert.issuer} • {cert.year}</p>
                </div> */}
                <div className="flex-1">
  <a
    href={cert.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h3 className="text-xl font-bold mb-1 text-cyan-400 hover:text-cyan-300 transition-colors">
      {cert.title}
    </h3>
  </a>

  <p className="text-gray-400">
    {cert.issuer} • {cert.year}
  </p>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;