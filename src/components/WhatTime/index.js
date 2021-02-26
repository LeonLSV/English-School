import React from "react";
import { Row, Col, BackTop } from "antd";
import { Title } from "./styled";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";
import lahora from "../../images/lahora.png";
import reloj2 from "../../images/reloj2.png";
import reloj3 from "../../images/reloj3.png";
import reloj4 from "../../images/reloj4.png";
import reloj5 from "../../images/reloj5.png";
import tellingtime from "../../images/telling-time.jpg";

const alineacion = {
  maxWidth: "100%",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
};

const WhatTime = () => {
  return (
    <>
      <ContainerLesson>
        <BackTop />
        <Title>What time is it?</Title>
        <Row justify="center">
          <Col lg={12} md={24} style={alineacion}>
            <Title>Look at the clock.</Title>
            <img src={lahora} alt="La hora" />
            <h2>What time is it?</h2>
            <h3>It's eight a.m.</h3>
            <h3>
              You can also say (También puedes decir...) It's 8 o'clock in the
              morning.
            </h3>
          </Col>
          <Col lg={12} md={24} style={alineacion}>
            <Title>Look at the clock.</Title>
            <img src={reloj2} alt="La hora" />
            <h2>What time is it?</h2>
            <h3>It's nine fourteen p.m.</h3>
            <h3>You can also say It's nine fourteen at night.</h3>
          </Col>
        </Row>
        <Row justify="center">
          <Col lg={12} md={24} style={alineacion}>
            <Title>Look at the clock.</Title>
            <img src={reloj3} alt="La hora" />
            <h2>What time is it?</h2>
            <h3>It's seven thirty p.m.</h3>
            <h3>It's seven thirty at night.</h3>
          </Col>
          <Col lg={12} md={24} style={alineacion}>
            <Title>Look at the clock.</Title>
            <img src={reloj4} alt="La hora" />
            <h2>What time is it?</h2>
            <h3>It's four thirty a.m.</h3>
            <h3>It's four thirty in the morning.</h3>
          </Col>
        </Row>
        <Row justify="center">
          <Col lg={12} md={24} style={alineacion}>
            <Title>Look at the clock.</Title>
            <img src={reloj5} alt="La hora" />
            <h2>What time is it?</h2>
            <h3>It's three twelve p.m.</h3>
            <h3>It's three twelve in the afternoon.</h3>
          </Col>
        </Row>
        <Row justify="center" style={{ textAlign: "center" }}>
          <Col lg={12} md={24}>
            <img style={{ width: "90%" }} src={tellingtime} alt="tellingtime" />
            <h2 style={{ paddingTop: "40px" }}>
              We use AT + TIME when giving the time of a specific event.
            </h2>
            <p>
              Usamos AT + TIME cuando damos la hora de un evento específico.
            </p>
            <h3>The class starts at nine o'clock</h3>
            <p>La clase empieza a las nueve</p>
            <h3>The flight leaves at ten to three</h3>
            <p>El vuelo sale a las tres menos diez</p>
            <h2 style={{ paddingTop: "40px" }}>
              We use It IS or It's to answer a question that asks for the time
              right now.
            </h2>
            <p>
              Usamos It IS o It's para responder a una pregunta que pide el
              tiempo en este momento.
            </p>
            <h3>What time is it? It is half past four</h3>
            <p>¿Qué hora es? Son las cuatro y media</p>
            <h3>What's the time? It's twenty to five</h3>
            <p>¿Qué hora es? Son las cinco menos veinte</p>
          </Col>
        </Row>
        <Row justify="center" style={{ paddingTop: "60px" }}>
          <LinkClass to="/ingles-para-principiantes">
            <ButtonVolver>Volver</ButtonVolver>
          </LinkClass>
        </Row>
      </ContainerLesson>
    </>
  );
};

export default WhatTime;
