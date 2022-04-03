import { observer } from "mobx-react-lite";
import React from "react";
import Information from "../../Store/Store";
import Dark from "../../Image/Six/Dark.svg";
import Light from "../../Image/Six/Light.svg";
import Transition from "../../Image/Six/Transition.svg"
import { ContainerChoose, TextImageAndLineBetween, } from "../../Styles";

const Sunglasses = observer(() => {
  return (
      <ContainerChoose>
        <h2>Every face shape has a perfect fit. What's yours?</h2>
        <TextImageAndLineBetween>
          <img src={Dark} />
          <p>Dark Shade</p>
        </TextImageAndLineBetween>
        <TextImageAndLineBetween>
          <img src={Light} />
          <p>Light Shade</p>
        </TextImageAndLineBetween>
        <TextImageAndLineBetween>
          <img src={Transition} />
          <p>Transitioning Shade</p>
        </TextImageAndLineBetween>
      </ContainerChoose>
  );
});

export default Sunglasses;
