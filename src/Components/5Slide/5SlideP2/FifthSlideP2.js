import { observer } from "mobx-react-lite";
import React from "react";
import { ContainerChoose, TextUnderImage } from "../../../Styles";
import Information from "../../../Store/Store";

const FifthSlideP2 = observer(() => {
  return (
    <ContainerChoose>
      <h2>How wide would you say your face is?</h2>
      <span>
        <TextUnderImage
          onClick={() => {
            Information.changeLabel(
              "frame_size",
              `${Information.userInfo["frame_size"]},66`
            );
            Information.toNextSlide();
          }}
        >
          <p>Wider Than Average</p>
        </TextUnderImage>
        <TextUnderImage
          onClick={() => {
            Information.changeLabel(
              "frame_size",
              `${Information.userInfo["frame_size"]},67`
            );
            Information.toNextSlide();
          }}
        >
          <p>Average</p>
        </TextUnderImage>
        <TextUnderImage
          onClick={() => {
            Information.changeLabel(
              "frame_size",
              `${Information.userInfo["frame_size"]},68`
            );
            Information.toNextSlide();
          }}
        >
          <p>Narrower Than Average</p>
        </TextUnderImage>
      </span>
      <h3
        style={{ marginTop: "4rem" }}
        onClick={() => {
          Information.toNextSlide();
        }}
      >
        I'm not sure
      </h3>
    </ContainerChoose>
  );
});

export default FifthSlideP2;
