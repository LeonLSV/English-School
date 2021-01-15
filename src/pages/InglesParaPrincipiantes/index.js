import React from "react";
import { Row } from "antd";
import classone from "../../images/classone.png";
import { Cards } from "../../components/Cards";
import { LinkClass } from "../../components/Cards/styled";

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
      </Row>
    </>
  );
};
