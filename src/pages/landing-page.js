import React  from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import About from "./about";
import Blog from "./blog";
import Home from "./home";
import Post from "./post";

import "./pages.scss"

const LandingPage = () => {
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

export default LandingPage;