import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode } from 'react-icons/fa'; // Replace with actual favicon later if needed

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [showStart, setShowStart] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += Math.floor(Math.random() * 5) + 1;
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(interval);
                setTimeout(() => setShowStart(true), 500);
            }
            setProgress(currentProgress);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const handleStart = () => {
        setIsCompleted(true);
        setTimeout(onComplete, 800); // Matches the exit animation duration
    };

    return (
        <AnimatePresence>
            {!isCompleted && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-bold text-white"
                    exit={{ y: '-100%', opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    {/* Circular Loader Container */}
                    <motion.div
                        className="relative flex items-center justify-center"
                        animate={showStart ? { y: -50 } : { y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        {/* Background Circle */}
                        <svg className="w-40 h-40 transform -rotate-90">
                            <circle
                                cx="80"
                                cy="80"
                                r="70"
                                stroke="#333"
                                strokeWidth="4"
                                fill="transparent"
                            />
                            {/* Progress Circle animated by dashoffset */}
                            <circle
                                cx="80"
                                cy="80"
                                r="70"
                                stroke="#eb5939"
                                strokeWidth="4"
                                fill="transparent"
                                strokeDasharray="440"
                                strokeDashoffset={440 - (440 * progress) / 100}
                                className="transition-all duration-100 ease-out"
                            />
                        </svg>

                        {/* Center Icon/Percent */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <FaCode className="text-3xl mb-2 text-white" />
                            <span className="text-xl">{progress}%</span>
                        </div>
                    </motion.div>

                    {/* Start Button */}
                    <AnimatePresence>
                        {showStart && (
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                onClick={handleStart}
                                className="mt-8 px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-full font-sans uppercase tracking-widest text-sm"
                            >
                                Start
                            </motion.button>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
