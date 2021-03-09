import React from "react";
import { Row } from "antd";
import { Cards } from "../../components/Cards";
import { LinkClass } from "../../styles/global";

import clothes from "../../images/clothes.png";
import cant from "../../images/cant.png";
import abilitiespost from "../../images/abilitiespost.png";
import USERFUL from "../../images/USERFUL.png";
import RUTINES from "../../images/RUTINES.png";
import presentsimple from "../../images/presentsimple.png";
import verbpatrons from "../../images/verbpatrons.png";
import pregunta from "../../images/pregunta.png";
import adjectivespost from "../../images/adjectivespost.png";
import thepast from "../../images/thepast.png";

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
            image={verbpatrons}
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
            image={presentsimple}
          />
        </LinkClass>
        <LinkClass to="/rutines">
          <Cards
            style={tarjeta}
            title="Rutines"
            description="Wake up - Get up - Take a shower"
            image={RUTINES}
          />
        </LinkClass>
        <LinkClass to="/questions">
          <Cards
            style={tarjeta}
            title="WH Questions"
            description="Preguntas: Vocabulario. Who What When Where Why How"
            image={pregunta}
          />
        </LinkClass>
        <LinkClass to="/useful-expressions4">
          <Cards
            style={tarjeta}
            title="Useful expressions"
            description="Adverbios de frecuencia. Siempre, a veces, nunca..."
            image={USERFUL}
          />
        </LinkClass>
        <LinkClass to="/adjectives1">
          <Cards
            style={tarjeta}
            title="Vocabulary: Adjectives"
            description="Adjectivos."
            image={adjectivespost}
          />
        </LinkClass>
        <LinkClass to="/the-past">
          <Cards
            style={tarjeta}
            title="The past - Grammar"
            description="El pasado / WAS - WERE"
            image={thepast}
          />
        </LinkClass>
      </Row>
    </>
  );
};
