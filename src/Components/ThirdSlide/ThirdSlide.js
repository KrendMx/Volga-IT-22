import React from "react";
import Slides from "../SecondSlide/SecondSlide.styles";
import Information from "../../Store";
import { observer } from "mobx-react-lite";
import information from "../../Store";
import WomenSimple from "../../Image/WomanSimple.svg";
import WomenSun from "../../Image/WomanSun.svg";
import MenSun from "../../Image/MenSun.svg";
import MenSimple from "../../Image/MenSimple.svg";

const ThirdSlide = observer(() => {
  return (
    <div>
      <Slides>
        <h2 style={{ width: "70%", margin: "auto" }}>
          What type of glasses are you looking for?
        </h2>
        <div onClick={() => {
          Information.changeLabel("eyewear_type",210)
          Information.toBetweenBanner()
        }}>
          <img
            style={{ width: "30%", margin: "auto" }}
            src={information.userInfo.slide1 === 4 ? MenSimple : WomenSimple}
            alt="Модель очков"
          />
          <p>Eyeglasses</p>
        </div>
        <div onClick={() => {
          Information.changeLabel("eyewear_type",211)
          Information.toBetweenBanner()
        }}>
          <img
            style={{ width: "30%", margin: "auto" }}
            src={information.userInfo.slide1 === 4 ? MenSun : WomenSun}
            alt="Модель очков"
          />
          <p>Sunglasses</p>
        </div>
        <h3
          onClick={() => {
            Information.toBetweenBanner();
          }}
        >
          I want to see both
        </h3>
      </Slides>
    </div>
  );
});

export default ThirdSlide;
