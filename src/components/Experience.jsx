import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "../contexts/CursorContext";

const ExperienceRow = ({ period, title, company, description, hoverText, technologies, achievements, location, duration }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { onCursor } = useCursor();

  const handleMouseEnter = () => {
    onCursor("click", "CLICK");
  };

  const handleMouseLeave = () => {
    onCursor(false);
  };

  return (
    <div
      className="w-full border-b border-gray-800 py-10 md:py-16 cursor-none hover:bg-[#eb5939] group transition-colors"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-20 gap-8">
        <div className="flex flex-col max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-gray-500 group-hover:text-[#050505] font-mono text-xs md:text-sm transition-colors">{period}</span>
            <span className="text-gray-600 group-hover:text-[#050505]/60 font-mono text-[10px] md:text-xs transition-colors uppercase tracking-widest">({duration})</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-white group-hover:text-[#050505] uppercase tracking-tighter transition-colors mb-2">
            {title}
          </h3>
          <span className="text-gray-500 group-hover:text-[#050505]/70 font-mono text-xs uppercase tracking-widest transition-colors">
            {location}
          </span>
        </div>

        <div className="flex flex-col items-start md:items-end justify-center min-h-[50px] w-full md:w-auto">
          <span className="text-xl md:text-2xl text-gray-400 group-hover:text-[#050505] font-medium transition-colors mb-2">
            {company}
          </span>
          <div className="flex items-center gap-6">
            <p className="text-sm md:text-base font-bold text-[#eb5939] group-hover:text-[#050505] opacity-0 group-hover:opacity-100 italic transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-left md:text-right">
              "{hoverText}"
            </p>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-500 group-hover:text-[#050505] text-2xl transition-colors hidden md:block"
            >
              ↓
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-20 pt-8 flex flex-col gap-6">
              <p className="text-base md:text-lg text-gray-300 group-hover:text-[#050505] leading-relaxed transition-colors mt-2 max-w-4xl">
                {description}
              </p>

              <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                {achievements && achievements.length > 0 && (
                  <div className="flex-1">
                    <h4 className="text-[#eb5939] group-hover:text-[#050505] font-mono text-xs uppercase tracking-[0.2em] mb-4 font-black transition-colors">Key Achievements</h4>
                    <ul className="list-disc list-inside text-gray-400 group-hover:text-[#050505]/80 flex flex-col gap-3 transition-colors">
                      {achievements.map((achieve, i) => (
                        <li key={i} className="text-sm md:text-base pl-1 -indent-5 ml-5">{achieve}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {technologies && technologies.length > 0 && (
                  <div className="flex-1">
                    <h4 className="text-[#eb5939] group-hover:text-[#050505] font-mono text-xs uppercase tracking-[0.2em] mb-4 font-black transition-colors">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-[10px] md:text-xs font-mono border border-gray-700 group-hover:border-[#050505]/30 text-gray-400 group-hover:text-[#050505] rounded-full transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function Experience() {
  const experiences = [
    {
      company: "Bluestone Technologies",
      location: "Hybrid",
      period: "Feb 2024 - Present",
      duration: "2 years",
      title: "Full Stack Developer",
      description: "As a Full Stack Developer at Bluestone Technologies, I work on both frontend and backend development, creating interactive UIs and integrating APIs dynamically. On the backend, I develop RESTful APIs for various functionalities, including authentication and data management. I also contribute to cloud integration, leveraging AWS services like DynamoDB, Lambda, S3, Amplify, and App Runner to enhance performance and scalability. Additionally, I play a role in optimizing database queries and implementing a microservices architecture for better maintainability.",
      technologies: ["React", "Node.js", "AWS", "DynamoDB", "Lambda", "S3", "Express.js", "JavaScript"],
      hoverText: "Architecting microservices while you sleep.",
      achievements: [
        "Developed scalable microservices architecture",
        "Implemented AWS cloud solutions",
        "Optimized database performance by 40%",
        "Led frontend development for 3 major projects"
      ],
    },
    {
      company: "Prime Apps",
      location: "On-Site",
      period: "Nov 2023 - Feb 2024",
      duration: "4 months",
      title: "Backend Dev Intern",
      description: "Developed and optimized APIs using PHP, Laravel, and Node.js. Implemented JWT authentication and OAuth for secure user login, enhancing security standards. Worked on database optimization and API performance improvements.",
      technologies: ["PHP", "Laravel", "Node.js", "JWT", "OAuth", "MySQL", "REST APIs"],
      hoverText: "Securing APIs one token at a time.",
      achievements: [
        "Implemented secure authentication systems",
        "Optimized API response times by 30%",
        "Developed RESTful APIs for mobile applications",
        "Collaborated with cross-functional teams"
      ],
    },
    {
      company: "Vulfosec Cybersecurity",
      location: "Remote",
      period: "Sep 2023 - Nov 2023",
      duration: "3 months",
      title: "Django Dev Intern",
      description: "Engineered secure RESTful APIs using Django REST Framework, implementing JWT-based authentication and AWS S3 storage integration. Developed a Bugcrowd clone by implementing real-time data processing and secure authorization protocols.",
      technologies: ["Django", "Python", "AWS S3", "JWT", "PostgreSQL", "Django REST Framework"],
      hoverText: "Bug hunting? No, bug hiding.",
      achievements: [
        "Built secure API endpoints",
        "Implemented AWS S3 integration",
        "Developed real-time data processing",
        "Created Bugcrowd clone application"
      ],
    },
  ];

  return (
    <section id="experience" className="w-full bg-[#050505] py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-mono tracking-widest text-gray-500 uppercase px-4 md:px-20 mb-10">
          Experience
        </h2>

        <div className="flex flex-col w-full border-t border-gray-800">
          {experiences.map((exp, index) => (
            <ExperienceRow
              key={index}
              period={exp.period}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              hoverText={exp.hoverText}
              technologies={exp.technologies}
              achievements={exp.achievements}
              location={exp.location}
              duration={exp.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;