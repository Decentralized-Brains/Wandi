import React from "react";
import Nav from "../global/Nav";
import VideoBG from "../global/VideoBG";
import { MdArrowDownward } from "react-icons/md";

function Offers() {
    
  return (
    <div className="offers-page">
      {/* <VideoBG /> */}
      <Nav btnText={"Select Profile"}/>
      <div className="container relative">
      <div className="text-section font-superLagendBoy text-center pt-36 pb-20">
          <h1 className="text-[2.5rem] sm:text-[2rem] max-sm:text-[1.5rem] sm:p-4 text-gradient-bg leading-loose">
          MY OFFERS AND CONTRACTS
          </h1>
          <p className="font-superLagendBoy text-xl max-sm:text-lg text-[#FFFFFF]">
          Once your offer is accepted by a borrower, a secure contract is created, freezing the NFT in their wallet. When the loan ends, you will get paid the total LYX (loan with interest). In the event of a default, you can foreclose, which transfers the collateral NFT to your wallet.
          </p>
          <h1 className="mt-24 font-superLagendBoy text-4xl max-sm:text-lg text-[#FFFFFF]">No active or completed loans.</h1>
        </div>

        <div className="second-sec py-16 flex flex-col gap-24">
          <div>
            <h1 className=" font-superLagendBoy flex gap-2 text-[#FFFFFF] items-center text-sm">
              Download history (CSV){" "}
              <span className="cursor-pointer">
                <MdArrowDownward color="#DBFF00" size={20} />
              </span>
            </h1>
          </div>

          <div className="boxes max-sm:px-2">

            <div className="flex max-sm:flex-col gap-4 max-sm:gap-4 justify-between ">
            
            <div className="text-[#FFFFFF] rounded-lg border border-[#DBFF00] border-b-[6px] font-superLagendBoy backdrop-blur-3xl p-6 py-6 pr-10 flex flex-col">
                <h1 className="text-[10px]">
                TOTAL INTEREST EARNED (ALL TIME)
                </h1>
                <div className="flex flex-col justify-between mt-4">
                  <h1 className="flex gap-2 items-center">
                    <span className="text-3xl">Ŀ</span>
                    <span className="text-xl">0</span>
                  </h1>
                  <span className="text-[10px]">0 active loans</span>
                </div>
              </div>

              <div className="text-[#FFFFFF] rounded-lg border border-[#DBFF00] border-b-[6px] font-superLagendBoy backdrop-blur-3xl p-6 py-6 pr-10 flex flex-col">
                <h1 className="text-[10px]">
                TOTAL ACTIVE LOAN VALUE
                </h1>
                <div className="flex flex-col justify-between mt-4">
                  <h1 className="flex gap-2 items-center">
                    <span className="text-3xl">Ŀ</span>
                    <span className="text-xl">0</span>
                  </h1>
                  <span className="text-[10px]">0 active loans</span>
                </div>
              </div>

              <div className="text-[#FFFFFF] rounded-lg border border-[#DBFF00] border-b-[6px] font-superLagendBoy backdrop-blur-3xl p-6 py-6 pr-10 flex flex-col">
                <h1 className="text-[10px]">
                TOTAL OFFER VALUE
                </h1>
                <div className="flex flex-col justify-between mt-4">
                  <h1 className="flex gap-2 items-center">
                    <span className="text-3xl">Ŀ</span>
                    <span className="text-xl">0</span>
                  </h1>
                  <span className="text-[10px]">0 active loans</span>
                </div>
              </div>

              <div className="text-[#FFFFFF] rounded-lg border border-[#DBFF00] border-b-[6px] font-superLagendBoy backdrop-blur-3xl p-6 py-6 pr-10 flex flex-col">
                <h1 className="text-[10px]">
                FACECLOSURE RATE
                </h1>
                <div className="flex flex-col justify-between mt-4">
                  <h1 className="flex gap-2 items-center">
                    <span className="text-3xl">Ŀ</span>
                    <span className="text-xl">0</span>
                  </h1>
                  <span className="text-[10px]">0 active loans</span>
                </div>
              </div>

              <div className="text-[#FFFFFF] rounded-lg border border-[#DBFF00] border-b-[6px] font-superLagendBoy backdrop-blur-3xl p-6 py-6 pr-10 flex flex-col">
                <h1 className="text-[10px]">
                UNDER WATER
                </h1>
                <div className="flex flex-col justify-between mt-4">
                  <h1 className="flex gap-2 items-center">
                    <span className="text-3xl">0</span>
                    <span className="text-xl">loans</span>
                  </h1>
                  {/* <span className="text-[10px]">0 active loans</span> */}
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
