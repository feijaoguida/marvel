import styled from "styled-components";

import fundo from "../../assets/images/bannerHeros.jpg";

export const Container = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  background-image: url(${fundo});
  object-fit: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  background-size: cover;
`;

export const ContentText = styled.div`
  width: 100%;
  max-width: 1100px;
  align-items: flex-start;
  margin: auto;

  p {
    font-size: 2.5em;
    color: white;
    width: 50%;
    font-weight: 800;
  }
`;

export const Button = styled.button`
  width: 130px;
  height: 60px;
  background-color: tomato;
  position: relative;
  border: none;
  overflow: hidden;
  margin-right: 10px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
