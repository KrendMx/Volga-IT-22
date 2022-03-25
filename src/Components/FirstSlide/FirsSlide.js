import React, { useEffect } from "react";
import Slides from "./FirstSlide.Styles";
import img from "../../Image/MainImage.png";
import { useSwiper } from "swiper/react/context.js";
import { observer } from "mobx-react-lite";
import Information from "../../information";

const FirsSlide = observer(() => {
  const swiper = useSwiper();

  useEffect(() => {
    Information.changeSlide(
      () => {
        swiper.slidePrev();
        Information.initialSlide -= 10;
      },
      () => {
        swiper.slideNext();
        Information.initialSlide += 10;
      },()=>{
        swiper.slideTo(0);
        Information.initialSlide = 0;
        Information.userInfo = {
          slide1: 0,
          slide2: 0,
          slide3: 0,
          slide4: 0,
          slide5: 0,
          slide6: 0,
          slide7: 0,
          slide8: 0,
          slide9: 0,
          slide10: 0,
        };
      }
    );
  }, []);

  return (
    <Slides>
      <img src={img} alt="glasses" />
      <h1>Let’s find your perfect pair!</h1>
      <h2>
        Take the quiz to easily discover your perfect fit from thousands of
        styles
      </h2>
      <button
        onClick={() => {
          Information.nextSlide();
        }}
      >
        Start now
      </button>
    </Slides>
  );
});

export default FirsSlide;
