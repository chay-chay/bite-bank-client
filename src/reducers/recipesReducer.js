
const recipesReducer = (state = {recipes: [], loading: false}, action) => {
    
    switch (action.type) {
        case "LOADING":
        return {...state, loading: true};

        case "LOAD_RECIPES":
            console.log(action)
            // console.log("E")
        return {...state, loading: false, recipes: action.payload};

        case "ADDED_RECIPE":
            return { ...state, recipes: [...state.recipes, action.payload] }    
            
        case "DELETE_RECIPE":
            const filteredRecipe = state.recipes.filter(recipe => recipe.id !== action.payload.id)
            return { ...state, recipe: filteredRecipe }

        // case "LOAD_UPDATE":
        //     const filterUpdate = state.recipes.map(recipe => recipe.id === action.payload.id )
        //     return {...state, recipe: filterUpdate }
    
        case "UPDATE_MEAL": 
        // const filterUpdate = state.recipes.filter(recipe => recipe.id === action.payload.id) 
        const filterUpdate = state.recipes.map(recipe => {
            if (recipe.id === action.payload.id){
                return {...recipe, name:action.payload.name,
                    category:action.payload.category,
                    area:action.payload.area,
                    image_url:action.payload.image_url,
                    youtube_url:action.payload.youtube_url
                  } 
                } else {
                      return recipe
                  }
        
            }
        )

   
        console.log(filterUpdate)
        return { ...state, recipes: filterUpdate }
                
                
                
        default:
            return state;
    }
}

export default recipesReducer