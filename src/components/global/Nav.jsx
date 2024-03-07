import React, { useState } from "react";
import "./nav.css";
import MobileNav from "./MobileNav";
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import video from "../../assets/background/buttonBG.mp4";

function Nav({ btnText }) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="">
      <div className="relative pt-4 w-full ">
        <div className="container flex items-center justify-between nav-responsive">
          <div className="mx-auto md:mx-0 relative flex text-center items-center font-twist text-3xl md:text-5xl tracking-tighter lg:w-2/6">
            <div className="relative">
              <div className="relative">
                <h1 className="logo-mask font-twist text-6xl sm:text-6xl md:text-6xl">
                  WANDZ
                </h1>
              </div>
              <div className="absolute bottom-1 left-1 text-6xl md:text-6xl max-sm:text-6xl">
                <h1 className="font-twist text-[#E4E4E4]">WANDZ</h1>
              </div>
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
            <div className="nav-items ul items-center flex gap-8 font-superLagendBoy text-[#FFFFFF]">
              <NavLink to={"/lend"}>
                <a className="text-lg a">LEND</a>
              </NavLink>
              <NavLink to={"/offers"}>
                <a className="text-lg a">OFFERS</a>
              </NavLink>
              <NavLink to={"/borrow"}>
                <a className="text-lg a">BORROW</a>
              </NavLink>
              <NavLink to={"/loans"}>
                <a className="text-lg a">LOANS</a>
              </NavLink>
              {/* Profile Video */}
              <Button btnText={btnText} />
            </div>
          </div>
        </div>
      </div>
      {showMenu ? <MobileNav showMenu={showMenu} /> : null}
    </div>
  );
}

export default Nav;
