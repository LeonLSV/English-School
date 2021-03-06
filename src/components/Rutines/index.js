import React from "react";
import { Row, BackTop, Col } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";

import wakeup from "../../images/wakeup.png";
import checkemail from "../../images/checkemail.png";
import gotowork from "../../images/gotowork.png";
import drive from "../../images/drive.png";
import chat from "../../images/chat.png";

export const Rutines = () => {
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
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}>
          <Col lg={18} md={24}>
            <h1>RUTINES</h1>
            <img
              src={wakeup}
              alt="wake up"
              style={{ paddingTop: "60px", width: "90%" }}
            />
            <h2>Wake up / ueikap</h2>
            <p>Despertar</p>
            <h2>Get up / get ap</h2>
            <p>Levantarse</p>
            <h2>Take a shower</h2>
            <p>Tomar una ducha</p>
            <img
              src={checkemail}
              alt="wake up"
              style={{ paddingTop: "60px", width: "90%" }}
            />
            <h2>Check email / chek imeil</h2>
            <p>Revisar el correo electrónico</p>
            <h2>Have breakfast / haf brekfest</h2>
            <p>Desayunar</p>
            <img
              src={gotowork}
              alt="wake up"
              style={{ paddingTop: "60px", width: "90%" }}
            />
            <h2>Go to work / gou tu work</h2>
            <p>Ir al trabajo</p>
            <h2>Have lunch / haf lanch</h2>
            <p>Almorzar</p>
            <h2>Have coffee / haf cofi</h2>
            <p>Tomar cafe</p>
            <img
              src={drive}
              alt="wake up"
              style={{ paddingTop: "60px", width: "90%" }}
            />
            <h2>Drive / draif</h2>
            <p>Conducir</p>
            <h2> Have dinner / haf diner</h2>
            <p>Cenar</p>
            <h2>Watch TV / uoch tivi</h2>
            <p>Mirar televisión</p>
            <img
              src={chat}
              alt="wake up"
              style={{ paddingTop: "60px", width: "90%" }}
            />
            <h2>Chat / chat</h2>
            <p>Platicar o charlar</p>
            <h2>Go to bed / gou tu bet</h2>
            <p>Ir a la cama</p>
            <h2>Sleep / slip</h2>
            <p>Dormir</p>
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
