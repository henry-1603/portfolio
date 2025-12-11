import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaHeart, FaArrowUp, FaCode, FaRocket } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <FaGithub className="h-6 w-6" />,
      href: "https://github.com/henry-1603",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: <FaLinkedin className="h-6 w-6" />,
      href: "https://linkedin.com/in/henil-suhagiya-4b86461a5/",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: <FaInstagram className="h-6 w-6" />,
      href: "https://instagram.com/henry._.08",
      label: "Instagram",
      color: "hover:text-pink-600"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#techstack" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/5 to-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaCode className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">
                Henil Suhagiya
              </h3>
            </motion.div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
              Full Stack Developer passionate about creating innovative digital solutions. 
              Building the future, one line of code at a time.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${social.color}`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-gray-600 dark:text-gray-400 group-hover:text-current transition-colors duration-300">
                    {social.icon}
                  </div>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-lg">
                      {social.label}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <div className="w-1 h-1 bg-gray-400 group-hover:bg-blue-500 rounded-full transition-colors duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <motion.div
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <a href="mailto:henilsuhagiya0@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  henilsuhagiya0@gmail.com
                </a>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <a href="tel:+917990232478" className="hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300">
                  +91 7990232478
                </a>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>Ahmedabad, India</span>
              </motion.div>
          </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
          <motion.div
          className="pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="h-4 w-4 text-red-500" />
            </motion.div>
            <span>by</span>
            <span className="font-semibold gradient-text">Henil Suhagiya</span>
              </motion.div>

          <div className="flex items-center gap-4">
            <motion.p
              className="text-gray-600 dark:text-gray-400"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              © {currentYear} All rights reserved.
            </motion.p>
            
            <motion.button
              onClick={scrollToTop}
              className="group p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <FaArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-4 right-4 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <FaRocket className="h-8 w-8 text-blue-500" />
        </motion.div>
        </div>

        <div className="absolute bottom-4 left-4 opacity-10">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <FaCode className="h-6 w-6 text-purple-500" />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

