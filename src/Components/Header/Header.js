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
          <button >
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
          <img src={logo}  alt={"Логотип"}/>
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
      <div style={{width:"90%",padding:"0em 4%",margin:"auto"}}>
        <LinearProgress
          sx={{height:"0.6rem",backgroundColor:"#D8D8D8",color:"red",borderRadius: "0,0,1,1",left:-3,width:"101.5%"}}
          variant="determinate"
          value={100}
        />
      </div>
    </div>
  );
};

export default Header;
