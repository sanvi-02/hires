// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";
import esummit from "../Images/esummit.png"; // Replace with actual logo path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={esummit} alt="E-Summit Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Hi-Res</a>
        </li>
        <li>
          <a href="#">Benefits</a>
        </li>
        <li>
          <a href="#">Process</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">FAQs</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="navbar-auth">
        <a href="#" className="auth-button">
          Login/Signup
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
