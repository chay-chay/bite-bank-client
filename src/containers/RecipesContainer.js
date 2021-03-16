import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Recipes from '../components/recipes/Recipes'
import CreateRecipe from '../components/createRecipe/CreateRecipe'
import {connect} from 'react-redux'
class RecipesContainer extends Component {
    state =  {
        search: "",
    }

    componentDidMount(){
          // where you make your fetch requests 
        console.log("A")
        this.prop.fetchingRecipes() //async stuff happening here
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
    debugger
    return {
        recipes: state.recipes
        
    }
}

export default connect(mapStateToProps)(RecipesContainer)