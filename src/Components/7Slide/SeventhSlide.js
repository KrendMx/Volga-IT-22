import { observer } from "mobx-react-lite";
import Information from "../../Store/Store";
import { ContainerChoose, TextImageAndLineBetween } from "../../Styles";
import React from "react";
import menMixed from "../../Images/EighthSlideImages/MenMixed";
import womanMixed from "../../Images/EighthSlideImages/WomanMixed";
import nebinMixed from "../../Images/EighthSlideImages/NebinMixed";
import womanRound from "../../Images/EighthSlideImages/WomanRound";
import nebinRound from "../../Images/EighthSlideImages/NebinRound";
import menRound from "../../Images/EighthSlideImages/MenRound";
import menLonger from "../../Images/EighthSlideImages/MenLonger";
import womanLonger from "../../Images/EighthSlideImages/WomanLonger";
import nebinLonger from "../../Images/EighthSlideImages/NebinLonger";

const SeventhSlide = observer(() => {
  return (
    <ContainerChoose>
      <h2>Every face shape has a perfect fit. What’s yours?</h2>
      <TextImageAndLineBetween
        onClick={() => {
          Information.changeLabel("face_shape", "long");
          Information.toNextSlide();
        }}
      >
        {Information.userInfo.gender === "4" ? <img src={menLonger} alt={'Лицо вытянутой формы'}/> : null}
        {Information.userInfo.gender === "5" ? <img src={womanLonger} alt={'Лицо вытянутой формы'}/> : null}
        {!Information.userInfo.gender ? (
          <img style={{ width: "30%" }} src={nebinLonger} alt={'Лицо вытянутой формы'}/>
        ) : null}
        <p>I have a long face</p>
      </TextImageAndLineBetween>
      <TextImageAndLineBetween
        onClick={() => {
          Information.changeLabel("face_shape", "round");
          Information.toNextSlide();
        }}
      >
        {Information.userInfo.gender === "4" ? (
          <img src={menRound} alt={"круглая форма лица"} />
        ) : null}
        {Information.userInfo.gender === "5" ? (
          <img src={womanRound} alt={"круглая форма лица"} />
        ) : null}
        {!Information.userInfo.gender ? (
          <img
            style={{ width: "30%" }}
            src={nebinRound}
            alt={"круглая форма лица"}
          />
        ) : null}
        <p>I have a round face</p>
      </TextImageAndLineBetween>
      <TextImageAndLineBetween
        onClick={() => {
          Information.changeLabel("face_shape", "between");
          Information.toNextSlide();
        }}
      >
        {Information.userInfo.gender === "4" ? (
          <img src={menMixed} alt={"лицо смешанной формы"} />
        ) : null}
        {Information.userInfo.gender === "5" ? (
          <img src={womanMixed} alt={"лицо смешанной формы"} />
        ) : null}
        {!Information.userInfo.gender ? (
          <img
            style={{ width: "30%" }}
            src={nebinMixed}
            alt={"лицо смешанной формы"}
          />
        ) : null}
        <p>In between</p>
      </TextImageAndLineBetween>
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

export default SeventhSlide;
