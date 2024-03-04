import React from "react";
import VideoBG from "../global/VideoBG";
import Nav from "../global/Nav";
import { FiSearch, FiFilter } from "react-icons/fi";
import Filter from "../../assets/icons/Filter.png"
function Lend() {
  return (
    <div className="lend-section">
      <div className="main-page">
        <VideoBG />
        <Nav />
        <div className="container relative">
          <div className="text-section font-superLagendBoy text-center pt-36 pb-20">
            <h1 className="text-[2.5rem] text-gradient-bg leading-loose">
              Make loan offers on NFT collections.
            </h1>
            <p className="font-superLagendBoy text-xl text-[#FFFFFF]">
              Browse collections below, and name your price. The current best
              offer will be shown to borrowers. To take your offer, they lock in
              an NFT from that collection to use as collateral. You will be
              repaid at the end of the loan, plus interest. If they fail to
              repay, you get to keep the NFT.
            </p>
          </div>
          <div className="table-sec">
            <div className="sf flex justify-between items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search here"
                  className="font-superLagendBoy bg-transparent placeholder-white text-white border border-[#DBFF00] rounded-lg py-1 pl-10"
                />
                <FiSearch
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
                  size={20}
                />
              </div>
              <div className="filters">
                <button className="flex font-superLagendBoy text-white  gap-2 justify-center border border-[#DBFF00] rounded-lg p-1 px-2">
                    <img src={Filter} alt="filter-option" />
                    <h1 className="text-sm">Filter</h1>
                </button>
              </div>
            </div>
            <div className="table">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lend;
