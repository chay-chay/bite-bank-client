import React, { Component } from "react";
import RecipeForm from "./RecipeForm";
import { connect } from "react-redux";
import { createRecipes } from "../../actions/recipesActions";
import { withRouter } from "react-router-dom";

class CreateRecipe extends Component {
  state = {
    name: "",
    category: "",
    area: "",
    image_url: "",
    youtube_url: "",
  };

  handleOnChange = (event) => {
    let value = event.target.value;
    this.setState({
      [event.target.name]: value,
      // find the key in state by name
    });
    console.log(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    //  debugger
    // set up our recipe object
    this.props.createRecipes(this.state);
    this.props.history.push("/recipes");
  };

  render() {
    return (
      <div>
        <RecipeForm
          value={this.state}
          handleOnChange={this.handleOnChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

// export default CreateRecipe

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    createRecipes: (recipe) => dispatch(createRecipes(recipe)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(CreateRecipe));
