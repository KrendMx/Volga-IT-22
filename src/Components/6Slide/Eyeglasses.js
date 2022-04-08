import { observer } from "mobx-react-lite";
import React from "react";
import Information from "../../Store/Store";
import { ContainerChoose, TextUnderImage } from "../../Styles";

const Eyeglasses = observer(() => {
  return (
    <ContainerChoose style={{justifyContent:"flex-start"}}>
      <h2 style={{ width: "80%", fontSize: "20px" }}>
        Would you like to protect your eyes from light emanating from screens?
      </h2>
      <span>
        <TextUnderImage
          style={{ padding: "3em" }}
          onClick={() => {
            Information.changeLabel("blue_light", "true");
            Information.toNextSlide();
          }}
        >
          <p>Yes</p>
        </TextUnderImage>
        <TextUnderImage
          style={{ padding: "3em" }}
          onClick={() => {
            Information.changeLabel("blue_light", "false");
            Information.toNextSlide();
          }}
        >
          <p>No</p>
        </TextUnderImage>
      </span>
    </ContainerChoose>
  );
});
export default Eyeglasses;
