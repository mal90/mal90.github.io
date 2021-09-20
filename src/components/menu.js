import React from "react";

import MenuItem from "./menu-item";

import "./components.scss";

import dp from "../assets/images/dp.jpeg"

const Menu = ({toggleMenu}) => {
  return (
    <span className="side-menu" style={{ display: !toggleMenu ? "block" : "none" }}>
      <img src={dp} alt="Logo" />
      <ul className="menu-container">
        <MenuItem redirect="/" name="Home"/>
        <MenuItem redirect="/about" name="About"/>
        <MenuItem redirect="/blog" name="Blog"/>
      </ul>
    </span>
  );
}

export default Menu;