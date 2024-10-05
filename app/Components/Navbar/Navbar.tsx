'use client';
import React, { useState } from "react";
import "./Navbar.css";

const smoothScroll = (target: string) => {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // État pour contrôler l'ouverture du menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Change l'état à chaque clic
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault(); // Empêche le comportement par défaut
    if (target === '/') {
      window.location.href = target;
    } else {

      smoothScroll(target);
    }
    setIsOpen(false); // Ferme le menu hamburger
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        {/* Icône du menu hamburger */}
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        
          <a className="home" href="/" onClick={(e) => handleLinkClick(e, '/')}>
            Home
          </a>
      
        
          <a 
            className="home" 
            href="#about"  
            onClick={(e) => handleLinkClick(e, '#about')}
          >
            About
          </a>
        
        
          <a 
            className="home" 
            href="#skills"  
            onClick={(e) => handleLinkClick(e, '#skills')}
          >
            Skills
          </a>
       
          <a 
            className="home" 
            href="#projects"  
            onClick={(e) => handleLinkClick(e, '#projects')}
          >
            Projects
          </a>
       
       
          <a 
            className="home" 
            href="#contact"  
            onClick={(e) => handleLinkClick(e, '#contact')}
          >          
            Contact
          </a>
     
      </ul>
    </nav>
  );
}

export default Navbar;
