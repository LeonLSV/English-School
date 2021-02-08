import React from "react";
import { Table, Row, Col, BackTop } from "antd";
import { Title, ButtonVolver, LinkClass } from "../../styles/global";
import { ContainerLesson } from "../../styles/container";

const columns = [
  {
    title: "Greetings /grerings/",
    dataIndex: "name",
    key: "name",
    render: (text) => <p>{text}</p>,
  },

  {
    title: "Farewalss /ferwels/",
    dataIndex: "address",
    key: "address",
  },
];

const columns2 = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Country", dataIndex: "address", key: "address" },
];
const columns3 = [
  {
    title: "Questions",
    dataIndex: "questions",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Answers",

    dataIndex: "answers",
    align: "right",
  },
];
const data = [
  {
    key: "1",
    name: "Hi",
    address: "Bye",
  },
  {
    key: "2",
    name: "Hello",
    address: "Goodbye",
  },
  {
    key: "3",
    name: "How are you?",
    address: "See you later",
  },
  {
    key: "4",
    name: "Good morning",
    address: "Take care /Cuidate",
  },
  {
    key: "5",
    name: "Good afternoon",
    address: "See you soon",
  },
  {
    key: "6",
    name: "Good evening",
    address: "See you there",
  },
];
const data2 = [
  {
    key: 1,
    name: "Paola",
    age: 27,
    address: "México",
    description:
      "Hi, I am Paola. My last name is spelled A-g-u-i-l-a-r. I am twenty-seven years old. I am from México.",
  },
  {
    key: 2,
    name: "Thomas",
    age: 31,
    address: "Canadian",
    description:
      "Hello, My name is Thomas. My last name is spelled M-a-r-t-i-n. I am thirty-one years old. I am Canadian.",
  },
  {
    key: 3,
    name: "Ramiro",
    age: 32,
    address: "Argentina",
    description:
      "Hi, I am Ramiro. My last name is spelled C-o-n-t-r-e-r-a-s. I am thirty-two years old. I am from Argentina.",
  },
  {
    key: 4,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    description:
      "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.",
  },
];
const data3 = [
  {
    key: "1",
    questions:
      "--How are you? --How have you been? --How are you doing? --How's it going?",

    answers:
      "--Fantastic --Very well, thank you. And You? --Great, thanks --Good --Fine, thanks --Pretty good --Not bad --Ok",
  },
  {
    key: "2",
    questions:
      "--¿Cómo estás? --¿Cómo has estado? --¿Cómo te va? --¿Qué tal va todo?",

    answers:
      "--Fantástico --Muy bien, gracias. ¿Y usted? --Genial, gracias. --Bien --Bien, gracias. --Bastante bien --Nada mal --Ok",
  },
  {
    key: "3",
    questions:
      "--What's up? --What's happening? --What's going on? --What have you been up to?",
    answers: "--Not much --Nothing much --Not a lot",
  },
  {
    key: "4",
    questions:
      "--¿Qué pasa? --¿Qué ocurre? --¿Qué está pasando? --¿Qué has estado haciendo?",
    answers: "--No mucho --No mucho --No mucho",
  },
  {
    key: "5",
    questions:
      "--It was a pleasure seeing/meeting you --It was nice seeing/meeting you --Goodbye/Bye/Bye-bye --Good night --Take care --Have a nice day/evening --Have a good one --see you later/soon --Later --So long",
    answers:
      "Ha sido un placer verte/conocerte --Fue un placer verte/conocerte --Cuídate --Que tenga un buen día/tarde --Que te vaya bien --Hasta luego",
  },
];

const Greetings = () => {
  return (
    <>
      <BackTop />
      <ContainerLesson>
        <Row>
          <Col
            span={24}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 0",
            }}>
            <Table pagination={false} columns={columns} dataSource={data} />
          </Col>
        </Row>
        <Row>
          <Col
            span={24}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 0",
            }}>
            <Title>
              In this class you will learn how to introduce yourself. /Introdius
              iorself /
            </Title>
            <Title>En esta clase aprenderás cómo presentarte.</Title>
            <Table
              pagination={false}
              columns={columns2}
              expandable={{
                expandedRowRender: (record) => (
                  <p style={{ margin: 0 }}>{record.description}</p>
                ),
                rowExpandable: (record) => record.name !== "Not Expandable",
              }}
              dataSource={data2}
            />
          </Col>
        </Row>
        <Row>
          <Col
            span={24}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 0",
            }}>
            <Title>Examples</Title>
            <Table
              style={{ width: "300px", textAling: "center" }}
              columns={columns3}
              dataSource={data3}
              bordered
              pagination={false}
              title={() => "How are you?"}
            />
            <LinkClass to="/ingles-para-principiantes">
              <ButtonVolver>Volver</ButtonVolver>
            </LinkClass>
          </Col>
        </Row>
      </ContainerLesson>
    </>
  );
};

export default Greetings;
