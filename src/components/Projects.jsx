"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaGithub, FaLink } from "react-icons/fa"

import aiInterview from '../assets/projects/ai-interview.png'
import eventManagement from '../assets/projects/eventManagement.png'
import budget from '../assets/projects/budgetBuddy.png'


function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "AI Interview Mocker",
      description: "Built an AI-powered Interview Platform with Next.js & Gemini AI! Excited to share my latest project—a smart AI-driven interview system! 🎤💻",
      image: aiInterview,
      tags: ["Next.js", "tailwind", "clerk", "drizzle-orm" , "postgres" , "Gemini-API"],
      github: "https://github.com/henry-1603/ai-interview-mocker",
      demo: "https://interu-ai.vercel.app/",
    },
    {
      title: "Event Management Platform",
      description:
        "Event Management Platform, a full-stack web application designed to streamline event creation, management, and tracking!🌟 Create and manage events with ease 🗓️ Real-time updates with WebSocket integration 🔄",
      image: eventManagement,
      tags: ["React", "tailwind", "Node.js", "Express.js" , "Websockets"],
      github: "https://github.com/henry-1603/Event-Management-Platform",
      demo: "https://event-management-platform-tmvf.vercel.app/",
    },
    {
      title: "Budget Buddy",
      description: "created a user-friendly application to empower individuals in taking control of their financial activities. The finance tracker offers comprehensive tools for personal finance management , including : User Management ,Account Management , Budgeting Tools , Expense Tracking , Income Tracking , Recurring Transactions",
      image: budget,
      tags: ["React.js", "tailwind", "Go - Lang"],
      github: "https://github.com/henry-1603/personal-finance-tracker-go",
      demo: "",
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

  const getItemVariants = (index) => ({
    hidden: { x: index % 2 === 0 ? 50 : -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
      },
    },
  });

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-[#2f436e] font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground italic text-black max-w-2xl mx-auto font-medium">
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
              variants={getItemVariants(index)}
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
                    <FaGithub className="h-5 w-5 text-white" />
                    <span className="sr-only text-white">GitHub</span>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-secondary-icon">
                    <FaLink className="h-5 w-5 text-white" />
                    <span className="sr-only text-white">Live Demo</span>
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-3 text-left text-black">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-justify italic text-black">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6 italic text-left text-black">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-left text-primary text-sm font-medium rounded-full text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end gap-10">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-black rounded-full">
                    <FaGithub className="mr-2 h-7 w-7 text-black" />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary text-black">
                    <FaLink className="mr-2 h-6 w-6 text-black" />
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

