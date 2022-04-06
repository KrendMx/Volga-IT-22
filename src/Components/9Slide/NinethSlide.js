import React from "react";
import * as Img from "../../Images/NinthSlideImages/Images";
import ChoosingSlide from "../ChoosingSlide/ChoosingSlide";

const NinthSlide = () => {
  const NinthSlideData = [
    { title: "Rectangle", imageSrc: Img.one },
    { title: "Browline", imageSrc: Img.two },
    { title: "Aviator", imageSrc: Img.three },
    { title: "Geometric", imageSrc: Img.four },
    { title: "Wayframe", imageSrc: Img.five },
    { title: "Round", imageSrc: Img.six },
    { title: "Oval", imageSrc: Img.seven },
    { title: "Oversized", imageSrc: Img.eight },
    { title: "Cat Eye", imageSrc: Img.nine },
    { title: "Rimless", imageSrc: Img.ten },
    { title: "Square", imageSrc: Img.eleven },
    { title: "Wrap", imageSrc: Img.twelve },
  ];

  return (
    <>
      <ChoosingSlide ctx={"shape"} data={NinthSlideData} visTitle={true}/>
    </>
  );
};

export default NinthSlide;
