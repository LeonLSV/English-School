import React from "react";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";
import { Table, Row, Col, Space, BackTop } from "antd";

const columns = [
  {
    title: "Affirmative",
    dataIndex: "name",
  },
  {
    title: "",
    dataIndex: "chinese",
  },
];
const columns1 = [
  {
    title: "Negative",
    dataIndex: "name",
  },
  {
    title: "",
    dataIndex: "chinese",
  },
];
const columns2 = [
  {
    title: "Interrogative",
    dataIndex: "name",
  },
  {
    title: "",
    dataIndex: "chinese",
  },
];

const data = [
  {
    key: "1",
    name: "I (yo)",
    chinese: "am",
  },
  {
    key: "2",
    name: "You (tu)",
    chinese: "are",
  },
  {
    key: "3",
    name: "He (él)",
    chinese: "is",
  },
  {
    key: "4",
    name: "She (ella)",
    chinese: "is",
  },
  {
    key: "5",
    name: "It ",
    chinese: "is",
  },
  {
    key: "6",
    name: "We (nosotros)",
    chinese: "are",
  },
  {
    key: "7",
    name: "You",
    chinese: "are",
  },
  {
    key: "8",
    name: "They (ellos)",
    chinese: "are",
  },
];
const data1 = [
  {
    key: "1",
    name: "I (yo)",
    chinese: "am not",
  },
  {
    key: "2",
    name: "You (tu)",
    chinese: "are not",
  },
  {
    key: "3",
    name: "He (él)",
    chinese: "is not",
  },
  {
    key: "4",
    name: "She (ella)",
    chinese: "is not",
  },
  {
    key: "5",
    name: "It ",
    chinese: "is not",
  },
  {
    key: "6",
    name: "We (nosotros)",
    chinese: "are not",
  },
  {
    key: "7",
    name: "You",
    chinese: "are not",
  },
  {
    key: "8",
    name: "They (ellos)",
    chinese: "are not",
  },
];
const data2 = [
  {
    key: "1",
    name: "Am",
    chinese: "I?",
  },
  {
    key: "2",
    name: "Are",
    chinese: "you?",
  },
  {
    key: "3",
    name: "Is",
    chinese: "he?",
  },
  {
    key: "4",
    name: "Is",
    chinese: "she?",
  },
  {
    key: "5",
    name: "Is",
    chinese: "it?",
  },
  {
    key: "6",
    name: "Are",
    chinese: "we?",
  },
  {
    key: "7",
    name: "Are",
    chinese: "you?",
  },
  {
    key: "8",
    name: "Are",
    chinese: "they?",
  },
];

const ToBe = () => {
  return (
    <>
      <BackTop />
      <ContainerLesson>
        <Row justify="center" align="middle">
          <Col span={24} style={{ textAlign: "center", margin: "20px 0" }}>
            <Space direction="vertical" size="large">
              <h1>Verb to be</h1>
              <Row justify="center" align="middle">
                <Table
                  columns={columns}
                  dataSource={data}
                  style={{ margin: "20px" }}
                  size="small"
                  pagination={false}
                />
                <Table
                  columns={columns1}
                  style={{ margin: "20px" }}
                  dataSource={data1}
                  size="small"
                  pagination={false}
                />
                <Table
                  columns={columns2}
                  style={{ margin: "20px" }}
                  dataSource={data2}
                  size="small"
                  pagination={false}
                />
              </Row>
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

export default ToBe;
