import React from "react";
import VideoBG from "../global/VideoBG";
import Nav from "../global/Nav";
import { FiSearch, FiFilter } from "react-icons/fi";
import Filter from "../../assets/icons/Filter.png";
import { tableData,tableLoanData } from "../data/data";

function Loans() {
  const datas = [
    {
        title:"TOTAL INTEREST (FROM ACTIVE LOANS)",
        price:"0",
        statusValue:"0",
        status:"active loans"

    },
    {
        title:"TOTAL ACTIVE LOANS",
        price:"0",
        statusValue:"",
        status:"",

    },
    {
        title:"LOANS IN 24H/12H",
        price:"1225/1375",
        statusValue:"",
        status:"",

    },
    {
        title:"ACTIVE LOANS VOLUME",
        price:"0",
        statusValue:'0 in 24H <br/> 0 in 7D',
        status:"", 

    },
    {
      title:"TOTAL VALUE LOCKED",
      price:"0",
      statusValue:"",
      status:""
  },
]
  return (
    <div className="lend-section">
    <div className="main-page">
      <VideoBG />
      <Nav btnText={"Select Wallet"} />

      <div className="container relative pt-36" >
        <div className="boxes ">

          <div className="flex max-sm:flex-wrap justify-between">
          {datas.map((item,index)=>
            <div className="text-[#FFFFFF] mx-4 rounded-lg border border-[#DBFF00] border-b-4 font-superLagendBoy flex-wrap backdrop-blur-3xl p-6 py-6 flex flex-col justify-between">
              <h1 className="text-[10px]">
                {item.title}
              </h1>
              <div className="flex flex-col justify-between mt-2">
                <h1 className="flex gap-1">
                  <span>0</span>
                  <span>{item.price}</span>
                </h1>
                <div className="text-[10px]" dangerouslySetInnerHTML={{ __html: item.statusValue}} />
                <span className="text-[10px]">{item.status} </span>
              </div>
            </div>
            )}
          </div>

          </div>
        <div className="table-sec pt-24">
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
          <div className=" overflow-x-auto backdrop-blur-xl text-left font-superLagendBoy text-[#FFFFFF] my-12 rounded-xl border-none">
            <table className="w-full p-10">
              <thead>
                <tr>
                  <th className="p-6 text-[11px]">IMAGE</th>
                  <th className="p-0 text-[11px]">NAME</th>
                  <th className="p-0 text-[11px]">ACTIVE LOANS</th>
                  <th className="p-0 text-[11px]">LOANS in 24H</th>
                  <th className="p-0 text-[11px]">OFFERS</th>
                  <th className="p-0 text-[11px]">FLOOR</th>
                  <th className="p-0 text-[11px]">LTV</th>
                  <th className="p-0 text-[11px]">LIQUIDITY</th>
                  <th className="p-0 text-[11px]">FORECLOSURES</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {tableLoanData.map((item, index) => (
                  <tr className=" py-10 border-b-[1px] border-[#a9a9a9d8]  ">
                    <td className="p-4 flex gap-2 items-center">
                      <span>
                        <img src={item.avatar} alt="" />
                      </span>
                      
                    </td>
                    <td className="">
                    {item.collection}
                      <br />
                      <span className="text-[9px] text-[#B5B5B5]">
                        {item.collectionPer}
                      </span>
                    </td>
                    <td className="">
                      {item.activeLoans} <br />
                      <span className="text-[9px] text-[#B5B5B5]">
                        {item.LoanActive}
                      </span>{" "}
                    </td>
                    <td className="">
                    {item.loanIn24}
                      <br />
                      <span className="text-[9px] text-[#B5B5B5]">
                        {item.loanIn24Paid}
                      </span>
                    </td>
                    <td className="">
                    {item.offerToken}                      
                    </td>
                    <td className="">
                    {item.floor}                      
                    </td>
                    <td className="px-2">
                    {item.ltv}                      
                    </td>
                    <td className="">
                    {item.liq}
                      <br />
                      <span className="text-[9px] text-[#B5B5B5]">
                        {item.liqPrice}
                      </span>
                    </td>

                    <td className="">
                    {item.forClosure}
                      <br />
                      <span className="text-[9px] text-[#B5B5B5]">
                        {item.forResult}
                      </span>
                    </td>

                    <td>{item.apy}</td>
                    <td className="ml-6">{item.duration}</td>
                    <td><button className="bg-gradient-to-r from-[#159F2C] text-black px-6 py-2 rounded-lg to-[#DBFF00]">LEND</button></td>
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
  )
}

export default Loans