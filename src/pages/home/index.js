import React, { useState, useEffect } from "react";
import api from "../../services/api";

import * as s from "./styles";

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
      <div className="container">
        <s.Header>
          <p>Marvel</p>
        </s.Header>
        <div>
          <ul>
            {heros.map((hero) => (
              <li key={hero.id}>
                <img
                  src={`${hero.thumbnail.path}/landscape_medium.${hero.thumbnail.extension}`}
                  alt=""
                />
                <br />
                <span>Nome: {hero.name} </span>
                <br />
                <span>Descrição: {hero.description}</span>
                <br />
                <br />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
