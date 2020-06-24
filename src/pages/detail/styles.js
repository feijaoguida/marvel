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
`;

export const Paragraph = styled.p`
  font-size: 2.5em !important;
  color: white !important;
  width: 50%;
  font-weight: 800 !important;
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

export const TheDescription = styled.p`
  font-size: 1.2em;
  text-align: center;
  color: rgb(72, 72, 72);
  font-weight: 600 !important;
  margin: 20px;
`;

export const ContainerList = styled.div`
  margin: 20px 0px;
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;

  li {
    display: flex;
    flex-direction: column;
    flex-basis: auto;
    align-items: stretch;
    width: 100%;
    margin: 60px auto auto auto;
    border-radius: 5px;
    background-color: #fff;

    -webkit-box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.29);
    -moz-box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.29);
    box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.29);
  }
`;

export const ListItems = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  align-items: stretch;
  max-width: 30%;
  margin: 15px 10px !important;
  border-radius: 5px;
  padding: 5px;

  color: rgb(72, 72, 72);
  font-size: 1.1em;
  text-align: center;
  justify-content: center;

  background: linear-gradient(
    135deg,
    rgba(254, 0, 0, 1) 0%,
    rgba(255, 165, 165, 1) 56%,
    rgba(255, 255, 255, 1) 100%
  );

  -webkit-box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.29);
  box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.29);
`;

export const DetailHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  aling-itens: center;
  flex-direction: row;
  border: none;
  color: black;

  img {
    width: 30%;
    height: 250px;
  }
`;

export const Title = styled.div`
  width: 70%;
  background-color: tomato;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-top: 250px solid #fff;
    border-right: 100px solid transparent;
    width: 0;
  }
`;

export const DetailBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  aling-itens: center;
  flex-direction: column;
  flex-wrap: 1;

  border: none;
  color: black;
`;

export const Description = styled.div``;

export const Items = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
`;

export const TitleItems = styled.p`
  font-size: 2em;
  color: rgb(72, 72, 72);
  text-align: center;
  width: 100%;
`;

export const BodyItems = styled.div`
  font-size: 2em;
  color: black;
  display: flex;
  flex-direction: row !important;
`;
