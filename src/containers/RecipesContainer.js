import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Recipes from "../components/recipes/Recipes";
import CreateRecipe from "../components/createRecipe/CreateRecipe";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/recipesActions";

class RecipesContainer extends Component {
  state = {
    search: "",
  };

  componentDidMount() {
    // where you make your fetch requests
    // console.log("A")
    this.props.fetchRecipes(); //async stuff happening here
    // console.log("D")
  }
  // component
  render() {
    return (
      <div id="recipes-container">
        <Switch>
          <Route exact path="/recipes">
            <Recipes recipes={this.props.recipes} />
          </Route>
          <Route exact path="/recipes/new" component={CreateRecipe} />
        </Switch>
        {/* {this.props.loading ? <h1>LOADING....</h1> : this.getRecipes()} */}
      </div>
    );
  }
}
// get info out of the store
const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    loading: state.loading,
  };
};
// this dispatch cause a reducer to run
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
