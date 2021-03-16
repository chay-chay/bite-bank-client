import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "./Navbar.css"
class Navbar extends Component {
  render() {
    return (
      <div>
          
  <NavLink to="/" className="main-nav" exact>
          Home
        </NavLink>

        <NavLink to="/recipes" className="main-nav" exact>
        Recipes
      </NavLink>

      <NavLink to="/recipes/new" className="main-nav" exact>
        Create Meal
      </NavLink>

      <NavLink to="/about" className="main-nav" exact>
      About
      </NavLink> 

        {/* <header className="Header">
          <p  className="Logo" alt="logo"> LOGO</p>
          <nav className="Nav">     
            <a href="/">HOME</a>       
            <a href="/recipes">Recipes</a>     
            <a href="/new">Create Recipe</a>
            <a href="/about">About</a>
          </nav>
        </header> */}
      </div>
    );
  }
}

export default Navbar;

