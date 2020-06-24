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
    }
    loadHero();
  }, [_id]);

  return (
    <>
      <s.Container>
        <s.Header>
          <s.ContentText>
            <s.Paragraph>
              UMA LISTA COM SEUS HEROIS MARVEL FAVORITOS.
            </s.Paragraph>
            <s.Button>Veja Mais...</s.Button>
            <s.Button>Marvel.com</s.Button>
          </s.ContentText>
        </s.Header>
        <s.ContainerList>
          <s.List>
            {hero.map((theHero) => (
              <li key={theHero.id}>
                <s.DetailHeader>
                  <img
                    src={`${theHero.thumbnail.path}/landscape_large.${theHero.thumbnail.extension}`}
                    alt={`O heroi ${theHero.name}`}
                  />
                  <s.Title>
                    <s.Paragraph>{theHero.name}</s.Paragraph>
                  </s.Title>
                </s.DetailHeader>
                <s.DetailBody>
                  <s.Description>
                    <s.TitleItems>Descrição</s.TitleItems>
                    <s.TheDescription>
                      {theHero.description
                        ? theHero.description
                        : `Infelizmente não tenho mais informações sobre ${theHero.name}, mais se você quer ficar por dentro 
                    do mundo marvel entre no site da Marvel no botão acima para mais informações.`}
                    </s.TheDescription>
                  </s.Description>
                  <s.Items>
                    <s.TitleItems>Comics</s.TitleItems>
                    <s.BodyItems>
                      <s.List>
                        {theHero.comics.items.map((comics) => (
                          <s.ListItems>{comics.name}</s.ListItems>
                        ))}
                      </s.List>
                    </s.BodyItems>
                  </s.Items>
                  <s.Items>
                    <s.TitleItems>Series</s.TitleItems>
                    <s.BodyItems>
                      <s.List>
                        {theHero.series.items.map((series) => (
                          <s.ListItems>{series.name}</s.ListItems>
                        ))}
                      </s.List>
                    </s.BodyItems>
                  </s.Items>
                </s.DetailBody>
              </li>
            ))}
          </s.List>
        </s.ContainerList>
        <Link to="/">Voltar</Link>
      </s.Container>
    </>
  );
}

export default Detail;
