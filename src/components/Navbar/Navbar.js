import React, { useState } from 'react';
import Options from "../Navbar/Options/Options";
import SvgIcon1 from "./icons/SvgIcon1";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-container">
      <div className="nav-header">
        <div className="icon-container">
          <SvgIcon1 className="icon1" />
        </div>
        <p className="title">ProVital</p>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      <Options isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}

export default Navbar;