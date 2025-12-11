import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const experiences = [
    {
      present: true,
      title: "Full Stack Developer",
      company: "Bluestone Technologies",
      location: "Remote",
      period: "Feb 2024 - Present",
      duration: "1+ years",
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
      location: "Remote",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#2f436e] dark:text-blue-400">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the companies I've worked with.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700 pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900" />

              <motion.div
                className="relative overflow-hidden rounded-2xl p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.01 }}
              >
                {/* Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 relative z-10">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        {exp.title}
                      </h3>
                      {exp.present && (
                        <span className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 text-xs font-bold rounded-full border border-green-500/20">
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex flex-col md:items-end mt-4 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium bg-gray-100 dark:bg-gray-700/50 px-3 py-1 rounded-full">{exp.period}</span>
                    <span className="mt-1">{exp.location} • {exp.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed relative z-10">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-100 dark:border-blue-900/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="relative z-10">
                  <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                    Key Achievements
                  </h5>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;