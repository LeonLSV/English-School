import React from "react";
import { Row, BackTop, Col } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";

import future1 from "../../images/future1.png";
import future2 from "../../images/future2.png";

export const Future = () => {
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
            <h1>The Future - Plans for the future</h1>
            <p>Planes para el futuro</p>
            <h3>
              Recuerda que puedes usar "will" mas la forma básica de un verbo
              para hablar sobre situaciones futuras.
            </h3>
            <h1 style={{ paddingTop: "60px" }}>Examples</h1>
            <img
              style={{ paddingTop: "30px", width: "80%" }}
              src={future1}
              alt="future"
            />
            <p>Iré a Alemania para el verano.</p>
            <p>No iré a Alemania para el verano.</p>
            <p>¿Iré a Alemania para el verano?</p>
            <h4>The next line</h4>
            <p>Buscarás escuelas con tu padre.</p>
            <p>No buscarás escuelas con tu padre.</p>
            <p>¿Buscarás escuelas con tu padre?</p>
            <h4>The following line</h4>
            <p>Ella intentará quedarse en Alemania por un año.</p>
            <p>Ella no intentará quedarse en Alemania por un año</p>
            <p>¿Ella intentará quedarse en Alemania por un año?</p>
            <img
              style={{ paddingTop: "30px", width: "80%" }}
              src={future2}
              alt="future"
            />
            <p>Él comprará una casa en el campo.</p>
            <p>Él no comprará una casa en el campo.</p>
            <p>¿Comprará una casa en el campo?</p>
            <h4>The next line</h4>
            <p>Eso será genial el año que viene</p>
            <p>No será genial el año que viene</p>
            <p>¿Será genial el año que viene?</p>
            <h4>The following line</h4>
            <p>Viajaremos al extranjero.</p>
            <p>No viajaremos al entrajero.</p>
            <p>¿Viajaremos al extranjero?</p>
            <h4>The last line</h4>
            <p>Saldrán de la ciudad el próximo verano.</p>
            <p>No saldrán de la ciudad el próximo verano.</p>
            <p>¿Saldrán de la ciudad el próximo verano?</p>
            <h3>
              El verbo se mantiene en su forma básica siempre. Lo único que
              cambia al hablar en futuro es el negativo. Para afirmativo y
              pregunta usamos <b>WILL</b> (uil) y para el negativo usamos{" "}
              <b>Won't</b> (uont)
            </h3>
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
