import React, { useEffect } from "react";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";
import { Collapse, Col, Row, BackTop } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const { Panel } = Collapse;

export const Numbers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // let tl = new TimelineLite({ delay: 0.3 });

  useEffect(() => {
    // tl.staggerFrom(
    //   ".animacion1",
    //   1,
    //   { y: 15, opacity: 0, ease: Power3.easeOut },
    //   0.15,
    //   "Start"
    // );
    gsap.from(".content-main", {
      duration: 3,
      y: "100",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".content-main",
        start: "top 100%",
        end: "top center",
        scrub: "true",
        markers: "true",
      },
    });
  });
  return (
    <>
      <ContainerLesson>
        <BackTop />
        <Collapse
          style={{ margin: "20px" }}
          bordered={false}
          defaultActiveKey={["0"]}>
          <Panel
            header="In this lesson you will learn the numbers 1 to 30. "
            key="0">
            <p
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="5000"
              data-aos-duration="5000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center">
              En esta clase aprenderás los números del 1 al 30.
            </p>
            <a
              href="https://www.languageguide.org/english/numbers/"
              target="__blank"
              rel="noreferer noopener">
              Practice:
            </a>
            <br />
            <a
              href="https://agendaweb.org/exercises/vocabulary/numbers/numbers-teen-ty"
              target="__blank"
              rel="noreferer noopener">
              And here:
            </a>
          </Panel>
          <Panel header="one (uan)" key="1">
            <p>1</p>
          </Panel>
          {/* <div className="animacion1">Clase</div>
          <div className="animacion1">Clase</div> */}

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
          <div className="content">
            <div className="content-main">
              Hoasldalsjs dflksdf sdflsjkdf sdfsldkfas dfasd fms
            </div>
          </div>
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
          <Panel header="Complete the sentence 1" key="31">
            <p>Completa la oración</p>
            <h4>How many (meny) DOGS are there</h4>
            <p>¿Cuántos perros hay ahí?</p>
            <p>(Foto con 3 perros)</p>
            <h4>There are three dogs</h4>
            <p>Ahí hay tres perros</p>
          </Panel>
          <Panel header="Complete the sentence 2" key="32">
            <h4>How many BOOKS are there</h4>
            <p>¿Cuántos libros hay ahí?</p>
            <p>(Foto con 8 libros)</p>
            <h4>There are eight books</h4>
            <p>Ahí hay ocho libros</p>
          </Panel>
          <Panel header="Now you know the numbers from one to thirty." key="33">
            <h4>Ahora conoces los números del 1 al 30.</h4>
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
