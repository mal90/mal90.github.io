import React from "react";

import MenuItem from "./MenuItem/MenuItem";

import "./Menu.scss";

import dp from "../../assets/dp.jpeg"

class Menu extends React.Component {
  render() {
    return (
      <span>
        <img src={dp} alt="Logo" />
        <ul className="menu-container">
          <MenuItem redirect="/" name="Home"/>
          <MenuItem redirect="about" name="About"/>
          <MenuItem redirect="blog" name="Blog"/>
        </ul>
      </span>
    );
  }
}

export default Menu;