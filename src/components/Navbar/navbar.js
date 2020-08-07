import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./navbar.scss";
// import "../../bootstrap-grid.css";
// import "../../bootstrap.mon.css";

//import "../../main.js";
import $ from "jquery";

const handleLinkClick = (pageID) => {
  const body = $("html, body");
  body.stop().animate({ scrollTop: $("#" + pageID).offset().top }, "swing");
};

const NavigationLink = () => (
  <div className="header sticky">
    <Router>
      <ul>
        <li>
          <Link to="/" onClick={()=>handleLinkClick("home")} id="lnkhome">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" onClick={()=>handleLinkClick("aboutme")} id="lnkaboutme">
            About Me
          </Link>
        </li>
        <li>
          <Link to="/" onClick={()=>handleLinkClick("services")} id="lnkservices">
          Services
          </Link>
        </li>
        <li>
          <Link to="/" onClick={()=>handleLinkClick("skills")}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="/" onClick={()=>handleLinkClick("portfolio")}>
          Portfolio
          </Link>
        </li>
      </ul>
    </Router>
  </div>
);

export default NavigationLink;
