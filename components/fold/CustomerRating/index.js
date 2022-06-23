import React from "react";
import product1Img from "../../../assets/images/product-1.webp";
import SmallCircle from "../../../assets/images/s-circle.svg";
import SmallCircleLine from "../../../assets/images/s-circle-line.svg";

const CustomerRating = () => {
  return (
    <div className="ml-0 xl:ml-12 bg-white rounded-xl w-full xl:w-[44%] px-[30px] py-[26px] mt-4 xl:mt-0">
      <div className="bg-[#FAFAFB] rounded-xl py-6 md:py-[36px] px-4 md:px-[46px] mb-5">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[#030229] font-semibold text-xs md:text-[24px] xl:text-[17px]">
              John Dryer
            </h2>
          </div>
          <div className="flex">
            <div className="relative">
              <p className="text-[#000000] bg-[#FF8F6B] font-semibold text-xs md:text-sm rounded-[14px] py-2 md:py-[13px] px-3 md:px-5 mr-4 ">
                33
              </p>
              <div className="line33 absolute top-[20px] md:top-[40px] left-[20px] bottom-0 z-40 right-[-19px] h-[50px]"></div>
            </div>
            <div>
              <p className="text-[#000000] bg-[#FFD66B] font-semibold text-xs md:text-sm rounded-[14px] py-2 md:py-[13px] px-3 md:px-5 mr-4">
                34
              </p>
            </div>
            <div className="relative">
              <p className="text-[#000000] bg-[#C0BEFF] font-semibold text-xs md:text-sm rounded-[14px] py-2 md:py-[13px] px-3 md:px-5">
                60
              </p>
              <img
                src={SmallCircleLine}
                alt="loading"
                className="absolute left-[18px] md:left-[28px] bottom-[9px]"
              />
              <img src={SmallCircle} alt="loading" className="mx-auto pt-0.5" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3 md:mt-[30px]">
          <div>
            <h2 className="text-[#030229] font-semibold text-xs md:text-[24px] xl:text-[17px]">
              Folding Station
            </h2>
          </div>
          <div className="flex">
            <div className="relative">
              <p className="text-[#FFF] bg-[#000000] font-semibold text-xs md:text-sm rounded-[14px] py-2 md:py-[13px] px-3.5 md:px-6 mr-5 lg:mr-4">
                1
              </p>
              <div className="line-34 absolute  z-40  h-[42px] top-[-40px] right-[-17px] left-[10px] bottom-0"></div>
            </div>
            <p className="text-[#FFF] bg-[#000000] font-semibold text-xs md:text-sm rounded-[14px] py-2 md:py-[13px] px-3.5 md:px-6 mr-4">
              1
            </p>

            <p className="text-[#FFF] bg-[#000000] font-semibold text-xs md:text-sm rounded-[14px] py-2 md:py-[13px] px-3.5 md:px-6">
              2
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFB] rounded-xl pl-5 pr-4 pt-2.5 pb-5 mb-5">
        <p className="text-center text-[17px] md:text-[24px] xl:text-[17px] font-bold text-[#030229] mb-1.5">
          Extra Notes
        </p>
        <div className="flex flex-wrap justify-start  items-center pb-0.5">
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%] customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer mb-0.5">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%] customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer mb-0.5">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%] customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer mb-0.5">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%] customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer mb-0.5">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%] customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer mb-0.5">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%] customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer mb-0.5">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%] customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer mb-0.5">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%] customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer mb-0.5">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%] customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer mb-0.5">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%] customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer mb-0.5">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%] customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer mb-0.5">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%] customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer mb-0.5">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%] customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer mb-0.5">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%] customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer mb-0.5">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%] customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer mb-0.5">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFB] rounded-xl pl-5 pr-4 pt-2.5 pb-5">
        <p className="text-center text-[17px] md:text-[24px] xl:text-[17px] font-bold text-[#030229] mb-1.5">
          Extra Notes
        </p>
        <div className="flex justify-start flex-wrap items-center pb-0.5">
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
        </div>
        <div className="flex justify-start flex-wrap  items-center pb-0.5">
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
        </div>
        <div className="flex justify-start  flex-wrap items-center pb-0.5">
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
          <div className="flex flex-col items-center bg-white w-[24%] lg:w-[12%]  customs-shadow px-0.5 md:px-3 xl:px-0.5 pt-1 pb-2.5 mr-0.5  cursor-pointer">
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              Backing Soda
            </p>
            <img src={product1Img} alt="loading" className="w-[26px]" />
            <p className="text-[6px] md:text-[8px] xl:text-[6px]">
              $1.25 per load
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRating;
