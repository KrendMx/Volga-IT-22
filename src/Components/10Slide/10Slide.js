import React from "react";
import { observer } from "mobx-react-lite";
import Information from "../../Store/Store";
import { ContainerChoose, TextUnderImage } from "../../Styles";

const TenthSlide = observer(() => {
  return (
    <ContainerChoose>
      <h2 style={{width:"70%"}}>Are you looking for any particular eyewear brands?</h2>
      <TextUnderImage style={{padding:"10%"}}
        onClick={() => {
          Information.toNextSlide();
        }}
      >
        <p>Yes, I have some in mind</p>
      </TextUnderImage>
      <TextUnderImage style={{padding:"10%"}}
        onClick={() => {
          Information.toNextSlide();
          Information.toNextSlide();
        }}
      >
        <p>No, brand isn't important</p>
      </TextUnderImage>
    </ContainerChoose>
  );
});

export default TenthSlide;
