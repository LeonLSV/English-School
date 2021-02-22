import React from "react";
import { Row } from "antd";
import classone from "../../images/classone.png";
import { Cards } from "../../components/Cards";
import { LinkClass } from "../../styles/global";

const tarjeta = {
  width: 240,
  margin: "50px",
};

export const Tallerdeinglesparaprincipiantes = () => {
  return (
    <>
      <Row justify="center">
        <LinkClass to="/the-alphabet">
          <Cards
            style={tarjeta}
            title="Proximamente"
            description="Proximamente"
            image={classone}
          />
        </LinkClass>
      </Row>
    </>
  );
};
