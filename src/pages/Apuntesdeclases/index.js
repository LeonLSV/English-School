import React from "react";
import { Row } from "antd";
import { Cards } from "../../components/Cards";
import { LinkClass } from "../../styles/global";

import classone from "../../images/classone.png";
import these from "../../images/these.png";

const tarjeta = {
  width: 240,
  margin: "50px",
};

export const Apuntesdeclases = () => {
  return (
    <>
      <Row justify="center">
        <LinkClass to="#">
          <Cards
            style={tarjeta}
            title="Presentación"
            description="Simplemente charlamos del proceso de aprendizaje."
            image={classone}
          />
        </LinkClass>
        <LinkClass to="/class-two">
          <Cards
            style={tarjeta}
            title="The alphabet"
            description="Practicamos el alfabeto."
            image={classone}
          />
        </LinkClass>
        <LinkClass to="/class-three">
          <Cards
            style={tarjeta}
            title="Simple present - 3rd person"
            description="Algunas consideraciones a tener en cuenta sobre los verbos que se usan."
            image={classone}
          />
        </LinkClass>
        <LinkClass to="/class-four">
          <Cards
            style={tarjeta}
            title="Demonstratives & possessives"
            description="This, that, these, those, Colors, A, An, The, Possesive adjectives."
            image={these}
          />
        </LinkClass>
      </Row>
    </>
  );
};
