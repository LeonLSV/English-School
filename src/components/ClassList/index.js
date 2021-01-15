import React from "react";
import { Link } from "./styled";

// import { Row, Col } from "antd";

// export const ClassList = () => {
//   return (
//     <>
//       <Row>
//         <Col style={{ textAlign: "center" }}>
//           <h2>Courses</h2>
//           <Link to="/estrategias-para-aprender-ingles-online">
//             Estrategias para aprender inglés online
//           </Link>
//           <br />
//           <Link to="/ingles-para-principiantes">Inglés para principiantes</Link>
//           <br />
//         </Col>
//       </Row>
//     </>
//   );
// };

import { Menu } from "antd";
import { BookOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

class MenuClass extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal">
        <Menu.Item key="mail">
          <Link to="/">Home</Link>
        </Menu.Item>

        <SubMenu
          style={{ margin: "0 10px" }}
          key="SubMenu"
          icon={<BookOutlined />}
          title="Courses">
          <Menu.Item key="setting:1">
            <Link to="/estrategias-para-aprender-ingles-online">
              Estrategias para aprender inglés online{" "}
            </Link>
          </Menu.Item>

          <Menu.Item key="setting:2">
            <Link to="/ingles-para-principiantes">
              Inglés para principiantes
            </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="alipay">
          <a
            href="https://ramirocontrerasleon.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
            Creator
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuClass;
