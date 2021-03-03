import React from "react";
import { Row, BackTop } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";

export const UsefulExpressions3 = () => {
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
          <h1>Useful Expressions</h1>
          <p>Expresiones útiles</p>
          <h2 style={{ paddingTop: "60px" }}>Love / lovf</h2>
          <p>Amor</p>
          <h2>Adore / ador</h2>
          <p>Adorar</p>
          <h2>Be crazy about / bi creisi abaut</h2>
          <p>Esta loco por</p>
          <h1 style={{ paddingTop: "60px" }}>Examples</h1>
          <h2>I love cooking</h2>
          <p>Me encanta cocinar</p>
          <h2>You adore running</h2>
          <p>Tu adoras correr</p>
          <h2>We are crazy about going to the movies</h2>
          <p>Estamos locos por ir al cine</p>
          <h2 style={{ paddingTop: "60px" }}>
            Recuerda que estas expresiones se usan solo con la forma gerundia
            del verbo. Running, Cooking,{" "}
          </h2>
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
