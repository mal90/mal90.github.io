import React from "react";
import {
  Link
} from "react-router-dom";

class MenuItem extends React.Component {
  render() {
    return (
      <li className="menu-item">
        <Link to={this.props.redirect}>{this.props.name}</Link>
      </li>
    );
  }
}

export default MenuItem;