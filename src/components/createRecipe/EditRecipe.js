import React, { Component } from "react";
import RecipeForm from './RecipeForm'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateRecipe } from "../../actions/recipesActions"




class EditRecipe extends Component {

    constructor(props) {
        // access props.match.params.id
        //use id to find recipe
        
        super(props);
      
        // console.log(this.props.route.match.params.id)
        // console.log(props.recipes)
           const [getRecipeId] = props.recipes.filter(item => {
            //    console.log(typeof(item.id))
              return item.id.toString() === props.route.match.params.id.toString()})
        console.log(getRecipeId.name)
       
        

        this.state = {
            name: getRecipeId.name,
            category: getRecipeId.category,
            area: getRecipeId.area,
            image_url: getRecipeId.image_url,
            youtube_url: getRecipeId.youtube_url,
        }
        this.handleOnChange =this.handleOnChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this)
        // console.log(getRecipeId.name)
    }


    // fetchdata and match value
   

    handleOnChange (event) {
        let value = event.target.value;
        this.setState({
          [event.target.name]: value,
          // find the key in state by name
        });
        console.log(event.target.value)
      }

      handleSubmit (event) {
        event.preventDefault();
        console.log(this.state)
      //  debugger
    //    set up our recipe object 
       this.props.updateRecipe(this.props.route.match.params.id,this.state)
       this.props.history.push("/recipes");
    }

    render() {
     
        return (
            // another option, send a default value to recipe obj 
            <div><RecipeForm value={this.state} handleOnChange={this.handleOnChange} handleSubmit={this.handleSubmit}/></div>
        )
    }
}

export default withRouter(connect(null, {updateRecipe})(EditRecipe))




// class EditRecipe extends Component {
//     constructor(props) {
//         super(props);
//         this.handleOnChange =this.handleOnChange.bind(this);
//         this.handleSubmit =this.handleSubmit.bind(this)
//         this.state = {
//             name: "",
//             category: "",
//             area: "",
//             image_url: "",
//             youtube_url: "",
//         }
//     }

//     handleOnChange(event) {
//         let value = event.target.value;
//         this.setState({
//           [event.target.name]: value,
//           // find the key in state by name
//         });
//         console.log(event.target.value)
//       }

//       handleSubmit (event) {
//         event.preventDefault();
//         console.log(this.state)
//       //  debugger
//        // set up our recipe object 
//        this.props.createRecipes(this.state)
//        this.props.history.push("/recipes");
//     }

//     render() {
//         return (
//             <div><RecipeForm value={this.state} handleOnChange={this.handleOnChange} handleSubmit={this.handleSubmit}/></div>
//         )
//     }
// }

// // export default CreateRecipe

// // const mapDispatchToProps = (dispatch) => {
// //     console.log(dispatch)
// //     return {
// //       createRecipes: (recipe) => dispatch(createRecipes(recipe))
// //     }
// //   }
  
//   export default  withRouter(connect(null, mapDispatchToProps)(EditRecipe));
  