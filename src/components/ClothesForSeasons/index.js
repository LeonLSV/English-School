import React, { useEffect } from "react";
import { ContainerLesson } from "../../styles/container";
import { ButtonVolver, LinkClass } from "../../styles/global";
import { Col, Row, BackTop } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";

import winter from "../../images/winter.png";
import spring from "../../images/spring.png";
import summer from "../../images/summer.png";
import fall from "../../images/fall.png";

export const ClothesForSeasons = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <ContainerLesson>
        <BackTop />

        <Row justify="center">
          <Col
            lg={12}
            md={24}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
            }}>
            <h1 style={{ color: "#1890ff" }}>Winter</h1>
            <p>Invierno</p>
            <img
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="0"
              // data-aos-duration="3000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
              style={{ width: "100%" }}
              src={winter}
              alt="numbers"
            />
            <h3>Sweater / suerer</h3>
            <p>Suéter</p>
            <h3>Scarf / scarr</h3>
            <p>Bufanda</p>
            <h3>Coat / cout</h3>
            <p>Abrigo</p>
            <h3>Boots / buuts</h3>
            <p>Botas</p>
            <h3>Woolly / gulijat</h3>
            <p>Gorro de lana</p>
          </Col>
          <Col
            lg={12}
            md={24}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
            }}>
            <h1 style={{ color: "#1890ff" }}>Spring</h1>
            <p>Primavera</p>
            <img
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="0"
              // data-aos-duration="3000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
              style={{ width: "100%" }}
              src={spring}
              alt="numbers"
            />
            <h3>Tee / ti</h3>
            <p>Camiseta</p>
            <h3>Dress / dress</h3>
            <p>Vestido</p>
            <h3>Denim jacket / denin chaquet</h3>
            <p>Chaqueta vaquera</p>
            <h3>Flats / flats</h3>
            <p>Baletas</p>
            <h3>Skirt / skort</h3>
            <p>Falda</p>
          </Col>
        </Row>
        <Row justify="center" style={{ paddingTop: "60px" }}>
          <Col
            lg={12}
            md={24}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
            }}>
            <h1 style={{ color: "#1890ff" }}>Summer / somer</h1>
            <p>Verano</p>
            <img
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="0"
              // data-aos-duration="3000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
              style={{ width: "100%" }}
              src={summer}
              alt="numbers"
            />
            <h3>T-shirt / tishert</h3>
            <p>Camiseta</p>
            <h3>Sandals / sandols</h3>
            <p>Sandalias</p>
            <h3>Hat / haat</h3>
            <p>Gorro</p>
            <h3>Sunglasses / songlases</h3>
            <p>Gafas de sol</p>
            <h3>Shorts / shorts</h3>
            <p>Pantalones</p>
          </Col>
          <Col
            lg={12}
            md={24}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
            }}>
            <h1 style={{ color: "#1890ff" }}>Fall / fol</h1>
            <p>Otoño</p>
            <img
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="0"
              // data-aos-duration="3000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
              style={{ width: "100%" }}
              src={fall}
              alt="numbers"
            />
            <h3>Vest / vest</h3>
            <p>Chaleco</p>
            <h3>Scarves / scarbs</h3>
            <p>Bufanda</p>
            <h3>Sweater / suerer</h3>
            <p>Suéter</p>
          </Col>
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
