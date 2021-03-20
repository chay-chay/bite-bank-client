import React from "react";
import "./recipeFilter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { connect } from "react-redux";

const RecipeFilter = (props) => {

  //  const handleOnClick = () => {
     
  //  }
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

        <label for="search-box">
          <FontAwesomeIcon icon={faSearch} />
        </label>

        <select
          className="filter-select"
          name="filter"
          onChange={props.handleInputChange}
        >
          <option value="">Category</option>
          {props.categories.map((category) => (
            <option key={category.id} value={category}>{category}</option>
          ))}
        </select>


        <select
          className="filter-select"
          name="filterArea"
          onChange={props.handleInputChange}
        >
          <option value="">Area</option>
          {props.areas.map((area) => (
            <option key={area.id} value={area}>{area}</option>
          ))}
        </select>

       

      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { 
    categories: state.categories,
    areas: state.areas
  }
}
export default connect(mapStateToProps)(RecipeFilter);
