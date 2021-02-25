import React from "react";
import { Row } from "antd";
import greetings from "../../images/greetings.png";
import { Cards } from "../../components/Cards";
import { LinkClass } from "../../styles/global";

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
      </Row>
    </>
  );
};
