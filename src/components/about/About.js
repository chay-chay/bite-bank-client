import React, { Component } from "react";
import biteBank from "../../images/biteBank.png";
import "./about.css";

class About extends Component {
  
  render() {
    return (
      <div className="about">
        <div>
          <img src={biteBank} alt="logo" className="logo-image" />
        </div>
        <div className="about-text">
          <h1 className="about-header">About</h1>
          <p className="about-info">
            Have you ever watched a cooking video on the internet and thought "I
            would love to cook this later?". Bite Bank is a media storage
            platform dedicated to the culinary arts. It allows for quick
            reference to cooking videos of interest by keeping a record of those
            you would like to flag and return to in the future. Easily
            searchable by name, category, and ethnicity...Bite Bank is a useful
            tool for any chef!
          </p> 
  
        </div>
      </div>
    );
  }
}

export default About;

