import React from "react";
import { ContainerLesson } from "../../../styles/container";
import { ButtonVolver, LinkClass } from "../../../styles/global";
import { Col, Row, BackTop } from "antd";

import thiss from "../../../images/this-that-these-those1.png";
import Articlesaaanthe from "../../../images/Articlesaaanthe.jpg";
import possesive from "../../../images/possessive-adjectives-english.gif";
import Colors from "../../../images/Colors.jpg";

export const ClassFour = () => {
  return (
    <>
      <ContainerLesson>
        <BackTop />
        <Row>
          <Col
            lg={12}
            md={24}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}>
            <img
              style={{
                width: "80%",
                margin: "25px 0",
              }}
              src={thiss}
              alt="this"
            />
            <h2>Singular</h2>
            <h4>esto es una manzana</h4>
            <h4>eso es una manzana</h4>
            <h2>Plural</h2>
            <h4>estas son manzanas</h4>
            <h4>esas son manzanas</h4>
          </Col>
          <Col
            lg={12}
            md={24}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}>
            <img
              style={{
                width: "80%",
                margin: "25px 0",
              }}
              src={Articlesaaanthe}
              alt="this"
            />
            <h2>
              "A" se utiliza cuando la siguiente palabra comienza con un sonido
              consonante
            </h2>
            <h2>
              "AN" se utiliza cuando la siguiente palabra comienza con un sonido
              vocálico
            </h2>
            <h2>usamos "EL" con: algo que es único o que sólo hay uno.</h2>
            <h3>"El sol / La luna / El internet".</h3>
            <h2>La segunda vez que se habla del mismo sustantivo.</h2>
            <h3>Me he comprado una camisa. La camisa es roja.</h3>
            <h2>Instrucciones (puntos cardinales).</h2>
            <h3>El oeste / El este / El norte / El sur</h3>
          </Col>
        </Row>
        <Row>
          <Col
            lg={12}
            md={24}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}>
            <img
              style={{
                width: "80%",
                margin: "25px 0",
              }}
              src={possesive}
              alt="this"
            />
            <h1>Adjetivos Posesivos</h1>
            <h2>Pronombre Sujeto - Adjetivo Posesivo</h2>
            <h3>TU = adjetivo posesivo.</h3>
            <h3>- Tienes que traer tu diccionario.</h3>
            <h3>YOU'RE = Eres (contracción)</h3>
            <h3>- Eres un excelente estudiante.</h3>
            <h3>ITS = adjetivo posesivo</h3>
            <h3>- El perro jugaba con su pelota</h3>
            <h3>IT'S = es (contracción)</h3>
            <h3>- Hace mucho calor ahora mismo</h3>
          </Col>
          <Col
            lg={12}
            md={24}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}>
            <img
              style={{
                width: "80%",
                margin: "25px 0",
              }}
              src={Colors}
              alt="this"
            />
          </Col>
        </Row>
        <Row justify="center">
          <Col style={{ marginTop: "20px" }}>
            <LinkClass to="/apuntes-de-clases">
              <ButtonVolver>Volver</ButtonVolver>
            </LinkClass>
          </Col>
        </Row>
      </ContainerLesson>
    </>
  );
};
