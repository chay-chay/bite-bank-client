import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RecipesContainer from "./containers/RecipesContainer";
import Home from './components/home/Home'
// import Recipes from './components/recipes/Recipes'
// import CreateRecipe from './components/createRecipe/CreateRecipe'
import About from './components/about/About'
class App extends Component {
  render() {
    return (
      <div>
         <Router>
         <Navbar />
          <Switch>         
      
          <Route exact path="/" component={Home} /> 
          <Route path="/recipes" component={RecipesContainer} />
        
          <Route path="/about" component={About} /> 
          </Switch>
         </Router> 
      </div>
    );
  }
}

export default App;
