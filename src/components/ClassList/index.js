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
import { MailOutlined, SettingOutlined } from "@ant-design/icons";

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
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Home
        </Menu.Item>

        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Courses">
          {/* <Menu.ItemGroup title="Estrategias"> */}
          <Link to="/estrategias-para-aprender-ingles-online">
            <Menu.Item key="setting:1">
              Estrategias para aprender inglés online
            </Menu.Item>
          </Link>
          <Link to="/ingles-para-principiantes">
            <Menu.Item key="setting:2">Inglés para principiantes</Menu.Item>
          </Link>
          {/* </Menu.ItemGroup> */}
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
