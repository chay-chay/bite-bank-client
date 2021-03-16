import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RecipesContainer from "./containers/RecipesContainer";
import Home from './components/home/Home'
class App extends Component {
  render() {
    return (
      <div>
       Hi
       
         <Router>
        <Navbar />
          <RecipesContainer />
          <Route exact path="/" component={Home} /> 
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/new" component={CreateRecipe} />
          <Route exact path="/about" component={About} /> 
         </Router> 
      </div>
    );
  }
}

export default App;
