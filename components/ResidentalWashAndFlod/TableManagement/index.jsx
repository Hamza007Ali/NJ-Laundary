import React from "react";
import DateImg from "../../../assets/images/date-arrow.svg";
const TableManagement = () => {
  return (
    <>
      <table className="mt-[98px] xl:mt-2.5 w-full hidden lg:block">
        <tr>
          <div className="flex mt-2 items-center">
            <th className="font-normal text-[11px] w-[6%] pl-2 text-left  text-[#030229] text-opacity-70 relative">
              Date
            </th>
            <img src={DateImg} alt="loading" className="ml-7 mb-0.5" />
          </div>
          <th className="font-normal text-[11px] w-[8%] text-[#030229] text-opacity-70">
            Customer Name
          </th>
          <th className="font-normal text-[11px] w-[6.5%]  text-[#030229] text-opacity-70">
            Service Type
          </th>
          <th className="font-normal text-[11px] w-[5%] text-[#030229] text-opacity-70">
            Weight in
          </th>
          <th className="font-normal text-[11px] w-[5%] text-[#030229] text-opacity-70">
            Weight out
          </th>
          <th className="font-normal text-[11px] w-[5.5%] text-[#030229] text-opacity-70 text-left">
            Total Bags Picked Up
          </th>
          <th className="font-normal text-[11px] w-[6%] text-[#030229] text-opacity-70 text-left">
            Total Hangers To Deliver
          </th>
          <th className="font-normal text-[11px] w-[5.3%] text-[#030229] text-opacity-70 ">
            Total bags To Deliver
          </th>
          <th className="font-normal text-[11px] w-[6.5%] text-[#030229] text-opacity-70">
            Bag color
          </th>
          <th className="font-normal text-[11px] w-[5%] text-[#030229] text-opacity-70">
            Washer #
          </th>
          <th className="font-normal text-[11px] w-[6.5%] text-[#030229] text-opacity-70">
            Washer Time
          </th>
          <th className="font-normal text-[11px] w-[4.3%] text-[#030229] text-opacity-70">
            Dryer #
          </th>
          <th className="font-normal text-[11px] w-[5.5%] text-[#030229] text-opacity-70">
            Dryer Time
          </th>
          <th className="font-normal text-[11px] w-[5.5%] text-[#030229] text-opacity-70">
            Fold Station
          </th>
          <th className="font-normal text-[11px] w-[5.2%] text-[#030229] text-opacity-70">
            Fold Time
          </th>
          <th className="font-normal text-[11px] w-[11.5%] text-[#030229] text-opacity-70 text-left pl-4">
            Notes
          </th>
        </tr>
        <tbody>
          <div className="mt-3"></div>
          {/* Table Row 1 */}
          <tr className="bg-[#FDFDFE] hover:bg-[#FFF] rounded-xl customs-shadow ">
            <td className="w-[6%] text-xs  font-semibold py-5 pl-2  text-[#000000] border-r-[1px] border-[#F2F2F2] rounded-tl-xl rounded-bl-xl">
              12/8/2020
            </td>
            <td className="w-[9%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Arrora gaur
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5  pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Dry Clean
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              1.2 kg
            </td>
            <td className="w-[5.8%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              1.2 lb
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2  text-[#030229] border-r-[1px] border-[#F2F2F2]">
              4
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              4
            </td>
            <td className="w-[5.3%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              4
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Blue grey
            </td>
            <td className="w-[5%] text-xs py-5 font-semibold pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              1
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              30 min
            </td>
            <td className="w-[4.3%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              30
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              30 min
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              1-5
            </td>
            <td className="w-[5.2%] text-xs font-semibold py-5 pl-2  text-[#030229] border-r-[1px] border-[#F2F2F2]">
              30 min
            </td>
            <td className="w-[12.5%] text-xs font-normal py-5 pl-2 rounded-tr-xl rounded-br-xl">
              Lorem Ipsum is simply..
            </td>
          </tr>
          <div className="mt-3"></div>

          <tr className="bg-[#FDFDFE] hover:bg-[#FFF] rounded-xl customs-shadow">
            <td className="w-[6%] text-xs  font-semibold py-5 pl-2  text-[#000000] border-r-[1px] border-[#F2F2F2] rounded-tl-xl rounded-bl-xl">
              12/9/2020
            </td>
            <td className="w-[9%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              James Mullican
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5  pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Dry Clean
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              2.4 kg
            </td>
            <td className="w-[5.8%] text-xs font-semibold py-5 pl-2 text-[#FF0000] border-r-[1px] border-[#F2F2F2]">
              2.1 lb
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2  text-[#030229] border-r-[1px] border-[#F2F2F2]">
              8
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              8
            </td>
            <td className="w-[5.3%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              8
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Black white
            </td>
            <td className="w-[5%] text-xs py-5 font-semibold pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              5
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              1:30 min
            </td>
            <td className="w-[4.3%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              56
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              1:30 min
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              1-5
            </td>
            <td className="w-[5.2%] text-xs font-semibold py-5 pl-2  text-[#030229] border-r-[1px] border-[#F2F2F2]">
              30 min
            </td>
            <td className="w-[12.5%] text-xs font-normal py-5 pl-2 rounded-tr-xl rounded-br-xl">
              Lorem Ipsum is simply..
            </td>
          </tr>
          <div className="mt-3"></div>

          <tr className="bg-[#FDFDFE] hover:bg-[#FFF] rounded-xl customs-shadow">
            <td className="w-[6%] text-xs  font-semibold py-5 pl-2  text-[#000000] border-r-[1px] border-[#F2F2F2] rounded-tl-xl rounded-bl-xl">
              12/10/2020
            </td>
            <td className="w-[9%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Robert Bacins
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5  pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Dry Clean
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              5.6 kg
            </td>
            <td className="w-[5.8%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              5.6 lb
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2  text-[#030229] border-r-[1px] border-[#F2F2F2]">
              12
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              12
            </td>
            <td className="w-[5.3%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              12
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Purple
            </td>
            <td className="w-[5%] text-xs py-5 font-semibold pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              7
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              3:30 min
            </td>
            <td className="w-[4.3%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              41
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              3:30 min
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              4
            </td>
            <td className="w-[5.2%] text-xs font-semibold py-5 pl-2  text-[#030229] border-r-[1px] border-[#F2F2F2]">
              3:30 min
            </td>
            <td className="w-[12.5%] text-xs font-normal py-5 pl-2 rounded-tr-xl rounded-br-xl">
              Lorem Ipsum is simply..
            </td>
          </tr>
          <div className="mt-3"></div>

          <tr className="bg-[#FDFDFE]  hover:bg-[#FFF] rounded-xl customs-shadow">
            <td className="w-[6%] text-xs  font-semibold py-5 pl-2  text-[#000000] border-r-[1px] border-[#F2F2F2] rounded-tl-xl rounded-bl-xl">
              12/8/2020
            </td>
            <td className="w-[9%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r-[1px] border-[#F2F2F2]">
              Bethany Jackson
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5  pl-2 text-[#000000] border-r-[1px] border-[#F2F2F2]">
              Dry Clean
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r-[1px] border-[#F2F2F2]">
              800 g
            </td>
            <td className="w-[5.8%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r-[1px] border-[#F2F2F2]">
              800 lb
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2  text-[#000000] border-r-[1px] border-[#F2F2F2]">
              9
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r-[1px] border-[#F2F2F2]">
              9
            </td>
            <td className="w-[5.3%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r-[1px] border-[#F2F2F2]">
              9
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r-[1px] border-[#F2F2F2]">
              Green
            </td>
            <td className="w-[5%] text-xs py-5 font-semibold pl-2 text-[#000000] border-r-[1px] border-[#F2F2F2]">
              12
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r-[1px] border-[#F2F2F2]">
              4:00 min
            </td>
            <td className="w-[4.3%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r-[1px] border-[#F2F2F2]">
              45
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r-[1px] border-[#F2F2F2]">
              4:00 min
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#000000] border-r-[1px] border-[#F2F2F2]">
              2
            </td>
            <td className="w-[5.2%] text-xs font-semibold py-5 pl-2  text-[#000000] border-r-[1px] border-[#F2F2F2]">
              4:00 min
            </td>
            <td className="w-[12.5%] text-xs font-normal py-5 pl-2 rounded-tr-xl rounded-br-xl">
              Lorem Ipsum is simply..
            </td>
          </tr>
          <div className="mt-3"></div>
          <tr className="bg-[#FDFDFE]  hover:bg-[#FFF] rounded-xl customs-shadow">
            <td className="w-[6%] text-xs  font-semibold py-5 pl-2  text-[#000000] border-r-[1px] border-[#F2F2F2] rounded-tl-xl rounded-bl-xl">
              12/8/2020
            </td>
            <td className="w-[9%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Anne Jacob
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5  pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Dry Clean
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              1.2 kg
            </td>
            <td className="w-[5.8%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              1.2 lb
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2  text-[#030229] border-r-[1px] border-[#F2F2F2]">
              4
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              4
            </td>
            <td className="w-[5.3%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              4
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              grey
            </td>
            <td className="w-[5%] text-xs py-5 font-semibold pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              10
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              3:00 min
            </td>
            <td className="w-[4.3%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              1
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              30 min
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              1-5
            </td>
            <td className="w-[5.2%] text-xs font-semibold py-5 pl-2  text-[#030229] border-r-[1px] border-[#F2F2F2]">
              3:00 min
            </td>
            <td className="w-[12.5%] text-xs font-normal py-5 pl-2 rounded-tr-xl rounded-br-xl">
              Lorem Ipsum is simply..
            </td>
          </tr>
          <div className="mt-3"></div>

          <tr className="bg-[#FDFDFE]  hover:bg-[#FFF] rounded-xl customs-shadow">
            <td className="w-[6%] text-xs  font-semibold py-5 pl-2  text-[#000000] border-r-[1px] border-[#F2F2F2] rounded-tl-xl rounded-bl-xl">
              12/8/2020
            </td>
            <td className="w-[9%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Bethany jackson
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5  pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Dry Clean
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              2.4 kg
            </td>
            <td className="w-[5.8%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              2.4 lb
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2  text-[#030229] border-r-[1px] border-[#F2F2F2]">
              2
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              2
            </td>
            <td className="w-[5.3%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              2
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Blue
            </td>
            <td className="w-[5%] text-xs py-5 font-semibold pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              9
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              3:30 min
            </td>
            <td className="w-[4.3%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              50
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              3:30 min
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              2
            </td>
            <td className="w-[5.2%] text-xs font-semibold py-5 pl-2  text-[#030229] border-r-[1px] border-[#F2F2F2]">
              2:30 min
            </td>
            <td className="w-[12.5%] text-xs font-normal py-5 pl-2 rounded-tr-xl rounded-br-xl">
              Lorem Ipsum is simply..
            </td>
          </tr>
          <div className="mt-3"></div>
          <tr className="bg-[#FDFDFE]  hover:bg-[#FFF] rounded-xl customs-shadow">
            <td className="w-[6%] text-xs  font-semibold py-5 pl-2  text-[#000000] border-r-[1px] border-[#F2F2F2] rounded-tl-xl rounded-bl-xl">
              30/12/2020
            </td>
            <td className="w-[9%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              James Mullican
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5  pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Dry Clean
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              9.5 kg
            </td>
            <td className="w-[5.8%] text-xs font-semibold py-5 pl-2 text-[#FF0000] border-r-[1px] border-[#F2F2F2]">
              9.2 lb
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2  text-[#030229] border-r-[1px] border-[#F2F2F2]">
              12
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              12
            </td>
            <td className="w-[5.3%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              12
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Yellow
            </td>
            <td className="w-[5%] text-xs py-5 font-semibold pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              18
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              30 min
            </td>
            <td className="w-[4.3%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              39
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              30 min
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              5
            </td>
            <td className="w-[5.2%] text-xs font-semibold py-5 pl-2  text-[#030229] border-r-[1px] border-[#F2F2F2]">
              30 min
            </td>
            <td className="w-[12.5%] text-xs font-normal py-5 pl-2 rounded-tr-xl rounded-br-xl">
              Lorem Ipsum is simply..
            </td>
          </tr>
          <div className="mt-3"></div>
          <tr className="bg-[#FDFDFE]  hover:bg-[#FFF] rounded-xl customs-shadow">
            <td className="w-[6%] text-xs  font-semibold py-5 pl-2  text-[#000000] border-r-[1px] border-[#F2F2F2] rounded-tl-xl rounded-bl-xl">
              30/12/2020
            </td>
            <td className="w-[9%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Jhon Deo
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5  pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Dry Clean
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              5 kg
            </td>
            <td className="w-[5.8%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              5 lb
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2  text-[#030229] border-r-[1px] border-[#F2F2F2]">
              12
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              12
            </td>
            <td className="w-[5.3%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              12
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              White
            </td>
            <td className="w-[5%] text-xs py-5 font-semibold pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              22
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              4:00 min
            </td>
            <td className="w-[4.3%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              47
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              4:00 min
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              3
            </td>
            <td className="w-[5.2%] text-xs font-semibold py-5 pl-2  text-[#030229] border-r-[1px] border-[#F2F2F2]">
              4:00 min
            </td>
            <td className="w-[12.5%] text-xs font-normal py-5 pl-2 rounded-tr-xl rounded-br-xl">
              Lorem Ipsum is simply..
            </td>
          </tr>
          <div className="mt-3"></div>
          <tr className="bg-[#FDFDFE]  hover:bg-[#FFF] rounded-xl customs-shadow">
            <td className="w-[6%] text-xs  font-semibold py-5 pl-2  text-[#000000] border-r-[1px] border-[#F2F2F2] rounded-tl-xl rounded-bl-xl">
              12/8/2020
            </td>
            <td className="w-[9%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Bethany jackson
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5  pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Dry Clean
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              4.8 kg
            </td>
            <td className="w-[5.8%] text-xs font-semibold py-5 pl-2 text-[#FF0000] border-r-[1px] border-[#F2F2F2]">
              4.2 lb
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2  text-[#030229] border-r-[1px] border-[#F2F2F2]">
              12
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              12
            </td>
            <td className="w-[5.3%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              12
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Blue
            </td>
            <td className="w-[5%] text-xs py-5 font-semibold pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              26
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              30 min
            </td>
            <td className="w-[4.3%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              43
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              30 min
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              2
            </td>
            <td className="w-[5.2%] text-xs font-semibold py-5 pl-2  text-[#030229] border-r-[1px] border-[#F2F2F2]">
              30 min
            </td>
            <td className="w-[12.5%] text-xs font-normal py-5 pl-2 rounded-tr-xl rounded-br-xl">
              Lorem Ipsum is simply..
            </td>
          </tr>
          <div className="mt-3"></div>
          <tr className="bg-[#FDFDFE]  hover:bg-[#FFF] rounded-xl customs-shadow">
            <td className="w-[6%] text-xs  font-semibold py-5 pl-2  text-[#000000] border-r-[1px] border-[#F2F2F2] rounded-tl-xl rounded-bl-xl">
              12/8/2020
            </td>
            <td className="w-[9%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Bethany jackson
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5  pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Dry Clean
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              4.8 kg
            </td>
            <td className="w-[5.8%] text-xs font-semibold py-5 pl-2 text-[#FF0000] border-r-[1px] border-[#F2F2F2]">
              4.2 lb
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2  text-[#030229] border-r-[1px] border-[#F2F2F2]">
              12
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              12
            </td>
            <td className="w-[5.3%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              12
            </td>
            <td className="w-[6%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              Blue
            </td>
            <td className="w-[5%] text-xs py-5 font-semibold pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              26
            </td>
            <td className="w-[6.5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              30 min
            </td>
            <td className="w-[4.3%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              43
            </td>
            <td className="w-[5.5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              30 min
            </td>
            <td className="w-[5%] text-xs font-semibold py-5 pl-2 text-[#030229] border-r-[1px] border-[#F2F2F2]">
              2
            </td>
            <td className="w-[5.2%] text-xs font-semibold py-5 pl-2  text-[#030229] border-r-[1px] border-[#F2F2F2]">
              30 min
            </td>
            <td className="w-[12.5%] text-xs font-normal py-5 pl-2 rounded-tr-xl rounded-br-xl">
              Lorem Ipsum is simply..
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4">
        <tabel>
          <div className="flex flex-col justify-between md:flex-row ">
            <div className="bg-[#FDFDFE] hover:bg-[#FFF] rounded-xl customs-shadow p-4 mt-4 md:mt-[27px] lg:mt-4 block lg:hidden w-100 md:w-[48%]">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <th className="font-bold text-xs md:text-base  text-left  text-[#000000]  relative">
                    Date
                  </th>
                  <img src={DateImg} alt="loading" className="ml-1 mb-0.5" />
                </div>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12/8/2020
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Customer Name
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Arrora gaur
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Service Type
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Dry Clean
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight in
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  1.2 kg
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight out
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  1.2 lb
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight in
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  1.2 kg
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Bags Picked Up
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  4
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Hangers To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  4
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total bags To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  4
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Bag color
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Blue grey
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  1
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  30 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  30
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  30 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Station
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  1-5
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  30 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Notes
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Lorem Ipsum is simply..
                </td>
              </div>
            </div>
            <div className="bg-[#FDFDFE] hover:bg-[#FFF] rounded-xl customs-shadow p-4 mt-4 md:mt-[27px] lg:mt-4 block lg:hidden w-100 md:w-[48%]">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <th className="font-bold text-[11px] md:text-base text-left  text-[#000000]  relative">
                    Date
                  </th>
                  <img src={DateImg} alt="loading" className="ml-1 mb-0.5" />
                </div>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12/9/2020
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Customer Name
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  James Mullican
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Service Type
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Dry Clean
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight in
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  2.4 kg
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight out
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  2.1 lb
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Bags Picked Up
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  8
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Hangers To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  8
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total bags To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  8
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Bag color
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Blue grey
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  5
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  1:30 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  56
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  1:30 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Station
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  1-5
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  30 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Notes
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Lorem Ipsum is simply..
                </td>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between md:flex-row">
            <div className="bg-[#FDFDFE] hover:bg-[#FFF] rounded-xl customs-shadow p-4 mt-4 md:mt-[27px] lg:mt-4 block lg:hidden  w-100 md:w-[48%]">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <th className="font-bold text-[11px] md:text-base  text-left  text-[#000000]  relative">
                    Date
                  </th>
                  <img src={DateImg} alt="loading" className="ml-1 mb-0.5" />
                </div>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12/10/2020
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Customer Name
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Robert Bacins
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Service Type
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Dry Clean
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight in
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  5.6 kg
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight out
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  5.6 lb
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Bags Picked Up
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Hangers To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total bags To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Bag color
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Purple
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  7
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  3:30 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  41
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  3:30 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Station
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  4
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  3:30 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Notes
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Lorem Ipsum is simply..
                </td>
              </div>
            </div>
            <div className="bg-[#FDFDFE] hover:bg-[#FFF] rounded-xl customs-shadow p-4 mt-4 md:mt-[27px] lg:mt-4 block lg:hidden  w-100 md:w-[48%]">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <th className="font-bold text-[11px] md:text-base text-left  text-[#000000]  relative">
                    Date
                  </th>
                  <img src={DateImg} alt="loading" className="ml-1 mb-0.5" />
                </div>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12/8/2020
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Customer Name
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Bethany Jackson
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Service Type
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Dry Clean
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight in
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  800 kg
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight out
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  800 lb
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Bags Picked Up
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  9
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Hangers To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  9
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total bags To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  9
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Bag color
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Green
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  4:00 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  45
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  4:00 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Station
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  2
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  4:00 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Notes
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Lorem Ipsum is simply..
                </td>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between md:flex-row">
            <div className="bg-[#FDFDFE] hover:bg-[#FFF] rounded-xl customs-shadow p-4 mt-4 md:mt-[27px] lg:mt-4 block lg:hidden  w-100 md:w-[48%]">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <th className="font-bold text-[11px] md:text-base text-left  text-[#000000]  relative">
                    Date
                  </th>
                  <img src={DateImg} alt="loading" className="ml-1 mb-0.5" />
                </div>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12/8/2020
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Customer Name
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Anne Jacob
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Service Type
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Dry Clean
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight in
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  1.2 kg
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight out
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  1.2 lb
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Bags Picked Up
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  4
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Hangers To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  4
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total bags To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  4
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Bag color
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  grey
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  10
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  3:00 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  1
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  30 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Station
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  1-5
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  3:00 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Notes
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Lorem Ipsum is simply..
                </td>
              </div>
            </div>
            <div className="bg-[#FDFDFE] hover:bg-[#FFF] rounded-xl customs-shadow p-4 mt-4 md:mt-[27px] lg:mt-4 block lg:hidden  w-100 md:w-[48%]">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <th className="font-bold text-[11px] md:text-base text-left  text-[#000000]  relative">
                    Date
                  </th>
                  <img src={DateImg} alt="loading" className="ml-1 mb-0.5" />
                </div>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12/8/2020
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Customer Name
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Bethany jackson
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Service Type
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Dry Clean
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight in
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  2.4 kg
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight out
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  2.4 lb
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Bags Picked Up
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  2
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Hangers To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  2
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total bags To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  2
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Bag color
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Blue
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  9
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  3:30 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  50
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  3:30 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Station
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  2
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  2:30 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Notes
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Lorem Ipsum is simply..
                </td>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between md:flex-row">
            <div className="bg-[#FDFDFE] hover:bg-[#FFF] rounded-xl customs-shadow p-4 mt-4 md:mt-[27px] lg:mt-4 block lg:hidden  w-100 md:w-[48%]">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <th className="font-bold text-[11px] md:text-base text-left  text-[#000000]  relative">
                    Date
                  </th>
                  <img src={DateImg} alt="loading" className="ml-1 mb-0.5" />
                </div>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  30/12/2020
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Customer Name
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  James Mullican
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Service Type
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Dry Clean
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight in
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  9.5 kg
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight out
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  9.2 lb
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Bags Picked Up
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Hangers To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total bags To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Bag color
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Yellow
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  18
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  30 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  50
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  39 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Station
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  5
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  30 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Notes
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Lorem Ipsum is simply..
                </td>
              </div>
            </div>
            <div className="bg-[#FDFDFE] hover:bg-[#FFF] rounded-xl customs-shadow p-4 mt-4 md:mt-[27px] lg:mt-4 block lg:hidden  w-100 md:w-[48%]">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <th className="font-bold text-[11px] md:text-base text-left  text-[#000000]  relative">
                    Date
                  </th>
                  <img src={DateImg} alt="loading" className="ml-1 mb-0.5" />
                </div>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  30/12/2020
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Customer Name
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Jhon Deo
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Service Type
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Dry Clean
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight in
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  5 kg
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight out
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  5 lb
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Bags Picked Up
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Hangers To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total bags To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Bag color
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  White
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  22
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  4:00 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  47
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  4 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Station
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  3
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  4:00 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Notes
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Lorem Ipsum is simply..
                </td>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between md:flex-row">
            <div className="bg-[#FDFDFE] hover:bg-[#FFF] rounded-xl customs-shadow p-4 mt-4 md:mt-[27px] lg:mt-4 block lg:hidden  w-100 md:w-[48%]">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <th className="font-bold text-[11px] md:text-base text-left  text-[#000000]  relative">
                    Date
                  </th>
                  <img src={DateImg} alt="loading" className="ml-1 mb-0.5" />
                </div>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12/8/2020
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Customer Name
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Bethany jackson
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Service Type
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Dry Clean
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight in
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  4.8 kg
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight out
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  4.2 lb
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Bags Picked Up
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Hangers To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total bags To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Bag color
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Blue
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  26
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  30 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  43
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  4 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Station
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  43
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  30 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Notes
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Lorem Ipsum is simply..
                </td>
              </div>
            </div>
            <div className="bg-[#FDFDFE] hover:bg-[#FFF] rounded-xl customs-shadow p-4 mt-4 md:mt-[27px] lg:mt-4 block lg:hidden  w-100 md:w-[48%]">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <th className="font-bold text-[11px] md:text-base text-left  text-[#000000]  relative">
                    Date
                  </th>
                  <img src={DateImg} alt="loading" className="ml-1 mb-0.5" />
                </div>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12/8/2020
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Customer Name
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Bethany jackson
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Service Type
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Dry Clean
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight in
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  4.8 kg
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Weight out
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  4.2 lb
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Bags Picked Up
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total Hangers To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Total bags To Deliver
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  12
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Bag color
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Blue
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  26
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Washer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  30 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer #
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  43
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Dryer Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  4 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Station
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  43
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Fold Time
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  30 min
                </td>
              </div>
              <div className="flex justify-between items-center">
                <td className=" text-xs md:text-base font-bold py-2   text-[#000000] border-[#F2F2F2]">
                  Notes
                </td>
                <td className=" text-xs md:text-base font-semibold py-2  text-[#000000] border-[#F2F2F2] text-opacity-90">
                  Lorem Ipsum is simply..
                </td>
              </div>
            </div>
          </div>
        </tabel>
      </div>
    </>
  );
};

export default TableManagement;
