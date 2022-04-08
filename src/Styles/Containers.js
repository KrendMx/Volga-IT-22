import styled from "styled-components";

const ContainerChoose = styled.div`
  width: 100%;
  margin: auto;
  height: 90%;
  position: relative;
  text-align: center;
  justify-content: space-between;
  align-content: ${(props) => (props.evenly ? "space-between" : "center")};
  display: flex;
  flex-direction: column;
  & span {
    margin-bottom: 15%;
  }
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
      opacity: 0.5;
      cursor: auto;
      transition: all 0.2s;
      &:hover {
        transform: scale(1);
      }
    }
  }

  & .h4 {
    font-family: "Open sans", sans-serif;
    color: #425a60;
    padding: 0;
    margin: 0;
  }

  & h2 {
    width: 60%;
    font-size: 20px;
    margin: 5% auto 0;
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
  }

  & h3 {
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
  height: 90%;
  margin: auto;
  flex-direction: column;
  justify-content: flex-start;
  display: flex;
  text-align: center;
  & p {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
  }

  & button {
    background: linear-gradient(270deg, #45c7fa 0%, #2196f3 100%);
    margin: 0 auto;
    box-shadow: 4px 1px rgba(0, 0, 0, 0.03);
    border-radius: 24px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
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
    margin: 0 auto;
  }
`;

const ContainerManyCheck = styled.span`
  margin-top: 3%;
  display: grid;
  grid-template-rows: repeat(3, 33%);
  grid-template-columns: repeat(4, 47%);
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
    margin: 2%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    transition: all 0.01s;
    border: 2px solid #ffffff00;
    & div {
      &:hover {
        background-color: white;
        border-radius: 1rem;
      }
    }
    & p {
      font-family: "Open Sans", sans-serif;
      font-size: 15px;
      margin: 0 auto;
      color: #425a60;
    }
    &.active {
      border: 2px solid #2196f3;
    }
  }
`;
export { ContainerChoose, ContainerMain, ContainerManyCheck };
