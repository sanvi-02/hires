import React from "react";
import image1 from "../Images/I1.png";
import image2 from "../Images/I2.png";
import philippTrubchenko from "../Images/Image3.png";
import image4 from "../Images/image4.png";
import image5 from "../Images/image5.png";
import button from "../Images/button.png";
import page7 from "../Images/page7.png";
import "./getTickets.css";

export const GetTickets = () => {
  return (
    <div className="frame1">
      <img className="box bgImage" alt="Philipp trubchenko" src={page7} />

      <div className="button-view">
        <div class="h2">ready. set. synergy?</div>
        <button className="button">Get Tickets</button>
      </div>
    </div>
  );
};
