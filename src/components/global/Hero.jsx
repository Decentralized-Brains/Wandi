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

        <div className="hero-text-section container relative top-32 flex flex-col gap-10">
            <div className="w-5/6">
              <h1 className="text-[#CCCCCC] font-superLagendBoy text-[4.2rem]">
              <span>BORROW</span> & <span> LEND </span>
              AGAINST YOUR
              NFT’s INSTANTLY
              </h1>
            </div>
            <div className="buttons flex gap-10 font-superLagendBoy">
              <button className="px-10 py-4 border border-white text-[#DBFF00] text-2xl">Borrow</button>
              <button className="px-10 py-4 border border-[#DBFF00] text-2xl text-white bg-[#536223]">Lend</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
