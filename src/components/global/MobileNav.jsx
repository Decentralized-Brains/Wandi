import {React,useState} from 'react'

function MobileNav({showMenu}) {
    
  return (
    <div>
        <div
        className={
          showMenu
            ? "fixed left-0 top-0 z-40 flex h-screen w-[80%] text-black backdrop-blur-lg duration-300 ease-in lg:hidden"
            : "fixed left-[-100%] top-0 z-40 h-screen w-[80%] backdrop-blur-2xl duration-1000 ease-in"
        }
      >
        <ul className="mt-20 mx-auto"> 
        <div className="">
            <div className="nav-items items-center flex flex-col gap-8 font-superLagendBoy text-[#FFFFFF]">
              <h1 className='text-lg'>LEND</h1>
              <h1 className='text-lg'>OFFERS</h1>
              <h1 className='text-lg'>BORROW</h1>
              <h1 className='text-lg'>LOANS</h1>
              <button className='text-[#DBFF00] button-style border border-[#DBFF00] px-4 py-2 bor'>
                Select Profile
              </button>
            </div>
          </div>
          
        </ul>
      </div>
    </div>
  )
}

export default MobileNav