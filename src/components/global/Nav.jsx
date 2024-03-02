import React,{useState} from 'react';
import "./nav.css";
import MobileNav from './MobileNav';
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";


function Nav() {
  const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  return (
    <div className=''>
      <div className="relative pt-4 w-full">
        <div className="container flex items-center justify-between">
          <div className="mx-auto md:mx-0 relative flex text-center items-center font-twist text-3xl md:text-5xl tracking-tighter lg:w-2/6">
            <div>
              <h1 className="animate-text duration-1000 bg-gradient-to-t from-indigo-500  via-pink-500 to-red-500 bg-clip-text font-twist text-6xl sm:text-6xl md:text-6xl text-transparent">
                WANDI
              </h1>
            </div>
            <div className="absolute bottom-1 left-1 text-6xl md:text-6xl max-sm:text-6xl">
              <h1 className="font-twist text-[#E4E4E4]">WANDI</h1>
            </div>
          </div>
          <div className="right-nav md:hidden">
            <div className="flex items-center">
              <button className="burger-menu md:hidden">

                {showMenu?<RxCross1 onClick={toggleMenu} size={50} color='white'/>:<MdMenu onClick={toggleMenu} size={50} color='white'/>}
              </button>
            </div>
          </div>
          <div className="hidden md:flex md:flex-1 md:justify-end md:items-center md:gap-8">
            <div className="nav-items items-center flex gap-8 font-superLagendBoy text-[#FFFFFF]">
              <h1 className='text-lg'>LEND</h1>
              <h1 className='text-lg'>OFFERS</h1>
              <h1 className='text-lg'>BORROW</h1>
              <h1 className='text-lg'>LOANS</h1>
              <button className='text-[#DBFF00] button-style border border-[#DBFF00] px-4 py-2 bor'>
                Select Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      {showMenu?<MobileNav showMenu={showMenu}/>:null}
      
    </div>
  )
}

export default Nav;
