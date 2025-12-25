import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import logo from '../assets/logo.png';

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px"
      }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { name: "About", path: "about" },
    { name: "Tech Stack", path: "techstack" },
    { name: "Experience", path: "experience" },
    { name: "Projects", path: "projects" },
    { name: "Contact", path: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-4 transition-all duration-300 w-[95%] md:w-[80%] lg:w-[70%] rounded-full hidden lg:flex ${scrolled
      ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-700 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]'
      : 'bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/10 dark:border-white/5'
      } z-[100]`}>
      <div className="flex items-center justify-between w-full px-4">
        {/* Logo Section */}
        <div className="flex gap-2 justify-center items-center">
          <p className="text-[#2f436e] dark:text-blue-400 font-black">
            <img src={logo} className="w-12 h-11 rounded" alt="Logo" />
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li
              key={item.path}
              onClick={() => scrollToSection(item.path)}
              className={`hover:text-[#2f436e] dark:hover:text-blue-400 hover:font-bold transition-all cursor-pointer ${activeSection === item.path
                ? "text-[#2f436e] dark:text-blue-400 font-bold"
                : "text-gray-700 dark:text-white"
                }`}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Theme Toggle & Mobile Menu Button */}


      </div>
    </div>
  );
}

export default Header;
