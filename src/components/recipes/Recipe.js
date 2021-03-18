import React, { Component } from "react";
import "./recipe.css";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import { removeRecipe } from "../../actions/recipesActions"
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Link } from 'react-router-dom'
class Recipe extends Component{
  // console.log(props)

  handleClick = event => {
    // console.log(this.props.recipe.id)
    this.props.removeRecipe(this.props.recipe.id)
  }

  render(){
    return (
      <div className="recipe card">
        <h4> Name : {this.props.recipe.name}</h4>
        <h4>Category: {this.props.recipe.category}</h4>{" "}
        <h4>Ethnic: {this.props.recipe.area}</h4>{" "}
        <img src={this.props.recipe.image_url} className="recipe-image" />
        <div style={{ width: "auto", height: "20rem" }}>
          <ReactPlayer
            url={this.props.recipe.youtube_url}
            width="100%"
            height="100%"
            // origin={window.location.host}
          />
  
        </div>
        <Link to ={ `/recipes/${this.props.recipe.id}/edit`}>
          <button>Edit</button>
        </Link>
       <button className="delete-button" onClick={this.handleClick}>Delete</button>
      
      </div>
    );
  }

  
};

export default connect(null, {removeRecipe})(Recipe);

// "id": 1,
//   "name": "Teriyaki Chicken Casserole",
//   "category": "Chicken",
//   "area": "Japanese",
//   "image_url": "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
//   "youtube_url": "https://www.youtube.com/watch?v=4aZr5hZXP_s",
//   "created_at": "2021-03-15T23:48:42.255Z",
//   "updated_at": "2021-03-15T23:48:42.255Z"
