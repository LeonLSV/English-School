import React from "react";
import { Row, BackTop } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";

export const Questions = () => {
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
          <h1>WH Questions</h1>

          <h1 style={{ paddingTop: "60px" }}>Questions</h1>
          <h2>Who / ju</h2>
          <p>Quién - Se usa generalmente para hablar de las personas.</p>
          <h2>What / uot</h2>
          <p>Qué - Generalmente se usa para "cosas" o "actividades".</p>
          <h2>When / uen</h2>
          <p>Cuándo - Se usa para eventos, tiempo o momentos.</p>
          <h2>Where / uerr</h2>
          <p>Dónde - Se usa para hablar de lugares.</p>
          <h2>Why / uai</h2>
          <p>
            Por qué - Se usa para hablar de razones. (Cuando preguntamos WHY
            respondemos con BECAUSE
          </p>
          <h2>How / jau</h2>
          <p>Cómo - Se usa para los procesos</p>
          <h2>Which / uich</h2>
          <p>Cuál</p>
          <h1 style={{ paddingTop: "60px" }}>Examples</h1>
          <h2>What do you do on the weekends?</h2>
          <p>¿Qué haces los fines de semana?</p>
          <h2>I work on Saturdays and cook on Sundays.</h2>
          <p>Trabajo los sabados y cocino los domingos.</p>
          <h2>Who do you work with?</h2>
          <p>¿Con quién trabajas?</p>
          <h2>I work with John.</h2>
          <p>Yo trabajo con John</p>
          <h2>When is your birthday?</h2>
          <p>¿Cuándo es tu cumpleaños?</p>
          <h2>Mi birthday is in Octuber</h2>
          <p>Mi cumpleaño es en Octubre.</p>
          <h2>Where do you train?</h2>
          <p>Dónde entrenas?</p>
          <h2>I train at the gym.</h2>
          <p>Yo entreno en el gimnasio.</p>
          <h2>Why do you like candy?</h2>
          <p>¿Por qué te gusta el dulce?</p>
          <h2>Because i love sugar.</h2>
          <p>Porque me encanta el azucar.</p>
          <h2>How do you make cupcakes?</h2>
          <p>¿Cómo se hacen los pastelitos?</p>
          <h2>Process: With flour, sugar and eggs.</h2>
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
