import React, { Component } from "react";
import "./createRecipe.css";

class RecipeForm extends Component {
  
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.props.handleSubmit(event)}>
          <label className="foodLabel">Food Name</label>
          <input
            type="text"
            name="name"
            placeholder="Add food name here"
            value={this.props.value.name}
            onChange={(event) => this.props.handleOnChange(event)}
          />
          <label className="foodLabel">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Add a category of food here... ex.Chicken, Breakfast, and Seafood"
            value={this.props.value.category}
            onChange={(event) => this.props.handleOnChange(event)}
          />
          <label className="foodLabel">Ethnicity</label>
          <input
            type="text"
            name="area"
            placeholder="Add the ethnicity of food here... ex.Thai, American, and French"
            value={this.props.value.area}
            onChange={(event) => this.props.handleOnChange(event)}
          />
          <label className="foodLabel">Image Link</label>
          <input
            type="text"
            name="image_url"
            placeholder="Add an image url here"
            value={this.props.value.image_url}
            onChange={(event) => this.props.handleOnChange(event)}
          />
          <label className="foodLabel">Youtube Link</label>
          <input
            type="text"
            name="youtube_url"
            placeholder="Add a youtube url here"
            value={this.props.value.youtube_url}
            onChange={(event) => this.props.handleOnChange(event)}
          />
          <input type="submit" className="submitButton" />
        </form>
      </div>
    );
  }
}


export default RecipeForm

