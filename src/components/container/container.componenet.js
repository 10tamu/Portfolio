import React, {Components} from "react";
import AboutMe from "../../component.pages/about-me/about-me";

import "./container.style.scss"


const Container = () =>(
<div>
    <div id="aboutme" className="container"><AboutMe/></div>
    <div id="skills" className="container"><h2> Skills</h2></div>
    <div id="services" className="container"><h2> Services</h2></div>
    <div id="portfolio" className="container"><h2> Portfolio</h2></div>
    <div id="home" className="container"><h2> Home</h2></div>

</div>
)

export default Container