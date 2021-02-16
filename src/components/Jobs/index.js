import React from "react";
import { Table, Row, Col, Space, BackTop, List } from "antd";
import { ButtonVolver, LinkClass } from "../../styles/global";
import { ContainerLesson } from "../../styles/container";

const columns = [
  {
    title: "",
    dataIndex: "name",
  },
  {
    title: "",
    dataIndex: "chinese",
  },
  {
    title: "Example",
    dataIndex: "example",
  },
];
const columns1 = [
  {
    title: "English",
    dataIndex: "english",
  },
  {
    title: "Spanish",
    dataIndex: "spanish",
  },
];

const data = [
  {
    key: "1",
    name: "I (yo)",
    chinese: "am",
    example: "I am a teacher",
  },
  {
    key: "2",
    name: "He (él)",
    chinese: "is",
    example: "He is a teacher",
  },
  {
    key: "3",
    name: "She (ella)",
    chinese: "is",
    example: "She is a doctor",
  },
  {
    key: "4",
    name: "It",
    chinese: "is",
    example: "",
  },
  {
    key: "5",
    name: "You (tu)",
    chinese: "are",
    example: "You are a student",
  },
  {
    key: "6",
    name: "We (nosotros)",
    chinese: "are",
    example: "We are businessmen",
  },
  {
    key: "7",
    name: "They (ellos)",
    chinese: "are",
    example: "They are pilots",
  },
];

const data1 = [
  {
    key: "1",
    english: "She is a doctor. She is happy.",
    spanish: "Ella es una doctora. Ella es feliz.",
  },
  {
    key: "2",
    english: "She is a teacher. She is angry.",
    spanish: "Ella es una maestra. Ella está enojada.",
  },
  {
    key: "3",
    english: "They are policemen. They are funny.",
    spanish: "Ellos son policias. Ellos son divertidos.",
  },
  {
    key: "4",
    english: "He is an actor and he is serious /sirius/.",
    spanish: "Él es un actor y es serio.",
  },
  {
    key: "5",
    english: "He is a student /stiudent/ and he is intelligent /inteliyent/",
    spanish: "Él es un estudiante y es inteligente.",
  },
  {
    key: "6",
    english: "I am a student and i am slim.",
    spanish: "Yo soy estudiante y soy delgado.",
  },
];

const Appearance = [
  "Beautiful. /Hermos@",
  "Pretty. /Lindo",
  "Elegant. /Elegante",
  "Funny. /Divertid@",
  "Cute. /Linda",
  "Handsome. /Guap@",
  "Gorgeous. /Precios@",
  "Ugly. /Fe@",
  "Attractive. /Atrativ@",
];

const Age = ["Young. /Joven", "Middle-aged. /Mediana edad", "Old. /Viejo"];

const Build = [
  "Well-Built. /Fornido",
  "Plump. /Rechoncho",
  "Thin. /Delgado",
  "Fat /Gordo",
  "Slim /Delgado",
];
const Height = [
  "Short. /Pequeño",
  "Medium-height. /Estatura media",
  "Tall. /Alto",
];
const Eyes = [
  "Blue. /Azul",
  "Brown. /Marrón",
  "Small. /Pequeños",
  "Big round. /Gran ronda",
  "Oval. /Oval",
  "Wear glasses / Usar gafas",
];
const Face = [
  "Round. /Redondo",
  "Oval. /Oval",
  "Square. /Cuadrado",
  "Long. /Largo",
];
const Nose = [
  "Straight. /Derecho",
  "Hooked. /Enganchado",
  "Long. /Largo",
  "Small. /Pequeño",
  "Turned-up. /Subido",
];
const Mouth = ["Large. /Largo", "Small. /Pequeño"];
const Lips = ["Full. /Lleno", "Curved. /Curvo", "Thin. /Delgado"];
const Ears = ["Large. /Largo", "Small. /Pequeño"];
export const Jobs = () => {
  return (
    <>
      <BackTop />
      <ContainerLesson>
        <Row justify="center" align="middle">
          <Col span={24} style={{ textAlign: "center", margin: "20px 0" }}>
            <Space direction="vertical" size="large">
              <h2>En esta lección aprenderás a hablar sobre trabajos.</h2>
              <h2>Para hablar sobre trabajos debes usar el verbo "to be"</h2>
              <h1>Verb to be</h1>
              <Table
                columns={columns}
                dataSource={data}
                size="small"
                pagination={false}
              />
              <h1>Jobs and Personality</h1>
              <Table
                columns={columns1}
                dataSource={data1}
                size="small"
                pagination={false}
              />
              <h4>
                In this lesson you have learned how to talk about jobs and
                personality using the verb to be.
              </h4>
              <h4>
                En esta lección has aprendido a hablar sobre trabajos y
                personalidad usando el verbo "to be".
              </h4>
              <h1>Practice</h1>
              <a
                href="https://wordsets.s3-sa-east-1.amazonaws.com/DESCRIBING+PEOPLE/Physical+Description+(Web)/index.html"
                target="__blank"
                rel="noopener noreferer">
                Exercises here. Click me
              </a>
              <a
                href="https://www.englisch-hilfen.de/en/exercises/tenses/simple_present_s.htm"
                target="__blank"
                rel="noopener noreferer">
                And here. Click me
              </a>
              <List
                size="small"
                header={
                  <div>
                    Adjetivos para describir personas. Apariencia general.
                  </div>
                }
                footer={
                  <div>Adjectives to describe people. General appearance.</div>
                }
                bordered
                dataSource={Appearance}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <List
                size="small"
                header={<div>Describiendo la edad de alguien.</div>}
                footer={<div>Describing someone's age.</div>}
                bordered
                dataSource={Age}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <List
                size="small"
                header={<div>Describiendo la estructura de alguien.</div>}
                footer={<div>Describing someone's build</div>}
                bordered
                dataSource={Build}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <List
                size="small"
                header={<div>Describiendo la altura de alguien.</div>}
                footer={<div>Describing someone's height.</div>}
                bordered
                dataSource={Height}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <List
                size="small"
                header={
                  <div>Adjetivos para describir los ojos del alguien.</div>
                }
                footer={<div>Adjectives for describing someone's eyes.</div>}
                bordered
                dataSource={Eyes}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <List
                size="small"
                header={<div>Describiendo el rostro de alguien.</div>}
                footer={<div>Describing someone's face</div>}
                bordered
                dataSource={Face}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <List
                size="small"
                header={
                  <div>Adjetivos para describir la nariz de una persona.</div>
                }
                footer={<div>Adjectives to describe a person's nose</div>}
                bordered
                dataSource={Nose}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <List
                size="small"
                header={<div>Describiendo la boca de alguien.</div>}
                footer={<div>Describing someone's mouth.</div>}
                bordered
                dataSource={Mouth}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <List
                size="small"
                header={
                  <div>Adjetivos para describir los labios de una persona.</div>
                }
                footer={<div>Adjectives to describe a person's lips.</div>}
                bordered
                dataSource={Lips}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <List
                size="small"
                header={<div>Describiendo las orejas de alguien.</div>}
                footer={<div>Describing someone's ears.</div>}
                bordered
                dataSource={Ears}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <LinkClass to="/ingles-para-principiantes">
                <ButtonVolver>Volver</ButtonVolver>
              </LinkClass>
            </Space>
          </Col>
        </Row>
      </ContainerLesson>
    </>
  );
};
