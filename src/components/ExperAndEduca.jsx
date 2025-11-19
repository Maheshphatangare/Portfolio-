import { Mail, Github, Linkedin, Code, Award, Send, ExternalLink,Briefcase, Menu, X, Sun, Moon } from 'lucide-react';
const ExperAndEduca = ({ isDark }) => {
    const experiences = [
    {
      title: " Full Stack Developer",
      company: "Rakibe Dynamics.",
      period: "2024 - Present",
      location: "Nashik, Maharashtra ,India",
      description: "Leading development of scalable web applications, mentoring junior developers, and architecting microservices",
      achievements: ["Increased app performance by 60%", "Led team of 5 developers", "Deployed 10+ production features"]
    },
    {
      title: "Master of Computer Applications",
      company: "Sandip University.",
      period: "2022 - 2024",
      location: "Nashik, Maharashtra, India",
      description: "Developed and maintained multiple client projects using MERN stack and cloud technologies",
      achievements: [" CGPA : 8.19 ","Built 8 client applications", "Reduced load time by 40%", "Implemented CI/CD pipeline"]
    },
    {
      title: "Bachelor of Computer Science",
      company: "SMBST College",
      period: "2021 - 2022",
      location: "Sangamner,Maharashtra, India",
      description: "Contributed to various web development projects and learned modern development practices",
      achievements: [" CGPA : 8.36 ","Completed 15+ features", "Fixed 100+ bugs", "Improved code quality by 30%"]
    }
  ];


  return (
   
    <section id="experience" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${isDark ? 'from-cyan-400 to-purple-400' : 'from-cyan-600 to-purple-600'} bg-clip-text text-transparent`}>
              Experience & Education
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex gap-6 backdrop-blur-lg rounded-3xl p-8 border transition-all duration-300 hover:shadow-2xl ${
                  isDark ? 'bg-white/5 border-white/10 hover:border-cyan-400/50' : 'bg-white/80 border-gray-200 hover:border-purple-400/50'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${index === 0 ? 'from-cyan-500 to-purple-500' : 'from-purple-500 to-pink-500'}`}>
                  <Briefcase size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <span className={`text-sm ${isDark ? 'text-cyan-400' : 'text-purple-600'}`}>{exp.period}</span>
                  </div>
                  <p className={`font-medium mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                    {exp.company} • {exp.location}
                  </p>
                  <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className={`flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-cyan-400' : 'bg-purple-600'}`}></div>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default ExperAndEduca ;