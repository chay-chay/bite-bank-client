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
      <div className="filter-info">
        <div className="clearfix searchform">
        <input
          name="search"
          type="search"
          id="search-box"
          placeholder="What are you looking for?"
          onChange={props.handleInputChange}
        />

        <label className="search-box">
          <FontAwesomeIcon icon={faSearch} />
        </label>
      </div>
      
        <div>
        <label className="label-search">Filter By: </label>
        <select
          className="filter-select"
          name="filter"
          onChange={props.handleInputChange}
        >
          <option value="">Category</option>
          {props.categories.map((category, i) => (
            <option key={i} value={category}>{category}</option>
          ))}
        </select>


        <select
          className="filter-select"
          name="filterArea"
          onChange={props.handleInputChange}
        >
          <option value="">Ethnic</option>
          {props.areas.map((area, i) => (
            <option key={i} value={area}>{area}</option>
          ))}
        </select>
        </div>
        


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
