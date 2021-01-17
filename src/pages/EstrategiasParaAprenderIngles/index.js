import React from "react";
import { Row } from "antd";
import introduccion from "../../images/introduccion.png";
import { Cards } from "../../components/Cards";
import { LinkClass } from "../../components/Cards/styled";

const tarjeta = {
  width: 240,
  margin: "50px",
};

export const EstrategiasParaAprenderIngles = () => {
  return (
    <>
      <Row justify="center">
        <LinkClass to="/Introduccion">
          <Cards
            style={tarjeta}
            title="Introduccion"
            description="Encuentra una motivación para aprender inglés."
            image={introduccion}
          />
        </LinkClass>
      </Row>
    </>
  );
};
