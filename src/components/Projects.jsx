import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "../contexts/CursorContext";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectRow = ({ title, defaultText, hoverText, link, github }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { onCursor } = useCursor();

  const handleMouseEnter = () => {
    onCursor("click", "CLICK");
  };

  const handleMouseLeave = () => {
    onCursor(false);
  };

  return (
    <div
      className="w-full border-t border-gray-800 py-10 md:py-16 cursor-none hover:bg-[#eb5939] group transition-colors"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center px-4 md:px-20">
        <h3 className="text-3xl md:text-5xl font-black text-white group-hover:text-[#050505] tracking-tighter uppercase transition-colors max-w-2xl">{title}</h3>
        <div className="flex items-center gap-6">
          <p className="hidden md:block text-sm md:text-base font-bold text-[#eb5939] group-hover:text-[#050505] opacity-0 group-hover:opacity-100 italic transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-right">
            "{hoverText}"
          </p>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-500 group-hover:text-[#050505] text-2xl transition-colors"
          >
            ↓
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-20 pt-8 flex flex-col gap-4">
              <p className="text-lg md:text-2xl text-gray-400 group-hover:text-[#050505] font-medium max-w-3xl transition-colors">
                {defaultText}
              </p>
              <p className="text-md md:text-xl text-[#eb5939] group-hover:text-[#050505] font-medium max-w-3xl italic transition-colors">
                "{hoverText}"
              </p>
              <div className="flex gap-6 mt-4 relative z-50 pointer-events-auto">
                {link && link !== "#" && (
                  <a
                    href={link}
                    onMouseEnter={() => onCursor('hidden')}
                    onMouseLeave={() => onCursor('click', 'CLICK')}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-50 text-gray-400 group-hover:text-[#050505] hover:!text-black hover:opacity-100 flex items-center gap-2 font-mono text-sm uppercase tracking-widest cursor-pointer transition-colors block"
                  >
                    <FaLink /> Live Demo
                  </a>
                )}
                {github && github !== "#" && (
                  <a
                    href={github}
                    onMouseEnter={() => onCursor('hidden')}
                    onMouseLeave={() => onCursor('click', 'CLICK')}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-50 text-gray-400 group-hover:text-[#050505] hover:!text-black hover:opacity-100 flex items-center gap-2 font-mono text-sm uppercase tracking-widest cursor-pointer transition-colors block"
                  >
                    <FaGithub /> Source
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Bhakti Infrastructure",
      defaultText: "A comprehensive digital infrastructure website offering modernized civil project tracking.",
      hoverText: "Because managing bricks and mortar needs good software.",
      link: "https://www.bhaktiinfrastructure.com/",
      github: ""
    },
    {
      title: "Q-Learning Warehouse Robot",
      defaultText: "An AI model using Q-Learning techniques to automate picking and routing in a simulated warehouse environment.",
      hoverText: "Teaching robots to move boxes better than humans.",
      link: "",
      github: "https://github.com/henry-1603/warehouse-robot-rl"
    },
    {
      title: "AI Interview Mocker",
      defaultText: "Built real-time voice-based responses with AI-driven feedback using Next.js and Google Generative AI.",
      hoverText: "Practicing interviews so you don't have to.",
      link: "https://interu-ai.vercel.app/",
      github: "https://github.com/henry-1603/ai-interview-mocker"
    },
  ];

  return (
    <section id="projects" className="w-full bg-[#050505] py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-mono tracking-widest text-gray-500 uppercase px-4 md:px-20 mb-10">
          Selected Works
        </h2>
        <div className="flex flex-col w-full border-b border-gray-800">
          {projects.map((project, index) => (
            <ProjectRow
              key={index}
              title={project.title}
              defaultText={project.defaultText}
              hoverText={project.hoverText}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
