import React, { useRef } from "react";
import { Row, Col, BackTop } from "antd";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";
import on from "../../images/on.png";
import between from "../../images/between.png";
import behind from "../../images/behind.png";
import front from "../../images/front.png";
import next from "../../images/next.png";
import more from "../../images/more.png";
import ejemplo1 from "../../images/ejemplo1.png";
import ejemplo2 from "../../images/ejemplo2.png";
import ejemplo3 from "../../images/ejemplo3.png";
import gsap from "gsap";

import { useIntersection } from "react-use";

const alineacion = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0 ",
  textAlign: "center",
};

const Places = () => {
  // Ref for our element
  const sectionRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "-200px",
    threshold: 0.2,
  });

  // Animation for fading in
  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };
  // Animation for fading out
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: 100,
      ease: "power4.out",
    });
  };

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio < 0.2
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");

  return (
    <>
      <ContainerLesson>
        <BackTop />
        <Row style={{ marginTop: "20px" }} justify="center">
          <Col lg={12} md={24} style={alineacion}>
            <img style={{ width: "80%" }} src={on} alt="places" />
            <h2>The apple is ON the box.</h2>
            <h3>La manzana está en la caja.</h3>
          </Col>
          <Col lg={12} md={24} style={alineacion}>
            <img style={{ width: "80%" }} src={between} alt="places" />
            <h2>The apple is BETWEEN the two boxes.</h2>
            <h3>La manzana está entre las dos cajas.</h3>
          </Col>
        </Row>
        <Row
          ref={sectionRef}
          className="fadeIn"
          style={{ margin: "20px" }}
          justify="center">
          <Col lg={12} md={24} style={alineacion}>
            <img style={{ width: "80%" }} src={behind} alt="places" />
            <h2>The apple is BEHIND (bijaind) the box.</h2>
            <h3>La manzana está detrás de la caja.</h3>
          </Col>
          <Col lg={12} md={24} style={alineacion}>
            <img style={{ width: "80%" }} src={front} alt="places" />
            <h2>The apple is IN FRONT OF the two boxes.</h2>
            <h3>La manzana está delante de la caja.</h3>
          </Col>
        </Row>
        <Row style={{ margin: "20px" }} justify="center">
          <Col lg={12} md={24} style={alineacion}>
            <img style={{ width: "80%" }} src={next} alt="places" />
            <h2>The apple is NEXT TO the book.</h2>
            <h3>La manzana está al lado del libro.</h3>
          </Col>
          <Col lg={12} md={24} style={alineacion}>
            <img style={{ width: "50%" }} src={more} alt="places" />
            <h2>More examples.</h2>
          </Col>
        </Row>
        <Row style={{ margin: "20px" }} justify="center">
          <Col lg={8} md={24} style={alineacion}>
            <img style={{ width: "80%" }} src={ejemplo1} alt="ejemplos" />
          </Col>
          <Col lg={8} md={24} style={alineacion}>
            <img style={{ width: "80%" }} src={ejemplo2} alt="ejemplos" />
          </Col>
          <Col lg={8} md={24} style={alineacion}>
            <img style={{ width: "80%" }} src={ejemplo3} alt="ejemplos" />
          </Col>
        </Row>
        <Row justify="center">
          <LinkClass to="/ingles-para-principiantes">
            <ButtonVolver>Volver</ButtonVolver>
          </LinkClass>
        </Row>
      </ContainerLesson>
    </>
  );
};

export default Places;
