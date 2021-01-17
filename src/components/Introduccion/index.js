import React from "react";
import { Row, Col, Modal, Button, Tabs } from "antd";

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
                "Porque busco un mejor trabajo" / "Mis estudios me lo exigen" /
                "Requisito para aplicar a una beca" / "Mi jefe me lo pidio"
              </p>
            </Modal>
            <Tabs
              style={{ margin: "20px", Width: "800px", minWidth: "270px" }}
              onChange={callback}
              type="card">
              <TabPane tab="Diagnóstico" key="1">
                <p>Debes conocer el nivel que tienes.</p>
                <p>
                  En el mundo, la escala de medición más conocida para entender
                  cual es tu nivel en las competencias la da el "Marco Común
                  Europeo de Referencia para Idiomas (CEFR)"
                </p>
                <p>A1 - A2 - B1 - B2 - C1 - C2</p>
                <a
                  href="https://docs.google.com/forms/u/0/d/1SuHL5m03cmp47FBe3-_3ue_Sylo29ym2Dm9kXP7bS8g/viewform?ts=5e8cebd1&edit_requested=true"
                  target="_blank"
                  rel="noopener noreferrer">
                  Realiza el test de Platzi
                </a>
              </TabPane>
              <TabPane tab="Listening" key="2">
                <h3>El listening sirve para comprender lo que escuchamos.</h3>
                <p>Es una competencia pasiva.</p>
                <p>
                  Nos cuesta entenderlo porque: No se habla como se escribe.
                  Hablan muy rápido y tienen distintos acentos. Los nativos
                  suelen juntar palabras en una oración.
                </p>
                <h3>¿Cómo mejorarlo?</h3>https://www.ted.com/
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
              </TabPane>
              <TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </>
    );
  }
}
export default Introduccion;
