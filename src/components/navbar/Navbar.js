import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Nav">
      <NavLink
        activeStyle={{ background: "#19d3da" }}
        to="/"
        className="main-nav"
        exact
      >
        Home
      </NavLink>

      <NavLink
        activeStyle={{ background: "#19d3da" }}
        to="/recipes"
        className="main-nav"
        exact
      >
        Meals
      </NavLink>

      <NavLink
        activeStyle={{ background: "#19d3da" }}
        to="/recipes/new"
        className="main-nav"
        exact
      >
        Create Meal
      </NavLink>

      <NavLink
        activeStyle={{ background: "#19d3da" }}
        to="/about"
        className="main-nav"
        exact
      >
        About
      </NavLink>
    </div>
  );
};

export default Navbar;
