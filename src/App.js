import React from "react";
import { Router } from "@reach/router";
import { Row, Col } from "antd";
import { Home } from "./pages/Home";
import MenuClass from "./components/ClassList";
import { EstrategiasParaAprenderIngles } from "./pages/EstrategiasParaAprenderIngles";
import { InglesParaPrincipiantes } from "./pages/InglesParaPrincipiantes";
import { TheAlphabet } from "./components/TheAlphabet";
import { HowDoYouSpellThat } from "./components/HowDoYouSpellThat";
import Introduccion from "./components/Introduccion";
import { Intro } from "./components/Intro";
import PlanAprendizaje from "./components/PlanAprendizaje";
import Greetings from "./components/Greetings";
import { Numbers } from "./components/Numbers";

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
            background: "linear-gradient(70deg, #1890ff, #e6f3fe)",
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
              <Intro exact path="/" />
              <EstrategiasParaAprenderIngles
                exact
                path="/estrategias-para-aprender-ingles-online"
              />
              <InglesParaPrincipiantes
                exact
                path="/ingles-para-principiantes"
              />
              <Introduccion exact path="/Introduccion" />
              <PlanAprendizaje exact path="/plan-aprendizaje" />
              <TheAlphabet exact path="the-alphabet" />
              <HowDoYouSpellThat exact path="/how-do-you-spell-that" />
              <Greetings exact path="/greetings" />
              <Numbers exact path="/numbers" />
            </Router>
          </Col>
        </Row>
      </Row>
    </>
  );
};
