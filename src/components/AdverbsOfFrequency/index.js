import React from "react";
import { Row, Col, BackTop } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";
import adverbs from "../../images/adverbs.png";
import rules from "../../images/rules.png";

const AdverbsOfFrequency = () => {
  return (
    <>
      <ContainerLesson>
        <Row justify="center">
          <BackTop />
          <Col lg={24} style={{ textAlign: "center", padding: "60px 0" }}>
            <h1 style={{ color: "#1890ff" }}>
              We use adverbs of frequency when we want to talk about activities
              and how often we do them.
            </h1>
            <p>
              Usamos adverbios de frecuencia cuando queremos hablar sobre
              actividades y con qué frecuencia las hacemos.
            </p>
          </Col>
          <Row justify="center" style={{ width: "100%" }}>
            <Col
              md={12}
              sm={24}
              style={{
                display: "flex",
                justifyContent: "center",
              }}>
              <img src={adverbs} alt="adverbs" style={{ width: "90%" }} />
            </Col>
          </Row>
          <Row justify="center">
            <Col style={{ textAlign: "center", padding: "40px 0" }} span={24}>
              <h3>Never / never (nunca)</h3>
              <h3>Rarely / ruerly (raramente)</h3>
              <h3>Seldom / seldom (raramente)</h3>
              <h3>Occasionally / oukeishionali (ocasionalmente)</h3>
              <h3>Sometimes / somtaims (a veces)</h3>
              <h3>Often / often (a menudo)</h3>
              <h3>Frequently / frikuenli (con frecuencia)</h3>
              <h3>Usually / iushuali (por lo general)</h3>
              <h3>Always / olueis (Siempre)</h3>
            </Col>
          </Row>
          <Row justify="center" style={{ width: "100%" }}>
            <Col style={{ textAlign: "center", padding: "40px 0" }} span={24}>
              <h1 style={{ color: "#1890ff" }}>
                Let's check the rules for adverbs of frequency.
              </h1>
            </Col>
          </Row>
          <Row justify="center" style={{ width: "100%" }}>
            <Col
              md={12}
              sm={24}
              style={{
                display: "flex",
                justifyContent: "center",
              }}>
              <img src={rules} alt="rules" style={{ width: "90%" }} />
            </Col>
          </Row>
          <Row
            justify="center"
            style={{
              width: "100%",
              textAlign: "center",
            }}>
            <Col span={12}>
              <h3>I always go to the park on Sundays.</h3>
              <p>Yo siempre voy al parque los domingos.</p>
              <h3>I usually got to a restaurant on Fridays.</h3>
              <p>Yo por lo general suelo ir a un restaurante los viernes.</p>
              <h3>I frequently play with my dog.</h3>
              <p>Con frecuencia juego con mi perro.</p>
              <h3>I often shop online.</h3>
              <p>A menudo compro en linea.</p>
              <h3>Sometimes I drink tea</h3>
              <p>A veces bebo té.</p>
              <h3>I occasionally eat cake.</h3>
              <p>De vez en cuando como pastel.</p>
              <h3>I seldom drink wine.</h3>
              <p>Raramente bebo vino.</p>
              <h3>I rarely do yoga.</h3>
              <p>Raramente hago yoga.</p>
              <h3>I never play volleball.</h3>
              <h1>Those are the adverbs of frequency.</h1>
            </Col>
          </Row>
          <Row justify="center" style={{ width: "100%", padding: "60px 0" }}>
            <LinkClass to="/ingles-para-principiantes">
              <ButtonVolver>Volver</ButtonVolver>
            </LinkClass>
          </Row>
        </Row>
      </ContainerLesson>
    </>
  );
};

export default AdverbsOfFrequency;
