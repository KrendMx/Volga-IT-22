import React, { useState, useEffect } from "react";
import { Headers } from "../../styled";
import logo from "../../Image/Logo.png";
import { LinearProgress } from "@mui/material";
const Header = (props) => {
  const { slideNumber } = props;

  return (
    <div>
      <Headers>
        {!slideNumber ? (
          <img src={logo} />
        ) : (
          <button>
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
        {slideNumber ? (
          <img src={logo} alt={"Логотип"} />
        ) : (
          <button>
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
      </Headers>
    <LinearProgress value={10} variant={"determinate"} style={{height:"0.6rem", backgroundColor:"white"}} />
    </div>
  );
};

export default Header;
