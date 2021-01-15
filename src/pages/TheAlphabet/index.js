import React from "react";

import { Collapse } from "antd";

const { Panel } = Collapse;

export const TheAlphabet = () => {
  return (
    <>
      <Collapse bordered={false} defaultActiveKey={["0"]}>
        <Panel header="Let's see some examples." key="0">
          <p>A de Aguacate</p>
        </Panel>
        <Panel header="A" key="1">
          <p>A is for Avocado (Aguacate)</p>
        </Panel>
        <Panel header="B" key="2">
          <p>B is for Basketball</p>
        </Panel>
        <Panel header="C" key="3">
          <p>C is for Candle (Vela)</p>
        </Panel>
        <Panel header="D" key="4">
          <p>D is for Dougnut (Dona)</p>
        </Panel>
        <Panel header="E" key="5">
          <p>E is for Elephant (Elefante)</p>
        </Panel>
        <Panel header="F" key="6">
          <p>F is for Flowers (Flores)</p>
        </Panel>
      </Collapse>
    </>
  );
};
