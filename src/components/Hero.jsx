import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
  FaArrowDown,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import profile from "../assets/profile.png";

const texts = [
  "I'm Henil Suhagiya",
  "I build modern web applications",
  "Let's create something amazing!",
];

function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const cvUrl = "/Henil_Resume_FullStack.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Henil_Resume_FullStack.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container max-w-4xl mx-auto text-center"
      >
        <div className="mb-8 relative mx-auto w-80 h-80 flex items-center justify-center">
          {/* 2D Orbital Lines - Subtle Motion */}
          {/* 3D Orbital Lines - Dynamic Motion */}
          <div className="absolute inset-0" style={{ perspective: "1000px" }}>
            {/* Inner Orbit */}
            <motion.div
              className="absolute inset-16 border border-blue-400/40 rounded-full"
              style={{ transformStyle: "preserve-3d" }}
              animate={{
                rotateX: [0, 180, 360],
                rotateY: [0, 180, 360],
                rotateZ: [0, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Middle Orbit */}
            <motion.div
              className="absolute inset-8 border border-purple-400/40 rounded-full"
              style={{ transformStyle: "preserve-3d" }}
              animate={{
                rotateX: [0, -180, -360],
                rotateY: [0, 180, 360],
                rotateZ: [0, -360]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Outer Orbit */}
            <motion.div
              className="absolute inset-0 border border-pink-400/40 rounded-full"
              style={{ transformStyle: "preserve-3d" }}
              animate={{
                rotateX: [360, 180, 0],
                rotateY: [0, -180, -360],
                rotateZ: [0, 360]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Atomic Nodes - Orbiting in 3D */}
          <div className="absolute inset-0" style={{ perspective: "1000px", pointerEvents: "none" }}>
            <motion.div
              className="absolute w-3 h-3 bg-blue-500 rounded-full top-1/2 left-1/2"
              animate={{
                rotateX: [0, 180, 360],
                rotateY: [0, 180, 360],
                z: [0, 50, 0, -50, 0] // Simulate depth
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                marginTop: '-6px',
                marginLeft: '-6px',
                transformOrigin: '0 0 -80px', // Offset from center to orbit
                transformStyle: "preserve-3d"
              }}
            />
            {/* Note: Implementing simpler 2D rotation for dots that matches the rings visual is often cleaner than complex 3D math in simple generic div. 
                 However, to truly match the rings we just rotated, we can try to parent them or just accept they float near.
                 Let's stick to the rings doing the heavy lifting for "3D" feel and keep dots floating around.
                 Actually, user asked for "rings circulating make them rotate in 3 dimensions".
                 Replacing the dots code block with nothing or keeping them simple is safer if I can't guarantee they align with rings.
                 Let's keep them but give them some Z movement.
             */}
          </div>

          {/* Profile Image - Center */}
          <div className="relative z-10 w-48 h-48 overflow-hidden rounded-full border-2 border-[#2f436e] dark:border-blue-400 bg-white dark:bg-gray-800">
            <img
              src={profile}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Floating Icons - Outside the orbital system */}
          <motion.div
            className="absolute -top-8 -right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg z-20"
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 360],
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "linear" }
            }}
          >
            <FaCode className="w-6 h-6" />
          </motion.div>

          <motion.div
            className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg z-20"
            animate={{
              y: [-10, 10, -10],
              rotate: [360, 0],
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
              rotate: { duration: 10, repeat: Infinity, ease: "linear" }
            }}
          >
            <FaRocket className="w-6 h-6" />
          </motion.div>

          {/* Additional floating icon */}
          <motion.div
            className="absolute top-1/2 -right-16 w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white shadow-lg z-20"
            animate={{
              y: [-8, 8, -8],
              rotate: [0, 360],
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 },
              rotate: { duration: 12, repeat: Infinity, ease: "linear" }
            }}
          >
            <FaCode className="w-5 h-5" />
          </motion.div>

          {/* Left side floating icon */}
          <motion.div
            className="absolute top-1/2 -left-16 w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white shadow-lg z-20"
            animate={{
              y: [-8, 8, -8],
              rotate: [360, 0],
            }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
              rotate: { duration: 15, repeat: Infinity, ease: "linear" }
            }}
          >
            <FaRocket className="w-5 h-5" />
          </motion.div>
        </div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-black dark:text-white">Hey, </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={texts[index]}
              className="bg-clip-text text-[#2f436e] dark:text-blue-400 bg-gradient-to-r from-primary to-secondary"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1 }}
            >
              {texts[index]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          "Full Stack Developer"
        </motion.h2>

        <motion.p
          className="text-lg max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-400 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Casting spells of innovation with every line of code.
        </motion.p>

        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {[
            { href: "https://github.com/henry-1603", icon: <FaGithub className="h-6 w-6" /> },
            {
              href: "https://linkedin.com/in/henil-suhagiya-4b86461a5/",
              icon: <FaLinkedin className="h-6 w-6" />,
            },
            { href: "https://instagram.com/henry._.08", icon: <FaInstagram className="h-6 w-6" /> },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div className="h-10 w-10 text-gray-700 dark:text-white hover:text-[#2f436e] dark:hover:text-blue-400 transition-colors duration-300">
                {item.icon}
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <button onClick={handleDownloadCV} className="bg-[#2f436e] dark:bg-blue-600 text-white text-center border-white flex items-center px-6 py-3 rounded-lg hover:bg-[#1e2a4a] dark:hover:bg-blue-700 transition-colors">
            <FaDownload className="mr-2 h-4 w-4" /> Download CV
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: scrollY > 100 ? 0 : 1,
        }}
        transition={{
          y: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          },
          opacity: { duration: 0.3 },
        }}
      >
        <button className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <FaArrowDown className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          <span className="sr-only">Scroll down</span>
        </button>
      </motion.div>
    </section>
  );
}

export default Hero;
