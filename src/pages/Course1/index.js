import React from "react";
import { Row, Card } from "antd";
import classone from "../../images/classone.png";

const { Meta } = Card;
const tarjeta = {
  width: 240,
  margin: "20px",
};

export const Course1 = () => {
  return (
    <>
      <Row justify="space-between">
        <Card
          hoverable
          style={tarjeta}
          cover={<img alt="ClassOne" src={classone} />}>
          <Meta
            title="The alphabet (El alfabeto)"
            description="In this lesson you will learn the alphabet. B is for basketball"
          />
        </Card>

        <Card
          hoverable
          style={tarjeta}
          cover={
            <img
              alt="Clase 2"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }>
          <Meta title="Check" description="Qué hora es?" />
        </Card>
        <Card
          hoverable
          style={tarjeta}
          cover={
            <img
              alt="Clase 2"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }>
          <Meta title="Check" description="Qué hora es?" />
        </Card>
        <Card
          hoverable
          style={tarjeta}
          cover={
            <img
              alt="Clase 2"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }>
          <Meta title="Check" description="Qué hora es?" />
        </Card>
      </Row>
    </>
  );
};
