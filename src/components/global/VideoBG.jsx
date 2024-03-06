import React from 'react'
import Bg from "../../assets/background/pearl.mp4";
import globe from "../../assets/logo/globe.gif"
import Bg2 from "../../assets/background/image.png"


function VideoBG() {
  return (
    <div className='main-page'>
        <div className="video-docker  fixed left-0 top-0 h-full w-full overflow-hidden">
          <img src={Bg2} className='opacity-80 z-[1] absolute left-0 top-0 h-full w-full overflow-hidden' alt="bg-image" />
          <video
            className="absolute min-h-full min-w-full object-cover "
            src={Bg}
            type="video/webm"
            autoPlay
            muted
            loop
          ></video>
          <div>
            <img className='absolute max-sm:hidden bg-fixed z-10 bottom-10 right-10' width={100} src={globe} alt="" />
          </div>
        </div>
    </div>
  )
}

export default VideoBG