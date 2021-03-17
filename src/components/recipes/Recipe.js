import React, { Component } from "react";
import "./recipe.css";
import ReactPlayer from "react-player";
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
const Recipe = (props) => {
  // console.log(props)
  return (
    <div className="recipe card">
      <h4> Name : {props.recipe.name}</h4>
      <h4>Category: {props.recipe.category}</h4>{" "}
      <h4>Ethnic: {props.recipe.area}</h4>{" "}
      <img src={props.recipe.image_url} className="recipe-image" />
      <div style={{ width: "auto", height: "20rem" }}>
        <ReactPlayer
          url={props.recipe.youtube_url}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Recipe;

// "id": 1,
//   "name": "Teriyaki Chicken Casserole",
//   "category": "Chicken",
//   "area": "Japanese",
//   "image_url": "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
//   "youtube_url": "https://www.youtube.com/watch?v=4aZr5hZXP_s",
//   "created_at": "2021-03-15T23:48:42.255Z",
//   "updated_at": "2021-03-15T23:48:42.255Z"
