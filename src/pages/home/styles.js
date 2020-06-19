import styled from "styled-components";

import fundo from "../../assets/images/newcom_0603_com_mas_dsk_01.jpg";

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
  height: 60vh;
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

export const List = styled.div`
  margin: 20px 0px;
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
  }

  li {
    display: flex;
    flex-direction: column;
    flex-basis: auto;
    max-width: 333px;
    align-items: stretch;
    width: 100%;
    margin: 60px auto 0 auto;
    border-radius: 5px;
    background-color: #fff;
    padding: 5px;

    -webkit-box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.29);
    -moz-box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.29);
    box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.29);
  }

  p {
    font-size: 0.9em;
    color: rgb(72, 72, 72);
    margin: auto;
    padding: 5px;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin: 15px auto;
    width: 100%;
    max-width: 1100px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: -50px 10px 10px 10px;

    -webkit-box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.29);
    -moz-box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.29);
    box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.29);
  }

  span {
    font-size: 1.1em;
    font-weight: 800;
    color: rgb(72, 72, 72);
  }
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
