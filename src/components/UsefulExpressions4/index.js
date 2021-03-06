import React from "react";
import { Row, BackTop } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";

export const UsefulExpressions4 = () => {
  return (
    <>
      <ContainerLesson>
        <BackTop />
        <Row
          justify="center"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}>
          <h1>Frequency adverbs.</h1>
          <p>Adverbios de frecuencia.</p>

          <h1 style={{ paddingTop: "60px" }}>Examples</h1>
          <h2>I ALWAYS work late.</h2>
          <p>Siempre trabajo hasta tarde.</p>
          <h2>She ALMOST ALWAYS cookS at home.</h2>
          <p>Casi siempre cocina en casa.</p>
          <h2>They SOMETIMES eat fish.</h2>
          <p>Ellos a veces comen pescado.</p>
          <h2>We SELDOM go to the movies.</h2>
          <p>Raramente vamos al cine.</p>
          <h2>I ALMOST NEVER watch tv.</h2>
          <p>Casi nunca veo televisión.</p>
          <h2>You NEVER visit the doctor.</h2>
          <p>Nunca visitas al doctor.</p>
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
