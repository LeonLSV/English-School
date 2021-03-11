import React from "react";
import { Row, BackTop, Col } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";

export const UsefulExpressionsPast = () => {
  return (
    <>
      <ContainerLesson>
        <BackTop />
        <Row
          justify="center"
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}>
          <Col lg={20} md={24}>
            <h1>Useful Expressions: Time Expressions</h1>
            <p>Expresiones útiles - Expressiones de tiempo.</p>
            <h1 style={{ paddingTop: "60px" }}>-</h1>
            <h2>Yesterday</h2>
            <p>Ayer</p>
            <h2>The day before yesterday</h2>
            <p>Anteayer</p>
            <h2>Last night</h2>
            <p>Anoche</p>
            <h2>Last week</h2>
            <p>Última semana</p>
            <h2>Last month</h2>
            <p>Último mes</p>
            <h2>Last Year</h2>
            <p>Último año</p>
            <h1 style={{ paddingTop: "60px" }}>Examples</h1>
            <h2>Yesterday I was in my office.</h2>
            <p>Ayer estaba en mi oficina.</p>
            <h2>The day before yesterday she was at the hospital.</h2>
            <p>Antes de ayer ella estaba en el hospital.</p>
            <h2>Last night he was very sick.</h2>
            <p>Anoche él estuvo muy enfermo.</p>
            <h2>Last week they were at the restaurant.</h2>
            <p>La semana pasada ellos estaban en el restaurante.</p>
            <h2>Last month we were friends.</h2>
            <p>El mes pasado fuimos amigos.</p>
            <h2>Last year I was at the university.</h2>
            <p>El año pasado estuve en la universidad.</p>
            <h1 style={{ paddingTop: "60px" }}>
              Read what people did last night
            </h1>
            <h2>Last night I watched a movie.</h2>
            <p>Anoche mire una pelicula.</p>
            <h2>My friends and I cooked at home.</h2>
            <p>Mis amigos y yo cocinamos en casa.</p>
            <h2>Mi wife and I stayed home.</h2>
            <p>Mi esposa y yo nos quedamos en casa.</p>
            <h2>I worked late.</h2>
            <p>Trabajé hasta tarde.</p>
            <h2>My husband and I cleaned the house.</h2>
            <p>Mi esposo y yo limpiamos la casa.</p>
            <h2>My roomate studied all night.</h2>
            <p>Mi compañero de cuarto estudió toda la noche.</p>
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
