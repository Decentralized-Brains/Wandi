import React from "react";
import Nav from "../global/Nav";
import VideoBG from "../global/VideoBG";
import { MdArrowDownward } from "react-icons/md";

function Offers() {
    const datas = [
        {
            title:"TOTAL INTEREST EARNED (ALL TIME)",
            price:"0",
            statusValue:"0",
            status:"active loans"
        },
        {
            title:"TOTAL ACTIVE LOAN VALUE",
            price:"0",
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
    <div className="offers-page">
      <VideoBG />
      <Nav btnText={"Select Wallet"}/>
      <div className="container relative">
        <div className="text-section font-superLagendBoy text-center pt-36 pb-20">
          <h1 className="text-[2.5rem] sm:text-[2rem] max-sm:text-[1.5rem] sm:p-4 text-gradient-bg leading-loose">
            MY OFFERS AND CONTRACTS
          </h1>
          <p className="font-superLagendBoy text-xl max-sm:text-lg text-[#FFFFFF]">
            Browse collections below, and name your price. The current best
            offer will be shown to borrowers. To take your offer, they lock in
            an NFT from that collection to use as collateral. You will be repaid
            at the end of the loan, plus interest. If they fail to repay, you
            get to keep the NFT.
          </p>
        </div>

        <div className="second-sec pt-32 flex flex-col gap-24">
          <div>
            <h1 className=" font-superLagendBoy flex gap-2 text-[#FFFFFF] items-center text-sm">
              Download history (CSV){" "}
              <span className="cursor-pointer">
                <MdArrowDownward color="#DBFF00" size={20} />
              </span>
            </h1>
          </div>

          <div className="boxes max-sm:px-2">

            <div className="flex max-sm:flex-col max-sm:gap-4 justify-between ">
            {datas.map((item,index)=>
              <div className="text-[#FFFFFF] rounded-lg border border-[#DBFF00] border-b-4 font-superLagendBoy backdrop-blur-3xl p-6 py-6 flex flex-col justify-between">
                <h1 className="text-[10px]">
                  {item.title}
                </h1>
                <div className="flex flex-col justify-between mt-6">
                  <h1 className="flex gap-1">
                    <span>0</span>
                    <span>{item.price}</span>
                  </h1>
                  <span className="text-[10px]">{item.statusValue} {item.status}</span>
                </div>
              </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
