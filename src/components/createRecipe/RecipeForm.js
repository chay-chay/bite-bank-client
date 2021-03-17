import React, { Component } from "react";
import "./createRecipe.css";
class RecipeForm extends Component {
  state = {
    name: "",
    category: "",
    area: "",
    image_url: "",
    youtube_url: "",
  };

  render() {
    return (
      <div>
        <form>
          <label className="foodLabel">Food Name</label>
          <input type="text" placeholder="Add food name here" />
          <label className="foodLabel">Category</label>
          <input type="text" placeholder="Add a category of food here... ex.Chicken, Breakfast, and Seafood" />
          <label className="foodLabel">Ethnic</label>
          <input type="text" placeholder="Add a ethnic of food here... ex.Thai, American, and French" />
          <label className="foodLabel">Image Link</label>
          <input type="text" placeholder="Add an image url here" />
          <label className="foodLabel">Youtube Link</label>
          <input type="text" placeholder="Add a youtube url here" />
          <input type="submit" className="submitButton" />
        </form>
      </div>
    );
  }
}

export default RecipeForm;
