import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Post from "../Post/Post";

import "./LandingPage.scss"

class LandingPage extends React.Component {
  render() {
    return (
      <span className="landing-page">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/post/:id" render={props => <Post {...props} />} />
        </Switch>
      </span>
    );
  }
}

export default LandingPage;