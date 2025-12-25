import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLink, FaEye, FaCode, FaRocket, FaStar } from "react-icons/fa";

import aiInterview from '../assets/projects/ai-interview.png'
import bhaktiProject from '../assets/projects/bhakti-project.png'
import qLearning from '../assets/projects/q-learning.png'

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Bhakti Infrastructure Website",
      description: "A freelance infrastructure website built from scratch with Next.js, Tailwind CSS, and Material-UI. Delivering a premium digital identity for Bhakti Infrastructure.",
      longDescription: "A fully custom-built freelance project for Bhakti Infrastructure. I developed this website from the ground up, focusing on a clean, professional aesthetic and a seamless user experience for showcasing infrastructure projects and services.",
      image: bhaktiProject,
      tags: ["Next.js", "Tailwind CSS", "Material-UI", "TypeScript"],
      // github: "",
      demo: "https://www.bhaktiinfrastructure.com/",
      featured: true,
      status: "Live",
      category: "Web App",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Material-UI"],
      features: [
        "Freelance project built from scratch",
        "Modern professional design",
        "Responsive infrastructure showcase",
        "Smooth navigation and animations",
        "Contact and lead generation tools"
      ],
      challenges: [
        "Implementing a cohesive design system",
        "Optimizing for SEO and performance",
        "Creating custom Material-UI themes",
        "Handling complex layout requirements"
      ]
    },
    {
      title: "Q-Learning Warehouse Robot",
      description: "An autonomous Warehouse Robot simulation using Reinforcement Learning to navigate and learn via trial and error. 🤖✨",
      longDescription: "I built a full-stack simulation of an Autonomous Warehouse Robot in a chaotic 10x10 maze. Using Q-Learning, the agent learns to avoid obstacles and find packages through trial and error, moving from random collisions to finding the shortest path every time.",
      image: qLearning,
      tags: ["Python", "FastAPI", "React", "NumPy", "TailwindCSS"],
      github: "https://github.com/henry-1603/warehouse-robot-rl",
      demo: "",
      featured: true,
      status: "Live",
      category: "AI/ML",
      techStack: ["Python (FastAPI)", "NumPy", "React", "TailwindCSS"],
      features: [
        "10x10 Maze environment simulation",
        "Real-time math processing with NumPy",
        "FastAPI backend for learning logic",
        "Live React-based visualization",
        "Autonomous path optimization"
      ],
      challenges: [
        "Balancing exploration vs exploitation",
        "Visualizing the math in real-time",
        "Optimizing the state-space for performance",
        "Implementing dynamic obstacle handling"
      ]
    },
    {
      title: "AI Interview Mocker",
      description: "Built an AI-powered Interview Platform with Next.js & Gemini AI! Excited to share my latest project—a smart AI-driven interview system! 🎤💻",
      longDescription: "A comprehensive AI-powered interview platform that leverages Google's Gemini AI to conduct realistic mock interviews. The platform provides real-time feedback, performance analytics, and personalized improvement suggestions to help users prepare for technical interviews.",
      image: aiInterview,
      tags: ["Next.js", "Tailwind CSS", "Clerk", "Drizzle ORM", "PostgreSQL", "Gemini API"],
      github: "https://github.com/henry-1603/ai-interview-mocker",
      demo: "https://interu-ai.vercel.app/",
      featured: true,
      status: "Live",
      category: "AI/ML",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk Auth", "Drizzle ORM", "PostgreSQL", "Gemini AI"],
      features: [
        "AI-powered mock interviews",
        "Real-time feedback system",
        "Performance analytics dashboard",
        "User authentication & profiles",
        "Responsive design"
      ],
      challenges: [
        "Integrating Gemini AI API effectively",
        "Implementing real-time audio processing",
        "Creating intuitive user experience",
        "Managing database performance"
      ]
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

  const projectVariants = {
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

  const getCategoryColor = (category) => {
    const colors = {
      "AI/ML": "from-purple-500 to-pink-500",
      "Web App": "from-blue-500 to-cyan-500",
      "Finance": "from-green-500 to-emerald-500",
      "Mobile": "from-orange-500 to-red-500",
    };
    return colors[category] || "from-gray-500 to-slate-500";
  };

  const getStatusColor = (status) => {
    const colors = {
      "Live": "bg-green-500",
      "Development": "bg-yellow-500",
      "Coming Soon": "bg-blue-500",
    };
    return colors[status] || "bg-gray-500";
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating my skills in full-stack development,
            AI integration, and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 relative group">
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                  whileHover={{
                    scale: 1.02,
                    rotateY: index % 2 === 0 ? 5 : -5,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={project.image || "/placeholder.jpg"}
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors duration-300 border border-white/20"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub className="h-6 w-6 text-white" />
                    </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors duration-300 border border-white/20"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaLink className="h-6 w-6 text-white" />
                      </motion.a>
                    )}
                  </motion.div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2">
                <motion.div
                  className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 ${hoveredProject === index ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                    }`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Category Badge */}
                  <motion.div
                    className={`inline-block px-4 py-2 bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-sm font-semibold rounded-full mb-4`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {project.category}
                  </motion.div>

                  <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                      <FaCode className="h-4 w-4" />
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="h-5 w-5" />
                      View Code
                    </motion.a>
                  )}
                  {project.demo ? (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center justify-center gap-3 px-6 py-3"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaRocket className="h-5 w-5" />
                        Live Demo
                      </motion.a>
                    ) : (
                      <motion.button
                        disabled
                        className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed"
                      >
                        <FaEye className="h-5 w-5" />
                        Coming Soon
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;

