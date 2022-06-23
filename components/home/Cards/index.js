import React from "react";
import { Link } from "react-router-dom";
import BagImg from "../../../assets/images/Bag.svg";
import Calendar from "../../../assets/images/Calendar.svg";
import Check from "../../../assets/images/check.svg";
import Subtract from "../../../assets/images/Subtract.svg";
const Cards = () => {
  return (
    <div className="flex sm:flex-col md:flex-row flex-wrap justify-between mt-6">
      <div className="w-full md:w-[45%] lg:w-[40%] xl:w-[22.5%]  bg-white rounded-xl hover:rounded-xl pl-7 pr-8 py-7 cursor-pointer customs-shadow mb-3 md:mb-0">
        <Link to="/fold">
          <div className="flex justify-start items-center">
            <div className="p-5 bg-[#EAF6FC] rounded-full">
              <img src={BagImg} alt="loading" className="w-[16px]" />
            </div>
            <div className="flex flex-col ml-6">
              <h4 className="text-2xl font-extrabold text-[#030229] opacity-70 card1">
                20
              </h4>
              <p className="text-[14px] text-[#030229] opacity-70 card1">
                Check-In Waiting
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-full md:w-[45%] lg:w-[40%] xl:w-[24%] bg-white rounded-xl hover:rounded-xl pl-7 pr-8 py-7 cursor-pointer customs-shadow mb-3 md:mb-0">
        <Link to="/in-progress">
          <div className="flex justify-start items-center">
            <div className="p-5 bg-[#FFF7E1] rounded-full">
              <img src={Calendar} alt="loading" className="w-[16px]" />
            </div>
            <div className="flex flex-col ml-6">
              <h4 className="text-2xl font-extrabold text-[#030229] opacity-70 card2">
                5
              </h4>
              <p className="text-[14px] text-[#030229] opacity-70 card2">
                In Progress Laundry
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-full md:w-[45%] lg:w-[40%] xl:w-[25%]  bg-white rounded-xl hover:rounded-xl pl-7 pr-8 py-7 cursor-pointer customs-shadow mb-3 md:mb-0 mt-0 md:mt-3 xl:mt-0">
        <Link to="/load">
          <div className="flex justify-start items-center">
            <div className="p-5 bg-[#FFF4F0] rounded-full">
              <img src={Subtract} alt="loading" className="w-[16px]" />
            </div>
            <div className="flex flex-col ml-6">
              <h4 className="text-2xl font-extrabold text-[#030229] opacity-70 card3">
                3
              </h4>
              <p className="text-[14px] text-[#030229] opacity-70 card3">
                Upcoming Check-Out
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-full md:w-[45%] lg:w-[40%] xl:w-[24%]  bg-white rounded-xl hover:rounded-xl pl-7 pr-8 py-7 cursor-pointer customs-shadow mb-3 md:mb-0 mt-0 md:mt-3 xl:mt-0">
        <Link to="/residental-wash-&-flod">
          <div className="flex justify-start  items-center">
            <div className="p-5 bg-[#EFEFFF] rounded-full">
              <img src={Check} alt="loading" className="w-[16px] h-[18px]" />
            </div>
            <div className="flex flex-col ml-6">
              <h4 className="text-2xl font-extrabold text-[#030229] opacity-70 card4">
                252
              </h4>
              <p className="text-[14px] text-[#030229] opacity-70 card4">
                Completed Laundry
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
