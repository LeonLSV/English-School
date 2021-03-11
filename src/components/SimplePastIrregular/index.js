import React from "react";
import { Row, BackTop, Col } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";

import simplepast from "../../images/simplepast.png";

export const SimplePastIrregular = () => {
  return (
    <>
      <ContainerLesson>
        <BackTop />
        <Row
          justify="center"
          style={{
            width: "95vw",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}>
          <Col lg={16} md={24}>
            <h1>Simple Past</h1>
            <p>Presente simple. Verbos IRREGULARES</p>
            <h1 style={{ paddingTop: "60px" }}>Examples</h1>
            <img
              style={{ paddingTop: "30px", width: "80%" }}
              src={simplepast}
              alt="verbs"
            />
            <h1>Primer renglón</h1>
            <h3>Verbo Ver / See</h3>
            <h2>SAW (soo) es el verbo irregular de SEE (sii)</h2>
            <h1>Segundo renglón</h1>
            <h3>Verbo Comer / Eat</h3>
            <h2>ATE (eit) es el verbo irregular de EAT (it)</h2>
            <h1>Tercer renglón</h1>
            <h3>Verbo Convertirse / Become</h3>
            <h2>BECAME (biqueim) es el verbo irregular de BECOME (bicom)</h2>
            <h1>Cuarto renglón</h1>
            <h3>Verbo Hacer / Do</h3>
            <h2>DID (dit) es el verbo irregular de DO (du)</h2>
            <h1>The next one (El siguiente)</h1>
            <h3>Verbo Traer / Bring</h3>
            <h2>BROUGHT (brot) es el verbo irregular de BRING (brink)</h2>
            <h1>The next one (El siguiente)</h1>
            <h3>Verbo Comprar / Buy</h3>
            <h2>BOUGHT (bot) es el verbo irregular de BUY (bai)</h2>
            <h1>The next one (El siguiente)</h1>
            <h3>Verbo Venir / Come</h3>
            <h2>CAME (keim) es el verbo irregular de COME (com)</h2>
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
