import React, { Component } from "react";
// import React from "react"
// import ReactPlayer from "react-player"
import Recipe from './Recipe'
class Recipes extends Component {
    // console.log(props)
    
    getRecipes(){
      return this.props.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)
    }
    
    render(){
       
        return (
            <div className="recipes">
            {this.getRecipes()}
            
            </div>
            )
        }         
}
       
    
export default Recipes

