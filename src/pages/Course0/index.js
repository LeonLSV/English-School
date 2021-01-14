import React from "react";
import { Card } from "antd";
const { Meta } = Card;

export const Course0 = () => {
  return (
    <>
      <Card
        hoverable
        style={{ width: 250 }}
        cover={
          <img
            alt="Clase 1"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }>
        <Meta title="What time is it" description="Qué hora es?" />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="Clase 1"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }>
        <Meta title="What time is it" description="Qué hora es?" />
      </Card>
    </>
  );
};
