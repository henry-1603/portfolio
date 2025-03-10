"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDownload,
  FaArrowDown,
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
    }, 2000); // Changes text every 3 seconds

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
    const cvUrl = "/Henil_Resume_FullStack.pdf"; // Ensure this file is inside the 'public' folder
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Henil_Resume_FullStack.pdf"; // Sets the file name
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
        <div className="mb-8 relative mx-auto w-50 h-50 overflow-hidden rounded-full border-4 border-[#2f436e]">
          <img
            src={profile}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-black">Hey, </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={texts[index]}
              className="bg-clip-text text-[#2f436e] bg-gradient-to-r from-primary to-secondary"
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
          className="text-xl md:text-2xl text-muted-foreground text-black font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          "Full Stack Developer"
        </motion.h2>

        <motion.p
          className="text-lg max-w-2xl mx-auto mb-8 text-[#2f436e] italic text-muted-foreground"
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
              whileHover={{ y: -5, scale: 1.2 }} // Moves up slightly and enlarges
              whileTap={{ scale: 0.9 }} // Shrinks slightly when clicked
              transition={{ type: "spring", stiffness: 300 }} // Adds bounce effect
            >
              <motion.div className="h-10 w-10 text-black">
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
          <button onClick={handleDownloadCV} className="bg-[#2f436e] text-center border-white flex items-center">
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
        <button className="btn-ghost rounded-full animate-bounce mt-5">
          <FaArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
        </button>
      </motion.div>
    </section>
  );
}

export default Hero;
