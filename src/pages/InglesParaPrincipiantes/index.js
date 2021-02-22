import React from "react";
import { Row } from "antd";
import classone from "../../images/classone.png";
import howdoyouspell from "../../images/howdoyouspell.png";
import { Cards } from "../../components/Cards";
import { LinkClass } from "../../styles/global";
import greeting from "../../images/greetings.png";
import numbers from "../../images/numbers.png";
import jobs from "../../images/jobs.png";
import Tobe from "../../images/tobe.png";
import pronombres from "../../images/pronombres.png";

const tarjeta = {
  width: 240,
  margin: "50px",
};

export const InglesParaPrincipiantes = () => {
  return (
    <>
      <Row justify="center">
        <LinkClass to="/the-alphabet">
          <Cards
            style={tarjeta}
            title="The alphabet (El alfabeto)"
            description="In this lesson you will learn the alphabet."
            image={classone}
          />
        </LinkClass>
        <LinkClass to="/how-do-you-spell-that">
          <Cards
            style={tarjeta}
            title="How do you spell that (¿Cómo se deletrea eso?)"
            description="In this lesson, you will learn how do yo spell words using the letters from the alphabet."
            image={howdoyouspell}
          />
        </LinkClass>
        <LinkClass to="/greetings">
          <Cards
            style={tarjeta}
            title="Greetings & Farewells"
            description="In this class you will learn different ways of saying hello and goodbye."
            image={greeting}
          />
        </LinkClass>
        <LinkClass to="/numbers">
          <Cards
            style={tarjeta}
            title="Numbers 1-30"
            description="In this lesson you will learn the numbers 1 to 30."
            image={numbers}
          />
        </LinkClass>
        <LinkClass to="/jobs">
          <Cards
            style={tarjeta}
            title="Jobs And Personality"
            description="In this lesson you will learn how to talk about jobs."
            image={jobs}
          />
        </LinkClass>
        <LinkClass to="/tobe">
          <Cards
            style={tarjeta}
            title="Verb To Be"
            description="Verb To Be in present. Affirmative, Negative, Interrogative."
            image={Tobe}
          />
        </LinkClass>
        <LinkClass to="/pronouns">
          <Cards
            style={tarjeta}
            title="Personal Pronouns"
            description="Presente Simple - Pronombres"
            image={pronombres}
          />
        </LinkClass>
      </Row>
    </>
  );
};
