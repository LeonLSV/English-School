import React from "react";
import { Row, BackTop } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";

export const PresentSimple = () => {
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
          <h1>
            In this lesson we are going to talk about routines. For this we are
            going to learn how to use the simple present with different routines
            vocabulary.
          </h1>
          <p>
            En esta lección vamos a hablar de rutinas. Para esto vamos a
            aprender a usar el presente simple con el vocabulario de diferentes
            rutinas.
          </p>
          <h2>
            In the next example, you can see how people organize their day using
            the simple present and vocabulary for routines.
          </h2>
          <p>
            En el siguiente ejemplo, puedes ver como la gente organiza su dia
            usando el presente simple y el vocabulario para las rutinas.
          </p>
          <h1 style={{ paddingTop: "60px" }}>I</h1>
          <h2>I wake up at 6:00 am</h2>
          <p>Yo despierto a las 6 am</p>
          <h2>I don't wake up at 6:00 am</h2>
          <p>Yo no me despierto a las 6 am</p>
          <h2>Do I wake app at 6 am?</h2>
          <p>Me despierto a las 6 de la mañana?</p>
          <h1>YOU</h1>
          <h2>You wake up at 6 am</h2>
          <h2>You don't wake up at 6 am</h2>
          <h2>do you wake up at 6 am?</h2>
          <h2>You have breakfast in the morning.</h2>
          <p>Tu desayunas en la mañana</p>
          <h2>You don't have breakfast in the morning</h2>
          <h2>Do you have breakfast in the morning?</h2>
          <h3>I, YOU, WE THEY usan DO y DON'T</h3>
          <h1>HE - SHE - IT</h1>
          <h2>He takeS a shower early in the morning.</h2>
          <p>Él se ducha temprano en la mañana.</p>
          <h2>He doesn't take a shower early in the morning.</h2>
          <p>No se ducha temprano en la mañana.</p>
          <h2>Does he take a shower early in the morning?</h2>
          <p>Se ducha temprano en la mañana?</p>
          <h2>She checkS her email in her phone</h2>
          <p>Ella revisa su correo electrónico en su teléfono.</p>
          <h2>She doesn't check her email in her phone.</h2>
          <h2>Does she check her email in her phone?</h2>
          <h2>It has wheels.</h2>
          <p>Tiene ruedas</p>
          <h2>It doesn't have wheels.</h2>
          <h2>Does it have wheels?</h2>
          <h3>HE, SHE, IT llevan la S solo en la afirmación. </h3>
          <h1>WE - THEY</h1>
          <h2>We go to work by bus</h2>
          <p>Vamos al trabajo en autobus</p>
          <h2>We don't go to work by bus</h2>
          <h2>Do we go to work by bus?</h2>
          <h2>They have lunch at the cafeteria.</h2>
          <p>Ellos almuerzan en la cafeteria.</p>
          <h2>They don't have lunch at the cafeteria.</h2>
          <h2>Do they have lunch at the cafeteria?</h2>
          <h1 style={{ paddingTop: "60px" }}>EXAMPLES</h1>
          <h3>We HAVE COFFEE in the afternoon.</h3>
          <h3>He driveS hoem every night.</h3>
          <h3>They WATCH TV after work.</h3>
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
