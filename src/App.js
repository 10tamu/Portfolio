import React from "react";
import "./App.css";
import { Card } from "./components/card/card.component";
import NavigationLink from "./components/Navbar/navbar";
import Header from "./components/header/header.component";
import CardContainers from "./components/container/card.container.componenet";
import { Container, Row, Col, Image } from "react-bootstrap";
// import "./copied.style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import src from "/Users/palaktank/React/Palak-Portfolio/portfolio/src/sample img.jpg";
const logo = require("./sample img.jpg");
const imgSrc = require("./Palak Tank edited.png");
function App() {
  return (
    <div className="App">
      <NavigationLink />
      <div className="container-fluid">
        <div class="row home">
          <div class="col-sm">
            <h1 className="text-center display-3" style={{ marginTop: 0 }}>
              Hi, <br /> I'm Palak, <br />
              Full Stack Developer
            </h1>
          </div>
        </div>
        <div class="row abm-header">
          <div class="col-sm">
            <h4 className="h4-center display-4">About Me </h4>
          </div>
        </div>
        <div class="row about-me-container">
          <div class="col-sm about-me-story">
            <p className="aboutme-text">
              {" "}
              I am Palak Tank, a Software Engineer graduated from Swinburne
              University of Technology. <br />I am a Full Stack Developer with
              more than 3 years of hands in experience with real world projects.{" "}
              <br /> My goal is to build robust solutions and excel in providing
              best user performance outcomes. Following Technologies describes
              my expertise:{" "}
            </p>

            <div className="flax-container">
              <div className="language">C#</div>
              <div className="dark-clr" style={{ width: "90%" }}></div>
              <div className="percentage">90%</div>
            </div>
            <div className="flax-container">
              <div className="language">Java</div>
              <div className="dark-clr" style={{ width: "70%" }}></div>
              <div className="percentage">70%</div>
            </div>
            <div className="flax-container">
              <div className="language">React</div>
              <div className="dark-clr" style={{ width: "70%" }}></div>
              <div className="percentage">70%</div>
            </div>
            <div className="flax-container">
              <div className="language">JavaScript</div>
              <div className="dark-clr" style={{ width: "80%" }}></div>
              <div className="percentage">80%</div>
            </div>
            <div className="flax-container">
              <div className="language">HTML 5</div>
              <div className="dark-clr" style={{ width: "70%" }}></div>
              <div className="percentage">70%</div>
            </div>
          </div>
          <div class="col-sm">
            <img class="img aboutme-r" src={imgSrc} alt="Card image" />{" "}
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <h4 className="h4-center display-4">Work </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <div class="row">
              <div class="col-sm">
                <div class="card" style={{ width: "400px" }}>
                  <img class="card-img-top" src={logo} alt="Card image" />
                  <div class="card-body">
                    <h4 class="card-title">ReadyTeacher</h4>
                    <p class="card-text">Software Engineer</p>
                    {/* <a href="#" class="btn btn-primary">
                      See Profile
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="row">
              <div class="col-sm">
                <div class="card" style={{ width: "400px" }}>
                  <img class="card-img-top" src={logo} alt="Card image" />
                  <div class="card-body">
                    <h4 class="card-title">Tatvasoft</h4>
                    <p class="card-text">Software Engineer</p>
                    <p class="card-text"></p>
                    {/* <a href="#" class="btn btn-primary">
                      See Profile
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="row">
              <div class="col-sm">
                <div class="card" style={{ width: "400px" }}>
                <h5 class="card-header">Tatvasoft</h5>
                  <div class="card-body">
                    <h4 class="card-title">Assosiate Software Engineer</h4>
                    <p class="card-text"></p>
                  </div>
                  <div class="card-footer text-muted">2015-2016</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-sm"></div>
          <div class="col-sm"></div>
        </div>

        {/* </div> */}
        {/* <div class="row bg-orange">
          <div class="col-sm">
            <p className="text-center">Project 1</p>
          </div>
          <div class="col-sm">
            <p className="text-center">Project 2</p>
          </div>
          <div class="col-sm">
            <p className="text-center">Project 3</p>
          </div>
        </div> */}
        {/* <div class="row">
          <div class="col-sm">
            <p className="text-center">Skill 1</p>
          </div>
          <div class="col-sm">
            <p className="text-center">Skill 2</p>
          </div>
          <div class="col-sm">
            <p className="text-center">Skill 3</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
