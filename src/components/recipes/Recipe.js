import React, { Component } from "react";
import "./recipe.css";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import { removeRecipe } from "../../actions/recipesActions"
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { withRouter } from "react-router-dom";

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
class Recipe extends Component{
  // console.log(props)

  handleClick = event => {
    // console.log(this.props.recipe.id)
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            alert('Your meal has been deleted!')
            this.props.removeRecipe(this.props.recipe.id)
            this.props.history.push("/");
          }
    
        },
        {
          label: 'No',
          onClick: () => alert('Change your mind? no problem!')
        }

      ]
 
    });
    
  }

  render(){
    return (
      <div className="recipe card">
        <h2> {this.props.recipe.name}</h2>
        <div className="category">
        <h4>Category: {this.props.recipe.category}</h4>
        </div>
      
       <div className="area">
       <h4>Ethnic: {this.props.recipe.area}</h4>
       </div>
        
        <img src={this.props.recipe.image_url} className="recipe-image" />
        <div style={{ width: "auto", height: "20rem" }}>
          <ReactPlayer
            url={this.props.recipe.youtube_url}
            width="100%"
            height="100%"
            // origin={window.location.host}
          />
  
        </div>
        <Link to ={ `/recipes/${this.props.recipe.id}/edit`}>
          <button>Edit</button>
        </Link>
       <button className="delete-button" onClick={this.handleClick}>Delete</button>
      
      </div>
    );
  }

  
};

export default withRouter(connect(null, {removeRecipe})(Recipe));

// "id": 1,
//   "name": "Teriyaki Chicken Casserole",
//   "category": "Chicken",
//   "area": "Japanese",
//   "image_url": "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
//   "youtube_url": "https://www.youtube.com/watch?v=4aZr5hZXP_s",
//   "created_at": "2021-03-15T23:48:42.255Z",
//   "updated_at": "2021-03-15T23:48:42.255Z"
