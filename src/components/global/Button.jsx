import React from "react";
import video from "../../assets/background/buttonBG.mp4"
import "./nav.css"

function Button({btnText}) {
  return (
    <div className="nav-btn">
      <div style={{ position: "relative", width: "fit-content" }}>
        <button
          className="relative button-style border border-[#DBFF00] px-4 py-2 bor"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <span className="text-[#DBFF00] z-[10] relative">{btnText}</span>
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={video}
            muted
            loop
            autoPlay
          ></video>
        </button>
      </div>
    </div>
  );
}

export default Button;
