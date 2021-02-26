import React from "react";
import { Row } from "antd";
import { Cards } from "../../components/Cards";
import { LinkClass } from "../../styles/global";

import greetings from "../../images/greetings.png";

const tarjeta = {
  width: 240,
  margin: "50px",
};

export const InglesBasicoDescripciones = () => {
  return (
    <>
      <Row justify="center">
        <LinkClass to="/greetings-and-introducing">
          <Cards
            style={tarjeta}
            title="Descripciones"
            description="Saludar y presentarte."
            image={greetings}
          />
        </LinkClass>
      </Row>
    </>
  );
};
