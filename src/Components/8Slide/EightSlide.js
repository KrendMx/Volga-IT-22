import { observer } from "mobx-react-lite";
import React from "react";
import Information from "../../Store/Store";
import { ContainerChoose, TextUnderImage } from "../../Styles";

const EightSlide = observer(() => {
  return (
    <ContainerChoose>
      <h2>How would you define your facial features?</h2>
      <span>
        <TextUnderImage
          style={{ padding: "1.5rem" }}
          onClick={() => {
            Information.changeLabel("facial_features", "sharp");
            Information.toNextSlide();
          }}
        >
          <p>Sharp</p>
        </TextUnderImage>
        <TextUnderImage
          style={{ padding: "1.5rem" }}
          onClick={() => {
            Information.changeLabel("facial_features", "rounded");
            Information.toNextSlide();
          }}
        >
          <p>Rounded</p>
        </TextUnderImage>
        <TextUnderImage
          style={{ padding: "1.5rem" }}
          onClick={() => {
            Information.changeLabel("facial_features", "between");
            Information.toNextSlide();
          }}
        >
          <p>In between</p>
        </TextUnderImage>
      </span>
      <h3
        onClick={() => {
          Information.toNextSlide();
        }}
      >
        I don't know
      </h3>
    </ContainerChoose>
  );
});

export default EightSlide;
