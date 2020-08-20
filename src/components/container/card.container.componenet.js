import React, { Components } from "react";
import AboutMe from "../../component.pages/about-me/about-me";
import Card from "../card/card.component";
import "./card.container.style.scss";
import { Container, Row, Col, Image } from "react-bootstrap";

const imgURL = require("./face.png");
const Containers = () => (
  <div className="card-list">
    <Row>
      <Col>
        <Card id={1} imageUrl={imgURL} name={"abc"} price={30} />
      </Col>
      <Col>
        <Card id={2} imageUrl={imgURL} name={"abc"} price={30} />
      </Col>
    </Row>
    <Row>
      <Col>
        <Card id={3} imageUrl={imgURL} name={"abc"} price={30} />
      </Col>
      <Col>
        <Card id={4} imageUrl={imgURL} name={"abc"} price={30} />
      </Col>
    </Row>
    {/* <Card id={5} imageUrl={imgURL} name={"abc"} price={30}/> */}
  </div>
);

export default Containers;
