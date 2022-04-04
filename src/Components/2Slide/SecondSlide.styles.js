import styled from "styled-components";

const Slides = styled.div`
  width: 100%;
  margin: auto;
  height: 60%;
  position: relative;
  background: linear-gradient(180deg, #e8f0f2 0%, #e8f0f2 100%);
  text-align: center;
  padding: 1rem 0px 110%;
  display: flex;
  flex-direction: column;

  & div {
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
  }

  div:nth-of-type(n) {
    &:hover {
      background-color: #eaeaea;
    }
  }

  & h2 {
    width:60%;
    margin:1rem auto;
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

export default Slides;
