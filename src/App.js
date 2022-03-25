import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import Header from "./Components/Header/Header";
import FirsSlide from "./Components/FirstSlide/FirsSlide";
import Information from "./information";
import { observer } from "mobx-react-lite";
import SecondSlide from "./Components/SecondSlide/SecondSlide";

const App = observer(({ url }) => {

  return (
    <div style={{height:"700px",overflowY:"hidden"}}>
      <Header slideNuber={Information.initialSlide} />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        initialSlide={0}
        navigation={false}
        allowTouchMove={false}
      >
        <SwiperSlide>
          <FirsSlide />
        </SwiperSlide>
        {/*Начальный слайд*/}
        <SwiperSlide>
          <SecondSlide/>
        </SwiperSlide>
        {/*1. Выбор пола*/}
        <SwiperSlide></SwiperSlide>
        {/*2. Выбор моделей*/}
        <SwiperSlide></SwiperSlide>
        {/*Страница между слайдом 2-3*/}
        <SwiperSlide></SwiperSlide>
        {/*3. Выбор типа очков*/}
        <SwiperSlide></SwiperSlide>
        {/*4. Выбор размера душки у очков*/}
        <SwiperSlide></SwiperSlide>
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
})

export default App;
