import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "./Navbar.css"
class Navbar extends Component {
  render() {
    return (
      <div className="Nav">
          
        <NavLink activeStyle={{background: '#19d3da'
          }} to="/" className="main-nav" exact>
          Home
        </NavLink>

        <NavLink activeStyle={{background: '#19d3da'
          }} to="/recipes" className="main-nav" exact>
        Recipes
      </NavLink>

      <NavLink activeStyle={{background: '#19d3da'
          }} to="/recipes/new" className="main-nav" exact>
        Create Meal
      </NavLink>

      <NavLink activeStyle={{background: '#19d3da'
          }} to="/about" className="main-nav" exact>
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

