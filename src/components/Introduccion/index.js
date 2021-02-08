import React from "react";
import { Row, Col, Modal, Button, Tabs } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";
import { H3, H1Title } from "./styled";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class Introduccion extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 300);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  //

  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <ContainerLesson>
          <Row justify="center" align="middle">
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}>
              <H1Title>Introducción</H1Title>

              <H3>Haz clic en los botones 🙊</H3>
              <Button
                style={{
                  width: "100px",
                  marginBottom: "20px",
                }}
                type="primary"
                onClick={this.showModal}>
                Motivación
              </Button>
              <Modal
                visible={visible}
                title="Busca una motivación para aprender inglés"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button
                    key="submit"
                    type="primary"
                    loading={loading}
                    onClick={this.handleOk}>
                    Listo
                  </Button>,
                ]}>
                <h4>Motivación intrínseca:</h4>
                <p>
                  "Me gusta el idioma" / "Me gusta como suena" / "Quiero ampliar
                  mi panorama cultural"
                </p>
                <h4>Motivación extrínseca:</h4>
                <p>
                  "Porque busco un mejor trabajo" / "Mis estudios me lo exigen"
                  / "Requisito para aplicar a una beca" / "Mi jefe me lo pidio"
                </p>
              </Modal>
              <Tabs
                tabPosition="right"
                size="small"
                onChange={callback}
                type="line">
                <TabPane
                  style={{
                    margin: "20px",
                    maxWidth: "700px",
                  }}
                  tab="Diagnóstico"
                  key="1">
                  <h3>Debes conocer el nivel que tienes.</h3>
                  <p>
                    En el mundo, la escala de medición más conocida para
                    entender cual es tu nivel en las competencias la da el
                    "Marco Común Europeo de Referencia para Idiomas (CEFR)"
                  </p>
                  <p>A1 - A2 - B1 - B2 - C1 - C2</p>
                  <a
                    href="https://docs.google.com/forms/u/0/d/1SuHL5m03cmp47FBe3-_3ue_Sylo29ym2Dm9kXP7bS8g/viewform?ts=5e8cebd1&edit_requested=true"
                    target="_blank"
                    rel="noopener noreferrer">
                    Realiza el test de Platzi
                  </a>
                </TabPane>
                <TabPane
                  style={{
                    margin: "20px",
                    maxWidth: "700px",
                    minWidth: "200px",
                  }}
                  tab="Listening"
                  key="2">
                  <h3>El listening sirve para comprender lo que escuchamos.</h3>
                  <p>Es una competencia pasiva.</p>
                  <p>
                    Nos cuesta entenderlo porque: No se habla como se escribe.
                    Hablan muy rápido y tienen distintos acentos. Los nativos
                    suelen juntar palabras en una oración.
                  </p>
                  <h3>¿Cómo mejorarlo?</h3>
                  <p>
                    Escucha Peliculas o Series en inglés.{" "}
                    <a
                      href="https://www.ted.com/"
                      target="_blank"
                      rel="noopener noreferrer">
                      Charlas TED.
                    </a>
                  </p>
                  <p>
                    Escucha{" "}
                    <a
                      href="https://open.spotify.com/episode/07hskjKvy8mkudO8Q5hN9V"
                      target="_blank"
                      rel="noopener noreferrer">
                      Podcasts
                    </a>{" "}
                    en inglés.
                  </p>
                  <p>
                    Escucha{" "}
                    <a
                      href="https://es.lyricstraining.com/app?nr=1&~channel=web&~feature=redirect&~campaign=none&ref=https%3A%2F%2Fes.lyricstraining.com%2F"
                      target="_blank"
                      rel="noopener noreferrer">
                      Música
                    </a>{" "}
                    en inglés.
                  </p>
                  <p>
                    Practica:{" "}
                    <a
                      href="https://www.englishspanishlink.com/en/english-pronunciation/exercises/abc-listen2.htm"
                      target="_blank"
                      rel="noopener noreferrer">
                      escuchando
                    </a>{" "}
                    en inglés.
                  </p>
                  <p>Asiste a meetups y Clubes de conversación.</p>
                </TabPane>
                <TabPane
                  style={{
                    margin: "20px",
                    maxWidth: "700px",
                    minWidth: "200px",
                  }}
                  tab="Reading"
                  key="3">
                  <h3>El reading sirve para comprender un texto escrito.</h3>
                  <p>
                    Es una competencia pasiva. No debemos generar contenido,
                    sino simplemente leer lo que alguien más ya produjo de
                    manera escrita.
                  </p>
                  <p>
                    Nos cuesta entenderlo porque: Se necesita mucho vocabulario.
                    También nos cuesta por las reglas gramáticales: podemos
                    conocer las palabras pero no sabemos lo que nos quieren
                    decir cuando se conforman en una frase.
                  </p>
                  <h3>¿Cómo mejorarlo?</h3>
                  <p>
                    Poner tus dispositivos en inglés. (Celular, computadora,
                    etc)
                  </p>
                  <p>
                    Leer{" "}
                    <a
                      href="https://www.cambridgeenglish.org/learning-english/activities-for-learners/?skill=reading"
                      target="__blank"
                      rel="noopener noreferrer">
                      Libros
                    </a>{" "}
                    y{" "}
                    <a
                      href="https://www.newsinlevels.com/"
                      target="_blank"
                      rel="noopener noreferrer">
                      articulos
                    </a>{" "}
                    en inglés.
                  </p>
                  <p>
                    Hacer listas de vocabulario. Buscar palabra por palabra para
                    conocer su definición.
                  </p>
                  <a
                    href="https://learnenglish.britishcouncil.org/skills/reading"
                    target="__blank"
                    rel="noopener noreferrer">
                    Más recursos aquí
                  </a>
                </TabPane>
                <TabPane
                  style={{
                    margin: "20px",
                    maxWidth: "700px",
                    minWidth: "200px",
                  }}
                  tab="Speaking"
                  key="4">
                  <h3>
                    En speaking se trata de producir un mensaje oral completo.
                  </h3>
                  <p>
                    Es una competencia activa porque somos nosotros quienes
                    producimos el mensaje.
                  </p>
                  <p>Nos cuesta porque: Necesitas vocabulario y gramática. </p>
                  <h3>¿Cómo mejorarlo?</h3>
                  <p>
                    Practica tu listening para familiarizarte con los sonidos y
                    además el cerebro va a poder decodificar más facilmente para
                    poder transmitirlos.
                  </p>
                  <p>Practicar vocubulario y gramática. </p>
                  <p>Piensa en inglés.</p>
                  <p>Habla solo.</p>
                  <p>Participa de conferencias y meetups.</p>
                  <p>
                    <a
                      href="https://www.tandem.net/es"
                      target="__blank"
                      rel="noopener noreferrer">
                      TADEM = Aplicación para interactuar con personas nativas
                      de otros países.
                    </a>
                  </p>

                  <p>
                    <a
                      href="https://www.hellotalk.com/?lang=es"
                      target="__blank"
                      rel="noopener noreferrer">
                      HELLO TALK = Aplicación para interactuar con personas
                      nativas de otros países.
                    </a>
                  </p>
                </TabPane>
                <TabPane
                  style={{
                    margin: "20px",
                    maxWidth: "700px",
                    minWidth: "200px",
                  }}
                  tab="Writing"
                  key="5">
                  <h3>
                    El Writing nos va a servir para producir un texto coherente.
                  </h3>
                  <p>
                    Es una competencia activa porque somos nosotros quienes
                    producimos el mensaje por medio escrito.
                  </p>
                  <p>
                    Nos cuesta porque: Requiere mucho esfuerzo de voluntad para
                    escribir.
                  </p>
                  <h3>¿Cómo mejorarlo?</h3>
                  <p>Chatea en inglés con amigos que dominen el idioma.</p>
                  <p>Estudia gramática.</p>
                  <p>Practica tu reading</p>

                  <p>
                    <a
                      href="https://languagetool.org/es/"
                      target="__blank"
                      rel="noopener noreferrer">
                      LanguageTool = Corrector gramatical y ortográfico.
                    </a>
                  </p>

                  <p>
                    <a
                      href="https://www.grammarly.com/"
                      target="__blank"
                      rel="noopener noreferrer">
                      Grammarly = Plugin gratuito para Chrome que te ayuda con
                      la gramática.
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.grammarly.com/"
                      target="__blank"
                      rel="noopener noreferrer">
                      Cambridge English: Write & Improve = "Elija un tema,
                      Escriba una redacción y reciba una respuesta al instante."
                    </a>
                  </p>
                </TabPane>
              </Tabs>
              <LinkClass to="/estrategias-para-aprender-ingles-online">
                <ButtonVolver>Volver</ButtonVolver>
              </LinkClass>
            </Col>
          </Row>
        </ContainerLesson>
      </>
    );
  }
}
export default Introduccion;
