import { observer } from "mobx-react-lite";
import React from "react";
import Slides from "../SecondSlide/SecondSlide.styles";
import Information from "../../Store"

const FifthSlideP2 = observer(() => {
  return (
    <Slides>
      <h2>How wide would you say your face is?</h2>
      <div onClick={()=>{
          Information.changeLabel("frame_size",`${Information.userInfo["frame_size"]},66`)
          Information.toNextSlide()
      }}>
        <p>Wider Than Average</p>
      </div>
      <div onClick={()=>{
          Information.changeLabel("frame_size",`${Information.userInfo["frame_size"]},67`)
          Information.toNextSlide()
      }}>
        <p>Average</p>
      </div>
      <div onClick={()=>{
          Information.changeLabel("frame_size",`${Information.userInfo["frame_size"]},68`)
          Information.toNextSlide()
      }}>
        <p>Narrower Than Average</p>
      </div>
      <h3 style={{marginTop:"4rem"}} onClick={()=>{Information.toNextSlide()}}>I'm not sure</h3>
    </Slides>
  );
});

export default FifthSlideP2;
