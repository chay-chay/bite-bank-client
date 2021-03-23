import React, { Component } from "react";
import {  Route } from "react-router";
import Recipes from "../components/recipes/Recipes";
import CreateRecipe from "../components/createRecipe/CreateRecipe";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/recipesActions";
import EditRecipe from "../components/createRecipe/EditRecipe"
class RecipesContainer extends Component {
 

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
        {/* <Switch> */}
          <Route exact path="/recipes">
            <Recipes recipes={this.props.recipes} />
          </Route>
          
          <Route exact path="/recipes/new" component={CreateRecipe} />
          <Route exact path="/recipes/:id/edit" component={ (routeInfo) => <EditRecipe route={routeInfo} recipes={this.props.recipes} />} />  
          {/* allows to pass the props, so routs & match inf */}
          {/* functional component pass the routes if and can have if else statement here */}

          {/* // find recipe match id  and pass found recipe to the form as a props */}
        {/* </Switch> */}
        {/* {this.props.loading ? <h1>LOADING....</h1> : this.getRecipes()} */}
      </div>
    );
  }
}
// get info out of the store
const mapStateToProps = (state, ownProps) => {

  const displayRecipe = state.recipes.filter((recipe) =>  
        (recipe.name.toLowerCase().includes(ownProps.searchTerm.toLowerCase()) 
          || recipe.category.toLowerCase().includes(ownProps.searchTerm.toLowerCase())
      || recipe.area.toLowerCase().includes(ownProps.searchTerm.toLowerCase()))
       &&  recipe.category.toLowerCase().includes(ownProps.filterTerm.toLowerCase())
       &&  recipe.area.toLowerCase().includes(ownProps.filterAreaTerm.toLowerCase()))
     
  return {
    
    recipes: displayRecipe,
    loading: state.loading,
    categories: state.categories,
    areas: state.area
  };
};
// this dispatch cause a reducer to run
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
