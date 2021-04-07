// regular action res for asyn action

// const url = "http://localhost:3000/recipes";
const url = "https://glacial-plateau-14883.herokuapp.com/"

// we have to pass an argument
export const loadRecipes = (recipes) => ({ type: "LOAD_RECIPES", payload: recipes });
export const addRecipe = (recipe) => ({ type: "ADDED_RECIPE", payload: recipe });
export const deleteRecipe = (recipeId) => ({ type: "DELETE_RECIPE", payload: recipeId });
export const updatingRecipe = (updatedRecipe) => ({ type: "UPDATE_RECIPE", payload: updatedRecipe });

// thunk gives us the ability to return FUNCTIONS with a default argument of dispatch
// asyn action works with thunk res for fetching recipes
// the reason we use Thunk is get these fetch out of the containers/components
export const fetchRecipes = () => {
  // console.log("B")
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        // instead of setState, we need to dispatch an action
        dispatch(loadRecipes(data));
        dispatch({ type: "LOAD_CATEGORIES" });
        dispatch({ type: "LOAD_AREAS" });
        // dispatching an action to the reducer
        // pass the data as an argument
        // console.log("F")
      });
    // console.log("C")
    // responsible for dispatching the loadRecipes action
  };
};

export const createRecipes = (recipe) => {
  // send a fetch request
  return (dispatch) => {
    console.log(dispatch);
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(recipe),
    };
    
    fetch(url + "/recipes", configObj)
    
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(addRecipe(data));
      })
      .catch((error) => console.log(error));
  };
};

export const removeRecipe = (recipeId) => {
  return (dispatch) => {
    fetch(url + "/" + recipeId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          dispatch(deleteRecipe(recipeId));
        } else {
          window.alert("Unable to delete");
        }
      })
      .catch((error) => console.log(error));
  };
};

// UPDATE
export const updateRecipe = (recipeId, changeRecipe) => {
  return (dispatch) => {
    fetch(url + "/" + recipeId, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changeRecipe),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        dispatch(updatingRecipe(data));
        dispatch({ type: "LOAD_CATEGORIES" });
        dispatch({ type: "LOAD_AREAS" });
      });
  };
};

export const sortByName = (sortBy) => {
  return (dispatch) => {
    if (sortBy === "sortASC") {
      dispatch({ type: "SORT_BY_NAME" });
    } else if (sortBy === "sortDESC") {
      dispatch({ type: "SORT_BY_NAME_DESC" });
    } else if (sortBy === "sortNew") {
      dispatch({ type: "SORT_BY_DATE" });
    } else {
      dispatch({ type: "SORT_BY_NAME" });
    }
  };
};
