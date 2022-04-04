import { observer } from "mobx-react-lite";
import React from "react";
import Information from "../../Store/Store";
import Eyeglasses from "./Eyeglasses";
import Sunglasses from "./Sunglasses";

const SixthSlide = observer(() => {
  return (
    <>
      {Information.userInfo.eyewear_type === "211" ? (
        <Sunglasses />
      ) : (
        <Eyeglasses />
      )}
    </>
  );
});
export default SixthSlide;
