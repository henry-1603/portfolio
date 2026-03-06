import React, { useState, useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useCursor } from "../contexts/CursorContext";

const About = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef(null);
    const { onCursor } = useCursor();

    const globalMouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                if (
                    globalMouse.current.x >= rect.left &&
                    globalMouse.current.x <= rect.right &&
                    globalMouse.current.y >= rect.top &&
                    globalMouse.current.y <= rect.bottom
                ) {
                    setMousePosition({
                        x: globalMouse.current.x - rect.left,
                        y: globalMouse.current.y - rect.top,
                    });
                }
            }
        };

        const handleMouseMove = (e) => {
            globalMouse.current = { x: e.clientX, y: e.clientY };
            updatePosition();
        };

        const handleScroll = () => {
            updatePosition();
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
        onCursor(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        onCursor(false);
    };

    const maskSize = isHovered ? 250 : 0;

    return (
        <section
            ref={containerRef}
            className="relative py-20 md:py-0 md:min-h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-[#050505] cursor-none"
            id="about"
        >
            <div className="w-full max-w-7xl mx-auto px-4 md:px-20 absolute top-10 md:top-20 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                <h2 className="text-sm font-mono tracking-widest text-gray-500 uppercase">
                    About
                </h2>
            </div>

            {/* Base Layer */}
            <div className="w-full h-full flex items-center justify-center p-4 z-10 pointer-events-none">
                <div
                    className="pointer-events-auto flex items-center justify-center"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <p className="text-xl md:text-5xl font-medium tracking-tight text-gray-300 leading-tight text-center max-w-5xl">
                        I'm a selectively skilled Full Stack Developer with a strong focus on producing scalable backends and seamless digital experiences.
                    </p>
                </div>
            </div>

            {/* Mask Layer */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center p-4 bg-[#eb5939] text-[#050505] pointer-events-none z-20"
                animate={{
                    clipPath: `circle(${maskSize}px at ${mousePosition.x}px ${mousePosition.y}px)`,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            >
                <div className="w-full max-w-7xl mx-auto px-4 md:px-20">
                    <p className="text-xl md:text-5xl font-bold tracking-tight leading-tight text-center max-w-5xl mx-auto">
                        A developer making good shit only if the paycheck is equally good.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
