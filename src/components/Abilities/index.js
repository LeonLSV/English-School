import React from "react";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";
import { Row, BackTop, Col } from "antd";

import abilities from "../../images/abilities.png";

export const Abilities = () => {
  return (
    <>
      <ContainerLesson>
        <BackTop />

        <Row justify="center">
          <h2>Mira los textos y busca ejemplos de oraciones con Can y Can't</h2>
          <Col
            lg={20}
            md={24}
            style={{ display: "flex", justifyContent: "center" }}>
            <img style={{ width: "90%" }} src={abilities} alt="abilities" />
          </Col>
        </Row>
        <Row justify="center">
          <Col
            lg={20}
            md={24}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
            }}>
            <h1>Different abilities</h1>
            <h2>Speak a foreign language / spik a foring lenguich</h2>
            <p>Hablar un idioma extranjero.</p>
            <h2>Play a musical instrument / pley a miusicol instrument</h2>
            <p>Tocar un instrumento musical.</p>
            <h2>Dance / dans</h2>
            <p>Bailar.</p>
            <h2>Draw / dro</h2>
            <p>Dibujar.</p>
            <h2>Sing / singc</h2>
            <p>Cantar.</p>
            <h2>Cook / cuck</h2>
            <p>Cocinar.</p>
            <h2>Drive / draiv</h2>
            <p>Conducir.</p>
            <h2>Play soccer / pley soquer</h2>
            <p>Jugar al fútbol.</p>
          </Col>
        </Row>

        <Row justify="center" style={{ paddingTop: "60px" }}>
          <LinkClass to="/ingles-basico-gramatica">
            <ButtonVolver>Volver</ButtonVolver>
          </LinkClass>
        </Row>
      </ContainerLesson>
    </>
  );
};
