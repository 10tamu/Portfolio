import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import "./navbar.scss";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavigationLink = () => (
  <div>
    {" "}
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        Palak
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Work
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Skils
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Conact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Linkedin
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default NavigationLink;
