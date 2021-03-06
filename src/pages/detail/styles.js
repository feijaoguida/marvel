import styled from "styled-components";

import fundo from "../../assets/images/bannerHeros.jpg";
import { Link } from "react-router-dom";

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
  font-size: 2.2em !important;
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

    -webkit-box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.29);
    -moz-box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.29);
    box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.29);
  }
`;

export const ListItemsDetail = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  align-items: stretch;
  max-width: 30%;
  min-height: 117px;
  margin: 15px 10px !important;
  border-radius: 5px;
  padding: 5px;

  color: rgb(72, 72, 72);
  font-size: 0.8em;
  text-align: center;
  justify-content: center;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 165, 165, 1) 56%,
    rgba(255, 255, 255, 1) 100%
  );

  &:hover {
    -webkit-box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.29);
    -moz-box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.29);
    box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.29);
  }
`;

export const DetailHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const DetailBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin: 15px auto;
`;

export const BodyItems = styled.div`
  font-size: 2em;
  color: black;
  display: flex;
  flex-direction: row !important;
`;

export const Linked = styled(Link)`
  width: 130px;
  height: 60px;
  background-color: tomato;
  position: relative;
  border: none;
  overflow: hidden;
  margin: 10px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  color: rgb(72, 72, 72);
  display: flex;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
