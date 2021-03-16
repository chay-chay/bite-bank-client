import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Recipes from '../components/recipes/Recipes'
import CreateRecipe from '../components/createRecipe/CreateRecipe'
import { connect } from 'react-redux'
import { fetchingRecipes } from '../actions/recipesActions'
class RecipesContainer extends Component {
    state =  {
        search: "",
    }

    componentDidMount(){
          // where you make your fetch requests 
        console.log("A")
        this.props.fetchingRecipes() //async stuff happening here
        console.log("D")
    }
    // component
    render() {
        return (
           
            <div> 
                <Switch>
                <Route exact path="/recipes" component={Recipes} />
                <Route exact path="/recipes/new" component={CreateRecipe} />
                </Switch>
            </div>
        )
    }
}
// get info out of the store
const mapStateToProps = (state) => {
    
    return {
        fetchingRecipes: state.recipes,
        loadings: state.loading
        
    }
}
// this dispatch cause a reducer to run
const mapDispatchToProps = (dispatch) =>{
    return {
        fetchingRecipes: (recipes) => dispatch(fetchingRecipes(recipes))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)