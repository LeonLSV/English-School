import React from "react";
import { Router } from "@reach/router";
import { Row, Col } from "antd";

import { Home } from "./pages/Home";
import MenuClass from "./components/ClassList";
import { EstrategiasParaAprenderIngles } from "./pages/EstrategiasParaAprenderIngles";
import { InglesParaPrincipiantes } from "./pages/InglesParaPrincipiantes";
import { Tallerdeinglesparaprincipiantes } from "./pages/Tallerdeinglesparaprincipiantes";
import { Apuntesdeclases } from "./pages/Apuntesdeclases";
import { InglesBasicoFundamentos } from "./pages/InglesBasicoFundamentos";
import { InglesBasicoGramatica } from "./pages/InglesBasicoGramatica";
import { InglesBasicoDescripciones } from "./pages/InglesBasicoDescripciones";

import { TheAlphabet } from "./components/TheAlphabet";
import { HowDoYouSpellThat } from "./components/HowDoYouSpellThat";
import Introduccion from "./components/Introduccion";
import { Intro } from "./components/Intro";
import PlanAprendizaje from "./components/PlanAprendizaje";
import Greetings from "./components/Greetings";
import { Numbers } from "./components/Numbers";
import { Jobs } from "./components/Jobs";
import ToBe from "./components/ToBe";
import Pronouns from "./components/Pronouns";
import WhatTime from "./components/WhatTime";
import Daysoftheweek from "./components/Daysoftheweek";
import Places from "./components/Places";
import Hobbies from "./components/Hobbies";
import Likes from "./components/Likes";
import AdverbsOfFrequency from "./components/AdverbsOfFrequency";
import GreetingsAndIntroducing from "./components/GreetingsAndIntroducing";
import UsefulExpressions from "./components/UsefulExpressions";
import UserfulExpressions2 from "./components/UserfulExpressions2";
import VocabularyJobs from "./components/VocabularyJobs";
import { Numbers100 } from "./components/Numbers100";
import { ClothesForSeasons } from "./components/ClothesForSeasons";
import { Can } from "./components/Can";
import { Abilities } from "./components/Abilities";
import { VerbPatrons } from "./components/VerbPatrons";
import { UsefulExpressions3 } from "./components/UsefulExpressions3";
import { PresentSimple } from "./components/PresentSimple";
import { Rutines } from "./components/Rutines";
import { Questions } from "./components/Questions";
import { UsefulExpressions4 } from "./components/UsefulExpressions4";
import { Adjectives } from "./components/Adjectives";
import { ThePast } from "./components/ThePast";
import { UsefulExpressionsPast } from "./components/UsefulExpressionsPast";
import { PastEvents } from "./components/PastEvents";
import { SimplePastIrregular } from "./components/SimplePastIrregular";
import { Future } from "./components/Future";
import { UsefulExpressionsFuture } from "./components/UsefulExpressionsFuture";

import { ClassFour } from "./components/Notes/ClassFour";

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
              {/* PAGES */}
              <Intro exact path="/" />
              <EstrategiasParaAprenderIngles
                exact
                path="/estrategias-para-aprender-ingles-online"
              />
              <InglesParaPrincipiantes
                exact
                path="/ingles-para-principiantes"
              />
              <Tallerdeinglesparaprincipiantes
                exact
                path="/taller-de-ingles-para-principiantes"
              />
              <InglesBasicoFundamentos
                exact
                path="/ingles-basico-fundamentos"
              />
              <InglesBasicoGramatica exact path="/ingles-basico-gramatica" />
              <InglesBasicoDescripciones
                exact
                path="/ingles-basico-descripciones"
              />
              <Apuntesdeclases exact path="/apuntes-de-clases" />
              {/* COMPONENTSSSS */}
              <Introduccion exact path="/Introduccion" />
              <PlanAprendizaje exact path="/plan-aprendizaje" />
              <TheAlphabet exact path="the-alphabet" />
              <HowDoYouSpellThat exact path="/how-do-you-spell-that" />
              <Greetings exact path="/greetings" />
              <Numbers exact path="/numbers" />
              <Jobs exact path="/jobs" />
              <ToBe exact path="/tobe" />
              <Pronouns exact path="/pronouns" />
              <WhatTime exact path="/what-time-is-it" />
              <Daysoftheweek exact path="/days-of-the-week" />
              <Places exact path="/places" />
              <Hobbies exact path="/hobbies" />
              <Likes exact path="/likes" />
              <AdverbsOfFrequency exact path="/adverbs" />
              <GreetingsAndIntroducing
                exact
                path="/greetings-and-introducing"
              />
              <UsefulExpressions exact path="/useful-expressions" />
              <VocabularyJobs exact path="/vocabulary-jobs" />
              <UserfulExpressions2 exact path="/useful-expressions-meeting" />
              <Numbers100 exact path="/numbers100" />
              <ClothesForSeasons exact path="/clothes" />
              <Can exact path="/can" />
              <Abilities exact path="/abilities" />
              <VerbPatrons exact path="/verb-patterns" />
              <UsefulExpressions3 exact path="/useful-expressions3" />
              <PresentSimple exact path="/grammar-present-simple" />
              <Rutines exact path="/rutines" />
              <Questions exact path="/questions" />
              <UsefulExpressions4 exact path="/useful-expressions4" />
              <Adjectives exact path="/adjectives1" />
              <ThePast exact path="/the-past" />
              <UsefulExpressionsPast exact path="/useful-expressions-past" />
              <PastEvents exact path="/past-events" />
              <SimplePastIrregular exact path="/simple-past-irregular" />
              <Future exact path="/future" />
              <UsefulExpressionsFuture
                exact
                path="/useful-expressions-future"
              />
              {/* Apuntes de las clases en vivo */}
              <ClassFour exact path="/class-four" />
            </Router>
          </Col>
        </Row>
      </Row>
    </>
  );
};
