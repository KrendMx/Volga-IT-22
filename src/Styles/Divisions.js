import styled from "styled-components";

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
export {TextAndImage, TextImageAndLineBetween, TextUnderImage}