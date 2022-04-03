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

const TextUnderImage = styled.div`
  padding: 1rem;
  cursor: pointer;
  background-color: white;
  border-radius: 1rem;
  margin: 3%;
  transition: all 0.4s;
  & img {
    height: 3rem;
  }
  & p {
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    color: #425a60;
  }
`;

const TextAndImage = styled.div`
  cursor: pointer;
  background-color: white;
  border-radius: 1rem;
  margin: 3%;
  transition: all 0.4s;
  display: flex;
  padding: 0.1rem 1em;
  justify-content: space-between;

  & .p-left {
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    color: #425a60;
  }
  & .p-right {
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    color: #0f0f0f;
    font-weight: bold;
  }
`;

const TextImageAndLineBetween = styled.div`
  cursor: pointer;
  background-color: white;
  border-radius: 1rem;
  margin: 3%;
  padding: 1rem;
  transition: all 0.4s;
  display: flex;
  justify-content: flex-start;
  & p {
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    color: #425a60;
    padding: 3%;
    border-left: 2px solid #dedede;
  }
  & img {
    width: 15%;
    margin-right: 3%;
  }
`;

const Headers = styled.div`
  width: 100%;
  padding: 4% 0;
  margin: 0 auto;
  background: white;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  & img {
    width: 200px;
    height: auto;
    image-rendering: optimizeQuality;
  }
  & div {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  & button {
    padding: 1%;
    border: 0;
    background: 0;
    font-family: "Open Sans", sans-serif;
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 10%;
    &:hover {
      transform: scale(1.4);
    }
  }
`;

const AppContainer = styled.div`
  width: 25rem;
  position: relative;
  margin: 0;
  font-family: sans-serif;
  height: 45em;
  overflow-y: hidden;
`;

const Animation = styled.div`
  @-webkit-keyframes pulse {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    50% {
      -webkit-transform: scale3d(1.5, 1.5, 1.5);
      transform: scale3d(1.5, 1.5, 1.5);
    }

    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes pulse {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    50% {
      -webkit-transform: scale3d(1.5, 1.5, 1.5);
      transform: scale3d(1.5, 1.5, 1.5);
    }

    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  -webkit-animation-name: pulse;
  animation-name: pulse;
  animation-duration: 2s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
`;

export {
  AppContainer,
  Animation,
  ContainerChoose,
  ContainerMain,
  TextUnderImage,
  TextAndImage,
  TextImageAndLineBetween,
  Headers,
};
