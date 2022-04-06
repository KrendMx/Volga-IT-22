import React, { useState } from "react";

const Container = ({ title, imageSrc, visTitle }) => {
  const [vis, setVis] = useState(false);

  return (
    <span
      id={title}
      className={"checkDiv"}
      onClick={() => {
        if (document.getElementById(title).className === "checkDiv active") {
          document.getElementById(title).className = "checkDiv";
          setVis(false);
        } else if (document.getElementById(title).className === "checkDiv") {
          document.getElementById(title).className += " active";
          setVis(true);
        }
      }}
    >
      {vis ? (
        <span
          style={{ position: "absolute", top: "-0.5rem", right: "-0.5rem" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10.2621" cy="9.702" r="9.702" fill="#2196F3" />
            <path
              d="M7.02808 10.2695L9.62682 12.936L13.4961 7.54601"
              stroke="white"
              strokeWidth="1.96"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : null}
      <span>
        <img src={imageSrc} alt={"Форма оправы"} />
      </span>
      {visTitle ? <p>{title}</p> : null}
    </span>
  );
};

export default Container;
