import React, { useRef, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useCursor } from "../contexts/CursorContext";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

/**
 * MaskedLink renders an individual link with a Hero-style mask reveal.
 * Uses a self-contained local WHITE cursor — global cursor is hidden while inside.
 */
const MaskedLink = ({ href, baseContent, maskContent, className = "" }) => {
  const containerRef = useRef(null);
  const globalMouse = useRef({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const { onCursor } = useCursor();

  useEffect(() => {
    const updatePos = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: globalMouse.current.x - rect.left,
          y: globalMouse.current.y - rect.top,
        });
      }
    };

    const onMouseMove = (e) => {
      globalMouse.current = { x: e.clientX, y: e.clientY };
      updatePos();
    };

    const onScroll = () => updatePos();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const maskSize = hovered ? 200 : 0;

  return (
    <a
      ref={containerRef}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`relative overflow-hidden block cursor-none ${className}`}
      onMouseEnter={() => { setHovered(true); onCursor('hover'); }}
      onMouseLeave={() => { setHovered(false); onCursor(false); }}
    >

      {/* Base Layer */}
      <div className="relative z-10 pointer-events-none">
        {baseContent}
      </div>

      {/* Mask Layer */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none bg-[#eb5939]"
        animate={{
          clipPath: `circle(${maskSize}px at ${mousePos.x}px ${mousePos.y}px)`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      >
        {maskContent}
      </motion.div>
    </a>
  );
};

function Contact() {
  const { onCursor } = useCursor();

  const contactLinks = [
    {
      href: "mailto:henilsuhagiya0@gmail.com",
      label: "EMAIL",
      value: "henilsuhagiya0@gmail.com",
      icon: <FaEnvelope />,
      note: "100% CHANCE I READ IT",
    },
    {
      href: "tel:+917990232478",
      label: "PHONE",
      value: "+917990232478",
      icon: <FaPhone />,
      note: "90% CHANCE I DON'T PICK UP",
    },
    {
      href: "https://linkedin.com/in/henil-suhagiya-4b86461a5/",
      label: "LINKEDIN",
      value: "PROFESSIONAL ME",
      icon: <FaLinkedin />,
      note: null,
    },
    {
      href: "https://github.com/henry-1603",
      label: "GITHUB",
      value: "MY BUGGY CODE",
      icon: <FaGithub />,
      note: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-[#050505] cursor-none"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-20">
        {/* Section Label */}
        <p className="text-sm font-mono tracking-widest text-gray-500 uppercase mb-16">
          CONNECT
        </p>

        {/* 4 Masked Links */}
        <div className="flex flex-col">
          {contactLinks.map((link, index) => (
            <MaskedLink
              key={index}
              href={link.href}
              className="border-t border-gray-800 py-10 group"
              baseContent={
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-2">
                      {link.label}
                    </p>
                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
                      {link.value}
                    </h3>
                    {link.note && (
                      <p className="text-xs font-mono tracking-widest text-[#eb5939] uppercase mt-2">
                        {link.note}
                      </p>
                    )}
                  </div>
                  <div className="text-gray-600 text-2xl shrink-0 mb-2">
                    {link.icon}
                  </div>
                </div>
              }
              maskContent={
                <div className="flex items-end justify-between gap-4 py-10 mx-4 md:mx-20">
                  <div>
                    <p className="text-xs font-mono tracking-widest text-[#050505]/60 uppercase mb-2">
                      {link.label}
                    </p>
                    <h3 className="text-3xl md:text-5xl font-black text-[#050505] tracking-tight uppercase">
                      {link.value}
                    </h3>
                    {link.note && (
                      <p className="text-xs font-mono tracking-widest text-[#050505] uppercase mt-2">
                        {link.note}
                      </p>
                    )}
                  </div>
                  <div className="text-[#050505] text-2xl shrink-0 mb-2">
                    {link.icon}
                  </div>
                </div>
              }
            />
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
