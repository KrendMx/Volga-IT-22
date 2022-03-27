import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Information from "../../Store";
import Slide from "./SecondSlide.styles";
import mens from "../../Image/men's gender.png";
import womens from "../../Image/women's gender.png";

const SecondSlide = observer(() => {
  return (
    <div>
      <Slide>
        <h2>You are looking for</h2>
        <div
          onClick={() => {
            Information.changeLabel("slide1", 5);
            Information.toNextSlide();
          }}
        >
          <img src={womens} alt={"Иконка женщины"} />
          <p>Women's Styles</p>
        </div>
        <div
          onClick={() => {
            Information.changeLabel("slide1", 4);
            Information.toNextSlide();
          }}
        >
          <img src={mens} alt={"Иконка мужчины"} />
          <p>Men's Style</p>
        </div>
        <h3
          onClick={() => {
            Information.toNextSlide();
          }}
        >
          I'd like to see both
        </h3>
      </Slide>
    </div>
  );
});

export default SecondSlide;
