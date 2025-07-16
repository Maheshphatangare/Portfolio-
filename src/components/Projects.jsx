import React from 'react';
import '../App.css';
function Projects() {
  const projects = [
    {
      title: "Book Store API",
      description: "A complete backend system for managing an online bookstore. Developed with Java, Spring Boot, and MySQL.",
      link: "https://github.com/Maheshphatangare/BookStoreapi",
    },
    {
      title: "Voting Application",
      description: "A full-stack web app where users can register, log in, and vote securely. Built using Java, Spring Boot, Thymeleaf, JPA, and H2 Database. It includes user authentication and admin features to manage elections.",
      link: "https://github.com/Maheshphatangare/Voting-Systemm",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website (this one!) built with React and Vite, styled with Tailwind CSS to showcase my work and skills.",
      link: "https://github.com/johndoe/portfolio",
    },
    {
      title: "SpendReckoner",
      description: "A personal expense tracking application hosted on GitHub. Built with React, Java Spring Boot, and MySQL, SpendReckoner helps users:.",
      link: "https://github.com/Maheshphatangare/spendreckoner",
    },
  ];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md project-card">
            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-4 inline-block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;