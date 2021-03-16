import React, { Component } from "react";

const Recipe = (props) => {
    // console.log(props)
       return (
            <div className="recipe">
            <h2>{props.recipe.name}</h2>
            <ReactPlayer
            url= {props.recipe.}
            />
            </div>
            )
             
}
       
    
export default Recipe
