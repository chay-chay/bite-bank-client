import React from "react";
import "./recipeFilter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { connect } from "react-redux";

const RecipeFilter = (props) => {

   
  return (
    <div className="box">
      <div class="clearfix searchform">
        <input
          name="search"
          type="search"
          id="search-box"
          placeholder="What are you looking for?"
          onChange={props.handleInputChange}
        />

        <select name="filter"onChange={props.handleInputChange}>
            <option
            value="">
                Category
            </option>
            {props.categories.map((category) => <option value={category}>{category}</option>)}
             {/* <option
            value="name">
                name
            </option>
            <option
            value="category">
                Category
            </option>
            <option
            value="area">
                area
            </option> */}
        </select>

        <label for="search-box">
          <FontAwesomeIcon icon={faSearch} />
        </label>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { 
    categories: state.categories,
  }
}
export default connect(mapStateToProps)(RecipeFilter);
