import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import logo from '../assets/logo.png';

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className={`flex sticky top-0 z-50 p-4 items-center justify-between w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700' 
        : 'bg-transparent'
    }`}>
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
            className="hover:text-[#2f436e] dark:hover:text-blue-400 hover:font-bold text-gray-700 dark:text-white transition-all cursor-pointer"
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* Theme Toggle & Mobile Menu Button */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isDarkMode ? (
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaMoon className="h-5 w-5 text-yellow-400" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaSun className="h-5 w-5 text-orange-500" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaBars className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 md:hidden"
          >
            <div className="p-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.path)}
                  className="block w-full text-left py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#2f436e] dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
