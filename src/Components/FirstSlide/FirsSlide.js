import React, { useEffect } from "react";
import Slides from "./FirstSlide.Styles";
import img from "../../Image/MainImage.png";
import { useSwiper } from "swiper/react/context.js";
import { observer } from "mobx-react-lite";
import Information from "../../Store";

const FirsSlide = observer(() => {
  const swiper = useSwiper();

  useEffect(() => {
    Information.changeSlide(
      () => {
        swiper.slidePrev();
      },
      () => {
        swiper.slideNext();
      },
      () => {
        swiper.slideTo(0);
      }
    );
    Information.swiperSlides = swiper.slides;
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
          Information.toNextSlide();
        }}
      >
        Start now
      </button>
    </Slides>
  );
});

export default FirsSlide;
