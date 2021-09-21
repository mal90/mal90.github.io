import React from "react";

import MenuItem from "./menu-item";

import "./components.scss";

import dp from "../assets/images/dp.jpg"

const Menu = ({toggleMenu, setToggleMenu}) => {

  const hideSideNav = (setToggleMenu) => {
    setToggleMenu(false);
  }

  return (
    <div className={`side-menu ${toggleMenu ? "show" : "hide"}`}>
      <img src={dp} alt="Logo" />
      <ul className="menu-container" onClick={() => hideSideNav(setToggleMenu)}>
        <MenuItem redirect="/" name="Home" />
        <MenuItem redirect="/about" name="About"/>
        <MenuItem redirect="/blog" name="Blog"/>
      </ul>
    </div>
  );
}

export default Menu;