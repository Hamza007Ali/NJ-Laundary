import React from "react";
import InstImg from "../../../assets/images/instnt-img.svg";
import product1Img from "../../../assets/images/product-1.webp";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Stack from "@mui/material/Stack";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopTimePicker from "@mui/lab/DesktopTimePicker";
const LoadQRScanner = () => {
  const [value, setValue] = React.useState(
    new Date("2018-01-01T00:00:00.000Z")
  );
  return (
    <div className="ml-0 xl:ml-12 w-full  xl:w-[63%] ">
      <form action="" method="">
        <div className="w-full rounded-xl bg-white px-[28px] pt-6 pb-[28px] mb-5 mt-4 xl:mt-0">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-[60.3%]">
              <label className="font-bold text-sm text-[#22215B] mr-[18px]">
                Washing Intst.
              </label>
              <div className="mt-2.5 relative">
                <input
                  type="text"
                  name=""
                  defaultValue="418369532143dfgfghg567"
                  className="text-sm font-normal w-full py-3 px-[18px] customer-shadow rounded-xl outline-none "
                />
                <img
                  src={InstImg}
                  alt="Loading"
                  className="absolute top-[13px] right-[28px] cursor-pointer"
                />
              </div>
            </div>
            <div className="w-full md:w-[37.5%]">
              <label className="font-bold text-sm text-[#22215B]">
                Washing Time
              </label>
              <div className="mt-2 relative w-full">
                <div className="customer-shadow px-5 pt-3 pb-[9px] rounded-xl mt-2.5 w-full">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={1}>
                      <DesktopTimePicker
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full rounded-xl bg-white px-[28px] pt-[30px] pb-[28px]">
          <div className="flex justify-start flex-wrap xl:flex-nowrap items-center pb-1 bg-[#F6F6F9]">
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
          </div>
          <div className="flex justify-start flex-wrap xl:flex-nowrap items-center pb-1 bg-[#F6F6F9]">
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
          </div>
          <div className="flex justify-start flex-wrap xl:flex-nowrap items-center pb-1 bg-[#F6F6F9]">
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[8px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
          </div>
          <div className="flex justify-start flex-wrap xl:flex-nowrap items-center pb-1 bg-[#F6F6F9]">
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
          </div>
          <div className="flex justify-start flex-wrap xl:flex-nowrap items-center  bg-[#F6F6F9]">
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
            <div className="flex flex-col items-center bg-white w-[30%]  lg:w-[12%] xl:w-[12%]  customs-shadow px-0.5 pt-1 pb-2.5 mr-1  cursor-pointer">
              <p className="text-[8px] font-bold">Backing Soda</p>
              <img src={product1Img} alt="Loading" className="w-[38px]" />
              <p className="text-[10px] font-bold">$1.25 per load</p>
            </div>
          </div>
          {/* Product Listing End */}
          <div className="flex justify-center items-center mt-10">
            <div className="relative hover-svg-text-change">
              <button className="text-sm font-bold text-[#22215B] hover:text-[#FFFFFF] hover:bg-[#22215B] bg-[#FFFFFF] pr-11 pl-5 py-2.5  rounded-xl hover:rounded-xl button-atnd btn-shadow">
                Load Another
              </button>
              <div className="absolute top-[15px] right-[20px] text-[#22215B]">
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.11831 0.198869L10.7852 4.51989C11.0716 4.78505 11.0716 5.21495 10.7852 5.48011L6.11831 9.80113C5.83192 10.0663 5.3676 10.0663 5.08122 9.80113C4.79483 9.53597 4.79483 9.10606 5.08122 8.8409L8.49624 5.67898L0.733334 5.67898C0.328325 5.67898 4.69897e-07 5.37499 4.37114e-07 5C4.04331e-07 4.62501 0.328325 4.32102 0.733334 4.32102L8.49624 4.32102L5.08122 1.1591C4.79483 0.893936 4.79483 0.464028 5.08122 0.198869C5.3676 -0.0662903 5.83192 -0.0662903 6.11831 0.198869Z"
                    fill="currenColor"
                  />
                </svg>
              </div>
            </div>
            <button className="text-sm font-bold text-[#22215B] hover:text-[#FFFFFF] hover:bg-[#22215B] bg-[#FFFFFF] px-4 py-2.5 ml-5 rounded-xl hover:rounded-xl btn-shadow button-atnd">
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoadQRScanner;
