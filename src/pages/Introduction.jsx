import React from "react";
import banner from "../assets/Images/main-banner.png";

const Introduction = () => {
  return (
    <div className="a">
      <div className="banner">
        <img src={banner} />
      </div>
      <div className="introduction">
        <div className="introduction__content">
          <h1>WHAT HAPPENED !</h1>
          <p>
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can ve trimmed. Take the first step
            to your brand's success. How to create <br /> mobile-optimized
            videos in minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
