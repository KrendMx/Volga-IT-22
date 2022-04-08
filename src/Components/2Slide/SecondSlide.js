import React from "react";
import { observer } from "mobx-react-lite";
import Information from "../../Store/Store";
import { ContainerChoose, TextUnderImage } from "../../Styles";
import manIcon from "../../Images/SecondSlideImage/ManIcon";
import womanIcon from "../../Images/SecondSlideImage/WomanIcon";

const SecondSlide = observer(() => {
  return (
      <ContainerChoose>
        <h2>You are looking for</h2>
        <span>
          <TextUnderImage
            onClick={() => {
              Information.changeLabel("gender", "5");
              Information.toNextSlide();
            }}
          >
            <img src={womanIcon} alt={"Иконка женщины"} />
            <p>Women's Styles</p>
          </TextUnderImage>
          <TextUnderImage
            onClick={() => {
              Information.changeLabel("gender", "4");
              Information.toNextSlide();
            }}
          >
            <img src={manIcon} alt={"Иконка мужчины"} />
            <p>Men's Style</p>
          </TextUnderImage>
        </span>
        <h3
          className={"bottomPlate"}
          onClick={() => {
            Information.toNextSlide();
          }}
        >
          I'd like to see both
        </h3>
      </ContainerChoose>
  );
});

export default SecondSlide;
