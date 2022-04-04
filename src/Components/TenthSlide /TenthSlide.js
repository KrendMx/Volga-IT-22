import { observer } from "mobx-react-lite";
import React from "react";
import { ContainerChoose } from "../../Styles";
import Information from "../../Store/Store"

const TenthSlide = observer(() => {
  return (
    <ContainerChoose>
      <h2></h2>
      <h2></h2>
      <div></div>
      <h3 onClick={()=>{Information.toNextSlide()}}>I don't know</h3>
    </ContainerChoose>
  );
});

export default TenthSlide;
