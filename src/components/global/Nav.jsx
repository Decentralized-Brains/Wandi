
import React from 'react'
import "./nav.css"

function Nav() {
  return (
    <div className=''>
        <div className="relative pt-4 w-full">
          <div className="container flex items-center justify-between">
            <div className="mx-auto md:mx-0 relative flex text-center items-center font-twist text-5xl tracking-tighter lg:w-2/6">
              <div>
                <h1 className="animate-text duration-1000 bg-gradient-to-t from-indigo-500  via-pink-500 to-red-500 bg-clip-text font-twist text-5xl text-transparent  md:text-6xl">
                  WANDI
                </h1>
              </div>
              <div className="absolute bottom-1 left-1 text-5xl md:text-6xl">
                <h1 className="font-twist  text-[#E4E4E4]">WANDI</h1>
              </div>
            </div>
            <div className="right-nav">
                <div className="nav-items items-center flex gap-6 font-superLagendBoy text-[#FFFFFF]">
                    <h1>LEND</h1>
                    <h1>OFFERS</h1>
                    <h1>BORROW</h1>
                    <h1>LOANS</h1>
                    <button className='text-[#DBFF00] button-style border border-[#DBFF00] px-4 py-2 bor'>
                        Select Profile
                    </button>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Nav