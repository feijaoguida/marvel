import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  width: 100%;
  background-color: #151515;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    width: 100%;
    max-width: 1100px;
    margin: auto;
  }

  img {
    width: 100px;
    height: 60px;
  }
`;
