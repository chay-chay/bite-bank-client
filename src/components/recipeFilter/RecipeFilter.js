  
import React from 'react'

const RecipeFilter = (props) => {
    return(
        <div>
            <input type="text" placeholder="Search for a meal..." onChange={props.handleInputChange}/>
        </div>
    )

}
export default RecipeFilter