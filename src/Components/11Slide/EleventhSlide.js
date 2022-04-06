import { observer } from "mobx-react-lite";
import Information from "../../Store/Store";
import React from "react";
import ChoosingSlide from "../ChoosingSlide/ChoosingSlide";
import * as Img from "../../Images/EleventhSlideImages/EleventhSlideImages";

const EleventhSlide = observer(() => {
  const EleventhSlideData = [
    { title: "Ray Ban", imageSrc: Img.one },
    { title: "Bakley", imageSrc: Img.two },
    { title: "Gucci", imageSrc: Img.three },
    { title: "Armani Exchange", imageSrc: Img.four },
    { title: "Hilary Duff", imageSrc: Img.five },
    { title: "Prada", imageSrc: Img.six },
    { title: "Versace", imageSrc: Img.seven },
    { title: "Vogue Eyewear", imageSrc: Img.eight },
    { title: "Michael Cors", imageSrc: Img.nine },
    { title: "Coach", imageSrc: Img.ten },
    { title: "Tory Burch", imageSrc: Img.eleven },
    { title: "Burberry", imageSrc: Img.twelve },
  ];

  return (
    <>
      <ChoosingSlide ctx={"brand"} data={EleventhSlideData} visTitle={false}/>
    </>
  );
});
export default EleventhSlide;
