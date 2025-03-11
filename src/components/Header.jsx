import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle About click
  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about"); // Get "About" section
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly
    }
  };

  const handleExperienceClick = () => {
    const ExperienceSection = document.getElementById("experience"); // Get "Experience" section
    if (ExperienceSection) {
      ExperienceSection.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly
    }
  };

  const handleTechStackClick = () => {
    const ExperienceSection = document.getElementById("techstack"); // Get "Experience" section
    if (ExperienceSection) {
      ExperienceSection.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly
    }
  };

  const handleProjectClick = () => {
    const ExperienceSection = document.getElementById("projects"); // Get "Experience" section
    if (ExperienceSection) {
      ExperienceSection.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly
    }
  };

  const handleContactClick = () => {
    const ExperienceSection = document.getElementById("contact"); // Get "Experience" section
    if (ExperienceSection) {
      ExperienceSection.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly
    }
  };

  return (
    <div className="flex p-4 items-center justify-between bg-secondary border-b-2 border-[#2f436e]">
      {/* Logo Section */}
      <div className="flex gap-2 justify-center items-center">
        <p className="text-[#2f436e] font-black"><img src={logo} className="w-12 h-11 rounded" /></p>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6">
        {[
          { name: "About", path: "about", onClick: handleAboutClick }, // Add onClick for About
          { name: "Tech Stack", path: "techstack" , onClick: handleTechStackClick },
          { name: "Experience", path: "experience" , onClick: handleExperienceClick },
          { name: "Projects", path: "projects", onClick: handleProjectClick },
          { name: "Contact", path: "contact"  , onClick: handleContactClick },
        ].map((item) => (
          <li
            key={item.path}
            onClick={() => (item.onClick ? item.onClick() : navigate(item.path))}
            className={`hover:text-[#2f436e] hover:font-bold text-black transition-all cursor-pointer ${
              location.pathname === item.path ? "text-[#2f436e] font-bold" : ""
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
