import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

const App = ({ url }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={false}
        allowTouchMove={false}
        style={{ width: "40rem", textAlign: "center" }}
      >
        <SwiperSlide></SwiperSlide>
        {/*Начальный слайд*/}
        <SwiperSlide></SwiperSlide>
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
};

export default App;
