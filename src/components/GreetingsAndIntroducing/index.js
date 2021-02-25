import React from "react";
import { Row, Col, BackTop } from "antd";
import { ButtonVolver, LinkClass } from "../../styles/global";
import { ContainerLesson } from "../../styles/container";

import greet from "../../images/greet.png";
import greet2 from "../../images/greet2.png";
import greet3 from "../../images/greet3.png";
import greet4 from "../../images/greet4.png";
import introducing from "../../images/introducing.png";
import exercises from "../../images/exercises.png";

const index = () => {
  return (
    <>
      <BackTop />
      <ContainerLesson>
        <Row justify="center" style={{ width: "100%", padding: "20px" }}>
          <Col md={12} sm={24}>
            <img style={{ width: "90%" }} src={greet} alt="greet" />
          </Col>
          <Col md={12} sm={24}>
            <img style={{ width: "90%" }} src={greet2} alt="greet" />
          </Col>
        </Row>
        <Row justify="center" style={{ width: "100%", padding: "20px" }}>
          <Col md={12} sm={24}>
            <img style={{ width: "90%" }} src={greet3} alt="greet" />
          </Col>
          <Col md={12} sm={24}>
            <img style={{ width: "90%" }} src={greet4} alt="greet" />
          </Col>
        </Row>
        <Row justify="center" style={{ width: "100%", padding: "20px" }}>
          <Col md={12} sm={24}>
            <img style={{ width: "90%" }} src={introducing} alt="greet" />
          </Col>
          <Col md={12} sm={24}>
            <img style={{ width: "90%" }} src={exercises} alt="greet" />
            <p>Hello, how are you? I am Ramiro.</p>
            <p>Good morning. Nice to meet you. I'm Sam.</p>
          </Col>
        </Row>
        <Row
          justify="center"
          style={{ width: "100%", padding: "20px", textAlign: "center" }}>
          <Col span={24}>
            <h1>
              Read some of the most common questions to introduce yourself:
            </h1>
            <ul>
              <li>What is your first name?</li>
              <li>How old are you?</li>
              <li>Where do you come from?</li>
              <li>What languages do you speak?</li>
            </ul>
            <h3>
              My name is Alex. I come from Spain and I’m 26 years old. I speak
              Spanish, Portuguese and I’m learning English.
            </h3>
            <h3>
              I am Anabella, but my friends call me Ana. I am 19 years old and I
              was born in Mexico. I speak Spanish and a little bit of English.
            </h3>
            <h3>
              My name is Valeria. I am 32 years old and I come from Brazil. I
              speak Portuguese and I want to speak English.
            </h3>
          </Col>
        </Row>
        <Row justify="center">
          <LinkClass to="/ingles-basico-fundamentos">
            <ButtonVolver>Volver</ButtonVolver>
          </LinkClass>
        </Row>
      </ContainerLesson>
    </>
  );
};

export default index;
