import React from "react";
import frame25 from "../Images/frame25.png";
import frame26 from "../Images/frame26.png";
import frame27 from "../Images/frame27.png";
import speaker1 from "../Images/speaker1.png"; 
import "./Page3.css";

export const Page3 = () => {
  return (
    <div className="framePage3">
      <img className="img" alt="background" src={frame25} />
      <div className="smallFrames">
  
        <div className="frameCard">
          <img className="frame-bg" src={frame26} alt="LottieFiles frame" />
          <div className="frame-content">
            <img src={speaker1} alt="Anshul Gupta" className="speaker-img" />
            {/* <h1>
              <span class="line1">Workshop by</span>
              <br />
              <span class="line2">LottieFiles</span>
            </h1>

            <p>
              Explore the fundamentals of creating <br /> animations using
              LottieFiles, and learn how to <br /> integrate them seamlessly
              into your projects <br /> elevate your designs to the next level.
            </p> */}
          </div>
        </div>
        <div className="frameCard">
          <img className="frame-bg" src={frame27} alt="Zomato frame" />
          <div className="frame-content">
            <img src={speaker1} alt="Zomato Team" className="speaker-img" />
            {/* <h1>
              <span class="line1">Workshop by</span>
              <br />
              <span class="line2">LottieFiles</span>
            </h1>
            <p>
              Explore the fundamentals of creating <br /> animations using
              LottieFiles, and learn how to <br /> integrate them seamlessly
              into your projects <br /> elevate your designs to the next level.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
