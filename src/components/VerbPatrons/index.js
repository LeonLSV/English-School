import React from "react";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";
import { Row, BackTop, Col } from "antd";

import { Table } from "antd";

const columns = [{ title: "Frase", dataIndex: "frase", key: "frase" }];

const data = [
  {
    key: 1,
    frase: "I want to speak foreign languages at school.",
    description: "Quiero hablar idiomas extranjeros en la escuela.",
  },
  {
    key: 2,
    frase: "I don't want to spek foreign languages at school.",
    description: "No quiero hablar idiomas extranjeros en la escuela.",
  },
  {
    key: 3,
    frase: "Do you want to speak foreign languages at school?",
    description: "¿Quieres hablar idiomas extranjeros en la escuela?",
  },
  {
    key: 4,
    frase: "You like to cook / You like cooking",
    description:
      "Te gusta cocinar / Te gusta cocinar - (con 'Like' ambas opciones son posibles, con el infinitivo y con el gerundio.",
  },
  {
    key: 5,
    frase: "You dont like to cook / You don't like cooking",
    description: "No te gusta cocinar.",
  },
  {
    key: 6,
    frase: "Do you like to cook? / Do you like cooking?",
    description: "¿Te gusta cocinar?",
  },
  {
    key: 7,
    frase: "He loves to play the guitar / He loves playing the guitar.",
    description: "A él le encanta tocar la guitarra.",
  },
  {
    key: 8,
    frase:
      "He doesn't love to play the guitar / He doesn't love playing the guitar.",
    description: "A él no le encanta tocar la guitarra.",
  },
  {
    key: 9,
    frase:
      "Does he love to play the guitar? / Does he love playing the guitar?",
    description: "A él le encanta tocar la guitarra?",
  },
  {
    key: 10,
    frase: "She dislike cleaning the house.",
    description: "A ella no le gusta la limpieza.",
  },
  {
    key: 11,
    frase: "She doesn't dislike cleaning the house.",
    description: "No le disgusta limpiar la casa.",
  },
  // as
  {
    key: 12,
    frase: "Does she dislike cleaning the house?",
    description:
      "A ella no le gusta limpiar la casa? (con dislike solo tenemos una opción: el gerundio. En este caso 'cleaning' es el gerundio de 'clean')",
  },
  {
    key: 13,
    frase: "We enjoy driving to new places.",
    description: "Nosotros disfrutamos conduciendo a nuevos lugares.",
  },
  {
    key: 14,
    frase: "We don't enjoy driving to new places.",
    description: "Nosotros no disfrutamos conduciendo a nuevos lugares.",
  },
  {
    key: 15,
    frase: "Do they enjoy driving to new places?",
    description:
      "¿A ellos les gusta conducir a nuevos lugares? (para enjoy solo usamos la forma en gerundio",
  },
];

export const VerbPatrons = () => {
  return (
    <>
      <ContainerLesson>
        <BackTop />

        <Row justify="center">
          <Col lg={20} md={24}>
            <h2>
              Con "want" usamos el infinitivo, la preposición "to" y el verbo en
              la forma base.
            </h2>
            <h3>I want to speak</h3>
            <p>Yo quiero hablar</p>
            <h3>I don't want to speak</h3>
            <p>Yo no quiero hablar</p>
            <h3>Do you want to speak?</h3>
            <p>Tu quieres hablar?</p>
            <Table
              pagination={false}
              columns={columns}
              expandable={{
                expandedRowRender: (record) => (
                  <p style={{ margin: 0 }}>{record.description}</p>
                ),
                rowExpandable: (record) => record.frase !== "Not Expandable",
              }}
              dataSource={data}
            />
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
