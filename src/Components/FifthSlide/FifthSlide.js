import React, { useState, useEffect } from "react";
import Size from "./Size";
import Slide from "./FifthSlide.styles";
import { observer } from "mobx-react-lite";
import Information from "../../Store";

const MyComponent = observer(() => {

  const nonActive = "#B0BDC5"
  const active = "#0F0F0F"
  const [colors, setColor] = useState([nonActive, nonActive, nonActive]);

  return (
    <Slide>
      <h2 style={{ width: "60%", margin: "1em auto" }}>
        What’s your current frame size?
      </h2>
      <Size min={colors[0]} mid={colors[1]} max={colors[2]} />
      <div
        onClick={() => {
          Information.changeLabel("frame_size", "68");
          Information.toBetweenBanner(true);
        }}
        onMouseOver={() => {
          setColor([active, nonActive, nonActive]);
        }}
        onMouseLeave={() => {
          setColor([nonActive, nonActive, nonActive]);
        }}
      >
        <p className={"p-left"}>Small</p>
        <p className={"p-right"}>42-48 mm</p>
      </div>
      <div
        onClick={() => {
          Information.changeLabel("frame_size", "67");
          Information.toBetweenBanner(true);
        }}
        onMouseOver={() => {
          setColor([nonActive, active, nonActive]);
        }}
        onMouseLeave={() => {
          setColor([nonActive, nonActive, nonActive]);
        }}
      >
        <p className={"p-left"}>Medium</p>
        <p className={"p-right"}>49-53 mm</p>
      </div>
      <div
        onClick={() => {
          Information.changeLabel("frame_size", "66");
          Information.toBetweenBanner(true);
        }}
        onMouseOver={() => {
          setColor([nonActive, nonActive, active]);
        }}
        onMouseLeave={() => {
          setColor([nonActive, nonActive, nonActive]);
        }}
      >
        <p className={"p-left"}>Large</p>
        <p className={"p-right"}>54-58 mm</p>
      </div>
      <h3
        onClick={() => {
          Information.toBetweenBanner(true);
        }}
      >
        I don’t know
      </h3>
    </Slide>
  );
});

export default MyComponent;
