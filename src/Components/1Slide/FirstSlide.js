import React, { useEffect } from "react";
import {useSwiper} from "swiper/react/swiper-react";
import { observer } from "mobx-react-lite";
import Information from "../../Store/Store";
import { ContainerMain } from "../../Styles";
import mainImage from "../../Images/FirstSildeImage/MainImage";

const FirstSlide = observer(() => {
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
    <ContainerMain>
      <img src={mainImage}  alt={"mainImage"} style={{marginTop:"15%"}}/>
      <h1>Let's find your perfect pair!</h1>
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
    </ContainerMain>
  );
});

export default FirstSlide;
