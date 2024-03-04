import React, { useState } from "react";
import "./nav.css";
import MobileNav from "./MobileNav";
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import video from "../../assets/background/pearl.mp4"

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="">
      <div className="relative pt-4 w-full">
        <div className="container flex items-center justify-between">
          <div className="mx-auto md:mx-0 relative flex text-center items-center font-twist text-3xl md:text-5xl tracking-tighter lg:w-2/6">
            <div>
              <h1 className="animate-text duration-1000 bg-gradient-to-t from-indigo-500  via-pink-500 to-red-500 bg-clip-text font-twist text-6xl sm:text-6xl md:text-6xl text-transparent">
                WANDZ
              </h1>
            </div>
            <div className="absolute bottom-1 left-1 text-6xl md:text-6xl max-sm:text-6xl">
              <NavLink to={'/'}>
              <h1 className="font-twist text-[#E4E4E4]">WANDZ</h1>
              </NavLink>
            </div>
          </div>
          <div className="right-nav md:hidden">
            <div className="flex items-center">
              <button className="burger-menu md:hidden">
                {showMenu ? (
                  <RxCross1 onClick={toggleMenu} size={50} color="white" />
                ) : (
                  <MdMenu onClick={toggleMenu} size={50} color="white" />
                )}
              </button>
            </div>
          </div>
          <div className="hidden md:flex md:flex-1 md:justify-end md:items-center md:gap-8">
            <div className="nav-items items-center flex gap-8 font-superLagendBoy text-[#FFFFFF]">
              <NavLink to={"/lend"}>
                <h1 className="text-lg">LEND</h1>
              </NavLink>
              <NavLink to={"/offers"}>
                <h1 className="text-lg">OFFERS</h1>
              </NavLink>
              <NavLink to={"/borrow"}>
                <h1 className="text-lg">BORROW</h1>
              </NavLink>
              <NavLink to={"/loans"}>
                <h1 className="text-lg">LOANS</h1>
              </NavLink>
              <div style={{ position: 'relative', width: 'fit-content' }}>
  <button className="relative button-style border border-[#DBFF00] px-4 py-2 bor" style={{ position: 'relative', overflow: 'hidden' }}>
    <span className="text-[#DBFF00] z-[10] relative">Select Profile</span>
    <video className="absolute top-0 left-0 w-full h-full object-cover" src={video} muted loop autoPlay></video>
  </button>
</div>




            </div>
          </div>
        </div>
      </div>
      {showMenu ? <MobileNav showMenu={showMenu} /> : null}
    </div>
  );
}

export default Nav;
