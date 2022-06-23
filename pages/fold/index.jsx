import React from "react";
import CustomerCards from "../../components/fold/CustomerCards";
import CustomerRating from "../../components/fold/CustomerRating";
const Fold = () => {
  return (
    <div className="flex flex-col xl:flex-row  mt-[22px]">
      <CustomerCards />
      <CustomerRating />
    </div>
  );
};

export default Fold;
