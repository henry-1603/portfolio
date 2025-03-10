"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and Stripe for payment processing.",
      image: "/projects/ecommerce.jpg",
      tags: ["React", "Node.js", "Express", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "A task management application with drag-and-drop functionality, user authentication, and real-time updates.",
      image: "/projects/taskmanager.jpg",
      tags: ["React", "Firebase", "CSS", "DnD"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Framer Motion for smooth animations.",
      image: "/projects/portfolio.jpg",
      tags: ["React", "Framer Motion", "CSS"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills and experience.
          </p>
        </div>

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
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="lg:w-1/2 relative overflow-hidden rounded-lg group">
                <img
                  src={project.image || "/placeholder.jpg"}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary-icon">
                    <FaGithub className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-secondary-icon">
                    <FaExternalLinkAlt className="h-5 w-5" />
                    <span className="sr-only">Live Demo</span>
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    <FaGithub className="mr-2 h-4 w-4" /> Source Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <FaExternalLinkAlt className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

