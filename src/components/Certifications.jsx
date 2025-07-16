// src/components/Certifications.jsx
import React from 'react';
import '../App.css';
function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      link: "https://aws.amazon.com/certification/certified-developer-associate/",
    },
    {
      title: "React Professional Certification",
      issuer: "Coursera",
      link: "https://coursera.org",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      link: "https://udemy.com",
    },
  ];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Certifications</h2>
      <ul className="list-disc list-inside text-gray-600">
        {certifications.map((cert, index) => (
          <li key={index} className="mb-2">
            <span className="font-medium">{cert.title}</span> – {cert.issuer}
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-2"
              >
                [View Certificate]
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;