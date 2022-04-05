import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { ContainerChoose, ContainerManyCheck } from "../../Styles";
import Information from "../../Store/Store";
import Containter from "./9Containter";
import * as Imgs from "../../Images/NinthSlideImages/Images";

const NinthSlide = observer(() => {
  const [dis, setDis] = useState(false);

  const NinthSlideData = [
    { title: "Rectangle", imageSrc: Imgs.one },
    { title: "Browline", imageSrc: Imgs.two },
    { title: "Aviator", imageSrc: Imgs.three },
    { title: "Geometric", imageSrc: Imgs.four },
    { title: "Wayframe", imageSrc: Imgs.five },
    { title: "Round", imageSrc: Imgs.six },
    { title: "Oval", imageSrc: Imgs.seven },
    { title: "Oversized", imageSrc: Imgs.eight },
    { title: "Cat Eye", imageSrc: Imgs.nine },
    { title: "Rimless", imageSrc: Imgs.ten },
    { title: "Square", imageSrc: Imgs.eleven },
    { title: "Wrap", imageSrc: Imgs.twelve },
  ];

  return (
    <ContainerChoose>
      <h2 style={{ width: "90%" }}>Which frame style are you looking for?</h2>
      <ContainerManyCheck
        id={"containerWithInfo"}
        onClick={() => {
          if (!dis) {
            setDis(true);
          }
        }}
      >
        {NinthSlideData.map((el, index) => {
          return (
            <Containter key={index} title={el.title} imageSrc={el.imageSrc} />
          );
        })}
      </ContainerManyCheck>
      <button
        disabled={!dis}
        onClick={() => {
          let userChoose = Array.from(
            document.getElementById("containerWithInfo").children
          ).filter((el) => el.className !== "checkDiv");
          console.log(userChoose);
        }}
      >
        Continue
      </button>
    </ContainerChoose>
  );
});

export default NinthSlide;
