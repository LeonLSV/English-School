import React from "react";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";
import { Collapse, Col, Row } from "antd";

const { Panel } = Collapse;

export const HowDoYouSpellThat = () => {
  return (
    <>
      <ContainerLesson>
        <Collapse
          style={{ margin: "20px" }}
          bordered={false}
          defaultActiveKey={["0"]}>
          <Panel header="Let's see some examples." key="0">
            <p>How do you spell...</p>
          </Panel>
          <Panel header="How do you spell Apple?" key="1">
            <p>a-p-p-l-e</p>
          </Panel>
          <Panel header="How do you spell Monkey?" key="2">
            <p>M-o-n-k-e-y</p>
          </Panel>
          <Panel header="How do you spell Robot?" key="3">
            <p>R-o-b-o-t</p>
          </Panel>
          <Panel header="Let's see one more example" key="4">
            <p>How do you spell your name?</p>
            <p>My name is Ramiro</p>
            <p>My name is spelled: R-a-m-i-r-o</p>
            <p>My last name is spelled C-o-n-t-r-e-r-a-s</p>
          </Panel>
          <Panel header="Let's see one more example" key="5">
            <p>my last name is spelled C-o-n-t-r-e-r-a-s</p>
          </Panel>
          <Panel
            header="In this class you learned how do you spell using the letters of the alphabet."
            key="5">
            <p>See you later.</p>
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
