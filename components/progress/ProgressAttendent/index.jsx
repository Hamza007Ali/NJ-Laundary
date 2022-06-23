import React from "react";
import { Link } from "react-router-dom";
const ProgressAttendent = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-left lg:items-center mt-[18px]">
      <div>
        <p className="font-bold text-base md:text-sm lg:text-xl text-[#22215B]">
          Select Attendant
        </p>
      </div>
      <div
        className="progress-dropdown flex flex-col md:flex-row items-left lg:items-center w-full md:w-[74%] 
      lg:w-[78%] xl:w-[60%]"
      >
        <p className="text-xs text-[10px] lg:text-xs w-full md:w-[42%] lg:w-[27%] font-normal  text-[#22215B] mr-0 md:mr-5 mt-2 lg:mt-0">
          Total Processes are <span className="font-bold">173</span> in a row.
        </p>
        <div className="flex flex-wrap md:flex-row justify-between w-full lg:w-[70%]">
          <div className="group relative w-[47%] md:w-[24%] lg:w-[28%] mr-3">
            <button className="button-effects-sec button-atnd w-full bg-white py-2.5 flex justify-center  text-[#22215B] text-xs md:text-[10px] lg:text-sm items-center btn-shadow rounded-xl  tracking-[-1px] font-bold hover:bg-[#22215B]  hover:text-white  mt-3 md:mt-0">
              Sort & Load
              <svg
                className="ml-3 form-btn"
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.10204 6.14683C4.80848 6.56284 4.19152 6.56284 3.89796 6.14683L0.556596 1.41167C0.212164 0.923569 0.561243 0.25 1.15864 0.25L7.84136 0.249999C8.43876 0.249999 8.78784 0.923567 8.4434 1.41167L5.10204 6.14683Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <nav
              tabindex="0"
              className="bg-white invisible rounded w-32 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 shadow-xl z-40"
            >
              <ul className="">
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Filter
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Move to Dryer
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Show All
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <button className="button-atnd w-[47%] md:w-[16%] lg:w-[15%] font-bold text-xs md:text-[10px] lg:text-sm py-2.5 bg-[#fff] hover:bg-[#22215B] text-[#22215B] hover:text-white rounded-xl btn-shadow mr-0 md:mr-3 tracking-[-0.4px] mt-3 md:mt-0">
            Filter
          </button>
          <button className="button-atnd w-[47%] md:w-[28%] lg:w-[28%] font-bold text-xs md:text-[10px] lg:text-sm py-2.5 bg-[#fff] hover:bg-[#22215B] text-[#22215B] hover:text-white rounded-xl btn-shadow lg:mr-3 tracking-[-0.4px] mt-3 md:mt-0">
            Move to Dryer
          </button>
          <button className="button-atnd w-[47%] md:w-[18%] lg:w-[21%] font-bold text-xs md:text-[10px] lg:text-sm bg-[#fff] hover:bg-[#22215B] text-[#22215B] hover:text-white py-2.5 rounded-xl btn-shadow tracking-[-0.4px] mt-3 md:mt-0">
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressAttendent;
