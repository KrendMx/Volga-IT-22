import React, { useState } from "react";
import { ContainerChoose, TextUnderImage } from "../../Styles";
import { observer } from "mobx-react-lite";
import Store from "../../Store/Store";

const FourthSLide = observer(() => {
  const [isAgree, setIsAgree] = useState(false);

  return (
    <>
      {!isAgree ? (
        <ContainerChoose>
          <h2>Do you need vision correction?</h2>
          <span>
            <TextUnderImage
              style={{ padding: "3em" }}
              onClick={() => {
                setIsAgree(true);
              }}
            >
              <p>Yes</p>
            </TextUnderImage>
            <TextUnderImage
              onClick={() => {
                Store.toNextSlide();
              }}
              style={{ padding: "3em" }}
            >
              <p>No</p>
            </TextUnderImage>
          </span>
          <h3
            onClick={() => {
              Store.toNextSlide();
            }}
          >
            Skip
          </h3>
        </ContainerChoose>
      ) : (
        <ContainerChoose>
          <h2>What do you need your glasses for?</h2>
          <span>
            <TextUnderImage
              onClick={() => {
                Store.changeLabel("lenstype", "6");
                Store.toNextSlide();
                setTimeout(() => {
                  setIsAgree(false);
                }, 200);
              }}
            >
              <p>Near Vision</p>
            </TextUnderImage>
            <TextUnderImage
              onClick={() => {
                Store.changeLabel("lenstype", "6");
                Store.toNextSlide();
                setTimeout(() => {
                  setIsAgree(false);
                }, 200);
              }}
            >
              <p>Distance Vision</p>
            </TextUnderImage>
            <TextUnderImage
              onClick={() => {
                Store.changeLabel("lenstype", "7");
                Store.toNextSlide();
                setTimeout(() => {
                  setIsAgree(false);
                }, 200);
              }}
            >
              <p>Multifocal / Progressive</p>
            </TextUnderImage>
          </span>
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
        </ContainerChoose>
      )}
    </>
  );
});

export default FourthSLide;
