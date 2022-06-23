import React from "react";
const ProgressCheckBoxTable = () => {
  function CheckBoxHandler(e) {
    if (e.target.checked) {
      e.target.parentNode.parentNode.classList.add("active-customs-shadow");
      e.target.parentNode.parentNode.style.backgroundColor = "#FFF";
    } else {
      e.target.parentNode.parentNode.classList.remove("active-customs-shadow");
      e.target.parentNode.parentNode.style.backgroundColor = "#fcfcfc";
    }
  }
  const tableCheckBoxHandler = (val) => {
    let checkboxes = document
      .getElementById("progress-table")
      .querySelectorAll("input[type=checkbox]");
    let rows = document.getElementById("progress-table").querySelectorAll("tr");

    for (let i = 1; i < rows.length; i++) {
      if (val) {
        rows[i].classList.add("active-customs-shadow");
        rows[i].style.backgroundColor = "#FFF";
      } else {
        rows[i].classList.remove("active-customs-shadow");
        rows[i].style.backgroundColor = "#fcfcfc";
      }
    }
    for (let i = 1; i < checkboxes.length; i++) {
      if (val) {
        rows[i].classList.add("active-customs-shadow");
        checkboxes[i].checked = true;
      } else {
        rows[i].classList.remove("active-customs-shadow");
        checkboxes[i].checked = false;
      }
    }
  };
  return (
    <table class="progress-table table-auto w-full mt-4" id="progress-table">
      <thead>
        <tr>
          <th className="w-[7.3%]">
            <input
              onClick={(e) => tableCheckBoxHandler(e.target.checked)}
              type="checkbox"
              className="purple_checkbox cursor-pointer"
            />
          </th>
          <th className="w-[17.5%] text-[8px] md:text-xs font-normal opacity-70 text-[#030229] text-left px-1.5 md:px-2.5 py-4">
            Order
          </th>
          <th className="w-[15.3%] text-[8px] md:text-xs font-normal opacity-70 text-[#030229] text-left px-1.5 md:px-2.5 py-4">
            In-Progress
          </th>
          <th className="w-[14.7%] text-[8px] md:text-xs font-normal opacity-70 text-[#030229] text-left px-1.5 md:px-2.5 py-4">
            Click-able
          </th>
          <th className="text-[8px] md:text-xs font-normal opacity-70 text-[#030229] text-left pl-2.5">
            Notes
          </th>
        </tr>
      </thead>
      <tbody className="w-full">
        <tr
          className="hover:bg-[#FFF] bg-[#FDFDFE] rounded-xl w-full customs-shadow"
          id="row1"
        >
          <th className="w-[7.3%] border-r-[1px] border-[#F2F2F2] rounded-tl-xl   rounded-bl-xl ">
            <input
              type="checkbox"
              className="purple_checkbox cursor-pointer"
              id="check1"
              onClick={(e) => {
                CheckBoxHandler(e);
              }}
            />
          </th>
          <td className="w-[17.5%] text-[8px] md:text-sm font-semibold  text-[#030229] text-left px-1.5 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            Arrora gaur
          </td>
          <td className="w-[20%] md:w-[15.3%]  text-[8px] md:text-sm font-semibold text-[#FF8F6B] text-left px-1.5 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            <button className="bg-[#FEE8E1]  text-[#FF8F6B] px-1.5 md:px-2 py-0.5 rounded">
              In storage
            </button>
          </td>
          <td className="w-[14.7%]  text-[8px] md:text-sm font-semibold text-[#030229] text-left px-1.5 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            2:30 Pm
          </td>
          <td className="text-[8px] md:text-sm font-normal text-[#030229] text-left px-1.5 md:px-2.5 py-6 rounded-tr-xl  rounded-br-xl ">
            Lorem Ipsum is simply dummy{" "}
          </td>
        </tr>
        <div className="mb-3"></div>
        <tr
          className="hover:bg-[#FFF] bg-[#FDFDFE]  rounded-xl w-full customs-shadow"
          id="row2"
        >
          <th className="w-[7.3%] border-r-[1px] border-[#F2F2F2] rounded-tl-xl  rounded-bl-xl">
            <input
              type="checkbox"
              className="purple_checkbox cursor-pointer"
              id="check2"
              onClick={(e) => {
                CheckBoxHandler(e);
              }}
            />
          </th>
          <td className="w-[20.5%] md:w-[17.5%] text-[8px] md:text-sm font-semibold text-[#030229] text-left px-1 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            James Mullican
          </td>
          <td className="w-[20%] md:w-[15.3%] text-[8px] md:text-sm font-semibold text-[#FF8F6B] text-left px-1.5 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            <button className="bg-[#F0F0FD]  text-[#C0BEFF] px-2 py-0.5 rounded">
              Washing
            </button>
          </td>
          <td className="w-[14.7%] text-[8px] md:text-sm font-semibold text-[#030229] text-left px-1.5 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            4:30 Pm
          </td>
          <td className="text-[8px] md:text-sm font-normal text-[#030229] text-left px-1.5 md:px-2.5 py-6 rounded-tr-xl  rounded-br-xl">
            Lorem Ipsum is simply dummy{" "}
          </td>
        </tr>
        <div className="mb-3"></div>
        <tr
          className="hover:bg-[#FFF] bg-[#FDFDFE] rounded-xl w-full customs-shadow"
          id="row3"
        >
          <th className="w-[7.3%] border-r-[1px] border-[#F2F2F2] rounded-tl-xl  rounded-bl-xl">
            <input
              type="checkbox"
              className="purple_checkbox cursor-pointer"
              onClick={(e) => {
                CheckBoxHandler(e);
              }}
            />
          </th>
          <td className="w-[17.5%] text-[8px] md:text-sm font-semibold text-[#030229] text-left px-1 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            Arrora gaur
          </td>
          <td className="w-[15.3%] text-[8px] md:text-sm font-semibold text-[#FF8F6B] text-left px-2.5 py-6 border-r-[1px] border-[#F2F2F2] ">
            <button className="bg-[#FDF5E1]  text-[#FFD66B] px-1.5 md:px-2 py-0.5 rounded">
              Drying
            </button>
          </td>
          <td className="w-[14.7%] text-[8px] md:text-sm font-semibold text-[#030229] text-left px-1.5 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            6:30 Pm
          </td>
          <td className="text-[8px] md:text-sm font-normal text-[#030229] text-left px-1.5 md:px-2.5 py-6 rounded-tr-xl  rounded-br-xl">
            Lorem Ipsum is simply dummy{" "}
          </td>
        </tr>
        <div className="mb-3"></div>
        <tr
          className="hover:bg-[#FFF] bg-[#FDFDFE] rounded-xl w-full customs-shadow"
          id="row4"
        >
          <th className="w-[7.3%] border-r-[1px] border-[#F2F2F2] rounded-tl-xl  rounded-bl-xl">
            <input
              type="checkbox"
              className="purple_checkbox cursor-pointer"
              onClick={(e) => {
                CheckBoxHandler(e);
              }}
            />
          </th>
          <td className="w-[17.5%] text-[8px] md:text-sm font-semibold text-[#030229] text-left px-1 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            Arrora gaur
          </td>
          <td className="w-[15.3%] text-[6px] md:text-sm font-semibold text-[#FF8F6B] text-left px-1 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            <button className="bg-[#D3ECF8]  text-[#2DAAE2] px-1.5 md:px-2 py-0.5 rounded">
              Folding Station
            </button>
          </td>
          <td className="w-[14.7%] text-[8px] md:text-sm font-semibold text-[#030229] text-left px-1.5 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            2:00 Pm
          </td>
          <td className="text-[8px] md:text-sm font-normal text-[#030229] text-left px-1.5 md:px-2.5 py-6 rounded-tr-xl  rounded-br-xl">
            Lorem Ipsum is simply dummy{" "}
          </td>
        </tr>{" "}
        <div className="mb-3"></div>
        <tr
          className="hover:bg-[#FFF] bg-[#FDFDFE] rounded-xl w-full customs-shadow"
          id="row5"
        >
          <th className="w-[7.3%] border-r-[1px] border-[#F2F2F2] rounded-tl-xl  rounded-bl-xl">
            <input
              type="checkbox"
              className="purple_checkbox cursor-pointer"
              onClick={(e) => {
                CheckBoxHandler(e);
              }}
            />
          </th>
          <td className="w-[17.5%] text-[8px] md:text-sm font-semibold text-[#030229] text-left px-1 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            Ready
          </td>
          <td className="w-[15.3%] text-[8px] md:text-sm font-semibold text-[#FF8F6B] text-left px-1 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            <button className="bg-[#CFFDD5]  text-[#18FF2F] px-2 py-0.5 rounded">
              Ready
            </button>
          </td>
          <td className="w-[14.7%] text-[8px] md:text-sm font-semibold text-[#030229] text-left px-1.5 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            9:45 Pm
          </td>
          <td className="text-[8px] md:text-sm font-normal text-[#030229] text-left px-1.5 md:px-2.5 py-6 rounded-tr-xl  rounded-br-xl">
            Lorem Ipsum is simply dummy{" "}
          </td>
        </tr>
        <div className="mb-3"></div>
        <tr
          className="hover:bg-[#FFF] bg-[#FDFDFE] rounded-xl w-full customs-shadow"
          id="row6"
        >
          <th className="w-[7.3%] border-r-[1px] border-[#F2F2F2] rounded-tl-xl  rounded-bl-xl">
            <input
              type="checkbox"
              className="purple_checkbox cursor-pointer"
              onClick={(e) => {
                CheckBoxHandler(e);
              }}
            />
          </th>
          <td className="w-[17.5%]  text-[8px] md:text-sm font-semibold text-[#030229] text-left px-1 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            James Mullican
          </td>
          <td className="w-[15.3%]  text-[8px] md:text-sm font-semibold text-[#FF8F6B] text-left px-1 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            <button className="bg-[#FEE8E1]  text-[#FF8F6B] px-2 py-0.5 rounded">
              In storage
            </button>
          </td>
          <td className="w-[14.7%]  text-[8px] md:text-sm font-semibold text-[#030229] text-left px-1.5 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            2:30 Pm
          </td>
          <td className="text-[8px] md:text-sm font-normal text-[#030229] text-left px-1.5 md:px-2.5 py-6 rounded-tr-xl  rounded-br-xl">
            Lorem Ipsum is simply dummy{" "}
          </td>
        </tr>
        <div className="mb-3"></div>
        <tr
          className="hover:bg-[#FFF] bg-[#FDFDFE] rounded-xl w-full customs-shadow"
          id="row7"
        >
          <th className="w-[7.3%] border-r-[1px] border-[#F2F2F2] rounded-tl-xl  rounded-bl-xl">
            <input
              type="checkbox"
              className="purple_checkbox cursor-pointer"
              onClick={(e) => {
                CheckBoxHandler(e);
              }}
            />
          </th>
          <td className="w-[17.5%] text-[8px] md:text-sm font-semibold text-[#030229] text-left px-1 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            Jhon Deo
          </td>
          <td className="w-[15.3%] text-[8px] md:text-sm font-semibold text-[#FF8F6B] text-left px-1 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            <button className="bg-[#F1F0FE]  text-[#C0BEFF] px-2 py-0.5 rounded">
              Washing
            </button>
          </td>
          <td className="w-[14.7%] text-[8px] md:text-sm font-semibold text-[#030229] text-left px-1.5 md:px-2.5 py-6 border-r-[1px] border-[#F2F2F2]">
            8:30 Pm
          </td>
          <td className="text-[8px] md:text-sm font-normal text-[#030229] text-left px-1.5 md:px-2.5 py-6 rounded-tr-xl  rounded-br-xl">
            Lorem Ipsum is simply dummy{" "}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProgressCheckBoxTable;
