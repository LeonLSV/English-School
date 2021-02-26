import React, { useEffect } from "react";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";
import { Collapse, Col, Row, BackTop } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";
import numberss from "../../images/numbers1-100.gif";

const { Panel } = Collapse;

export const ClothesForSeasons = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <ContainerLesson>
        <BackTop />
        <Collapse
          style={{ margin: "20px" }}
          bordered={false}
          defaultActiveKey={["0"]}>
          <Panel
            header="Now we're going to practice numbers from 30 to 100."
            key="0">
            <p>Ahora vamos a practicar los números del 30 al 100.</p>
          </Panel>
          <Panel header="Thirty (zery)" key="1">
            <p>30</p>
          </Panel>
          <Panel header="Fourty (fory)" key="2">
            <p>40</p>
          </Panel>
          <Panel header="Fifty (fifty)" key="3">
            <p>50</p>
          </Panel>
          <Panel header="Sixty (sixty)" key="4">
            <p>60</p>
          </Panel>
          <Panel header="Seventy (seventy)" key="5">
            <p>70</p>
          </Panel>
          <Panel header="Eighty (eity)" key="6">
            <p>80</p>
          </Panel>
          <Panel header="Ninety (nainty)" key="7">
            <p>90</p>
          </Panel>
          <Panel header="One hundred (uan handret)" key="8">
            <p>100</p>
          </Panel>
        </Collapse>
        <Row justify="center">
          <Col
            lg={20}
            md={24}
            style={{ display: "flex", justifyContent: "center" }}>
            <img
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="0"
              // data-aos-duration="3000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
              style={{ width: "90%" }}
              src={numberss}
              alt="numbers"
            />
          </Col>
        </Row>
        <Row justify="center" style={{ paddingTop: "60px" }}>
          <LinkClass to="/ingles-basico-gramatica">
            <ButtonVolver>Volver</ButtonVolver>
          </LinkClass>
        </Row>
      </ContainerLesson>
    </>
  );
};
