
// regular action res for asyn action 

const url = "http://localhost:3000/recipes"

// we have to pass an argument  
export const loadRecipes = (recipes) => {return {type: "LOAD_RECIPES", payload: recipes};}
export const addRecipe = (recipe) => ({ type: "ADDED_RECIPE", payload: recipe });
const deleteRecipe = (recipeId) => {return { type: "DELETE_RECIPE", payload: recipeId}}
// const updatingRecipe = (updatedRecipe) => {return{type: "UPDATE_MEAL", payload:updatedRecipe}}

// thunk gives us the ability to return FUNCTIONS with a default argument of dispatch 
// asyn action works with thunk res for fetching recipes
// the reason we use Thunk is get these fetch out of the containers/components
export const fetchRecipes = () => {
    // console.log("B")
    return (dispatch) => {
        dispatch({type: "LOADING"})
        fetch(url)
        .then(resp => resp.json())
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
        .then(resp => resp.json())
        .then(data => {
            dispatch(addRecipe(data))
           
        })
        .catch(error => console.log(error));
    }  
}

export const removeRecipe = (recipeId) => {
    return (dispatch) => {
        fetch(url + "/" + recipeId, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then((response) => {
            if (response.ok) {
              dispatch(deleteRecipe(recipeId));
            } else {
              window.alert('Unable to delete');
            }
          })
          .catch(error => console.log(error));
    };
  };

  // UPDATE
  // export const updateRecipe = (recipeId, tempRecipe) => {
  //   return (dispatch) => {
  //     console.log('c')
  //       fetch(url + `${recipeId}`, {
  //           method: "PATCH",
  //           headers: {
  //               'Accept': 'application/json',
  //               'Content-Type': 'application/json'
  //           },
  //           body: JSON.stringify(tempRecipe)
  //       })
  //           .then( resp => resp.json() )
  //           .then( data => {
  //               dispatch(updatingRecipe(data));
  //           })
  //   }
  
  // }