import React from "react";
import { Link } from "react-router-dom";

import "./pages.scss";

class Home extends React.Component {
  render() {
    return (
      <span className="home-container">
        <h1> Hello, i am a Frontend developer from Sri Lanka</h1>
        <Link className="about" to="about">
          Get to know me! 👋
        </Link>
      </span>
    );
  }
}

export default Home;