import React from "react";
import { Row, Col } from "antd";
import { Titulo } from "./styled";

export const Home = () => {
  return (
    <>
      <Row justify="center" align="middle">
        <Col
          span={24}
          style={{
            height: "140px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Titulo>Welcome to my English School</Titulo>
        </Col>
      </Row>
    </>
  );
};
