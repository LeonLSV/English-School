import React from "react";
import { Row, BackTop } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";

const UsefulExpressions2 = () => {
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
            flexDirection: "column",
            textAlign: "center",
          }}>
          <h1>Useful Expressions - Meeting and Greeting</h1>
          <p>Expresiones útiles - Encuentro y saludo</p>
          <h2 style={{ paddingTop: "60px" }}>Nice to meet you</h2>
          <p>Encantado de conocerte</p>
          <h4>You can say: "Hello, nice to meet you"</h4>
          <p>Puedes decir: Hola, encantado de conocerte</p>
          <h2>Where are you from?</h2>
          <p>¿De donde eres?</p>
          <h4>You can answer: "I am from Argentina, Where are you from?</h4>
          <p>Yo soy de Argentina. ¿De donde eres tu?</p>
          <h2>What do you to?</h2>
          <p>¿A qué te dedicas?</p>
          <h4>You can answer: "I am a teacher". What do you to?</h4>
          <h2>What do you like to do in your free time?</h2>
          <p>¿Qué te gusta hacer en tu tiempo libre?</p>
          <h4>You can answer: "I like to read"</h4>
          <h2>What's your phone number?</h2>
          <p>¿Cuál es tu número de teléfono?</p>
          <h4>"My phone number is: 332-445-5565</h4>
        </Row>
        <Row justify="center" style={{ paddingTop: "60px" }}>
          <LinkClass to="/ingles-basico-fundamentos">
            <ButtonVolver>Volver</ButtonVolver>
          </LinkClass>
        </Row>
      </ContainerLesson>
    </>
  );
};

export default UsefulExpressions2;
