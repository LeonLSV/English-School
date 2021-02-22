import React from "react";
import { Row, Col } from "antd";
import { Title } from "./styled";

import lahora from "../../images/lahora.png";
import reloj2 from "../../images/reloj2.png";
import reloj3 from "../../images/reloj3.png";
import reloj4 from "../../images/reloj4.png";
import reloj5 from "../../images/reloj5.png";

const WhatTime = () => {
  return (
    <>
      <Row>
        <Col lg={12} md={24} style={{ maxWidth: "100%", padding: "20px" }}>
          <Title>Look at the clock.</Title>
          <img src={lahora} alt="La hora" />
          <h2>What time is it?</h2>
          <h3>It's eight a.m.</h3>
          <h3>
            You can also say (También puedes decir...) It's 8 o'clock in the
            morning.
          </h3>
        </Col>
        <Col lg={12} md={24} style={{ maxWidth: "100%", padding: "20px" }}>
          <Title>Look at the clock.</Title>
          <img src={reloj2} alt="La hora" />
          <h2>What time is it?</h2>
          <h3>It's nine fourteen p.m.</h3>
          <h3>You can also say It's nine fourteen at night.</h3>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={24} style={{ maxWidth: "100%", padding: "20px" }}>
          <Title>Look at the clock.</Title>
          <img src={reloj3} alt="La hora" />
          <h2>What time is it?</h2>
          <h3>It's seven thirty p.m.</h3>
          <h3>It's seven thirty at night.</h3>
        </Col>
        <Col lg={12} md={24} style={{ maxWidth: "100%", padding: "20px" }}>
          <Title>Look at the clock.</Title>
          <img src={reloj4} alt="La hora" />
          <h2>What time is it?</h2>
          <h3>It's four thirty a.m.</h3>
          <h3>It's four thirty in the morning.</h3>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={24} style={{ maxWidth: "100%", padding: "20px" }}>
          <Title>Look at the clock.</Title>
          <img src={reloj5} alt="La hora" />
          <h2>What time is it?</h2>
          <h3>It's three twelve p.m.</h3>
          <h3>It's three twelve in the afternoon.</h3>
        </Col>
      </Row>
    </>
  );
};

export default WhatTime;
