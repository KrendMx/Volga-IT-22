import styled from "styled-components";

const Slides = styled.div`
  width: 100%;
  max-width: 25rem;
  margin: auto;
  position: relative;
  background: linear-gradient(180deg, #E8F0F2 0%, #E8F0F2 100%);
  text-align: center;
  padding: 0.1em 4% 10rem ;

  & button {
    background: linear-gradient(270deg, #45C7FA 0%, #2196F3 100%);
    box-shadow: 4px 1px rgba(0, 0, 0, 0.03);
    border-radius: 24px;
    font-family: "Roboto",serif;
    font-style: normal;
    color:white;
    border: 0;
    padding: 1rem;
    width:177px;
    cursor: pointer;
    font-size: 18px;
    line-height: 21px;
    position: relative;
    text-align: center;
    transition: all 0.2s;
    &:hover{
      opacity: 0.9;
      transform: scale(1.1);
    }
    
  }
  
  & h1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    color: #2196F3;
  }

  & h2 {
    font-weight: bold;
    font-size: 15px;
    width: 75%;
    line-height: 1.5;
    margin: 1.5em auto;
    color: #3A4850;
  }

  & img {
    width: 80%;
    padding-top: 4vw;
  }
`;

const Headers = styled.div`
  display: flex;
  width: 100%;
  max-width: 25rem;
  justify-content: space-between;
  position: relative;
  align-content: center;
  padding: 4%;
  margin: auto;
  background: white;
   & img {
     width:140px;
     height:auto;
   }
  & button {
    padding: 1%;
    border: 0;
    background: 0;
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 10%;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

export { Slides, Headers };
