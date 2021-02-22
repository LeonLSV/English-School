import React from "react";
import { Row, Col, BackTop, Collapse } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";
const { Panel } = Collapse;

const index = () => {
  return (
    <>
      <ContainerLesson>
        <BackTop />
        <Row justify="center">
          <Col>
            <Collapse
              style={{ margin: "20px", width: "350px" }}
              bordered={false}
              defaultActiveKey={["0"]}>
              <Panel header="Let's review the days of the week." key="0">
                <p>Repasemos los días de la semana.</p>
              </Panel>
              <Panel header="Monday / mandei" key="1">
                <p>Lunes</p>
              </Panel>
              <Panel header="Tuesday / chiusdei" key="2">
                <p>Martes</p>
              </Panel>
              <Panel header="Wednesday / wensdai" key="3">
                <p>Miercoles</p>
              </Panel>
              <Panel header="Thursday / tersdai" key="4">
                <p>Jueves</p>
              </Panel>
              <Panel header="Friday / fraidei" key="5">
                <p>Viernes</p>
              </Panel>
              <Panel header="Saturday / sarurdei" key="6">
                <p>Sábado</p>
              </Panel>
              <Panel header="Sunday / sandei" key="7">
                <p>Domingo</p>
              </Panel>
              <Panel header="Let's check propositions of time" key="8">
                <p>Verifiquemos las proposiciones de tiempo.</p>
              </Panel>
              <Panel header="IN THE MORNING" key="9">
                <p>En la mañana</p>
              </Panel>
              <Panel header="IN THE AFTERNOON" key="10">
                <p>En la tarde</p>
              </Panel>
              <Panel header="IN THE EVENING" key="11">
                <p>En la noche</p>
              </Panel>
              <Panel header="AT NIGHT" key="12">
                <p>Por la noche</p>
              </Panel>
              <Panel
                header="PROPOSICIONES DE TIEMPO: IN, ON, AT"
                key="13"></Panel>
              <Panel
                header="I go to the park on Saturday at teen in the morning"
                key="14">
                <p>Voy al parque el sábado a las 10 de la mañana.</p>
              </Panel>
              <Panel
                header="I go to school on Monday at nine in the morning."
                key="15">
                <p>Voy a la escuela el lunes a las 9 de la mañana.</p>
              </Panel>
            </Collapse>
          </Col>
        </Row>
        <Row justify="center">
          <LinkClass to="/ingles-para-principiantes">
            <ButtonVolver>Volver</ButtonVolver>
          </LinkClass>
        </Row>
      </ContainerLesson>
    </>
  );
};

export default index;
