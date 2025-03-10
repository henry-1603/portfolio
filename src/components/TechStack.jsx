"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"


// icons
import next from '../assets/tech/nextjs.svg'
import react from '../assets/tech/reactjs.svg'
import javascript from '../assets/tech/javascript.png'
import typescript from '../assets/tech/typescript.png'
import redux from '../assets/tech/redux.svg'
import mui from '../assets/tech/mui.svg'
import bootstrap from '../assets/tech/bootstrap.png'
import HTML5 from '../assets/tech/html5.png'
import CSS3 from '../assets/tech/css3.svg'
import tailwind from '../assets/tech/tailwind.png'
import nodejs from '../assets/tech/nodejs.png'
import expressjs from '../assets/tech/expressjs.png'
import mongo from '../assets/tech/mongodb.svg'
import postgres from '../assets/tech/postgres.png'
import graphql from '../assets/tech/graphql.png'
import git from '../assets/tech/git.png'
import aws from '../assets/tech/aws.webp'
import python from '../assets/tech/python.png'
import django from '../assets/tech/django.svg'
import postman from '../assets/tech/postman.svg'
import dynamoDb from '../assets/tech/dynamodb.svg'
import go from '../assets/tech/go.png'


function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const technologies = [
    { name: "Next.js", icon: next },
    { name: "React", icon: react },
    { name: "JavaScript", icon: javascript },
    { name: "Typescript", icon: typescript },
    { name: "redux", icon: redux },
    { name: "mui", icon: mui },
    { name: "bootstrap", icon: bootstrap },
    { name: "HTML5", icon: HTML5 },
    { name: "CSS3", icon: CSS3 },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Node.js", icon: nodejs },
    { name: "Express.js", icon: expressjs },
    { name: "MongoDB", icon: mongo },
    { name: "DynamoDB", icon: dynamoDb },
    { name: "PostgreSQL", icon: postgres },
    { name: "GraphQL", icon: graphql },
    { name: "Git", icon: git },
    { name: "AWS", icon: aws },
    { name: "python", icon: python },
    { name: "django", icon: django },
    { name: "Go", icon: go },
    { name: "postman", icon: postman },


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
          <h2 className="text-3xl md:text-5xl text-[#2f436e] font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground italic text-black max-w-2xl mx-auto">
            Technologies and tools I work with on a daily basis.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center">
              <div className="bg-card p-4 hover:shadow-black hover:bg-gray-200 hover:rounded-lg hover:inset-shadow-sm transition-all  border mb-3 w-20 h-20 flex items-center justify-center">
                <img src={tech.icon || "/placeholder.png"} alt={tech.name} className="w-12 h-12 object-contain" />
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

