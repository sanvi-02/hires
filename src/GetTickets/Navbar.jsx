import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Images/esummit.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* <div className="logo">MySite</div> */}
      <img className="img" alt="back" src={logo} />

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">Event</a>
        <a href="#projects">Speaker</a>
        <a href="#contact">Workshop</a>
        <a href="#contact">Partners</a>
        <a href="#contact">Sponsers</a>
        <button class="btn">Login/register</button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
