import React from "react";

import MenuItem from "./menu-item";

import "./components.scss";

import dp from "../assets/images/dp.jpeg"

const Blog = (props) => {
  return (
    <span className="side-menu">
      <img src={dp} alt="Logo" />
      <ul className="menu-container">
        <MenuItem redirect="/" name="Home"/>
        <MenuItem redirect="/about" name="About"/>
        <MenuItem redirect="/blog" name="Blog"/>
      </ul>
    </span>
  );
}

export default Blog;