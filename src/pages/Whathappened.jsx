import React from "react";
import video from "../assets/Images/video.png";
import video1 from "../assets/Images/video-object-01.png";
import video2 from "../assets/Images/video-object-02.png";
import video3 from "../assets/Images/video-object-03.png";
import video4 from "../assets/Images/video-object-04.png";
import video5 from "../assets/Images/video-object-05.png";
import video6 from "../assets/Images/video-object-06.png";
import video7 from "../assets/Images/video-object-07.png";
import video8 from "../assets/Images/video-object-08.png";
import video9 from "../assets/Images/video-object-09.png";

const Whathappened = () => {
  return (
    <div className="whathappened">
      <h1 className="whathappened__title1">what happened</h1>
      <p className="whathappened__title2">
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first{" "}
      </p>
      <button className="whathappened__button">SEE MORE</button>
      <img className="whathappened__video8" src={video8} />
      <img className="whathappened__video9" src={video9} />
      <img className="whathappened__video3" src={video3} />
      <img className="whathappened__video" src={video} />
      <img className="whathappened__video1" src={video1} />
      <img className="whathappened__video2" src={video2} />

      <img className="whathappened__video4" src={video4} />
      <img className="whathappened__video5" src={video5} />
      <img className="whathappened__video7" src={video7} />
      <img className="whathappened__video6" src={video6} />
    </div>
  );
};

export default Whathappened;
