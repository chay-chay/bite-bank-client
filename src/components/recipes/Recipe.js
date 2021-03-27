import React, { Component } from "react";
import "./recipe.css";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import { removeRecipe } from "../../actions/recipesActions";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
class Recipe extends Component {

  // console.log(props)


  handleClick = (event) => {
    // console.log(this.props.recipe.id)
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            alert("Your meal has been deleted!");
            this.props.removeRecipe(this.props.recipe.id);
            this.props.history.push("/");
          },
        },
        {
          label: "No",
          onClick: () => alert("Change your mind? no problem!"),
        },
      ],
    });
  };

  render() {
    // console.log(this.props.recipe.youtube_url)
    return (
      <div className="recipe card">
        <h2> {this.props.recipe.name}</h2>
        <div className="meal-info">
          <div className="meal-info-left">
            <h4>Category: {this.props.recipe.category}</h4>
            <h4>Ethnicity: {this.props.recipe.area}</h4>
          </div>

          <div className="meal-info-right">
            <img
              src={this.props.recipe.image_url}
              alt="food"
              className="recipe-image"
            />
          </div>
        </div>

        <div style={{ width: "auto", height: "20rem" }}>
          <ReactPlayer
            url={this.props.recipe.youtube_url}
            width="100%"
            height="100%"
            origin={window.location.origin}
          />
        </div>
         
        <Link to={`/recipes/${this.props.recipe.id}/edit`}>
          <button className="button">Edit</button>
        </Link>

        
        <button className="button" onClick={this.handleClick}>
          Delete
        </button>
      </div>
    );
  }
}

export default withRouter(connect(null, { removeRecipe })(Recipe));
