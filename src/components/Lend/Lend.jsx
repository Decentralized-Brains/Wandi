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
            <div className=" backdrop-blur-3xl text-left font-superLagendBoy text-[#FFFFFF] mt-12 rounded-xl border-none">
              <table className="w-[100%]">
                <thead>
                  <tr>
                    <th className="p-6">Collection</th>
                    <th className="p-0">Available Pool</th>
                    <th className="p-0">Best offer</th>
                    <th className="p-0">APY</th>
                    <th className="p-0">Duration</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {tableData.map((item, index) => (
                    <tr className=" w-[95%] border-b-[1px] px-4 border-[#C3C0C0]">
                      <td className="p-4 flex gap-2 items-center">
                        <span>
                          <img src={item.avatar} alt="" />
                        </span>
                        {item.collection}
                      </td>
                      <td className="">
                        {item.pool}
                        <br />
                        <span className="text-[9px] text-[#B5B5B5]">
                          {item.poolOffers}
                        </span>
                      </td>
                      <td className="">
                        {item.bestOffer} <br />
                        <span className="text-[9px] text-[#B5B5B5]">
                          {item.offerToken}
                        </span>{" "}
                      </td>
                      <td>{item.apy}</td>
                      <td className="ml-6">{item.duration}</td>
                      <td><button className="bg-gradient-to-r from-[#159F2C] text-black px-6 py-2 rounded-lg to-[#DBFF00]">Lend</button></td>
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
