import React from "react";
import lastbg from "../Images/lastbg.png";
import register from "../Images/register.png";
import left from "../Images/left.png";
import right from "../Images/right.png";
import hires from "../Images/hires.png";
import "./FirstPage.css";
import Navbar from "./Navbar.jsx";
export const FirstPage = () => {
  return (
    <div className="framePage0">
      <img className="img" alt="back" src={lastbg} />
      <Navbar />
      <div class="hero-wrapper">
        <img src={left} class="hero-left-img" alt="Left Decoration" />
        <img src={right} class="hero-right-img" alt="Right Hand" />
        <img src={hires} class="hires" alt="Left Decoration" />
        <div class="hero-content">
          <button class="hero-button">Get Tickets</button>
        </div>
      </div>
    </div>
  );
};
