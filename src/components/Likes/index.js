import React from "react";
import { Row, Col, BackTop } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";
import ilikedis from "../../images/likedis.png";
import ilikedis1 from "../../images/likedis1.png";
import ilikedis2 from "../../images/likedis2.png";

const Likes = () => {
  return (
    <>
      <ContainerLesson>
        <Row justify="center">
          <BackTop />
          <Col span={24} style={{ textAlign: "center" }}>
            <h1 style={{ color: "#1890ff" }}>
              Remember the expression I like to used when we talk about
              activities that we like to do.
            </h1>
            <p>
              Recuerda que la expresión "me gusta" se usa cuando hablamos de
              actividades que nos gusta hacer.
            </p>
          </Col>
          <Row
            justify="center"
            style={{
              width: "100%",
              padding: "60px 0",
            }}>
            <Col
              lg={8}
              md={12}
              sm={24}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <img style={{ width: "90%" }} src={ilikedis} alt="i like" />
            </Col>
            <Col
              lg={8}
              md={12}
              sm={24}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <img style={{ width: "90%" }} src={ilikedis1} alt="i like" />
            </Col>
            <Col
              lg={8}
              md={12}
              sm={24}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <img style={{ width: "90%" }} src={ilikedis2} alt="i like" />
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

export default Likes;
