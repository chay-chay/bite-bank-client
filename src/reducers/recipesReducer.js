

const recipesReducer = (state = {recipes: [], loading: false}, action) => {
    
    switch (action.type) {
        case "LOADING":
        return {...state, loading: true};
        case "LOAD_RECIPES":
        return {...state, loading: false, recipes: action.recipes};
            
         
    
        default:
            return state;
    }
}

export default recipesReducer