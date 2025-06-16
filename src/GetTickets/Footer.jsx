import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import esummit from "../Images/esummit.png"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Column */}
        <div className="footer-left">
          <div className="footer-logo-section">
            <img src={esummit} alt="E-Summit Logo" className="footer-logo" />
            <img
              src="/ecell.png"
              alt="E-Cell Logo"
              className="footer-ecell-logo"
            />
          </div>
          <p className="footer-desc">
            E-Summit IIT Roorkee is North India's largest entrepreneurial fest,
            organized by the Entrepreneurship Cell to inspire and empower future
            leaders.
          </p>
          <div className="footer-address">
            <h4>ADDRESS</h4>
            <p>
              E-Cell Office, SAC Building
              <br />
              IIT Roorkee
              <br />
              Roorkee, Uttarakhand - 247667
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="footer-middle">
          <h4>EXPLORE</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#benefits">Benefits</a>
            </li>
            <li>
              <a href="#how">How it works?</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="footer-right">
          <h4>CONTACT US</h4>
          <p>
            <a href="mailto:esummit@iitr.ac.in">esummit@iitr.ac.in</a>
          </p>
          <p>+91 87505 89268</p>
          <p>+91 70162 04140</p>
        </div>
      </div>

      {/* Social Icons - Below All Columns */}
      <div className="footer-socials">
        <FaFacebookF />
        <FaInstagram />
        <FaLinkedinIn />
        <FaYoutube />
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>Made with ❤️ by Design & Tech Team</p>
        <p>© 2024 E-Summit IIT Roorkee. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
