import styled from "styled-components";

const Headers = styled.div`
  width: 100%;
  padding: 4% 0;
  margin: 0 auto;
  background: white;
  font-family: 'Open Sans', sans-serif;
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
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 10%;
    &:hover {
      transform: scale(1.4);
    }
  }
`;

export default Headers