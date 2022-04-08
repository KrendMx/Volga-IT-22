import React from "react";

import Information from "../../Store/Store";
import { observer } from "mobx-react-lite";

import { ContainerChoose, TextImageAndLineBetween } from "../../Styles";

import transitionShade from "../../Images/SixthSlideImages/transitionShade";
import lightShade from "../../Images/SixthSlideImages/lightShade";
import darkShade from "../../Images/SixthSlideImages/darkShade";

const Sunglasses = observer(() => {
  return (
    <ContainerChoose>
      <h2 style={{ fontSize: "20px", width: "90%" }}>
        When you’re out and about, which shade of lenses do you prefer?
      </h2>
      <span>
        <TextImageAndLineBetween
          onClick={() => {
            Information.changeLabel("shade", "dark");
            Information.toNextSlide();
          }}
        >
          <img alt="Dark lens" src={darkShade} />
          <p>Dark Shade</p>
        </TextImageAndLineBetween>
        <TextImageAndLineBetween
          onClick={() => {
            Information.changeLabel("shade", "light");
            Information.toNextSlide();
          }}
        >
          <img alt="Light lens" src={lightShade} />
          <p>Light Shade</p>
        </TextImageAndLineBetween>
        <TextImageAndLineBetween
          onClick={() => {
            Information.changeLabel("shade", "transition");
            Information.toNextSlide();
          }}
        >
          <img alt={"Chameleon lens"} src={transitionShade} />
          <p>Transitioning Shade</p>
        </TextImageAndLineBetween>
      </span>
    </ContainerChoose>
  );
});

export default Sunglasses;
