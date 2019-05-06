import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  state = {
    data: "Test Data"
  };
  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Header />
              <Route exact path="/" component={Home} />

              <Route path="/about" exact component={About} />
              <Route path="/about/:id" component={Contact} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
