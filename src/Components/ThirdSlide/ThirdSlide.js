import React from "react";
import { ContainerChoose, TextUnderImage } from "../../Styles";

import { observer } from "mobx-react-lite";
import Information from "../../Store/Store";

import WomenSimple from "../../Image/WomanSimple.svg";
import WomenSun from "../../Image/WomanSun.svg";
import MenSun from "../../Image/MenSun.svg";
import MenSimple from "../../Image/MenSimple.svg";

const ThirdSlide = observer(() => {
  return (
    <ContainerChoose>
      <h2 style={{ width: "70%", margin: "auto" }}>
        What type of glasses are you looking for?
      </h2>
      <TextUnderImage
        onClick={() => {
          Information.changeLabel("eyewear_type", "210");
          Information.toBetweenBanner();
        }}
      >
        <img
          style={{ width: "30%", margin: "auto" }}
          src={Information.userInfo.gender === "4" ? MenSimple : WomenSimple}
          alt="Модель очков"
        />
        <p>Eyeglasses</p>
      </TextUnderImage>
      <TextUnderImage
        onClick={() => {
          Information.changeLabel("eyewear_type", "211");
          Information.toBetweenBanner();
        }}
      >
        <img
          style={{ width: "30%", margin: "auto" }}
          src={Information.userInfo.gender === "4" ? MenSun : WomenSun}
          alt="Модель очков"
        />
        <p>Sunglasses</p>
      </TextUnderImage>
      <h3
        onClick={() => {
          Information.toBetweenBanner();
        }}
      >
        I want to see both
      </h3>
    </ContainerChoose>
  );
});

export default ThirdSlide;
