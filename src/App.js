import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.css";

import Header from "./Components/Header/Header";
import FirsSlide from "./Components/FirstSlide/FirsSlide";
import SecondSlide from "./Components/SecondSlide/SecondSlide";
import ThirdSlide from "./Components/ThirdSlide/ThirdSlide";
import BetweenSLide from "./Components/BetweenSlide/BetweenSLide";

import Information from "./Store";
import { observer } from "mobx-react-lite";
import FourthSlide from "./Components/FourthSlide/FourthSlide";
import FifthSlide from "./Components/FifthSlide/FifthSlide";

const App = observer(({ url }) => {
  return (
    <div style={{ height: "700px", overflowY: "hidden" }}>
      <Header slideNuber={Information.initialSlide} />
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        initialSlide={0}
        allowTouchMove={false}
      >
        <SwiperSlide>
          <FirsSlide />
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
          <FifthSlide/>
        </SwiperSlide>
        {/*4. Выбор размера душки у очков*/}
        <SwiperSlide>
          <BetweenSLide title={"No worries, we’ve got you!"} />
        </SwiperSlide>
        {/*5. Выбор стекол*/}
        <SwiperSlide></SwiperSlide>
        {/*6. Выбор формы лица*/}
        <SwiperSlide></SwiperSlide>
        {/*7. Выбор черт лица*/}
        <SwiperSlide></SwiperSlide>
        {/*8. Выбор типа очков*/}
        <SwiperSlide></SwiperSlide>
        {/*9. Предпочтения брендов*/}
        <SwiperSlide></SwiperSlide>
        {/*10. Выбор брендов. Пропускать, если предыдущий вариант выбран "Бренд не важен"*/}
        <SwiperSlide></SwiperSlide>
        {/*11. Заключительный этап. Выведение в консоль итоговой ссылки*/}
      </Swiper>
    </div>
  );
});

export default App;
