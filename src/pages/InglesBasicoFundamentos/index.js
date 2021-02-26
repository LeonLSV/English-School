import React from "react";
import { Row } from "antd";
import { Cards } from "../../components/Cards";
import { LinkClass } from "../../styles/global";

import greetings from "../../images/greetings.png";
import userful from "../../images/USERFUL.png";
import jobs from "../../images/jobs.png";
import numbers from "../../images/numbers.png";

const tarjeta = {
  width: 240,
  margin: "50px",
};

export const InglesBasicoFundamentos = () => {
  return (
    <>
      <Row justify="center">
        <LinkClass to="/greetings-and-introducing">
          <Cards
            style={tarjeta}
            title="Greetings and introducing yourself"
            description="Saludar y presentarte."
            image={greetings}
          />
        </LinkClass>
        <LinkClass to="/useful-expressions">
          <Cards
            style={tarjeta}
            title="Useful Expressions"
            description="Expresiones útiles cuando aprendes ingles."
            image={userful}
          />
        </LinkClass>
        <LinkClass to="/vocabulary-jobs">
          <Cards
            style={tarjeta}
            title="Vocabulary: Jobs"
            description="Algunos trabajos comunes."
            image={jobs}
          />
        </LinkClass>
        <LinkClass to="/useful-expressions-meeting">
          <Cards
            style={tarjeta}
            title="Useful Expressions 2"
            description="Meeting and Greeting - Expresiones útiles cuando aprendes ingles."
            image={userful}
          />
        </LinkClass>
        <LinkClass to="/numbers100">
          <Cards
            style={tarjeta}
            title="Numbers 30/100"
            description="Los numeros del 30 al 100"
            image={numbers}
          />
        </LinkClass>
      </Row>
    </>
  );
};
