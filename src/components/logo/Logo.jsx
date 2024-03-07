import React from 'react'
import video from "../../assets/background/buttonBG.mp4"

function Logo() {
  return (
    <div>
        {/* <div className="relative w-[300px] overflow-hidden">
  <h1 className="relative z-10 text-6xl  mix-blend-screen text-white bg-clip-content font-superLagendBoy">
    WANDZ
  </h1>
  <video 
    className="absolute inset-0 w-[400px]  bg-clip-text bg-no-repeat object-cover z-0"
    src={video}
    muted
    loop
    autoPlay
  ></video>
</div> */}

<div className="relative">
      <video className="w-full" autoPlay loop muted playsInline>
        src={video}
      </video>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
        <h2 className="text-xl font-semibold">WANDZ</h2>
      </div>
    </div>

    </div>
  )
}

export default Logo

