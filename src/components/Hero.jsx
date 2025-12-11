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
import profile from "../assets/henil2.png";

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

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offset = 15;

    // Apply parallax to background elements
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    parallaxElements.forEach(el => {
      const speed = el.getAttribute('data-speed') || 0.05;
      const x = (window.innerWidth - clientX * speed) / 100;
      const y = (window.innerHeight - clientY * speed) / 100;
      el.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-12 py-20"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-100 to-white dark:from-[#0f172a] dark:via-[#090e1a] dark:to-black transition-colors duration-500" />

      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-[128px] pointer-events-none mix-blend-multiply dark:mix-blend-normal animate-pulse" />
      <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-500/30 rounded-full blur-[128px] pointer-events-none mix-blend-multiply dark:mix-blend-normal animate-pulse delay-700" />

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT COLUMN: Text Content */}
        <motion.div
          className="text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          {/* <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Available for Hire
          </motion.div> */}

          {/* Glitch Name */}
          <div className="relative inline-block group">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400 leading-tight">
              Henil<br />Suhagiya
            </h1>
            <h1 className="absolute top-0 left-0 text-6xl md:text-8xl font-black tracking-tighter text-blue-500 opacity-0 group-hover:opacity-40 animate-pulse delay-75 blur-[2px] leading-tight select-none pointer-events-none">
              Henil<br />Suhagiya
            </h1>
            <h1 className="absolute top-0 left-0 text-6xl md:text-8xl font-black tracking-tighter text-red-500 opacity-0 group-hover:opacity-40 animate-pulse delay-150 blur-[2px] leading-tight select-none pointer-events-none" style={{ transform: 'translate(4px, 4px)' }}>
              Henil<br />Suhagiya
            </h1>

            {/* Decoration Line */}
            <motion.div
              className="h-2 w-24 bg-blue-500 mt-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>

          {/* Typewriter Subtext */}
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-mono h-16 flex items-center">
            <span className="text-blue-500 mr-2">{'>'}</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={texts[index]}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                {texts[index]}
              </motion.span>
            </AnimatePresence>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-6 bg-blue-500 ml-1"
            />
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
            A passionate Full Stack Developer crafting robust and scalable web applications.
            I bridge the gap between elegant design and powerful backend architecture.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-bold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              View Works
            </button>
            <button
              onClick={handleDownloadCV}
              className="px-8 py-4 border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white rounded-lg font-bold transition-colors duration-300 flex items-center gap-2 group"
            >
              <FaDownload className="group-hover:translate-y-1 transition-transform" />
              Download CV
            </button>
          </div>

          <div className="flex gap-6 pt-8">
            {[
              { href: "https://github.com/henry-1603", icon: <FaGithub size={24} /> },
              { href: "https://linkedin.com/in/henil-suhagiya-4b86461a5/", icon: <FaLinkedin size={24} /> },
              { href: "https://instagram.com/henry._.08", icon: <FaInstagram size={24} /> }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

        </motion.div>

        {/* RIGHT COLUMN: 3D Visuals */}
        <motion.div
          className="relative h-[600px] hidden md:flex items-center justify-center perspective-1000"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main 3D Container with Tilt Effect */}
          <motion.div
            className="relative w-[400px] h-[500px] preserve-3d"
            whileHover={{ rotateY: 5, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {/* Back Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 rounded-full blur-[80px] -z-10" />

            {/* Orbital Rings - Large */}
            <div className="absolute inset-0 preserve-3d">
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-blue-500/20 rounded-full"
                animate={{ rotateX: [60, 60], rotateY: [0, 360], rotateZ: [0, 10] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: "preserve-3d" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-purple-500/20 rounded-full"
                animate={{ rotateX: [70, 70], rotateY: [360, 0], rotateZ: [0, -10] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: "preserve-3d" }}
              />
            </div>

            {/* Main Card / Image Container */}
            <div className="absolute inset-0 bg-gray-900 rounded-3xl border border-white/20 shadow-2xl overflow-hidden z-10 group">
              {/* Full Card Image */}
              <img
                src={profile}
                alt="Henil Suhagiya"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {/* Online Indicator */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-gray-300 text-sm font-medium">Open to work</span>
                </div>

                {/* Floating "Code" Snippet */}
                <div className="w-full bg-black/50 backdrop-blur-md rounded-xl p-4 font-mono text-xs text-blue-300 border border-white/10">
                  <p><span className="text-purple-400">const</span> developer = {'{'}</p>
                  <p className="pl-4">name: <span className="text-green-400">'Henil'</span>,</p>
                  <p className="pl-4">role: <span className="text-green-400">'Full Stack'</span>,</p>
                  {/* <p className="pl-4">skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node'</span>]</p> */}
                  <p>{'}'};</p>
                </div>
              </div>
            </div>

            {/* Floating Icons Parallax */}
            <motion.div
              className="absolute -right-12 top-12 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 z-20"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaCode className="w-8 h-8 text-blue-500" />
            </motion.div>

            <motion.div
              className="absolute -left-12 bottom-24 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 z-20"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <FaRocket className="w-8 h-8 text-purple-500" />
            </motion.div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
