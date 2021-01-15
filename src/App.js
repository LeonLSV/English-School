import React from "react";
import { Router } from "@reach/router";
import { Row, Col } from "antd";
import { Home } from "./pages/Home";
// import { ClassList } from "./components/ClassList";
import MenuClass from "./components/ClassList";
import { Course0 } from "./pages/Course0";
import { Course1 } from "./pages/Course1";

export const App = () => {
  return (
    <>
      <Row justify="center">
        <Col
          span={24}
          style={{
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#e6e6e6",
          }}>
          <Home />
        </Col>
      </Row>
      <Row>
        <Col>
          <MenuClass />
        </Col>
        <Router>
          <Course0 exact path="/estrategias-para-aprender-ingles-online" />
          <Course1 exact path="/ingles-para-principiantes" />
        </Router>
      </Row>
    </>
  );
};
