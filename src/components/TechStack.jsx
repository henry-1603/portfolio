"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const technologies = [
    { name: "React", icon: "/tech/react.png" },
    { name: "Next.js", icon: "/tech/nextjs.png" },
    { name: "JavaScript", icon: "/tech/javascript.png" },
    { name: "HTML5", icon: "/tech/html5.png" },
    { name: "CSS3", icon: "/tech/css3.png" },
    { name: "Tailwind CSS", icon: "/tech/tailwind.png" },
    { name: "Node.js", icon: "/tech/nodejs.png" },
    { name: "MongoDB", icon: "/tech/mongodb.png" },
    { name: "PostgreSQL", icon: "/tech/postgresql.png" },
    { name: "GraphQL", icon: "/tech/graphql.png" },
    { name: "Git", icon: "/tech/git.png" },
    { name: "AWS", icon: "/tech/aws.png" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="tech-stack" className="py-20">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with on a daily basis.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center">
              <div className="bg-card p-4 rounded-lg shadow-sm border mb-3 w-20 h-20 flex items-center justify-center">
                <img src={tech.icon || "/placeholder.png"} alt={tech.name} className="w-10 h-10 object-contain" />
              </div>
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack

