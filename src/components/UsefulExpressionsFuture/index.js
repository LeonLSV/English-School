import React from "react";
import { Row, BackTop, Col } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";

// import future1 from "../../images/future1.png";
// import future2 from "../../images/future2.png";

export const UsefulExpressionsFuture = () => {
  return (
    <>
      <ContainerLesson>
        <BackTop />
        <Row
          justify="center"
          style={{
            width: "95vw",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}>
          <Col lg={16} md={24}>
            <h1>Useful Expressions. Plans for the future.</h1>
            <p>Expresiones útiles. Planes para el futuro.</p>

            <h1 style={{ paddingTop: "60px" }}>Examples</h1>
            <h2>Next Summer /next somer</h2>
            <p>Próximo verano</p>
            <h2>Next Month / next mond</h2>
            <p>Próximo mes</p>
            <h2>Next Year / next ier</h2>
            <p>El próximo año</p>
            <h2>In one year / in uan ier</h2>
            <p>En un año</p>
            <p>En cinco años</p>
            <p>En diez años</p>
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
