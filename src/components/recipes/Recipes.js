import React, { Component } from "react";
import Recipe from "./Recipe";


class Recipes extends Component {
  // console.log(props)
  getRecipes() {
    return this.props.recipes.map((recipe) => (
      <Recipe key={recipe.id} recipe={recipe} />
    ));
  }

  render() {
    // console.log(this.props.recipes)
    return (
      <div className="recipes">
        {this.props.loading ? <h1>LOADING....</h1> : this.getRecipes()}
      </div>
    );
  }
}

export default Recipes;
