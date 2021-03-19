import React from "react";
import "./recipeFilter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSearch } from "@fortawesome/fontawesome-free-solid";
// import 'bootstrap/dist/css/bootstrap.min.css';

const RecipeFilter = (props) => {
  return (
    <div className="box">
      <div class="clearfix searchform">
        <input
          type="search"
          id="search-box"
          placeholder="What are you looking for?"
          onChange={props.handleInputChange}
        />
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
};
export default RecipeFilter;

// <div className="container h-100">
// <div className="d-flex justify-content-center h-100">
//   <div className="searchbar">
//   <input className="search_input"type="text" placeholder="Search for a meal..." onChange={props.handleInputChange}/>
//     <a href="#" className="search_icon"><i class="fas fa-search"></i></a>
//   </div>
// </div>
// </div>

{
  /* <div>
            <input type="text" placeholder="Search for a meal..." onChange={props.handleInputChange}/>
        </div> */
}
