
const recipesReducer = (state = {recipes: [],categories:[], area:[], loading: false}, action) => {
    
    switch (action.type) {
        case "LOADING":
        return {...state, loading: true};

        case "LOAD_RECIPES":
            console.log(action)
            // console.log("E")
        return {...state, loading: false, recipes: action.payload};

        case "ADDED_RECIPE":
            return { ...state, recipes: [...state.recipes, action.payload], categories: [...state.categories, action.payload.category] }    
            
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
                return action.payload
                // return {...recipe, name:action.payload.name,
                //     category:action.payload.category,
                //     area:action.payload.area,
                //     image_url:action.payload.image_url,
                //     youtube_url:action.payload.youtube_url
                //   } 
                } else {
                      return recipe
                  }
        
            }
        )
           
        // console.log(filterUpdate)
        return { ...state, recipes: filterUpdate }

        // Option 2
                 // const recipeIndex = state.recipes.findIndex(recipe => {
            //     return recipe.id === action.payload.id
            // })
        //     return {...state, recipes: [...state, ]}
                
        case "LOAD_CATEGORIES":
            let categories = [];
                 
            const onlyUnique = (value, index, self) => {
                return self.indexOf(value) === index;
              }
              state.recipes.map(recipe => {
                categories.push(recipe.category)
            })
              const array = categories.filter(onlyUnique);
            // debugger
        return {...state, loading: false, categories: array};
       

       
     
        default:
            return state;
    }
}

export default recipesReducer