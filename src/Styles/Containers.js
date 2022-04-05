import styled from "styled-components";

const ContainerChoose = styled.div`

  width: 100%;
  margin: auto;
  height: 60%;
  position: relative;
  background: linear-gradient(180deg, #e8f0f2 0%, #e8f0f2 100%);
  text-align: center;
  padding: 1rem 0px 110%;
  display: flex;
  flex-direction: column;

  div:nth-of-type(n) {
    &:hover {
      background-color: #eaeaea;
    }
  }

  & button {
    background: linear-gradient(270deg, #45c7fa 0%, #2196f3 100%);
    box-shadow: 4px 1px rgba(0, 0, 0, 0.03);
    border-radius: 24px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    color: white;
    border: 0;
    padding: 1rem;
    margin: 1em auto;
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

    &:disabled {
      background: #606060;
      opacity: .5;
      cursor: auto;
      transition: all 0.2s;

      &:hover {
        transform: scale(1);
      }
    }
  }

  & h2 {
    width: 60%;
    font-size: 20px;
    margin: 1rem auto;
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
  }

  & h3 {
    align-content: end;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    color: #3a4850;
    text-decoration: underline;
  }
`;

const ContainerMain = styled.div`
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
    font-family: "Open Sans", sans-serif;
    line-height: 31px;
    color: #2196f3;
  }

  & h2 {
    font-weight: bold;
    font-size: 15px;
    font-family: "Open Sans", sans-serif;
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

const ContainerManyCheck = styled.span`
  display: grid;
  grid-template-rows: repeat(3,30%);
  grid-template-columns: repeat(4,47%);
  overflow-x: scroll;
  
  

  &::-webkit-scrollbar {
    background-color: #ffffff00;
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5em;
    background-color: #798588;
  }

  .checkDiv {
    cursor: pointer;
    background-color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
    border-radius: 1rem;
    margin: 3%;
    padding: 0rem;
    position: relative;
    transition: all 0.01s;
    border: 2px solid #ffffff00;
    & p {
      font-family: "Open Sans", sans-serif;
      font-size: 15px;
      color: #425a60;
    }
    &.active {
      border: 2px solid #2196f3;
    }
  }
`;
export { ContainerChoose, ContainerMain, ContainerManyCheck };
