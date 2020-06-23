import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import * as s from "./styles";
import logo from "../../assets/images/marvel-logo.png";

const apikey = "9bfc4efda5e11865aab4ab84b6dba4a9";
const hash = "2ca97ce2c9fcd13830a5a6228d2f76e0";

function Home() {
  const [heros, setHeros] = useState([]);
  const [infopages, setInfopages] = useState([]);

  async function loadHeros(numOffset) {
    const response = await api.get(
      `/characters?&orderBy=modified&limit=21&ts=1&apikey=${apikey}&hash=${hash}&offset=${numOffset}`
    );

    setHeros(response.data.data.results);
    setInfopages(response.data.data);
  }

  useEffect(() => {
    loadHeros();
  }, []);

  function handlePrev() {
    let numOffset = infopages.offset - 1;
    loadHeros(numOffset);
  }

  function handleNext() {
    let numOffset = infopages.offset + 1;
    loadHeros(numOffset);
  }

  return (
    <>
      <s.Container>
        <s.Header>
          <s.ContentText>
            <p>UMA LISTA COM SEUS HEROIS MARVEL FAVORITOS.</p>
            <s.Button>Veja Mais...</s.Button>
            <s.Button>Marvel.com</s.Button>
          </s.ContentText>
        </s.Header>
        <s.List>
          <ul>
            {heros.map((hero) => (
              <li key={hero.id}>
                <Link to={`/detail/${hero.id}`}>
                  <s.CardHeader>
                    <img
                      src={`${hero.thumbnail.path}/landscape_medium.${hero.thumbnail.extension}`}
                      alt={`O heroi ${hero.name}`}
                    />
                    <span>Nome: {hero.name} </span>
                    <br />
                  </s.CardHeader>
                </Link>

                <p>
                  Descrição:{" "}
                  {hero.description
                    ? hero.description
                    : `Acesse o card para mais informações sobre o ${hero.name}.`}
                </p>
              </li>
            ))}
          </ul>
          <div>
            <s.Button onClick={handlePrev}>Anterior</s.Button>
            <s.Button onClick={handleNext}>Proximo</s.Button>
          </div>
        </s.List>
        <s.Footer>
          <div>
            <img src={logo} alt="Logo Marvel" />
            <p>Feito com toda a dedicação.</p>
            <span>Todos os Direitos Reservados.</span>
          </div>
        </s.Footer>
      </s.Container>
    </>
  );
}

export default Home;
