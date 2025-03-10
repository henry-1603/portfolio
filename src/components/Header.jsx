import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

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

  return (
    <div className="flex p-4 items-center justify-between bg-secondary border-b-2 border-[#2f436e]">
      {/* Logo Section */}
      <div className="flex gap-2 justify-center items-center">
        <p className="text-[#2f436e] font-black text-xl">Henil Suhagiya</p>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6">
        {[
          { name: "About", path: "about", onClick: handleAboutClick }, // Add onClick for About
          { name: "Questions", path: "/dashboard/questions" },
          { name: "Upgrade", path: "/dashboard/upgrade" },
          { name: "How it Works?", path: "/dashboard/how" },
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
