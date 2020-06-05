import React, { useState, useEffect } from "react";
import api from "../../services/api";

import * as s from "./styles";
import logo from "../../assets/images/marvel-logo.png";

function Home() {
  const [heros, setHeros] = useState([]);

  useEffect(() => {
    async function loadHeros() {
      const response = await api.get();
      setHeros(response.data.data.results);
    }

    loadHeros();
  }, []);

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
                <s.CardHeader>
                  <img
                    src={`${hero.thumbnail.path}/landscape_medium.${hero.thumbnail.extension}`}
                    alt=""
                  />
                  <span>Nome: {hero.name} </span>
                  <br />
                </s.CardHeader>

                <p>
                  Descrição:{" "}
                  {hero.description
                    ? hero.description
                    : `Acesse o card para mais informações sobre o ${hero.name}.`}
                </p>
              </li>
            ))}
          </ul>
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
