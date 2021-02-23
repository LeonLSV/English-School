import React from "react";
import { Row, Col, BackTop } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";

import ilike1 from "../../images/ilike1.png";
import ilike2 from "../../images/ilike2.png";
import ilike3 from "../../images/ilike3.png";

const index = () => {
  return (
    <>
      <ContainerLesson>
        <BackTop />
        <Row justify="center">
          <Row justify="center">
            <Col style={{ textAlign: "center" }}>
              <h1 style={{ color: "#1890ff" }}>
                In this class we will talk about hobbies.
              </h1>
              <h1 style={{ color: "#1890ff" }}>
                Hobbies are activities that you do in your free time.
              </h1>
              <p>
                En esta clase hablaremos de pasatiempos. Los pasatiempos son
                actividades que haces en tu tiempo libre.
              </p>
              <h1 style={{ color: "#1890ff" }}>
                To talk about hobbies we used the expression "I like to".
              </h1>
              <p>
                Para hablar de pasatiempos utilizamos la expresión "Me gusta"
              </p>
            </Col>
          </Row>
          <Row justify="center" style={{ width: "100%", padding: "60px 0" }}>
            <Col lg={8} md={12} sm={24}>
              <img style={{ width: "100%" }} src={ilike1} alt="i like" />
            </Col>
            <Col lg={8} md={12} sm={24}>
              <img style={{ width: "100%" }} src={ilike2} alt="i like" />
            </Col>
            <Col lg={8} md={12} sm={24}>
              <img style={{ width: "100%" }} src={ilike3} alt="i like" />
            </Col>
          </Row>
          <Row justify="center" style={{ textAlign: "center", width: "100%" }}>
            <Col span={24}>
              <h1 style={{ color: "#1890ff" }}>Activities</h1>
              <h3>Cook / Cocinar</h3>
              <h3>Swim / Nadar</h3>
              <h3>Play Soccer / Jugar al Futbol</h3>
              <h3>Do Yoga / Hacer Yoga</h3>
              <h3>Listen to music / Escuchar música</h3>
              <h3>Exercise / Ejercicio</h3>
              <h3>Run / Correr</h3>
              <h3>Play the guitar / Tocar la guitarra</h3>
              <h3>Paint / Pintar</h3>
            </Col>
          </Row>

          <Row justify="center">
            <LinkClass to="/ingles-para-principiantes">
              <ButtonVolver>Volver</ButtonVolver>
            </LinkClass>
          </Row>
        </Row>
      </ContainerLesson>
    </>
  );
};

export default index;
