import React from "react";
import frame1597884602 from "../Images/frame-20.png";
import frame1597884603 from "../Images/frame-21.png";
import frame1597884604 from "../Images/frame-22.png";
import gif from "../Images/gif.png";
import hand from "../Images/hand1.png";
import image4 from "../Images/image-4.png";
import image5 from "../Images/image-5.png";
import image from "../Images/hand.png";
import brown from "../Images/brown.png";
import framePhone from "../Images/groupPhone.png";
import adobe from "../Images/adobe.png";
import "./Page4.css";

export const Page4 = () => {
  return (
    <div className="wireframe">
      <img className="image" alt="Image" src={image4} />

      {/* <img className="img" alt="Image" src={image5} /> */}
      {/* <img className="img1" alt="Image" src={image5} /> */}

      <img
        className="butterfly"
        alt="Gif"
        src={gif}
        onClick={() => setClicked(!clicked)}
      />

      <div className="frame">
        <div className="genesis-in-action">Genesis In Action</div>

        <div className="events-to-explore">EVENTS TO EXPLORE</div>
      </div>

      <img className="hand" alt="Hand" src={hand} />

      <img className="hand-2" alt="Hand" src={image} />

      {/* <img className="frame-2" alt="Frame" src={frame1597884602} />

        <img className="frame-3" alt="Frame" src={frame1597884603} />

        <img className="frame-4" alt="Frame" src={frame1597884604} /> */}

      <div className="phoneFrame">
        {/* <img className="phoneBack" alt="Hand" src={brown} /> */}
        <div className="div-2">
          <div className="zenigma">Zenigma</div>
          <p className="text-wrapper">
            An inspiring event challenging future designers and design
            enthusiasts to revolutionize food entrepreneurship and education.
            Teams from diverse design disciplines tackle one of two compelling
            problem statements.
          </p>
        </div>
        <img className="phone" alt="Hand" src={framePhone} />
      </div>
      <div className="phoneFrame2">
        {/* <img className="phoneBack" alt="Hand" src={brown} /> */}
        <div className="div-3">
          <div className="text1">Brandstorm</div>
          <p className="text2">
            A dynamic competition that tests creativity and marketing acumen by
            challenging participants to design innovative branding strategies
            for real-world scenarios. Compete, innovate, and win exciting prizes
            while gaining recognition among industry leaders!.
          </p>
        </div>
        <img className="phone2" alt="Hand" src={adobe} />
      </div>
    </div>
  );
};
