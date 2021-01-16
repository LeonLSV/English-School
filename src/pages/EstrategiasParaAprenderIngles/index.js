import React from "react";
import { Row } from "antd";
import classone from "../../images/classone.png";
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
        <LinkClass to="/motivation">
          <Cards
            style={tarjeta}
            title="Motivación"
            description="Encuentra una motivación para aprender inglés."
            image={classone}
          />
        </LinkClass>
      </Row>
    </>
  );
};
