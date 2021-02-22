import React from "react";
import { Card } from "antd";

const { Meta } = Card;
const tarjeta = {
  width: 240,
  margin: "20px",
};

export const Cards = (props) => {
  return (
    <>
      <Card
        hoverable
        style={tarjeta}
        cover={<img alt={props.title} src={props.image} />}>
        <Meta title={props.title} description={props.description} />
      </Card>
    </>
  );
};
