import React from "react";
import { Row, BackTop, Col } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";

import verbs from "../../images/verbs.png";

export const PastEvents = () => {
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
          <Col lg={20} md={24}>
            <h1>Past events</h1>
            <p>
              Eventos pasados. Recuerda que hay verbos <b>Regulares</b> e{" "}
              <b>Irregulares</b>. En este caso veremos los verbos Regulares que
              no cambian la conjugación en los diferentes tiempos.
            </p>
            <h1 style={{ paddingTop: "60px" }}>Examples</h1>
            <h2>I watched a movie</h2>
            <p>Vi una pelicula</p>
            <h2>I didn't watch a movie</h2>
            <p>No vi una pelicula</p>
            <h2>Did I watch a movie?</h2>
            <p>¿Vi una pelicula?</p>
            <h2>You stayed home</h2>
            <p>Te quedaste en casa</p>
            <h2>You didn't stay home</h2>
            <p>No te quedaste en casa</p>
            <h2>Where did you stay?</h2>
            <p>¿Dónde te quedas?</p>
            <h2>She studied all night</h2>
            <p>Ella estudio </p>
            <h2>She didn't study all night</h2>
            <p>Ella no estudio toda la noche</p>
            <h2>What did she study?</h2>
            <p>¿Qué estudio ella?</p>
            <h2>He worked late</h2>
            <p>Él trabajó hasta tarde</p>
            <h2>He didn't work late</h2>
            <p>Él no trabajo hasta tarde</p>
            <h2>Why did he work late?</h2>
            <p>¿Por qué trabajó hasta tarde?</p>
            <h2>It worked fine last night</h2>
            <p>Funcionó bien anoche</p>
            <h2>It didn't work fine last night</h2>
            <p>No funcionó bien anoche</p>
            <h2>Did it work fine last night?</h2>
            <p>¿Funcionó bien anoche?</p>
            <h2>They cooked dinner</h2>
            <p>Ellos cocinaron la cena</p>
            <h2>They didn't cook dinner</h2>
            <p>No cocinaron la cena</p>
            <h2>Did they cook dinner?</h2>
            <p>¿Prepararon la cena?</p>
            <h2>We cleaned the house</h2>
            <p>Limpiamos la casa</p>
            <h2>We didn't clean the house</h2>
            <p>No limpiamos la casa</p>
            <h2>What did we clean?</h2>
            <p>¿Qué limpiamos?</p>
            <img
              style={{ paddingTop: "60px", width: "90%" }}
              src={verbs}
              alt="verbs"
            />
            <h1>Pronunciación</h1>
            <h3>Silent e</h3>
            <h2>Close / clous</h2>
            <h2>Closed / cloust</h2>
            <h2>Die / dai</h2>
            <h2>Died / dait</h2>
            <h2>Phone / foun</h2>
            <h2>Phoned / fount</h2>
            <h3>Vowel + y (Vocal)</h3>
            <h2>Play / plei</h2>
            <h2>Played / pleit</h2>
            <h2>Destroy / distroy</h2>
            <h2>Destroyed / destroit</h2>
            <h2>Show / show</h2>
            <h2>Showed / showt</h2>
            <h3>Consonant + y</h3>
            <h2>Marry / merri</h2>
            <h2>Married / merrit</h2>
            <h2>Carry / querry</h2>
            <h2>Carried / querrit</h2>
            <h2>Study / stady</h2>
            <h2>Studied / stadit</h2>
            <h3>Other forms</h3>
            <h2>Visit / visit</h2>
            <h2>Visited / visitet</h2>
            <h2>Miss / mis</h2>
            <h2>Missed / mist</h2>
            <h2>Watch / uoch</h2>
            <h2>Watched / oucht</h2>
            <h2>Finish / fenish</h2>
            <h2>Finished / fenisht</h2>
            <h2>Fix / fix</h2>
            <h2>Fixed / fixt</h2>
            <h2>Buzz / boz</h2>
            <h2>Buzzed / bozt</h2>
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
