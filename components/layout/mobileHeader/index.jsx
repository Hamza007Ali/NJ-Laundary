import React, { useState } from "react";
import Hamburger from "hamburger-react";
import Logo from "../../../assets/images/mobilelogo.svg";
import { Link } from "react-router-dom";
const MobileHeader = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <div className="flex justify-between items-center w-full bg-white fixed left-0 right-0 top-0 py-4 px-4 z-50 ">
        <Link to="/">
        <img src={Logo} alt="loading" />
        </Link>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <div className={`animate-spin fixed left-0 right-0 bottom-0 top-[80px] lg:top-[110px] w-full bg-white rounded-xl z-50 ${isOpen ? "mobile-nav" : "mobile-nav-left"}`}>
          <Link
            to="/"
            className="block text-sm font-bold px-8 py-3 text-black bg-white hover:bg-[#FAFAFB]"
            onClick={() => {
              setOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            to="/residental-wash-&-flod"
            className="block text-sm font-bold px-8 py-3 hover:bg-[#FAFAFB] text-black"
            onClick={() => {
              setOpen(false);
            }}
          >
            Residential&nbsp;Wash&nbsp;&&nbsp;Flod
          </Link>

          <Link
            to="/fold"
            className="block text-sm font-bold px-8 py-3 hover:bg-[#FAFAFB] text-black"
            onClick={() => {
              setOpen(false);
            }}
          >
            Fold
          </Link>

          <Link
            to="/load"
            className="block text-sm font-bold px-8 py-3 hover:bg-[#FAFAFB] text-black"
            onClick={() => {
              setOpen(false);
            }}
          >
            {" "}
            Start/Load
          </Link>

          <Link
            to="/in-progress"
            className="block text-sm font-bold px-8 py-3 hover:bg-[#FAFAFB] text-black"
            onClick={() => {
              setOpen(false);
            }}
          >
            In&nbsp;Progress
          </Link>

          <Link
            to="/attendance"
            className="block text-sm font-bold px-8 py-5 hover:bg-[#FAFAFB] text-black"
            onClick={() => {
              setOpen(false);
            }}
          >
            Attendance/Driver
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
