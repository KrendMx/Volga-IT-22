import React from "react";
import { observer } from "mobx-react-lite";
import Information from "../../Store/Store";
import mens from "../../Image/men's gender.png";
import womens from "../../Image/women's gender.png";
import { ContainerChoose, TextUnderImage } from "../../Styles";

const SecondSlide = observer(() => {
  return (
    <div>
      <ContainerChoose>
        <h2>You are looking for</h2>
        <TextUnderImage
          onClick={() => {
            Information.changeLabel("gender", "5");
            Information.toNextSlide();
          }}
        >
          <img src={womens} alt={"Иконка женщины"} />
          <p>Women's Styles</p>
        </TextUnderImage>
        <TextUnderImage
          onClick={() => {
            Information.changeLabel("gender", "4");
            Information.toNextSlide();
          }}
        >
          <img src={mens} alt={"Иконка мужчины"} />
          <p>Men's Style</p>
        </TextUnderImage>
        <h3
          onClick={() => {
            Information.toNextSlide();
          }}
        >
          I'd like to see both
        </h3>
      </ContainerChoose>
    </div>
  );
});

export default SecondSlide;
