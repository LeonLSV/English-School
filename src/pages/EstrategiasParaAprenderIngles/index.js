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
            title="Introduccion 😍"
            description="Bienvenido! Te quiero dar algunos tips y herramientas para que tengas donde y cómo practicar inglés."
            image={introduccion}
          />
        </LinkClass>
        <LinkClass to="/plan-aprendizaje">
          <Cards
            style={tarjeta}
            title="Plan de aprendizaje 🙋"
            description="Haz tu plan de aprendizaje y dedicale tiempo para aprender rapidamente."
            image={introduccion}
          />
        </LinkClass>
      </Row>
    </>
  );
};
