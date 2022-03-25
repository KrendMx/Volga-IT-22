import styled from "styled-components";

const Slides = styled.div`
  width: 100%;
  margin: auto;
  background: linear-gradient(180deg, #e8f0f2 0%, #e8f0f2 100%);
  text-align: center;
  padding-bottom: 110%;

  & button {
    background: linear-gradient(270deg, #45c7fa 0%, #2196f3 100%);
    box-shadow: 4px 1px rgba(0, 0, 0, 0.03);
    border-radius: 24px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    color: white;
    border: 0;
    padding: 1rem;
    width: 177px;
    cursor: pointer;
    font-size: 18px;
    line-height: 21px;
    position: relative;
    text-align: center;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 0.9;
      transform: scale(1.3);
    }
  }

  & h1 {
    font-weight: bold;
    font-size: 24px;
    font-family: 'Open Sans', sans-serif;
    line-height: 31px;
    color: #2196f3;
  }

  & h2 {
    font-weight: bold;
    font-size: 15px;
    font-family: 'Open Sans', sans-serif;
    width: 75%;
    line-height: 1.5;
    margin: 1.5em auto;
    color: #3a4850;
  }

  & img {
    width: 80%;
    padding-top: 4vw;
  }
`;

export default Slides
