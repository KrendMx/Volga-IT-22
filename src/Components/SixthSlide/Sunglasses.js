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
        <h2 style={{fontSize:"20px", width:"90%"}}>When you’re out and about, which shade of lenses do you prefer?</h2>
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
