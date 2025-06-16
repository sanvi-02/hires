import React from "react";
import unite from "../Images/unite.png";
import staircase3 from "../Images/staircase3.png";
import staircase4 from "../Images/staircase4.png";
import butterfly10 from "../Images/butterflies10.png";
import "./Page1.css";

export const Page1 = () => {
  return (
    <div className="framePage1">
      <img className="img" alt="back" src={unite} />
      <div className="hero-section">
        <img src={butterfly10} alt="Butterflies" className="butterflies" />
        <div className="text-wrap">
        <h1 className="hero-title">
          unite.
          <br />
          create.
          <br />
          transform.
        </h1>
        <p className="hero-subtitle">
          Discover, learn, and grow in a space where
          <br />
          creativity meets opportunity
        </p>
        </div>
        <img
          src={staircase4}
          alt="Stairs Left"
          class="stairs stairs-left"
        />
        <img
          src={staircase3}
          alt="Stairs Right"
          class="stairs stairs-right"
        />
      </div>
    </div>
  );
};
