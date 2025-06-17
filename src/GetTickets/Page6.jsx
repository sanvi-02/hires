import React from "react";
import "./Page6.css";
import logo1 from "../Images/1.png";
import logo2 from "../Images/2.png";
import logo3 from "../Images/3.png";
import logo4 from "../Images/4.png";
import logo5 from "../Images/5.png";
import logo6 from "../Images/6.png";
import back from "../Images/back.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
// Duplicate for seamless infinite scroll
const duplicatedLogos = [...logos, ...logos];

export const Page6 = () => {
  return (
    <div className="frameScreen">
        {/* <img className="img" alt="back" src={back} /> */}
        <div className="partner-slider">
          <h2 className="slider-title">Partners</h2>
          <div className="slider-wrapper">
            <div className="slider-track">
              {duplicatedLogos.map((logo, index) => (
                <div className="slide" key={index}>
                  <img
                    src={logo}
                    alt={`Partner ${(index % logos.length) + 1}`}
                  />
                </div>
              ))}
          </div>
          </div>
        </div>
      </div>
  );
};
