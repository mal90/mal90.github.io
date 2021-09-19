import React from "react";
import { Link } from "react-router-dom";

import "./pages.scss";

class Home extends React.Component {
  render() {
    return (
      <span className="home-container">
        this is home
        <Link className="about" to="about">
          get to know me
        </Link>
      </span>
    );
  }
}

export default Home;