import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RecipesContainer from "./containers/RecipesContainer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import RecipeFilter from "./components/recipeFilter/RecipeFilter";

class App extends Component {
  state = {
    search: "",
    filter: "",
    filterArea: "",
   
  };

  handleInputChange = (e) => {
    // const search = e.target.value
    this.setState({ [e.target.name]: e.target.value }, () =>
      console.log(this.state)
    ); // will cause a rerender
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <RecipeFilter  
            handleInputChange={this.handleInputChange}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/recipes" component={RecipesContainer} /> */}
            <Route path="/recipes">
              <RecipesContainer
                searchTerm={this.state.search}
                filterTerm={this.state.filter}
                filterAreaTerm={this.state.filterArea}
              />
            </Route>
            <Route path="/about" component={About} />
          </Switch>
          {/* The <Switch /> component will only render the first route that matches/includes the path. */}
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
