import React from "react";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";
import { Collapse, Row, Col, BackTop } from "antd";
const { Panel } = Collapse;

export const TheAlphabet = () => {
  return (
    <>
      <BackTop />
      <ContainerLesson>
        <Collapse
          style={{ margin: "20px" }}
          bordered={false}
          defaultActiveKey={["0"]}>
          <Panel header="Let's see some examples." key="0">
            <p>A de Aguacate</p>
            <a
              href="https://www.languageguide.org/english/alphabet/"
              target="__blank"
              rel="noreferer">
              Practice here:
            </a>
          </Panel>
          <Panel header="A (ei)" key="1">
            <p>A is for Avocado (Aguacate)</p>
          </Panel>
          <Panel header="B (bi)" key="2">
            <p>B is for Basketball</p>
          </Panel>
          <Panel header="C (ci)" key="3">
            <p>C is for Candle (Vela)</p>
          </Panel>
          <Panel header="D (di)" key="4">
            <p>D is for Dougnut (Dona)</p>
          </Panel>
          <Panel header="E (i)" key="5">
            <p>E is for Elephant (Elefante)</p>
          </Panel>
          <Panel header="F (ef)" key="6">
            <p>F is for Flowers (Flores)</p>
          </Panel>
          <Panel header="G (yi)" key="7">
            <p>G is for Grass (Grama)</p>
          </Panel>
          <Panel header="H (eich)" key="8">
            <p>H is for Hand (Mano)</p>
          </Panel>
          <Panel header="I (ai)" key="9">
            <p>I is for Ice Cream (Helado)</p>
          </Panel>
          <Panel header="J (yei)" key="10">
            <p>J is for Jeans (Jeans)</p>
          </Panel>
          <Panel header="K (quei)" key="11">
            <p>K is for Key (Llaves)</p>
          </Panel>
          <Panel header="L (el)" key="12">
            <p>Is for Lemon (Limon)</p>
          </Panel>
          <Panel header="M (em)" key="13">
            <p>M is for Map (Mapa)</p>
          </Panel>
          <Panel header="N (en)" key="14">
            <p>N is for Notebook (Laptop - Cuaderno)</p>
          </Panel>
          <Panel header="O (ou)" key="15">
            <p>O is for Orange (Naranja)</p>
          </Panel>
          <Panel header="P (pi)" key="16">
            <p>P is for Popcorn (Palomitas de maiz)</p>
          </Panel>
          <Panel header="Q (quiu)" key="17">
            <p>Q is for Quiz (Cuestionario)</p>
          </Panel>
          <Panel header="R (ar)" key="18">
            <p>R is for Rose (Rosa)</p>
          </Panel>
          <Panel header="S (es)" key="19">
            <p>S is for Sand (Arena)</p>
          </Panel>
          <Panel header="T (ti)" key="20">
            <p>T is for Taxi</p>
          </Panel>
          <Panel header="U (iu)" key="21">
            <p>U is for Umbrella (Paraguas)</p>
          </Panel>
          <Panel header="V (vi)" key="22">
            <p>V is for Violin /vaiolin/</p>
          </Panel>
          <Panel header="W (dabol iu)" key="23">
            <p>W is for Water (Agua)</p>
          </Panel>
          <Panel header="X (ex)" key="24">
            <p>X is for X-ray (Rayos X)</p>
          </Panel>
          <Panel header="Y (uai)" key="25">
            <p>Y is for Yoga /iouga/</p>
          </Panel>
          <Panel header="Z (zi)" key="26">
            <p>Z is for Zebra (Cebra)</p>
          </Panel>
          <Panel header="Example" key="27">
            <p>This word (orange) starts with the letter O</p>
          </Panel>
          <Panel header="End" key="28">
            <p>In this class, you learned the alphabet.</p>
            <p>En esta clase, aprendiste el alfabeto.</p>
          </Panel>
        </Collapse>
        <Row justify="center">
          <Col>
            <LinkClass to="/ingles-para-principiantes">
              <ButtonVolver>Volver</ButtonVolver>
            </LinkClass>
          </Col>
        </Row>
      </ContainerLesson>
    </>
  );
};
