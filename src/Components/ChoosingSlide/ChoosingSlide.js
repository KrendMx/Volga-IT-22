import React, { useState } from "react";
import { ContainerChoose, ContainerManyCheck } from "../../Styles/Containers";
import Container from "./Container";
import {observer} from "mobx-react-lite";
import Information from "../../Store/Store";

const ChoosingSlide = observer(({ ctx, data, visTitle }) => {
  const [dis, setDis] = useState(false);
  return (
    <ContainerChoose>
      <h2 style={{ width: "90%" }}>Which frame style are you looking for?</h2>
      <p className={"h4"}>You can pick more than one.</p>
      <ContainerManyCheck
        id={"containerWithInfo"}
        onClick={() => {
          setDis(
            !!Array.from(
              document.getElementById("containerWithInfo").children
            ).filter((el) => el.className !== "checkDiv").length
          );
        }}
      >
        {data.map((el, index) => {
          return (
            <Container key={index} title={el.title} imageSrc={el.imageSrc} visTitle={visTitle}/>
          );
        })}
      </ContainerManyCheck>
      <button
        disabled={!dis}
        onClick={() => {
          let userChoose = Array.from(
            document.getElementById("containerWithInfo").children
          ).filter((el) => el.className !== "checkDiv");
          let res = userChoose
            .map((el) => {
              return el.id.toLowerCase().split(" ").join("_") + ",";
            })
            .reduce((prev, curr) => {
              return prev + curr;
            })
            .split("")
            .slice(0, -1)
            .join("");
          Information.changeLabel(ctx, res);
          Information.toNextSlide();
        }}
      >
        Continue
      </button>
    </ContainerChoose>
  );
})

export default ChoosingSlide;
