import React from "react";
import "./App.css";
import { Route, Router, Switch } from "react-router-dom";
import history from "./History";
import NavBar from "./navbar/NavBar";
import HomePage from "./home/HomePage";
import FareStructure from "./farestructure/FareStructure";


export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Router history={history}>
        <Switch>
          <Route 
            exact path="/" 
            component={() => <HomePage /> } 
          />
          <Route 
            exact path="/farestructure/:view" 
            component={() => <FareStructure /> } 
          />
        </Switch>
      </Router>
    </div>
  );
}