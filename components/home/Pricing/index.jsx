import React from "react";
import { Link } from "react-router-dom";
import VehicleImg from "../../../assets/images/vehicle.svg";
import DotICon from "../../../assets/images/doticon.svg";
import Author2Img from "../../../assets/images/author2.svg";
import DressImg from "../../../assets/images/dress.svg";
const Pricing = () => {
  return (
    <>
      <div className="bg-[#FAFAFB]  rounded-xl pt-2.5 pr-4 pl-[22px] pb-5 mt-2 lg:mt-4 xl:mt-2">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold text-[#0D062D]">$11.9</p>
            <span className="text-xs font-semibold text-[#0D062D] text-opacity-50 ml-1">
              Price
            </span>
          </div>
          <div className="flex justify-between items-center">
            <button className="mr-[14px] bg-[#FBF3DE] text-[#FFBF1B] font-semibold text-[10px] py-1.5 px-2 rounded">
              In Process
            </button>
            {/* dropdown start */}
            <div className="group relative">
              <button className="button-effects-sec">
                <img src={DotICon} alt="loading" className="w-[20px]" />
              </button>
              <nav
                tabindex="0"
                className="bg-white invisible  w-32 absolute right-0 top-[24px] transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 shadow-xl rounded-md z-40"
              >
                <ul className="">
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 hover:bg-gray-100 text-xs"
                    >
                      In Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 hover:bg-gray-100 text-xs"
                    >
                      Check In
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 hover:bg-gray-100 text-xs"
                    >
                      Check Out
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* dropdown end here */}
          </div>
        </div>
        <p className="font-normal text-[#0D062D] leading-4 text-[10px] lg:text-base xl:text-[10px] mt-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
        <div className="flex justify-between mt-3">
          <div>
            <img src={Author2Img} alt="loading" className="w-[22px]" />
          </div>
          <div className="flex">
            <div className="flex items-center mr-3 md:mr-10">
              <div className="mr-1">
                <img src={VehicleImg} alt="loading" className="w-[18px]" />
              </div>
              <p className="text-xs font-normal  text-[#787486]">12/4/2022</p>
            </div>
            <div className="flex items-center">
              <div className="mr-1">
                <img src={DressImg} alt="loading" className="w-[12px]" />
              </div>
              <p className="text-xs font-normal text-[#787486]">10 cloths</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFB]  rounded-xl pt-2.5 pr-4 pl-[22px] pb-5 mt-2 lg:mt-4 xl:mt-2">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold text-[#0D062D]">$11.9</p>
            <span className="text-xs font-semibold text-[#0D062D] text-opacity-50 ml-1">
              Price
            </span>
          </div>
          <div className="flex justify-between items-center">
            <button className="mr-[14px] bg-[#FBE5DE] text-[#FF8F6B] font-semibold text-[10px] py-1.5 px-2 rounded">
              Check-In
            </button>

            {/* dropdown start */}
            <div className="group relative">
              <button className="button-effects-sec">
                <img src={DotICon} alt="loading" className="w-[20px]" />
              </button>
              <nav
                tabindex="0"
                className="bg-white invisible  w-32 absolute right-0 top-[24px] transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 shadow-xl rounded-md z-40"
              >
                <ul className="">
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 hover:bg-gray-100 text-xs"
                    >
                      In Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 hover:bg-gray-100 text-xs"
                    >
                      Check In
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 hover:bg-gray-100 text-xs"
                    >
                      Check Out
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* dropdown end here */}
          </div>
        </div>
        <p className="font-normal leading-4 text-[10px] lg:text-base xl:text-[10px]  mt-1 text-[#0D062D]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
        <div className="flex justify-between mt-3">
          <div>
            <img src={Author2Img} alt="loading" className="w-[22px]" />
          </div>
          <div className="flex">
            <div className="flex items-center mr-3 md:mr-10">
              <div className="mr-1">
                <img src={VehicleImg} alt="loading" className="w-[18px]" />
              </div>
              <p className="text-xs font-normal  text-[#787486]">12/4/2022</p>
            </div>
            <div className="flex items-center">
              <div className="mr-1">
                <img src={DressImg} alt="loading" className="w-[12px]" />
              </div>
              <p className="text-xs font-normal text-[#787486]">10 cloths</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFB]  rounded-xl pt-2.5 pr-4 pl-[22px] pb-5 mt-2 lg:mt-4 xl:mt-2">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold text-[#0D062D]">$11.9</p>
            <span className="text-xs font-semibold text-[#0D062D] text-opacity-50 ml-1">
              Price
            </span>
          </div>
          <div className="flex justify-between items-center">
            <button className="mr-[14px] bg-[#EEEEFC] text-[#9C99FF] font-semibold text-[10px] py-1.5 px-2 rounded">
              Check-Out
            </button>
            {/* dropdown start */}
            <div className="group relative">
              <button className="button-effects-sec">
                <img src={DotICon} alt="loading" className="w-[20px]" />
              </button>
              <nav
                tabindex="0"
                className="bg-white invisible  w-32 absolute right-0 top-[24px] transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 shadow-xl rounded-md z-40"
              >
                <ul className="">
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 hover:bg-gray-100 text-xs"
                    >
                      In Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 hover:bg-gray-100 text-xs"
                    >
                      Check In
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 hover:bg-gray-100 text-xs"
                    >
                      Check Out
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* dropdown end here */}
          </div>
        </div>
        <p className="font-normal leading-4 text-[10px] lg:text-base xl:text-[10px]  mt-1 text-[#0D062D]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
        <div className="flex justify-between mt-3">
          <div>
            <img src={Author2Img} alt="loading" className="w-[22px]" />
          </div>
          <div className="flex">
            <div className="flex items-center mr-3 md:mr-10">
              <div className="mr-1">
                <img src={VehicleImg} alt="loading" className="w-[18px]" />
              </div>
              <p className="text-xs font-normal  text-[#787486]">12/4/2022</p>
            </div>
            <div className="flex items-center">
              <div className="mr-1">
                <img src={DressImg} alt="loading" className="w-[12px]" />
              </div>
              <p className="text-xs font-normal text-[#787486]">10 cloths</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
