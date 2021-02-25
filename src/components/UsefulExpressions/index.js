import React from "react";
import { Row, BackTop } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";

const UsefulExpressions = () => {
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
          <h2 style={{ paddingTop: "60px" }}>I don't understand</h2>
          <p>No entiendo</p>
          <h2>Can you repeat that?</h2>
          <p>¿Puedes repetir eso?</p>
          <h2>Can you speak slowly, please?</h2>
          <p>¿Puedes hablar más despacio?</p>
          <h2>How do you spell that?</h2>
          <p>¿Cómo se deletrea eso?</p>
          <h2>What's the meaning of ...</h2>
          <p>¿Cuál es el significado de ...</p>
          <h2>Thank you very much</h2>
          <p>Muchas gracias</p>
        </Row>
        <Row justify="center" style={{ paddingTop: "60px" }}>
          <LinkClass to="/ingles-basico-fundamentos">
            <ButtonVolver>Volver</ButtonVolver>
          </LinkClass>
        </Row>
      </ContainerLesson>
    </>
  );
};

export default UsefulExpressions;
