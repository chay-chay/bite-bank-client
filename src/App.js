import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RecipesContainer from "./containers/RecipesContainer";
import Home from './components/home/Home'
// import Recipes from './components/recipes/Recipes'
// import CreateRecipe from './components/createRecipe/CreateRecipe'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import RecipeFilter from './components/recipeFilter/RecipeFilter'

class App extends Component {

  state = {
    search: "",
    filter: ""
  }

  handleInputChange = (e) => {
    const search = e.target.value
    // this.setState({search: search}) // will cause a rerender
    this.setState(prevState => ({
      
    })) /
  }

  render() {
    return (
      <div>
         <Router>
         <Navbar />
         <RecipeFilter search={this.state.search} handleInputChange={this.handleInputChange} />
          <Switch>         
        
          <Route exact path="/" component={Home} /> 
          {/* <Route path="/recipes" component={RecipesContainer} /> */}
          <Route path="/recipes">
            <RecipesContainer searchTerm={this.state.search} />
           
          </Route>
        
          <Route path="/about" component={About} /> 
          </Switch>
         </Router> 
         <Footer />
      </div>
    );
  }
}

export default App;
