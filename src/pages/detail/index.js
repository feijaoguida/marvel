import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import * as s from "./styles";

const apikey = "9bfc4efda5e11865aab4ab84b6dba4a9";
const hash = "2ca97ce2c9fcd13830a5a6228d2f76e0";

function Detail({ match }) {
  const [hero, setHero] = useState([]);

  const _id = match.params.id;

  useEffect(() => {
    async function loadHero() {
      const response = await api.get(
        `/characters/${_id}?&orderBy=modified&limit=21&ts=1&apikey=${apikey}&hash=${hash}`
      );
      setHero(response.data.data.results);
      //console.log(hero);
      console.log(_id);
      console.log(response.data.data.results);
      //console.log(state);
    }

    loadHero();
  }, [_id]);

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
        <s.ContentText>
          <ul>
            {hero.map((theHero) => (
              <li>
                <img src="" alt="" />

                <p>{theHero.name}</p>
                <p>
                  {theHero.description
                    ? theHero.description
                    : `Acesse o card para mais informações sobre o ${theHero.name}.`}
                </p>
                <p>Filmes</p>
                <p>series</p>
              </li>
            ))}
            ;
          </ul>
        </s.ContentText>
        <Link to="/">Voltar</Link>
      </s.Container>
    </>
  );
}

export default Detail;
