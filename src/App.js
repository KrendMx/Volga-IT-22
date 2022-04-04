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
        initialSlide={0}
        allowTouchMove={false}
      >
        <SwiperSlide>
          <FirstSlide />
        </SwiperSlide>
        {/*Начальный слайд*/}
        <SwiperSlide>
          <SecondSlide />
        </SwiperSlide>
        {/*1. Выбор пола*/}
        <SwiperSlide>
          <ThirdSlide />
        </SwiperSlide>
        {/*2. Выбор моделей*/}
        <SwiperSlide>
          <BetweenSLide title={"Let's get to know you!"} />
        </SwiperSlide>
        {/*Страница между слайдом 2-3*/}
        <SwiperSlide>
          <FourthSlide />
        </SwiperSlide>
        {/*3. Выбор типа очков*/}
        <SwiperSlide>
          <FifthSlide />
        </SwiperSlide>
        {/*4. Выбор размера душки у очков*/}
        <SwiperSlide>
          <BetweenSLide title={"No worries, we’ve got you!"} />
        </SwiperSlide>
        {/*5. Выбор стекол*/}
        <SwiperSlide>
          <FifthSlideP2 />
        </SwiperSlide>
        {/*6. Выбор формы лица*/}
        <SwiperSlide>
          <SixthSlide />
        </SwiperSlide>
        {/*7. Выбор черт лица*/}
        <SwiperSlide>
          <SeventhSlide/>
        </SwiperSlide>
        {/*8. Выбор типа очков*/}
        <SwiperSlide>
          <EightSlide/>
        </SwiperSlide>
        {/*9. Предпочтения брендов*/}
        <SwiperSlide></SwiperSlide>
        {/*10. Выбор брендов. Пропускать, если предыдущий вариант выбран "Бренд не важен"*/}
        <SwiperSlide></SwiperSlide>
        {/*11. Заключительный этап. Выведение в консоль итоговой ссылки*/}
      </Swiper>
    </AppContainer>
  );
});

export default App;
