import React from "react";
import { Headers } from "../../Styles";
import { LinearProgress, linearProgressClasses } from "@mui/material";
import { observer } from "mobx-react-lite";
import { styled } from "@mui/material";
import Logo from "../../Images/HeaderImage/Logo";
import Information from "../../Store/Store";
const Header = observer(() => {
  return (
    <div>
      <Headers>
        <div>
          {!Information.initialSlide || Information.initialSlide === 100 ? (
            <img src={Logo} alt={"logo"} />
          ) : (
            <button
              onClick={() => {
                if (
                  Information.swiperSlides[3].className ===
                  "swiper-slide swiper-slide-prev"
                ) {
                  Information.toPrevBannerSlide();
                } else if (
                  Information.swiperSlides[6].className ===
                  "swiper-slide swiper-slide-prev"
                ) {
                  Information.toPrevBannerSlide();
                  Information.initialSlide += 10;
                } else {
                  Information.toPrevSlide();
                }
              }}
            >
              <svg
                width="15"
                height="20"
                viewBox="0 0 11 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 1L1 8L9.5 15"
                  stroke="#3A4850"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
          {Information.initialSlide ? (
            <p
              onClick={() => {
                console.log(Information.swiperSlides[3].className);
              }}
            >
              {(() => {
                if (Information.initialSlide < 99) {
                  return `${Information.initialSlide / 10} /10`;
                } else {
                  Information.initialSlide = 100;
                  return null;
                }
              })()}
            </p>
          ) : null}
          {Information.initialSlide ? (
            <button
              onClick={() => {
                Information.toStartSlide();
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6118 1L1 14.6118"
                  stroke="#3A4850"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M1.17677 1L14.7886 14.6118"
                  stroke="#3A4850"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => {
                Information.toNextSlide();
              }}
            >
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 19L11 10L1 1"
                  stroke="#0F0F0F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </Headers>
      {Information.initialSlide !== 0 ? (
        <BorderLinearProgress
          value={Information.initialSlide}
          valuemax={100}
          variant={"determinate"}
          style={{ height: "0.6rem", backgroundColor: "lightgrey" }}
        />
      ) : null}
    </div>
  );
});

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    borderRadius: "0 0 0 0",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundImage: "linear-gradient(to right, #3797FA, #45C9FF)",
  },
}));

export default Header;
