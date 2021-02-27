import React from "react";
import { Row } from "antd";
import { Cards } from "../../components/Cards";
import { LinkClass } from "../../styles/global";

import greetings from "../../images/greetings.png";

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
            description="Ropa para temporadas."
            image={greetings}
          />
        </LinkClass>
      </Row>
    </>
  );
};
