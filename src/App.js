import React,{Component} from "react";
import logo from "./logo.svg";
import "./App.css";
// import "./main.js";
import Header from "./components/header/header.component";
import AboutMe from "./component.pages/about-me/about-me";
import Container from "./components/container/container.componenet";
import Navbar from "./components/Navbar/navbar";

class App extends Component {
  constructor() {
    super();

    this.state = {
      skills: [],
      experience: [],
      projects: [],
      personalData: ""
    };
  }

  render() {
    const { skills, experience, projects, personalData } = this.state;
    return (
      <div className="App">
      <Navbar/>

        <Header/>
        {/* <AboutMe/> */}
        <Container/>
        {/* <h1>My Portfolio</h1> */}
      </div>
    );
  }
}
export default App;
