import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import Information from "./Store/Store";
import { observer } from "mobx-react-lite";
import FourthSlide from "./Components/4Slide/FourthSlide";
import FifthSlide from "./Components/5Slide/FifthSlide";
import FifthSlideP2 from "./Components/5Slide/5SlideP2/FifthSlideP2";
import SixthSlide from "./Components/6Slide/SixthSlide";
import Header from "./Components/Header/Header";
import FirstSlide from "./Components/1Slide/FirstSlide";
import SecondSlide from "./Components/2Slide/SecondSlide";
import ThirdSlide from "./Components/3Slide/ThirdSlide";
import BetweenSLide from "./Components/BetweenSlide/BetweenSLide";
import { AppContainer } from "./Styles";
import SeventhSlide from "./Components/7Slide/SeventhSlide";
import EightSlide from "./Components/8Slide/EightSlide";
import NinthSlide from "./Components/9Slide/NinethSlide";
import TenthSlide from "./Components/10Slide/10Slide";
import EleventhSlide from "./Components/11Slide/EleventhSlide";

const App = observer(({ url }) => {
  return (
    <AppContainer>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;700&family=Roboto:wght@700&display=swap"
        rel="stylesheet"
      />
      <Header slideNuber={Information.initialSlide} />
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        initialSlide={11}
        allowTouchMove={false}
      >
        <SwiperSlide>
          <FirstSlide />
        </SwiperSlide>
        {/*Начальный слайд*/}
        <SwiperSlide>
          <SecondSlide />
        </SwiperSlide>
        {/*Выбор пола*/}
        <SwiperSlide>
          <ThirdSlide />
        </SwiperSlide>
        {/*Выбор моделей*/}
        <SwiperSlide>
          <BetweenSLide title={"Let's get to know you!"} />
        </SwiperSlide>
        {/*Страница между слайдами*/}
        <SwiperSlide>
          <FourthSlide />
        </SwiperSlide>
        {/*Выбор типа очков*/}
        <SwiperSlide>
          <FifthSlide />
        </SwiperSlide>
        {/*Выбор размера душки у очков*/}
        <SwiperSlide>
          <BetweenSLide title={"No worries, we’ve got you!"} />
        </SwiperSlide>
        {/*Страница между слайдами*/}
        <SwiperSlide>
          <FifthSlideP2 />
        </SwiperSlide>
        {/*6. Выбор формы лица*/}
        <SwiperSlide>
          <SixthSlide />
        </SwiperSlide>
        {/*7. Выбор черт лица*/}
        <SwiperSlide>
          <SeventhSlide />
        </SwiperSlide>
        {/*8. Выбор типа очков*/}
        <SwiperSlide>
          <EightSlide />
        </SwiperSlide>
        {/* */}
        <SwiperSlide>
          <NinthSlide />
        </SwiperSlide>
        {/*Предпочтение формы очков*/}
        <SwiperSlide>
          <TenthSlide />
        </SwiperSlide>
        {/*Предпочтения брендов*/}
        <SwiperSlide>
          <EleventhSlide/>
        </SwiperSlide>
        {/*Выбор брендов. Пропускать, если предыдущий вариант выбран "Бренд не важен"*/}
        <SwiperSlide></SwiperSlide>
        {/*Заключительный этап. Выведение в консоль итоговой ссылки*/}
      </Swiper>
    </AppContainer>
  );
});

export default App;
