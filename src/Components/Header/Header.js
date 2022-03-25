import React, { useState, useEffect } from "react";
import Headers from "./Header.Styles";
import logo from "../../Image/Logo.png";
import { LinearProgress } from "@mui/material";
import { observer } from "mobx-react-lite";
import Information from "../../information";
const Header = observer(() => {
  return (
    <div>
      <Headers>
        <div>
          {!Information.initialSlide ? (
            <img src={logo} />
          ) : (
            <button onClick={()=>{Information.prevSlide()}}>
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
            <p>{Information.initialSlide / 10}/10</p>
          ) : null}
          {Information.initialSlide ? (
            <button
              onClick={() => {
                Information.startSlide();
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
                Information.nextSlide();
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
        <LinearProgress
          value={Information.initialSlide}
          valuemax={100}
          variant={"determinate"}
          style={{ height: "0.6rem", backgroundColor: "white" }}
        />
      ) : null}
    </div>
  );
});

export default Header;
