import React from "react";
import group159788 from "../Images/Group-159788.png";
import group159789 from "../Images/Group-159789.png";
import imageFrame from "../Images/imageFrame.png";
import topVeiw from "../Images/topVeiw1.png";
import "./Page7.css";

export const Page7 = () => {
  return (
    <div className="stable-section">
      <img className="topVeiw" alt="Top view" src={topVeiw} />
      <div className="mainView">
        <div className="group-wrapper">
          <img className="group" alt="group" src={group159789} />
          <img className="group-2" alt="group" src={group159788} />
        </div>
        <div className="centre-view">
          <div className="frame-2">
            <div className="text-wrapper">Pixels of Memory</div>
            <div className="text-wrapper-2">Hi-Res'24</div>
          </div>
          <div className="scroll-area">
            <div className="scroll-track">
              {[...Array(2)].map((_, loopIndex) =>
                [...Array(10)].map((_, index) => (
                  <div
                    className={`polaroid${index % 2 === 0 ? "up" : "down"}`}
                    key={`${loopIndex}-${index}`}>
                    <img src={imageFrame} alt={`Memory ${index + 1}`} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
