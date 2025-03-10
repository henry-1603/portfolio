"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa"

function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description:
        "Led the development of responsive web applications using React.js and Next.js. Implemented state management with Redux and optimized performance.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      period: "2018 - 2021",
      description:
        "Developed and maintained client websites. Collaborated with designers to implement UI/UX improvements and ensure responsive design across all devices.",
    },
    {
      title: "Junior Web Developer",
      company: "Creative Web Agency",
      period: "2016 - 2018",
      description:
        "Assisted in the development of websites using HTML, CSS, and JavaScript. Worked on bug fixes and implemented new features for existing websites.",
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
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2 md:pr-12 md:pl-0 pl-12">
                  <div className={`bg-card p-6 rounded-lg shadow-sm border ${index % 2 === 0 ? "md:ml-6" : "md:mr-6"}`}>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <h4 className="text-primary font-medium mb-2">{exp.company}</h4>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <FaCalendarAlt className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 top-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center transform -translate-x-1/2">
                  <FaBriefcase className="h-4 w-4 text-primary-foreground" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience

