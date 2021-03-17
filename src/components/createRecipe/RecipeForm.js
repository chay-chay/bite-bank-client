import React, { Component } from "react";
import "./createRecipe.css";
import { connect } from "react-redux";
import { createRecipes } from "../../actions/recipesActions"
class RecipeForm extends Component {
  state = {
    name: "",
    category: "",
    area: "",
    image_url: "",
    youtube_url: "",
  };

  handleOnChange(event) {
    let value = event.target.value;
    this.setState({
      [event.target.name]: value,
      // find the key in state by name
    });
    // console.log(event.target.value)
  }
  
  handleSubmit (event) {
      event.preventDefault();
      console.log(this.state)
    //  debugger
     // set up our recipe object 
     this.props.createRecipes(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label className="foodLabel">Food Name</label>
          <input
            type="text"
            name="name"
            placeholder="Add food name here"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)}
          />
          <label className="foodLabel">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Add a category of food here... ex.Chicken, Breakfast, and Seafood"
            value={this.state.category}
            onChange={(event) => this.handleOnChange(event)}
          />
          <label className="foodLabel">Ethnic</label>
          <input
            type="text"
            name="area"
            placeholder="Add an ethnic of food here... ex.Thai, American, and French"
            value={this.state.area}
            onChange={(event) => this.handleOnChange(event)}
          />
          <label className="foodLabel">Image Link</label>
          <input
            type="text"
            name="image_url"
            placeholder="Add an image url here"
            value={this.state.image_url}
            onChange={(event) => this.handleOnChange(event)}
          />
          <label className="foodLabel">Youtube Link</label>
          <input
            type="text"
            name="youtube_url"
            placeholder="Add a youtube url here"
            value={this.state.youtube_url}
            onChange={(event) => this.handleOnChange(event)}
          />
          <input type="submit" className="submitButton" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    createRecipes: (recipe) => dispatch(createRecipes(recipe))
  }
}

export default connect(null, mapDispatchToProps)(RecipeForm);
