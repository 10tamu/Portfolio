import React from "react";
import "./header.style.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
const logo = require("./WFH.jpg");

const renderTooltip = () => (
  <div style={{ color: "white" }}>
    <h1>I am Palak</h1>
    <h2>I am a Full Stack Developer</h2>
  </div>
);
const header = () => (
  // <section className="container-width">
  <div>
    <div>
      <div xl={12} md={12}>
        <Image
          src={logo}
          className="profile-pic"
          rounded
          //  overlay={renderTooltip}
        />
        <div style={{ color: "white", margin: "150px" }}>
          <h2>Full Stack Developer</h2>
        </div>
      </div>
    </div>
  </div>
  //  </section>
);

export default header;
