import React from "react";
import { Row } from "antd";
import { Cards } from "../../components/Cards";
import { LinkClass } from "../../styles/global";

import clothes from "../../images/clothes.png";
import cant from "../../images/cant.png";
import abilitiespost from "../../images/abilitiespost.png";
import USERFUL from "../../images/USERFUL.png";

const tarjeta = {
  width: 240,
  margin: "50px",
};

export const InglesBasicoGramatica = () => {
  return (
    <>
      <Row justify="center">
        <LinkClass to="/clothes">
          <Cards
            style={tarjeta}
            title="Clothes for seasons"
            description="Vocabulary: Ropa para temporadas."
            image={clothes}
          />
        </LinkClass>
        <LinkClass to="/can">
          <Cards
            style={tarjeta}
            title="Can and can't"
            description="Grammar: In this lesson you will learn to use can and can’t to talk about abilities and possibilities."
            image={cant}
          />
        </LinkClass>
        <LinkClass to="/abilities">
          <Cards
            style={tarjeta}
            title="Abilities"
            description="Vocabulary: Look at the texts and find examples of sentences with can and can't."
            image={abilitiespost}
          />
        </LinkClass>
        <LinkClass to="/verb-patterns">
          <Cards
            style={tarjeta}
            title="Verb Patrons"
            description="Vocabulary: Patrones verbales."
            image={abilitiespost}
          />
        </LinkClass>
        <LinkClass to="/useful-expressions3">
          <Cards
            style={tarjeta}
            title="Useful expressions LIKES"
            description="Vocabulary: Expresiones para decir que algo te gusta o no te gusta."
            image={USERFUL}
          />
        </LinkClass>
        <LinkClass to="/grammar-present-simple">
          <Cards
            style={tarjeta}
            title="Present simple"
            description="Grammar: Presente simple"
            image={USERFUL}
          />
        </LinkClass>
      </Row>
    </>
  );
};
