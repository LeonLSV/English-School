import React from "react";
import { Row, Card } from "antd";

const { Meta } = Card;
const tarjeta = {
  width: 240,
  margin: "20px",
};

export const EstrategiasParaAprenderIngles = () => {
  return (
    <>
      <Row justify="center">
        <Card
          hoverable
          style={tarjeta}
          cover={
            <img
              alt="ClassOne"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }>
          <Meta
            title="Aún no completo esta sección"
            description="Proximamente"
          />
        </Card>
      </Row>
    </>
  );
};
