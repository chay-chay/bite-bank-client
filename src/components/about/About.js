import React, { Component } from "react";
import biteBank from "../../images/biteBank.png";
import "./about.css";
class About extends Component {
  state={
    text: false,
    search: ""
  }


handleOnClick = (event) => {
  console.log(this.state)
  
 this.setState((prevState) => ({
  text: !prevState.text
 }) 
 )

  //  const textInfo = document.querySelector(".about-info")
  //  if (this.state.text === true){
  //   textInfo.style.display = "block"
  //  } else {
  //       textInfo.style.display = "none"
  //     }
  // click button   
}

// handleOnClick = (event) => {
//   const textInfo = document.querySelector(".about-info")
//   if (textInfo.style.display === "none"){
//     textInfo.style.display = "block"
//   } else {
//     textInfo.style.display = "none"
//   }
// }
  
handleOnChange = (e) =>{
  // console.log(e.target.value)
  this.setState({
    search: e.target.value
  })
}
  render() {
    return (
      <div className="about">
        <div>
          <img src={biteBank} alt="logo" className="logo-image" />
        </div>
        <div className="about-text">
          <h1 className="about-header">About</h1>
          { !this.state.text ? null :
          <p className="about-info">
            Have you ever watched a cooking video on the internet and thought "I
            would love to cook this later?". Bite Bank is a media storage
            platform dedicated to the culinary arts. It allows for quick
            reference to cooking videos of interest by keeping a record of those
            you would like to flag and return to in the future. Easily
            searchable by name, category, and ethnicity...Bite Bank is a useful
            tool for any chef!
          </p>
          }
    
          <input 
          value={this.state.search}
          onChange={this.handleOnChange}>
          </input>
          <button onClick={this.handleOnClick}> Click Me!</button>
        </div>
      </div>
    );
  }
}

export default About;
