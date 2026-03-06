import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "../contexts/CursorContext";

const SkillRow = ({ defaultText, hoverText, label }) => {
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
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#050505] uppercase tracking-wider transition-colors">{label}</h3>
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
                        <div className="px-4 md:px-20 pt-8 flex flex-col justify-between items-start gap-6">
                            <p className="text-lg md:text-2xl text-gray-500 group-hover:text-[#050505] font-medium max-w-2xl text-left transition-colors">
                                {defaultText}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const WhatIDo = () => {
    const skills = [
        {
            label: "Frontend",
            defaultText: "I build seamless React and Next.js UIs with Tailwind CSS for an enhanced user experience.",
            hoverText: "I center divs and make things look pretty.",
        },
        {
            label: "Backend",
            defaultText: "I build robust backends using Node.js, Express.js, MongoDB, and Django.",
            hoverText: "I write APIs and pray they don't crash under load.",
        },
        {
            label: "Cloud Arch.",
            defaultText: "I integrate AWS services (S3, Amplify, Lambda) for scalability and automation.",
            hoverText: "I spend half my time figuring out AWS permissions.",
        },
    ];

    return (
        <section id="services" className="w-full bg-[#050505] py-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-sm font-mono tracking-widest text-gray-500 uppercase px-4 md:px-20 mb-10">
                    What I Do
                </h2>
                <div className="flex flex-col w-full border-b border-gray-800">
                    {skills.map((skill, index) => (
                        <SkillRow
                            key={index}
                            label={skill.label}
                            defaultText={skill.defaultText}
                            hoverText={skill.hoverText}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;
