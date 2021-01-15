import React from "react";

import { Collapse } from "antd";

const { Panel } = Collapse;

export const HowDoYouSpellThat = () => {
  return (
    <>
      <Collapse bordered={false} defaultActiveKey={["0"]}>
        <Panel header="Let's see some examples." key="0">
          <p>A de Aguacate</p>
        </Panel>
        <Panel header="A (ei)" key="1">
          <p>A is for Avocado (Aguacate)</p>
        </Panel>
        <Panel header="B (bi)" key="2">
          <p>B is for Basketball</p>
        </Panel>
      </Collapse>
    </>
  );
};
