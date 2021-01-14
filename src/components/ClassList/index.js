import React from "react";
import { Link } from "./styled";

import { Row, Col } from "antd";

export const ClassList = () => {
  return (
    <>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h2>Courses</h2>
          <Link to="/estrategias-para-aprender-ingles-online">
            Estrategias para aprender inglés online
          </Link>
          <br />
          <Link to="/ingles-para-principiantes">Inglés para principiantes</Link>
          <br />
        </Col>
      </Row>
    </>
  );
};
