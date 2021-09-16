import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";

import "./LandingPage.scss"

class LandingPage extends React.Component {
  render() {
    return (
      <span className="landing-page">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
        </Switch>
      </span>
    );
  }
}

export default LandingPage;