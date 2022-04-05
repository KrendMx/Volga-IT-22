import { observer } from "mobx-react-lite";
import React from "react";
import Information from "../../Store/Store";
import { ContainerChoose, TextUnderImage } from "../../Styles";

const EightSlide = observer(() => {
  return (
    <ContainerChoose>
      <h2>How would you define your facial features?</h2>
      <TextUnderImage style={{padding:"1.5rem"}}>
        <p>Sharp</p>
      </TextUnderImage>
      <TextUnderImage style={{padding:"1.5rem"}}>
        <p>Rounded</p>
      </TextUnderImage>
      <TextUnderImage style={{padding:"1.5rem"}}>
        <p>In between</p>
      </TextUnderImage>
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