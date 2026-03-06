import React, { useState, useEffect } from "react";
import { useCursor } from "../contexts/CursorContext";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { onCursor } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "About", path: "about" },
    { name: "Services", path: "services" },
    { name: "Experience", path: "experience" },
    { name: "Work", path: "projects" },
    { name: "Contact", path: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-[90] px-6 py-3 transition-all duration-300 rounded-full flex gap-4 md:gap-8 items-center ${scrolled
        ? 'bg-[#050505]/80 backdrop-blur-md border border-gray-800 shadow-xl'
        : 'bg-transparent border border-transparent'
        }`}
    >
      <span className="font-black text-white text-lg tracking-tighter pr-4 md:pr-6 border-r border-gray-800 pointer-events-none">
        HS
      </span>
      {navItems.map((item) => (
        <span
          key={item.path}
          onClick={() => scrollToSection(item.path)}
          onMouseEnter={() => onCursor('hidden')}
          onMouseLeave={() => onCursor(false)}
          className="text-xs md:text-sm font-mono tracking-widest uppercase text-gray-500 hover:text-[#FF5722] transition-colors cursor-pointer"
        >
          {item.name}
        </span>
      ))}
    </div>
  );
}

export default Header;
