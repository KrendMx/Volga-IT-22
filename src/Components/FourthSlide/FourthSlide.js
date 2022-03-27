import React, { useState, useEffect } from "react";

import "./Fourth.css";
import Slides from "../SecondSlide/SecondSlide.styles";
import { observer } from "mobx-react-lite";
import Store from "../../Store";

const FourthSLide = observer(() => {
  const [isAgree, setIsAgree] = useState(false);

  return (
    <div>
      {!isAgree ? (
        <Slides>
          <h2>Do you need vision correction?</h2>
          <div
            style={{ padding: "3em" }}
            onClick={() => {
              setIsAgree(true);
            }}
          >
            <p>Yes</p>
          </div>
          <div
            onClick={() => {
              Store.toNextSlide();
            }}
            style={{ padding: "3em" }}
          >
            <p>No</p>
          </div>
          <h3
            onClick={() => {
              Store.toNextSlide();
            }}
          >
            Skip
          </h3>
        </Slides>
      ) : (
        <Slides>
          <h2>What do you need your glasses for?</h2>
          <div
            onClick={() => {
              Store.changeLabel("slide4", 6);
              Store.toNextSlide();
              setTimeout(() => {
                setIsAgree(false);
              }, 200);
            }}
          >
            <p>Near Vision</p>
          </div>
          <div
            onClick={() => {
              Store.changeLabel("slide4", 6);
              Store.toNextSlide();
              setTimeout(() => {
                setIsAgree(false);
              }, 200);
            }}
          >
            <p>Distance Vision</p>
          </div>
          <div
            onClick={() => {
              Store.changeLabel("slide4", 7);
              Store.toNextSlide();
              setTimeout(() => {
                setIsAgree(false);
              }, 200);
            }}
          >
            <p>Multifocal / Progressive</p>
          </div>
          <h3
            onClick={() => {
              Store.toNextSlide();
              setTimeout(() => {
                setIsAgree(false);
              }, 200);
            }}
          >
            Skip
          </h3>
        </Slides>
      )}
    </div>
  );
});

export default FourthSLide;
