import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredTech, setHoveredTech] = useState(null);

  const technologies = [
    { name: "Next.js", icon: next, level: 90, category: "Frontend" },
    { name: "React", icon: react, level: 95, category: "Frontend" },
    { name: "JavaScript", icon: javascript, level: 95, category: "Language" },
    { name: "TypeScript", icon: typescript, level: 85, category: "Language" },
    { name: "Redux", icon: redux, level: 80, category: "State Management" },
    { name: "Material-UI", icon: mui, level: 85, category: "UI Library" },
    { name: "Bootstrap", icon: bootstrap, level: 90, category: "UI Framework" },
    { name: "HTML5", icon: HTML5, level: 95, category: "Markup" },
    { name: "CSS3", icon: CSS3, level: 90, category: "Styling" },
    { name: "Tailwind CSS", icon: tailwind, level: 95, category: "Styling" },
    { name: "Node.js", icon: nodejs, level: 90, category: "Backend" },
    { name: "Express.js", icon: expressjs, level: 85, category: "Backend" },
    { name: "MongoDB", icon: mongo, level: 80, category: "Database" },
    { name: "DynamoDB", icon: dynamoDb, level: 75, category: "Database" },
    { name: "PostgreSQL", icon: postgres, level: 85, category: "Database" },
    { name: "GraphQL", icon: graphql, level: 70, category: "API" },
    { name: "Git", icon: git, level: 90, category: "Version Control" },
    { name: "AWS", icon: aws, level: 80, category: "Cloud" },
    { name: "Python", icon: python, level: 85, category: "Language" },
    { name: "Django", icon: django, level: 80, category: "Backend" },
    { name: "Go", icon: go, level: 70, category: "Language" },
    { name: "Postman", icon: postman, level: 90, category: "API Testing" },
  ];

  const categories = [...new Set(technologies.map(tech => tech.category))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
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
    <section id="techstack" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Tech Stack
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {/* Row 1 - Scroll Left */}
          <div className="relative flex overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-[#0f172a] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-[#0f172a] to-transparent z-10" />

            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={{ x: [0, -1000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="inline-flex flex-col items-center justify-center p-6 w-40 h-40 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
                >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-semibold text-gray-700 dark:text-gray-200">{tech.name}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex gap-8 whitespace-nowrap ml-8"
              animate={{ x: [0, -1000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              aria-hidden="true"
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`clone-${index}`}
                  className="inline-flex flex-col items-center justify-center p-6 w-40 h-40 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
                >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-semibold text-gray-700 dark:text-gray-200">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Scroll Right (Reverse) */}
          <div className="relative flex overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-[#0f172a] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-[#0f172a] to-transparent z-10" />

            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={{ x: [-1000, 0] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30, // Slightly slower
                  ease: "linear",
                },
              }}
            >
              {[...technologies.reverse(), ...technologies].map((tech, index) => (
                <div
                  key={`row2-${index}`}
                  className="inline-flex flex-col items-center justify-center p-6 w-40 h-40 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-300"
                >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-semibold text-gray-700 dark:text-gray-200">{tech.name}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex gap-8 whitespace-nowrap ml-8"
              animate={{ x: [-1000, 0] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              aria-hidden="true"
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`row2-clone-${index}`}
                  className="inline-flex flex-col items-center justify-center p-6 w-40 h-40 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-300"
                >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-semibold text-gray-700 dark:text-gray-200">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default TechStack;

