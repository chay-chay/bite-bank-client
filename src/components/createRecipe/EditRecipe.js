import React, { useState, useEffect } from "react"; // hooks
import RecipeForm from "./RecipeForm";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateRecipe } from "../../actions/recipesActions";

const EditRecipe = (props) => {
  const initialState = {
    name: "",
    category: "",
    area: "",
    image_url: "",
    youtube_url: "",
  };
  // example true/false
  // const [isLoading, setIsLoading] = useState(false)
  //  const [name, setName] = useState("") - datastructor - string, array set to [], number set to number ex.1
  const [editFields, setEditField] = useState(initialState);
  // console.log(editFields)
  // editFileds = current state keep value of state
  // console.log(props);
  const [getRecipeById] = props.recipes.filter((item) => {
    //    console.log(typeof(item.id))
    return item.id.toString() === props.route.match.params.id.toString();
  });
  // console.log(getRecipeById.name);

  // setEditField(getRecipeById)
  //use effects for callback function
  // similar componentdidmount
  useEffect(() => {
    setEditField(getRecipeById);
  }, [getRecipeById]); // if no , after {} it will run automatic loops [] - to run only one time
  // if put editFields, it will automatically run every time state change

  const handleOnChange = (event) => {
    let value = event.target.value;
    // console.log(event.target.value);
    setEditField({
      [event.target.name]: value,
      // find the key in state by name
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(editFields);
    //       //  debugger
    //     //    set up our recipe object
    props.updateRecipe(props.route.match.params.id, editFields);
    props.history.push("/recipes");
  };
  return (
    <div>
      <div>
        <RecipeForm
          value={editFields}
          handleOnChange={handleOnChange}
          handleSubmit={handleSubmit}
        />
      </div>
      {editFields.name}
    </div>
  );
};

export default withRouter(connect(null, { updateRecipe })(EditRecipe));

// Refactor to functional component
// class EditRecipe extends Component {

//     constructor(props) {
//         // access props.match.params.id
//         //use id to find recipe

//         super(props);

//         // console.log(this.props.route.match.params.id)
//         // console.log(props.recipes)
//            const [getRecipeId] = props.recipes.filter(item => {
//             //    console.log(typeof(item.id))
//               return item.id.toString() === props.route.match.params.id.toString()})
//         console.log(getRecipeId.name)

//         this.state = {
//             name: getRecipeId.name,
//             category: getRecipeId.category,
//             area: getRecipeId.area,
//             image_url: getRecipeId.image_url,
//             youtube_url: getRecipeId.youtube_url,
//         }
//         this.handleOnChange =this.handleOnChange.bind(this);
//         this.handleSubmit =this.handleSubmit.bind(this)
//         // console.log(getRecipeId.name)
//     }

//     // fetchdata and match value

//     handleOnChange (event) {
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
//     //    set up our recipe object
//        this.props.updateRecipe(this.props.route.match.params.id,this.state)
//        this.props.history.push("/recipes");
//     }

//     render() {

//         return (
//             // another option, send a default value to recipe obj
//             <div><RecipeForm value={this.state} handleOnChange={this.handleOnChange} handleSubmit={this.handleSubmit}/></div>
//         )
//     }
// }

// export default withRouter(connect(null, {updateRecipe})(EditRecipe))

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
