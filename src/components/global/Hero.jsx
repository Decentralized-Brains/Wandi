import React from "react";
import Nav from "./Nav";
import Bg from "../../assets/background/pearl.mp4";

function Hero() {
  return (
    <div>
      <div className="mainpage">
        <div className="video-docker  fixed left-0 top-0 h-full w-full overflow-hidden">
          <video
            className="absolute min-h-full min-w-full object-cover "
            src={Bg}
            type="video/webm"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <Nav />
      </div>
    </div>
  );
}

export default Hero;
