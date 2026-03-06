import React, { useState, useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useCursor } from "../contexts/CursorContext";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const { onCursor } = useCursor();

  // Keep a ref of the global mouse position so we can recalculate on scroll
  const globalMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Check if mouse is actually within the element to avoid weird detached circles
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
    // Optionally hide the main custom cursor or change it, but keeping it creates a seamless effect if colors match
    onCursor(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onCursor(false);
  };

  // The size of the mask when hovered vs not hovered
  const maskSize = isHovered ? 200 : 0;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] cursor-none"
    >
      {/* Base Layer (Visible by default) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 pointer-events-none">
        <div className="flex flex-col items-center justify-center">
          <div
            className="flex flex-col items-center justify-center pointer-events-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p className="text-gray-400 font-mono tracking-widest uppercase mb-6 text-sm md:text-base text-center w-full">
              Henil Suhagiya &nbsp;●&nbsp; Full stack developer
            </p>
            <h1 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter text-white leading-[0.9] text-center max-w-[90vw]">
              MAKING <br />
              GOOD<br />
              SHIT SINCE<br />
              2021
            </h1>
          </div>
          <a
            href="/Henil_Resume_FullStack.pdf"
            download
            onMouseEnter={() => onCursor('hidden')}
            onMouseLeave={() => onCursor(false)}
            className="mt-14 text-sm md:text-base font-mono tracking-[0.3em] uppercase text-gray-400 hover:text-[#eb5939] transition-colors border-b border-gray-800 hover:border-[#eb5939] pb-1 pointer-events-auto"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Masked Layer (Revealed on hover) */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-[#eb5939] text-[#050505] pointer-events-none z-20"
        animate={{
          clipPath: `circle(${maskSize}px at ${mousePosition.x}px ${mousePosition.y}px)`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      >
        <div className="flex flex-col items-center justify-center">
          <p className="font-mono tracking-widest uppercase mb-6 text-sm md:text-base text-[#050505] font-black text-center w-full">
            Henil Suhagiya &nbsp;●&nbsp; Full stack copy-paster
          </p>
          <h1 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter leading-[0.9] text-center max-w-[90vw]">
            HIDING <br />
            BAD<br />
            SHIT SINCE<br />
            2021
          </h1>
          {/* We keep the Download CV placeholder for spacing but it won't be visible/active in mask as maskSize will be 0 when hovering actual link */}
          <div className="mt-14 text-sm md:text-base font-mono tracking-[0.3em] uppercase text-[#050505] font-black border-b border-[#050505] pb-1 opacity-0">
            Download CV
          </div>
        </div>
      </motion.div>

      {/* Optional: Add a subtle scroll down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 font-mono text-sm tracking-widest uppercase"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll to discover
      </motion.div>

      {/* Separating Line */}
      <div className="absolute bottom-0 left-0 w-full border-b border-gray-800" />
    </section>
  );
};

export default Hero;
