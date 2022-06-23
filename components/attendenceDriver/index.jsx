import React from "react";
// components
import ArrowStraight from "../../assets/images/Straight.png";
import Branch1 from "../../assets/images/Branch.png";
import Stright2 from "../../assets/images/Straight2.png";
import Arrow2Up from "../../assets/images/arrow-d-u-2.png";
import Arrow2Down from "../../assets/images/arrow-d-b-2.png";
import smallArrowattendance from "../../assets/images/smallArrowattendance.png";
const AttendenceDriverComponent = () => {
  return (
    <div className="bg-white mt-5 py-4 rounded-xl px-3 xl:px-0">
      <div className="flex items-center justify-center xl:justify-end">
        <button className="text-sm lg:text-base xl:text-sm font-bold py-[9px] px-[17px] shadow rounded-xl hover:bg-[#22215B] hover:text-white text-[#22215B] mr-2.5 button-atnd">
          Confirm
        </button>
        <button className="text-sm lg:text-base xl:text-sm font-bold py-[9px] px-2.5 shadow rounded-xl mr-4 hover:bg-[#22215B] hover:text-white text-[#22215B] button-atnd">
          Edit
        </button>
      </div>
      <div className="flex flex-col justify-center items-center mt-4 xl:mt-[-22px]">
        <p className="text-xl md:text-[25px] font-normal text-[#22215B] tracking-[-0.69px]">
          Attendance/Driver
        </p>
        <img src={ArrowStraight} alt="loading" className="mt-0.5 w-[22px]" />
        <button className="mt-[9px] py-[11px] px-2.5 border border-[#E5E7EA] rounded-lg cursor-pointer ">
          <p className="text-sm md:text-xl font-bold bg-[#E0F5FF] text-[#242938] font-roboto py-[9px] px-16 md:px-[98px] rounded-lg btn-large">
            Service
          </p>
        </button>
        <img
          src={Branch1}
          alt="loading"
          className="mt-3 w-[68%] md:w-[40%] xl:w-1/4"
        />
        <div className="flex items-center justify-between w-full md:w-[55%] lg:w-[53%] xl:w-[35%] mx-auto mt-3 md:mt-5">
          <button className="py-[11px] px-2.5 border border-[#E5E7EA] rounded-lg cursor-pointer">
            <p className="text-sm md:text-xl font-bold bg-[#FFF4D8] text-[#242938] font-roboto py-[9px] px-6 xl:px-8 rounded-lg btn-large">
              Pickup
            </p>
          </button>
          <button className="py-[11px] px-2.5 border border-[#E5E7EA] rounded-lg cursor-pointer">
            <p className="text-sm md:text-xl font-bold bg-[#D9E2FF] text-[#242938] font-roboto py-[9px] px-6 rounded-lg btn-large">
              Drop-Off
            </p>
          </button>
        </div>
        <div className="flex items-center justify-between w-[68%] md:w-5/12 lg:w-4/12 xl:w-[25.5%] mx-auto mt-3">
          <img src={smallArrowattendance} alt="loading" />
          <img src={smallArrowattendance} alt="loading" />
        </div>
        <div className="flex items-center justify-between w-full md:w-[68%] lg:w-[50%] xl:w-[38.5%] mx-auto">
          <button className="mt-[9px] py-[11px] px-2.5  w-[43%]  border border-[#E5E7EA] rounded-lg cursor-pointer">
            <p className="text-base md:text-xl font-bold bg-[#FFE2D9] leading-[28px] md:leading-[22px] tracking-[-0.5px] text-[#242938] font-roboto py-[9px] px-1 xl:px-3 rounded-lg text-center btn-large">
              Customer name/ Order #
            </p>
          </button>
          <button className="mt-[9px] py-[11px] px-2.5 border border-[#E5E7EA] rounded-lg w-[43.5%] cursor-pointer">
            <p className="text-sm md:text-xl font-bold bg-[#E2E1FF] text-[#242938] font-roboto py-[17px] px-3 rounded-lg btn-large">
              Customer name
            </p>
          </button>
        </div>
        <div>
          <img
            src={Arrow2Up}
            alt="loading"
            className="mt-3 w-[68%] md:w-full mx-auto"
          />
        </div>
        <button className="mt-[9px] py-[11px] px-2.5 border border-[#E5E7EA] rounded-lg cursor-pointer">
          <p className="text-sm md:text-xl font-normal bg-[#F4F5F7] text-[#242938] font-roboto py-[9px] px-16 md:px-[98px] rounded-lg btn-large">
            # of Bags
          </p>
        </button>
        <div>
          <img
            src={Arrow2Down}
            alt="loading"
            className="mt-3 w-[68%] md:w-full mx-auto"
          />
        </div>
        <div className="flex items-center justify-between w-full md:w-[68%] lg:w-[48%] mx-auto">
          <button className="mt-[9px] py-[11px] px-2.5 border border-[#E5E7EA]  rounded-lg w-[43.5%] cursor-pointer">
            <p className="text-sm lg:text-xl font-normal bg-[#F4F5F7] text-[#242938]  font-roboto py-[17px] px-3 rounded-lg text-center btn-large">
              Bag Color
            </p>
          </button>
          <button className="mt-[9px] py-[11px] px-2.5  w-[43%]  border border-[#E5E7EA] rounded-lg cursor-pointer">
            <p className="text-sm lg:text-xl font-normal bg-[#F4F5F7] leading-[22px] tracking-[-0.5px] text-[#242938] font-roboto py-[9px] px-3 rounded-lg text-center btn-large">
              Weight in=X # of Bags
            </p>
          </button>
        </div>
        <div className="flex items-center justify-between w-[68%] md:w-5/12 lg:w-4/12 xl:w-[25.5%] mx-auto mt-[22px]">
          <img src={Stright2} alt="loading" />
          <img src={Stright2} alt="loading" />
        </div>
        <div className="flex items-center justify-between w-full md:w-[68%] lg:w-[48%] mx-auto">
          <button className="mt-[9px] py-[11px] px-2.5  w-[43%]  border border-[#E5E7EA] rounded-lg cursor-pointer">
            <p className="text-sm lg:text-xl font-normal bg-[#F4F5F7] leading-[22px] tracking-[-0.5px] text-[#242938] font-roboto py-[9px] px-3 rounded-lg text-center btn-large">
              Are all bass Tagged?
            </p>
          </button>
          <button className="mt-[9px] py-[11px] px-2.5 border border-[#E5E7EA]  rounded-lg w-[43.5%] cursor-pointer">
            <p className="text-sm lg:text-xl font-normal bg-[#F4F5F7] text-[#242938]  font-roboto py-[17px] px-3 rounded-lg text-center btn-large">
              Read Prompt
            </p>
          </button>
        </div>
        <div className="d-flex mt-6 xl:m-10">
          <button className="text-sm lg:text-base xl:text-sm font-bold py-[9px] bg-[#FBDBDB] text-[#FF5B5B] px-4 btn-shadow rounded-xl mr-2.5 btn-large">
            Stop
          </button>
          <button className="text-sm lg:text-base xl:text-sm font-bold py-[9px] px-[17px] btn-shadow rounded-xl hover:bg-[#22215B] hover:text-[#FFFFFF] text-[#22215B] mr-2.5 button-atnd">
            New Customer
          </button>
          <button className="text-sm lg:Dtext-base xl:text-sm font-bold py-[9px] px-2.5 btn-shadow rounded-xl mr-0 xl:mr-2.5 hover:bg-[#22215B] hover:text-[#FFFFFF] text-[#22215B] button-atnd">
            Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendenceDriverComponent;
