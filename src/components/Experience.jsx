"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      present: true,
      title: "Full Stack Developer",
      company: "Bluestone Technologies.",
      period: "Feb 2024 - Present",
      description:
        "As a Full Stack Developer at Bluestone Technologies, I worked on both frontend and backend development, creating interactive UIs and integrating APIs dynamically. On the backend, I developed RESTful APIs for various functionalities, including authentication and data management. I also contributed to cloud integration, leveraging AWS services like DynamoDB, Lambda, S3, Amplify, and App Runner to enhance performance and scalability. Additionally, I played a role in optimizing database queries and implementing a microservices architecture for better maintainability.",
    },
    {
      present: false,
      title: "Backend Developer Intern",
      company: "Prime Apps",
      period: "Nov 2024 - Feb 2024",
      description:
        "Developed and optimized APIs using PHP, Laravel, and Node.js,Implemented JWT authentication and OAuth for secure user login, enhancing security standards",
    },
    {
      present: false,
      title: "Django Developer Intern",
      company: "Vulfosec Cybersecurity",
      period: "Sep 2023 - Nov 2023",
      description:
        "Engineered secure RESTful APIs using Django REST Framework, implementing JWT-based authentication and ,AWS S3 storage integration,Developed a Bugcrowd clone by implementing real-time data processing and secure authorization protocols.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-[#2f436e] font-bold mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground italic text-black max-w-2xl mx-auto font-medium">
            My professional journey and the companies I've had the pleasure to
            work with.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-black transform md:-translate-x-1/2" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={getItemVariants(index)}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2  md:pl-0 pl-12 ">
                  <div
                    className={`bg-card p-6 rounded-lg shadow-black-100  shadow-md inset-shadow-sm border ${
                      index % 2 === 0 ? "md:ml-6" : "md:mr-6"
                    } ${exp.present ? "border-[#2f346e] border-2" : "border-black"} `}
                  >
                    <h3 className="text-xl text-[#2f346e] font-bold mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-primary  font-bold mb-2 text-black">
                      {exp.company}
                    </h4>
                    <div className="flex items-center text-muted-foreground text-center justify-end mb-4">
                      <FaCalendarAlt className="h-4 w-4 mr-2 text-black" />
                      <span className="text-sm text-black italic">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-black text-justify">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 top-6 w-8 h-8 rounded-full bg-primary flex items-center bg-[#2f346e] justify-center transform -translate-x-1/2">
                  <FaBriefcase className="h-4 w-4 text-primary-foreground text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
