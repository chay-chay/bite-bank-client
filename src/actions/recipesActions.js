
// regular action res for asyn action 

const url = "http://localhost:3000/recipes"

// we have to pass an argument  
export const loadRecipes = (recipes) => {return {type: "LOAD_RECIPES", payload: recipes};}
export const addRecipe = (recipe) => ({ type: "ADDED_RECIPE", payload: recipe });

// asyn action works with thunk res for fetching recipes
// mapDiapatchToProps 
//this.prop.fetchingRecipes in componentdidmount
// the reason we use Thunk is get these fetch out of the containers/components
export const fetchRecipes = () => {
    // console.log("B")
    return (dispatch) => {
        dispatch({type: "LOADING"})
        fetch(url)
        .then(res => res.json())
        .then(data => {
              // instead of setState, we need to dispatch an action
            dispatch(loadRecipes(data)) // dispatching an action to the reducer
            // pass the data as an argument
            // console.log("F")
        })
        // console.log("C")
         // responsible for dispatching the loadRecipes action
    }
}

export const createRecipes = (recipe) => {
    // send a fetch request 
    return (dispatch) => {
        console.log(dispatch)
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(recipe)
        }
        fetch(url, configObj)
        .then(res => res.json())
        .then(data => {
            dispatch(addRecipe(data))
           
        })
        .catch(error => console.log(error));
    }  
}