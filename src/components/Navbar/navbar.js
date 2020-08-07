import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import "./navbar.scss";
import {Navbar, Nav} from "react-bootstrap";

const NavigationLink = () => (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home" className="nav-links">Home</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#services" className="nav-links">Services</Nav.Link>
        <Nav.Link href="#portfolio" className="nav-links">Portfolio</Nav.Link>
        <Nav.Link href="#skills" className="nav-links">Skills</Nav.Link>
        <Nav.Link href="#aboutme" className="nav-links">About Me</Nav.Link>
      </Nav>
    </Navbar>
);

export default NavigationLink;
