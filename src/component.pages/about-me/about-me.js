import React from "react";
import "./about-me.style.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
const logo = require("./WFH.jpg");

const renderTooltip = () => (
  <div style={{ color: "white" }}>
    <h1>I am Palak</h1>
    <h2>I am a Full Stack Developer</h2>
  </div>
);
const aboutme = () => (
  <div className="container-width">
    <Row>
      <Col xl={12} md={12}>
        <Image
          src={logo}
          className="profile-pic"
          rounded
          overlay={renderTooltip}
        />
        <div style={{ color: "white", margin:"50px" }}>
          <h2>Full Stack Developer</h2>
        </div>
      </Col>
    </Row>
  </div>
);

export default aboutme;
