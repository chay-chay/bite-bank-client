import React from "react";
import "./footer.css";
import { SiGithub, SiYoutube, SiLinkedin } from "react-icons/si";

const Footer = () => (
  <div>
    <section>
      <h1>Contact Me!</h1>
      <h3>Hover over the circle below</h3>
    </section>
    <div className="footer">
      <div id="button"></div>
      <div id="container">
        <div id="cont">
          <div class="footer_center">
          <h3 className="contact">Copyright Chayanit McCormick 2021 ©
              
              <a href="https://github.com/chay-chay/recipes-frontend">
                <SiGithub />
              </a>
              <a href="https://www.youtube.com/channel/UC-wW2rQ7mDnS0K9b7M1RPGA">
                <SiYoutube />
              </a>
              <a href="https://github.com/chay-chay/recipes-frontend">
                <SiLinkedin />
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
