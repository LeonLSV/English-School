import React from "react";
import { Row, Col, Modal, Button } from "antd";
import { H3 } from "./styled";

//           <Modal
//             title="Motivación"
//             visible={isModalVisible}
//             onOk={handleOk}
//             onCancel={handleCancel}>
//             <p>Busca una motivación para aprender inglés</p>
//             <p>
//               Motivación intrínseca: "Me gusta el idioma" "Me gusta como suena"
//               "Quiero ampliar mi panorama cultural"
//             </p>
//             <p>Some contents...</p>
//           </Modal>
//         </Col>
//       </Row>
//     </>
//   );
// };

class Motivacion extends React.Component {
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

  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <Row justify="center" align="middle">
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}>
            <H3>Haz clic en los botones 🙊</H3>
            <Button type="primary" onClick={this.showModal}>
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
          </Col>
        </Row>
      </>
    );
  }
}
export default Motivacion;
