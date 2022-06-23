import React from 'react';
import EventShowImg from "../../../assets/images/event-show.svg";
//Carosule
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const CarouselComponent = () => {
  return (
    <>
      <Carousel showThumbs={false} ariaLabel={false} autoPlay={true} labels={false}  showArrows={false} statusFormatter={false} showStatus={false}>
        <div>
          <img src={EventShowImg} alt="loading" />
        </div>
        <div>
          <img src={EventShowImg} alt="loading" />
        </div>
        <div>
          <img src={EventShowImg} alt="loading" />
        </div>
      </Carousel>
    </>
  )
}

export default CarouselComponent