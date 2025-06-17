import React from "react";
import image1 from "../Images/I1.png";
import image2 from "../Images/I2.png";
import philippTrubchenko from "../Images/Image3.png";
import image4 from "../Images/image4.png";
import image5 from "../Images/image5.png";
import button from "../Images/button.png";
import "./getTickets.css";

export const GetTickets = () => {
  return (
    <div className="frame1">
      <img
        className="box bgImage"
        alt="Philipp trubchenko"
        src={philippTrubchenko}
      />
      <div className="box mainView">
        <div className="cartoon">
          <img className="img-3" alt="Img" src={image1} />
          <div></div>
          <img className="img-2" alt="Img" src={image2} />
        </div>
        <div className="group-wrapper">
          <img className="group-1" alt="Group" src={image4} />
          <img className="group-2" alt="Group" src={image5} />
        </div>
        <div className="button-view">
          <div class="h2">ready. set. synergy?</div>
          <img className="button" alt="Group" src={button} />
        </div>
      </div>
    </div>
  );
};
