import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-black">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between text-black items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <a href="/" className="text-xl font-bold mb-2 text-black">
              <span className="text-black font-bold">Henil Suhagiya</span>
            </a>
            <p className="text-sm text-muted-foreground text-center md:text-left italic">
              Building digital experiences with passion and precision.
            </p>
          </div>

          <motion.div
          className="flex justify-center gap-6 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {[
            { href: "https://github.com/henry-1603", icon: <FaGithub className="h-7 w-7" /> },
            {
              href: "https://linkedin.com/in/henil-suhagiya-4b86461a5/",
              icon: <FaLinkedin className="h-7 w-7" />,
            },
            { href: "https://instagram.com/henry._.08", icon: <FaInstagram className="h-7 w-7" /> },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -5, scale: 1.2 }} // Moves up slightly and enlarges
              whileTap={{ scale: 0.9 }} // Shrinks slightly when clicked
              transition={{ type: "spring", stiffness: 300 }} // Adds bounce effect
            >
              <motion.div className="h-10 w-10 text-black">
                {item.icon}
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
        </div>

        <div className="mt-8 pt-4 border-t border-black text-center">
          <p className="text-md text-muted-foreground flex items-center text-black justify-center gap-1">
            Design and Developed by <span className="text-[#2f346e] font-bold">Henil Suhagiya</span>
           
          </p>

          <div className="mt-4 flex justify-center gap-4 text-sm">
           <p className="text-md text-black"> All rights reserved. Copyright © {currentYear}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

