import React from "react";
import { Row, BackTop } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";

import jobs1 from "../../images/jobs1.png";
import jobs2 from "../../images/jobs2.png";

const VocabularyJobs = () => {
  return (
    <>
      <ContainerLesson>
        <BackTop />
        <Row
          justify="center"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
          }}>
          <img style={{ width: "90%" }} src={jobs1} alt="jobs1" />
          <h3>Profesor / ticher</h3>
          <h3>Productor / producer</h3>
          <h3>Ingeniero / inchenier</h3>
          <h3>Hombre de negocios / bisnesmen</h3>
        </Row>
        <Row
          justify="center"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
          }}>
          <img style={{ width: "90%" }} src={jobs2} alt="jobs1" />
          <h3>Diseñador / disainer</h3>
          <h3>Contador / acauntent</h3>
          <h3>Periodista / chornalist</h3>
        </Row>
        <Row justify="center" style={{ paddingTop: "60px" }}>
          <LinkClass to="/ingles-basico-fundamentos">
            <ButtonVolver>Volver</ButtonVolver>
          </LinkClass>
        </Row>
      </ContainerLesson>
    </>
  );
};

export default VocabularyJobs;
