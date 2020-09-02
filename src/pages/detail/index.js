import React, { useState, useEffect } from "react";
import "dotenv";

import api from "../../services/api";
import Footer from "../../componets/footer";

import * as s from "./styles";

const apikey = process.env.REACT_APP_API_KEY;
const hash = process.env.REACT_APP_HASH_KEY;

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
                    <s.TitleItems>
                      {!theHero.comics.items.length > 0 ? "" : "Comics"}
                    </s.TitleItems>
                    <s.BodyItems>
                      <s.List>
                        {theHero.comics.items.map((comics) => (
                          <s.ListItems>{comics.name}</s.ListItems>
                        ))}
                      </s.List>
                    </s.BodyItems>
                  </s.Items>
                  <s.Items>
                    <s.TitleItems>
                      {!theHero.comics.items.length > 0 ? "" : "Series"}
                    </s.TitleItems>
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

        <s.Linked to="/">Voltar</s.Linked>
        <Footer />
      </s.Container>
    </>
  );
}

export default Detail;
