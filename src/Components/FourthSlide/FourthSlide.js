import React, { useState } from "react";
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
              Store.changeLabel("lenstype", 6);
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
              Store.changeLabel("lenstype", 6);
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
              Store.changeLabel("lenstype", 7);
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
