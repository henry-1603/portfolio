import React, { useState } from "react";
import { useCursor } from "../contexts/CursorContext";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ContactAndTestimonials = () => {
  const [isFeedbackHovered, setIsFeedbackHovered] = useState(false);
  const { onCursor } = useCursor();

  return (
    <footer
      className="relative w-full min-h-[70vh] bg-[#050505] cursor-none overflow-hidden"
      id="contact"
    >
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full border-t border-gray-800" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-20 py-24 flex flex-col justify-between h-full min-h-[70vh]">
        {/* Testimonials Section */}
        <div
          className="relative w-full group cursor-none mb-20 md:mb-0 max-w-5xl"
          onMouseEnter={() => {
            setIsFeedbackHovered(true);
            onCursor(true);
          }}
          onMouseLeave={() => {
            setIsFeedbackHovered(false);
            onCursor(false);
          }}
        >
          <h2 className="text-sm font-mono tracking-widest text-gray-500 uppercase mb-8">
            The Feedback
          </h2>

          <div className="relative grid mb-4">
            {/* Base Layer (Professional) */}
            <div className={`col-start-1 row-start-1 transition-all duration-500 ease-in-out ${isFeedbackHovered ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
              <h3 className="text-xl md:text-3xl font-black text-white tracking-tighter leading-[0.9]">
                "He's a beast. His coding skills are actually insane."
              </h3>
              <span className="text-lg md:text-xl text-gray-500 font-medium mt-4 block tracking-tight">
                — Some Project Manager
              </span>
            </div>

            {/* Hover Layer (Sarcastic) */}
            <div className={`col-start-1 row-start-1 transition-all duration-500 ease-in-out ${isFeedbackHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
              <h3 className="text-xl md:text-3xl font-black text-[#eb5939] tracking-tighter leading-[0.9]">
                "He's terrible... but it's his birthday so I'd say something nice."
              </h3>
              <span className="text-lg md:text-xl text-[#eb5939]/70 font-bold mt-4 block tracking-tight">
                — Same Project Manager
              </span>
            </div>
          </div>
        </div>

        {/* Connect Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-auto">
          <div className="flex flex-col gap-8 w-full md:w-auto">
            <h2 className="text-sm font-mono tracking-widest text-gray-500 uppercase">Connect</h2>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:henilsuhagiya.work@gmail.com"
                onMouseEnter={() => onCursor('click', 'MESSAGE')}
                onMouseLeave={() => onCursor(false)}
                className="group block w-fit"
              >
                <p className="text-2xl md:text-3xl font-black text-white group-hover:text-[#eb5939] transition-colors tracking-tighter">
                  henilsuhagiya.work@gmail.com
                </p>
                <p className="text-gray-500 group-hover:text-[#eb5939]/70 text-xs md:text-sm font-mono mt-1 transition-colors uppercase tracking-widest">
                  100% chance I read it
                </p>
              </a>

              <a
                href="tel:+917990232478"
                onMouseEnter={() => onCursor('click', 'CALL')}
                onMouseLeave={() => onCursor(false)}
                className="group block w-fit"
              >
                <p className="text-2xl md:text-3xl font-black text-white group-hover:text-[#eb5939] transition-colors tracking-tighter">
                  +91 7990232478
                </p>
                <p className="text-gray-500 group-hover:text-[#eb5939]/70 text-xs md:text-sm font-mono mt-1 transition-colors uppercase tracking-widest">
                  90% chance I don't pick up
                </p>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-12 w-full md:w-auto mt-6 md:mt-0">
            <a
              href="https://linkedin.com/in/henil-suhagiya-4b86461a5/"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => onCursor('click', 'SERIOUS')}
              onMouseLeave={() => onCursor(false)}
              className="flex flex-col gap-2 group"
            >
              <div className="flex items-center gap-3 text-white group-hover:text-[#eb5939] text-2xl md:text-3xl font-black transition-colors">
                <FaLinkedin className="text-xl md:text-2xl" />
                <span className="tracking-tighter uppercase">LinkedIn</span>
              </div>
              <span className="text-gray-500 group-hover:text-[#eb5939]/70 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] transition-colors">
                Professional me
              </span>
            </a>

            <a
              href="https://github.com/henry-1603"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => onCursor('click', 'BUGS')}
              onMouseLeave={() => onCursor(false)}
              className="flex flex-col gap-2 group"
            >
              <div className="flex items-center gap-3 text-white group-hover:text-[#eb5939] text-2xl md:text-3xl font-black transition-colors">
                <FaGithub className="text-xl md:text-2xl" />
                <span className="tracking-tighter uppercase">GitHub</span>
              </div>
              <span className="text-gray-500 group-hover:text-[#eb5939]/70 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] transition-colors">
                My buggy code
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactAndTestimonials;
