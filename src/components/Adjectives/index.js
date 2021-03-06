import React from "react";
import { Row, BackTop, Col } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";

import adjectives from "../../images/adjectives1.png";
import adjectives2 from "../../images/adjectives2.png";
import adjectives3 from "../../images/adjectives3.png";
import adjectives4 from "../../images/adjectives4.png";
import adjectives5 from "../../images/adjectives5.png";

export const Adjectives = () => {
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
            textAlign: "center",
          }}>
          <Col lg={20} md={24}>
            <h1>Adjectives</h1>
            <p>Adjetivos</p>

            <img
              style={{ paddingTop: "60px", width: "90%" }}
              src={adjectives}
              alt="adjectives"
            />
            <h2>Tall / tol</h2>
            <p>Alt@</p>
            <h2>Short / short</h2>
            <p>Pequeñ@</p>
            <h2>Heavy / jevy</h2>
            <p>Pesad@</p>
            <img
              style={{ paddingTop: "60px", width: "90%" }}
              src={adjectives2}
              alt="adjectives"
            />
            <h2>Thin / tzhen</h2>
            <p>Delgad@</p>
            <h2>Blonde / blondt</h2>
            <p>Rubi@</p>
            <h2>Brunette / brunett</h2>
            <p>Moren@</p>
            <img
              style={{ paddingTop: "60px", width: "90%" }}
              src={adjectives3}
              alt="adjectives"
            />
            <h2>Nice / nais</h2>
            <p>Agradable</p>
            <h2>Talkative / toketif</h2>
            <p>Hablador</p>
            <img
              style={{ paddingTop: "60px", width: "90%" }}
              src={adjectives4}
              alt="adjectives"
            />
            <h2>Annoying / anoingk</h2>
            <p>Molest@</p>
            <h2>Outgoing / autgoing</h2>
            <p>Saliente</p>
            <img
              style={{ paddingTop: "60px", width: "90%" }}
              src={adjectives5}
              alt="adjectives"
            />
            <h2>Shy / shai</h2>
            <p>Timid@</p>
            <h2>Mean / min</h2>
            <p>Mezquin@</p>
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
