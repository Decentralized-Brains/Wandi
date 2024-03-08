import React from "react";
import Nav from "../global/Nav";
import VideoBG from "../global/VideoBG";
import { MdArrowDownward } from "react-icons/md";

function Loans() {
  const datas = [
    {
        title:"TOTAL ACTIVE LOANS",
        price:"0",
        statusValue:"0",
        // status:"active loans"
    },
    {
        title:"TOTAL BORROWED",
        price:"Ŀ",
        statusValue:"0",
        status:"active loans"
    },
    {
        title:"TOTAL OFFER VALUE",
        price:"0",
        statusValue:"0",
        status:"active loans"
    },
    {
        title:"FACECLOSURE RATE",
        price:"-",
        statusValue:"0",
        status:"foreclosed"
    },
]
  return (
    <div className="loans-page">
      <VideoBG />
      <Nav btnText={"Select Profile"}/>
      <div className="container relative">
        <div className="text-section font-superLagendBoy text-center pt-36 pb-20">
          <h1 className="text-[2.5rem] sm:text-[2rem] max-sm:text-[1.5rem] sm:p-4 text-gradient-bg leading-loose">
            MY LOANS
          </h1>
          <p className="font-superLagendBoy text-xl max-sm:text-lg text-[#FFFFFF]">
          Here are the NFTs you borrowed against. You must pay these in full by the expiration date in order to keep your NFT.
          </p>
          <h1 className="mt-24 font-superLagendBoy text-4xl max-sm:text-lg text-[#FFFFFF]">No active or completed loans.</h1>
        </div>

        <div className="second-sec pt-16 flex flex-col gap-24">
          <div>
            <h1 className=" font-superLagendBoy flex gap-2 text-[#FFFFFF] items-center text-sm">
              Download history (CSV){" "}
              <span className="cursor-pointer">
                <MdArrowDownward color="#DBFF00" size={20} />
              </span>
            </h1>
          </div>

          <div className="boxes max-sm:px-2">

            <div className="flex max-sm:flex-col gap-4 max-sm:gap-4">
            
              <div className="text-[#FFFFFF] rounded-lg border border-[#DBFF00] border-b-[6px] font-superLagendBoy backdrop-blur-3xl p-6 py-6 pr-10 flex flex-col">
                <h1 className="text-[10px]">
                  TOTAL ACTIVE LOANS
                </h1>
                <div className="flex flex-col justify-between mt-4">
                  <h1 className="flex gap-1">
                    <span className="text-4xl">0</span>
                    {/* <span>{item.price}</span> */}
                  </h1>
                  {/* <span className="text-[10px]">{item.statusValue} {item.status}</span> */}
                </div>
              </div>

              <div className="text-[#FFFFFF] rounded-lg border border-[#DBFF00] border-b-[6px] font-superLagendBoy backdrop-blur-3xl p-6 py-6 pr-10 flex flex-col justify-between">
                <h1 className="text-[10px]">
                TOTAL BORROWED
                </h1>
                <div className="flex flex-col justify-between mt-6">
                  <h1 className="flex flex-col gap-1">
                    <p className="flex gap-3 items-center">
                      <span className="text-4xl">Ŀ </span>
                      <span className="text-2xl">0</span>
                    </p>
                    <span className="text-sm">Ŀ 0 in wallet</span>
                  </h1>
                  {/* <span className="text-[10px]">{item.statusValue} {item.status}</span> */}
                </div>
              </div>

              <div className="text-[#FFFFFF] rounded-lg border border-[#DBFF00] border-b-[6px] font-superLagendBoy backdrop-blur-3xl p-4 py-6 pr-10 flex flex-col gap-2">
                <h1 className="text-[10px]">
                TOTAL INTEREST OWED
                </h1>
                <div className="flex flex-col justify-between mt-4">
                  <p className="flex gap-3 items-center">
                      <span className="text-4xl">Ŀ </span>
                      <span className="text-2xl">0</span>
                    </p>
             
                </div>
              </div>


              

            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loans