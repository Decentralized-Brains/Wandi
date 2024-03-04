import React from 'react'
import Bg from "../../assets/background/pearl.mp4";
import globe from "../../assets/logo/globe.gif"

function VideoBG() {
  return (
    <div className='main-page'>
        <div className="video-docker  fixed left-0 top-0 h-full w-full overflow-hidden">
          <video
            className="absolute min-h-full min-w-full object-cover "
            src={Bg}
            type="video/webm"
            autoPlay
            muted
            loop
          ></video>
          <div>
            <img className='absolute bg-fixed bottom-10 right-10' width={100} src={globe} alt="" />
          </div>
        </div>
    </div>
  )
}

export default VideoBG