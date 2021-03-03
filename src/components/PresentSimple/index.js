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
            In this class you are going to learn how to express actions that
            people perform, you and others people.
          </h1>
          <p>
            En esta clase aprenderás como expresar las acciones que realizan las
            personas, tú y otras personas.
          </p>
          <h2 style={{ paddingTop: "60px" }}>I have a pet</h2>
          <p>Yo tengo una mascota</p>
          <h2>I don't have a pet</h2>
          <p>Yo no tengo una mascota</p>
          <h2>Do i have a pet?</h2>
          <p>Yo tengo una mascota?</p>
          <h1>Tanto para I como para You se usa DO DONT HAVE</h1>
          <h2>You have a phone</h2>
          <p>Tu tienes un telefono</p>
          <h2>You don't have a phone</h2>
          <p>Tu no tienen un telefono</p>
          <h2>Do you have a phone?</h2>
          <p>Tu tienes un telefono?</p>
          <h1 style={{ paddingTop: "60px" }}>
            He She It (van con HAS DOES DOESN'T)
          </h1>
          <h3>
            Notese que cuando es pregunta o negativo no lleva HAS sino HAVE.
          </h3>
          <h2>He has a laptop</h2>
          <p>Él tiene una computadora portatil</p>
          <h2>He doesn't have a laptop</h2>
          <p>Él no tiene una computadora portatil</p>
          <h2>Does he have a laptop?</h2>
          <p>¿Él tiene una computadora portatil?</p>
          <h2>She has a phone</h2>
          <p>Ella tiene un telefono</p>
          <h2>She doesn't have a phone</h2>
          <p>Ella no tiene un telefono</p>
          <h2>Does she have a phone?</h2>
          <p>Ella tiene una telefono?</p>
          <h2>It has wheels</h2>
          <p>Eso tiene ruedas</p>
          <h2>It doesn't have wheels</h2>
          <p>Eso no tiene ruedas</p>
          <h2>Does it have wheels?</h2>
          <h1 style={{ paddingTop: "60px" }}>
            We They (van con DO DON'T y HAVE)
          </h1>
          <h3>Notese que el sustantivo lleva la S al final.</h3>
          <h2>We have bikes</h2>
          <p>Nosotros tenemos bicicletas</p>
          <h2>We don't have bikes</h2>
          <p>Nosotros no tenemos bicicletas</p>
          <h2>Do we have bikes?</h2>
          <p>Nosotros tenemos bicicletas?</p>
          <h2>They have pets</h2>
          <p>Ellos tienen mascotas</p>
          <h2>They don't have pets</h2>
          <p>Ellos no tienen mascotas</p>
          <h2>Do they have pets?</h2>
          <p>Ellos tienen mascotas?</p>
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
