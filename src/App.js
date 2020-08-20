import React from "react";
import "./App.css";
import { Card } from "./components/card/card.component";
import NavigationLink from "./components/Navbar/navbar";
import Header from "./components/header/header.component";
import CardContainers from "./components/container/card.container.componenet";
import { Container, Row, Col, Image } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import src from "/Users/palaktank/React/Palak-Portfolio/portfolio/src/sample img.jpg";

function App() {
  return (
    <div className="App">
      <NavigationLink />
      <div className="container-fluid">
        <div class="row home">
          <div class="col-sm">
            {" "}
            <p className="text-center">I am C#, React, Java</p>
          </div>
          <div class="col-sm">
            <p className="text-center">Developer</p>
          </div>
        </div>
        <div class="row bg-purple">
          <div class="col-sm">
            <p className="text-center">Work 1</p>
          </div>
          <div class="col-sm">
            <p className="text-center">Work 2</p>
          </div>
          <div class="col-sm">
            <p className="text-center">Work 3</p>
          </div>
        </div>
        <div class="row bg-orange">
          <div class="col-sm">
            <p className="text-center">Project 1</p>
          </div>
          <div class="col-sm">
            <p className="text-center">Project 2</p>
          </div>
          <div class="col-sm">
            <p className="text-center">Project 3</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <p className="text-center">Skill 1</p>
          </div>
          <div class="col-sm">
            <p className="text-center">Skill 2</p>
          </div>
          <div class="col-sm">
            <p className="text-center">Skill 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
