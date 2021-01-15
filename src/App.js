import React from "react";
import { Router } from "@reach/router";
import { Row, Col } from "antd";
import { Home } from "./pages/Home";
import MenuClass from "./components/ClassList";
import { EstrategiasParaAprenderIngles } from "./pages/EstrategiasParaAprenderIngles";
import { InglesParaPrincipiantes } from "./pages/InglesParaPrincipiantes";
import { TheAlphabet } from "./pages/TheAlphabet";

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
      <Row justify="center" align="middle">
        <Col span={24}>
          <MenuClass />
        </Col>
        <Row justify="center" align="middle">
          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
            <Router>
              <EstrategiasParaAprenderIngles
                exact
                path="/estrategias-para-aprender-ingles-online"
              />
              <InglesParaPrincipiantes
                exact
                path="/ingles-para-principiantes"
              />
              <TheAlphabet exact path="the-alphabet" />
            </Router>
          </Col>
        </Row>
      </Row>
    </>
  );
};
