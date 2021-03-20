import React, { Component } from "react";
import Recipe from './Recipe'
// import React from "react"


class Recipes extends Component {
    // console.log(props)
    getRecipes(){
      return this.props.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)
    }
    
    render(){     
        return (
            <div className="recipes">
             {this.props.loading ? <h1>LOADING....</h1> : this.getRecipes()}
            {this.getRecipes()}
           
            </div>
            )
        }         
}
       
    
export default Recipes

