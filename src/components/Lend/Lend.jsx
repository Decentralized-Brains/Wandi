import React from "react";
import VideoBG from "../global/VideoBG";
import Nav from "../global/Nav";
import { FiSearch, FiFilter } from "react-icons/fi";
import Filter from "../../assets/icons/Filter.png";
import { tableData } from "../data/data";

function Lend() {
  return (
    <div className="lend-section">
      <div className="main-page">
        <VideoBG />
        <Nav btnText={"Select Profile"} />
        <div className="container relative">
          <div className="text-section font-superLagendBoy text-center pt-36 pb-20">
            <h1 className="text-[2.5rem] text-gradient-bg leading-loose sm:text-[2rem] max-sm:text-[1.5rem] sm:p-4 ">
              Make loan offers on NFT collections.
            </h1>
            <p className="font-superLagendBoy text-xl max-sm:text-lg text-[#FFFFFF]">
              Browse collections below, and name your price. The current best
              offer will be shown to borrowers. To take your offer, they lock in
              an NFT from that collection to use as collateral. You will be
              repaid at the end of the loan, plus interest. If they fail to
              repay, you get to keep the NFT.
            </p>
          </div>
          <div className="table-sec">
            <div className="sf flex justify-between items-center max-sm:flex max-sm:flex-col max-sm:gap-2 max-sm:items-start">
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
            <div className="px-6 overflow-x-auto backdrop-blur-xl text-left font-superLagendBoy text-[#FFFFFF] my-12 rounded-xl border-none">
              <table className="w-full p-10">
                <thead>
                  <tr className="max-sm:text-[11px]">
                    <th className="p-6">Collection</th>
                    <th className="pl-4 max-sm:px-4">Available Pool</th>
                    <th className="pl-4 max-sm:px-4">Best offer</th>
                    <th className="pl-4 max-sm:px-4">APY</th>
                    <th className="pl-4 max-sm:px-4">Duration</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {tableData.map((item, index) => (
                    <tr className=" py-10 border-b-[1px] max-sm:px-4 border-[#a9a9a9d8]  ">
                      <td className="p-4 pl-4 max-sm:px-4 flex gap-2 items-center max-sm:text-[11px]">
                        <span className="max-sm:w-6">
                          <img src={item.avatar} alt="" />
                        </span>
                        {item.collection}
                      </td>
                      <td className=" pl-4 max-sm:text-[11px] max-sm:px-4">
                      <span className="text-lg mr-1">Ŀ</span>{item.pool}
                        <br />
                        <span className="text-[9px]  max-sm:text-[8px] text-[#B5B5B5]">
                          {item.poolOffers}
                        </span>
                      </td>
                      <td className="max-sm:text-[11px] pl-4 max-sm:px-4">
                      <span className="text-lg mr-1">Ŀ</span>{item.bestOffer} <br />
                        <span className="text-[9px] max-sm:text-[8px] text-[#B5B5B5]">
                          {item.offerToken}
                        </span>{" "}
                      </td>
                      <td className="max-sm:text-[11px] pl-4 max-sm:px-4">{item.apy}</td>
                      <td className="ml-6 max-sm:text-[11px] pl-4 max-sm:px-4">{item.duration}</td>
                      <td><button className="bg-gradient-to-r from-[#159F2C] text-black px-6 py-2 max-sm:text-[11px] max-sm:px-4 rounded-lg to-[#DBFF00]">LEND</button></td>
                      <br />
                    
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lend;
