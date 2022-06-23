import React from "react";
// components
import Cards from "../../components/home/Cards";
import CardsAction from "../../components/home/CardsAction";
import SwitchComponents from "../../components/home/SwitchComponents";
const Home = ({ setHeaderBtnShow }) => {
  return (
    <>
      <Cards />
      <div className="flex flex-col lg:flex-row justify-between mt-[28px]">
        <CardsAction />
        <SwitchComponents setHeaderBtnShow={setHeaderBtnShow} />
      </div>
    </>
  );
};

export default Home;
