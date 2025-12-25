import React from "react";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      present: true,
      title: "Full Stack Developer",
      company: "Bluestone Technologies",
      location: "Hybrid",
      period: "Feb 2024 - Present",
      duration: "2 years",
      description: "As a Full Stack Developer at Bluestone Technologies, I work on both frontend and backend development, creating interactive UIs and integrating APIs dynamically. On the backend, I develop RESTful APIs for various functionalities, including authentication and data management. I also contribute to cloud integration, leveraging AWS services like DynamoDB, Lambda, S3, Amplify, and App Runner to enhance performance and scalability. Additionally, I play a role in optimizing database queries and implementing a microservices architecture for better maintainability.",
      technologies: ["React", "Node.js", "AWS", "DynamoDB", "Lambda", "S3", "Express.js", "JavaScript"],
      achievements: [
        "Developed scalable microservices architecture",
        "Implemented AWS cloud solutions",
        "Optimized database performance by 40%",
        "Led frontend development for 3 major projects"
      ],
    },
    {
      present: false,
      title: "Backend Developer Intern",
      company: "Prime Apps",
      location: "On-Site",
      period: "Nov 2023 - Feb 2024",
      duration: "4 months",
      description: "Developed and optimized APIs using PHP, Laravel, and Node.js. Implemented JWT authentication and OAuth for secure user login, enhancing security standards. Worked on database optimization and API performance improvements.",
      technologies: ["PHP", "Laravel", "Node.js", "JWT", "OAuth", "MySQL", "REST APIs"],
      achievements: [
        "Implemented secure authentication systems",
        "Optimized API response times by 30%",
        "Developed RESTful APIs for mobile applications",
        "Collaborated with cross-functional teams"
      ],
    },
    {
      present: false,
      title: "Django Developer Intern",
      company: "Vulfosec Cybersecurity",
      location: "Remote",
      period: "Sep 2023 - Nov 2023",
      duration: "3 months",
      description: "Engineered secure RESTful APIs using Django REST Framework, implementing JWT-based authentication and AWS S3 storage integration. Developed a Bugcrowd clone by implementing real-time data processing and secure authorization protocols.",
      technologies: ["Django", "Python", "AWS S3", "JWT", "PostgreSQL", "Django REST Framework"],
      achievements: [
        "Built secure API endpoints",
        "Implemented AWS S3 integration",
        "Developed real-time data processing",
        "Created Bugcrowd clone application"
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Experience
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the companies I've worked with.
          </p>
        </motion.div>

        <div className="flex flex-col gap-0 pb-20">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="sticky h-screen flex items-start justify-center"
              style={{
                top: index === experiences.length - 1 ? "80px" : `${80 + index * 0}px`,
                paddingTop: "2rem"
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-2xl group w-full h-[600px] flex flex-col"
                style={{
                  zIndex: index + 1,
                  // scale: 1 - (experiences.length - 1 - index) * 0.02,
                }}
              >
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full -z-1" />

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 flex-shrink-0">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                        {exp.title}
                      </h3>
                      {exp.present && (
                        <span className="px-4 py-1.5 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold rounded-full border border-green-500/20">
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {exp.company}
                    </h4>
                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-semibold">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Description - Scrollable if content too long */}
                <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar mb-8">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {exp.description}
                  </p>
                </div>

                {/* Achievements & Skills Split */}
                <div className="grid md:grid-cols-2 gap-8 flex-shrink-0 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/50">
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-lg border border-blue-100 dark:border-blue-900/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.slice(0, 3).map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="line-clamp-2">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;