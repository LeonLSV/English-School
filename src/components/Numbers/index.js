import React from "react";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";

import { Collapse, Col, Row } from "antd";
const { Panel } = Collapse;

export const Numbers = () => {
  return (
    <>
      <ContainerLesson>
        <Collapse
          style={{ margin: "20px" }}
          bordered={false}
          defaultActiveKey={["0"]}>
          <Panel
            header="In this lesson you will learn the numbers 1 to 30. "
            key="0">
            <p>En esta clase aprenderás los números del 1 al 30.</p>
            <a
              href="https://www.languageguide.org/english/numbers/"
              target="__blank"
              rel="noreferer noopener">
              Practice:
            </a>
          </Panel>
          <Panel header="one (uan)" key="1">
            <p>1</p>
          </Panel>
          <Panel header="two (chu)" key="2">
            <p>2</p>
          </Panel>
          <Panel header="three (ztri)" key="3">
            <p>3</p>
          </Panel>
          <Panel header="four (for)" key="4">
            <p>4</p>
          </Panel>
          <Panel header="five (faiv)" key="5">
            <p>5</p>
          </Panel>
          <Panel header="six (six)" key="6">
            <p>6</p>
          </Panel>
          <Panel header="seven (seven)" key="7">
            <p>7</p>
          </Panel>
          <Panel header="eight (eit)" key="8">
            <p>8</p>
          </Panel>
          <Panel header="nine (nain)" key="9">
            <p>9</p>
          </Panel>
          <Panel header="ten (ten)" key="10">
            <p>10</p>
          </Panel>
          <Panel header="eleven (eleven)" key="11">
            <p>11</p>
          </Panel>
          <Panel header="Twelve (ctuelf)" key="12">
            <p>12</p>
          </Panel>
          <Panel header="thirteen (zertin)" key="13">
            <p>13</p>
          </Panel>
          <Panel header="fourteen (fortin)" key="14">
            <p>14</p>
          </Panel>
          <Panel header="fifteen (fiftin)" key="15">
            <p>15</p>
          </Panel>
          <Panel header="sixteen (sixtin)" key="16">
            <p>16</p>
          </Panel>
          <Panel header="seventeen (seventin)" key="17">
            <p>17</p>
          </Panel>
          <Panel header="eighteen (eitin)" key="18">
            <p>18</p>
          </Panel>
          <Panel header="ninteen (naintin)" key="19">
            <p>19</p>
          </Panel>
          <Panel header="twenty (tuenti)" key="20">
            <p>20</p>
          </Panel>
          <Panel header="twentyone (tuentiuan)" key="21">
            <p>21</p>
          </Panel>
          <Panel header="twentytwo (tuentichu)" key="22">
            <p>22</p>
          </Panel>
          <Panel header="twentythree (tuentitri)" key="23">
            <p>23</p>
          </Panel>
          <Panel header="twentyfour (twentyfor)" key="24">
            <p>24</p>
          </Panel>
          <Panel header="twentyfive (tuentifaiv)" key="25">
            <p>25</p>
          </Panel>
          <Panel header="twentysix (tuentisix)" key="26">
            <p>26</p>
          </Panel>
          <Panel header="twentyseven (tuentiseven)" key="27">
            <p>27</p>
          </Panel>
          <Panel header="twentyeight (tuentieit)" key="28">
            <p>28</p>
          </Panel>
          <Panel header="twentynine (tuentinain)" key="29">
            <p>29</p>
          </Panel>
          <Panel header="thirty (zerdi)" key="30">
            <p>30</p>
          </Panel>
        </Collapse>
        <Row justify="center">
          <Col>
            <LinkClass to="/ingles-para-principiantes">
              <ButtonVolver>Volver</ButtonVolver>
            </LinkClass>
          </Col>
        </Row>
      </ContainerLesson>
    </>
  );
};
