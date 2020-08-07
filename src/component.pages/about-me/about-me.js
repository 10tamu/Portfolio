import React from "react";
import "./about-me.style.scss";
const logo = require('./palak.jpg');
const aboutme = () => (
  <div class="site-blocks-cover overlay bg-light" id="home-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 mt-lg-5 text-left align-self-center text-intro">
          <div class="row">
            <div class="col-lg-6">
              <h1 class="text-black">I'm Palak Tank</h1>
              <p class="lead">I'm Web Developer Based on Melbourne City</p>
              <p>
                <a
                  href="#portfolio-section"
                  class="btn smoothscroll btn-primary"
                >
                  Portfolio
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src={logo} alt="Image" class="img-face" data-aos="fade" />
  </div>
);

export default aboutme;