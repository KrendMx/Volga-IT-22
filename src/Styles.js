import styled from "styled-components";
import { TextAndImage, TextUnderImage, TextImageAndLineBetween } from "./Styles/Divisions";
import Headers from "./Styles/Header"
import { ContainerChoose, ContainerMain } from "./Styles/Containers";
import AppContainer from "./Styles/MainContainer";

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
