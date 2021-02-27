import React from "react";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";
import { Row, BackTop } from "antd";

import { Table } from "antd";

const columns = [{ title: "Frase", dataIndex: "frase", key: "frase" }];

const data = [
  {
    key: 1,
    frase: "I can wear t-shirts in the summer.",
    description: "Puedo usar camisetas en el verano.",
  },
  {
    key: 2,
    frase: "I can't wear a sweater in the summer.",
    description: "No puedo usar un suéter en el verano. ",
  },
  {
    key: 3,
    frase: "Can I wear a sweater in the summer?.",
    description: "¿Puedo usar un suéter en verano?.",
  },
  {
    key: 4,
    frase: "You can wear shorts in the summer.",
    description: "Puedes usar pantalones cortos en verano.",
  },
  {
    key: 5,
    frase: "You can't wear a wooly hat in the summer.",
    description: "No puedes usar un gorro de lana en verano.",
  },
  {
    key: 6,
    frase: "Can you wear a wooly hat in the summer?.",
    description: "¿Puedes usar un gorro de lana en el verano?.",
  },
  {
    key: 7,
    frase: "She can wear flats during the spring.",
    description: "Ella puede usar baletas durante la primavera.",
  },
  {
    key: 8,
    frase: "She can't wear flats in the winter.",
    description: "Ella no puede usar baletas en invierno.",
  },
  {
    key: 9,
    frase: "Can she wear flats in the winter?.",
    description: "¿Ella puede usar baletas en el invierno?",
  },
  {
    key: 10,
    frase: "He can wear sunglasses in the summer.",
    description: "Él puede usar gafas de sol en verano.",
  },
  {
    key: 11,
    frase: "He can't wear tees in the winter.",
    description: "Él no puede usar camisetas en el invierno.",
  },
  {
    key: 12,
    frase: "Can he wear tees in the winter?.",
    description: "¿Puede usar camisetas en el invierno?.",
  },
  {
    key: 13,
    frase: "The jacket can have pockets or buttons.",
    description: "La chaqueta puede tener bolsillos o botones.",
  },
  {
    key: 14,
    frase: "The tee can't have sleeves.",
    description: "La camiseta no puede tener mangas.",
  },
  {
    key: 15,
    frase: "Can a tee have sleeves?.",
    description: "¿Puede una camiseta tener mangas?",
  },
  {
    key: 16,
    frase: "They can wear dresses in the spring.",
    description: "Ellos pueden usar vestidos en la primavera.",
  },
  {
    key: 17,
    frase: "They can't wear sandals in the spring.",
    description: "Ellos no pueden usar sandalias en la primavera.",
  },
  {
    key: 18,
    frase: "Can they wear sandals in the winter.",
    description: "¿Pueden usar sandalias en el invierno?",
  },
  {
    key: 19,
    frase: "We can wear sneakers in the fall.",
    description: "Nosotros podemos usar zapatillas de deporte en el otoño.",
  },
  {
    key: 20,
    frase: "We can't wear boots in the summer.",
    description: "No podemos llevar botas en verano",
  },
  {
    key: 21,
    frase: "Can we wear sneakers in the fall?.",
    description: "¿Podemos usar zapatillas de deporte en otoño?",
  },
];

export const Can = () => {
  return (
    <>
      <ContainerLesson>
        <BackTop />

        <Row justify="center">
          <Table
            pagination={false}
            columns={columns}
            expandable={{
              expandedRowRender: (record) => (
                <p style={{ margin: 0 }}>{record.description}</p>
              ),
              rowExpandable: (record) => record.frase !== "Not Expandable",
            }}
            dataSource={data}
          />
        </Row>

        <Row justify="center" style={{ paddingTop: "60px" }}>
          <LinkClass to="/ingles-basico-gramatica">
            <ButtonVolver>Volver</ButtonVolver>
          </LinkClass>
        </Row>
      </ContainerLesson>
    </>
  );
};
