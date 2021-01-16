import React from "react";
import { Row, Col } from "antd";

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
          <h1>Welcome to my English School</h1>
        </Col>
      </Row>
    </>
  );
};
