import React from "react";
import MobileHeader from "../mobileHeader";
const Header = ({ headerText, headerBtnShow }) => {
  return (
    <>
      <MobileHeader />
        <div className="flex flex-row justify-between items-center mt-24 lg:mt-5">
          <p className="text-base md:text-2xl font-extrabold">{headerText}</p>
          <div className="flex justify-between">
            {headerBtnShow && (
              <button className="bg-[#2DA9DF] text-xs md:text-base text-white py-2 px-4 rounded-md mr-2 lg:mr-3 customs-shadow">
                Chat
              </button>
            )}
            <button className="bg-[#2DA9DF] text-xs md:text-base text-white py-2 px-4 rounded-md customs-shadow">
              Contact us
            </button>
          </div>
        </div>
    </>
  );
};

export default Header;
