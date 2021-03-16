import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="Header">
          <p  className="Logo" alt="logo"> LOGO</p>
          <nav className="Nav">     
            <a href="/">HOME</a>       
            <a href="/recipes">Recipes</a>     
            <a href="/new">Create Recipe</a>
            <a href="/about">About</a>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;
{
  /* <NavLink to="/" exact>
          Home
        </NavLink>

        <NavLink to="/recipes" exact>
        Recipes
      </NavLink>

      <NavLink to="/new" exact>
        Create Meal
      </NavLink>

      <NavLink to="/about" exact>
      About
      </NavLink> */
}
