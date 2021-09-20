import React from "react";

import MenuItem from "./menu-item";

import "./components.scss";

import dp from "../assets/images/dp.jpeg"

const Menu = ({toggleMenu}) => {
  console.log(toggleMenu);
  return (
    <div className={`side-menu ${!toggleMenu ? "show" : "hide"}`}>
      <img src={dp} alt="Logo" />
      <ul className="menu-container">
        <MenuItem redirect="/" name="Home"/>
        <MenuItem redirect="/about" name="About"/>
        <MenuItem redirect="/blog" name="Blog"/>
      </ul>
    </div>
  );
}

export default Menu;