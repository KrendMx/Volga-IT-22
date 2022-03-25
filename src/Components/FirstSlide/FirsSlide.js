import React from "react";
import {Slides} from "../../styled";
import img from "../../Image/867-1.png"
import {useSwiper} from "swiper/react/context.js";

const FirsSlide = () => {
  const swiper = useSwiper()
  return (
    <Slides>
      <img src={img} alt="glasses" />
      <h1>Let’s find your perfect pair!</h1>
      <h2>Take the quiz to easily discover your perfect fit from thousands of styles</h2>
      <button>Start now</button>
    </Slides>
  );
};

export default FirsSlide;