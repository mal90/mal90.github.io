import React from "react";

class About extends React.Component {
  render() {
    return (
      <span className="about-container">
        <ul>
          <li>
            <span className="link-icon">
              <ion-icon name="logo-github"></ion-icon>
            </span>
            <a href="https://github.com/mal90"> Github </a>
          </li>
          <li>
            <span className="link-icon">
              <ion-icon name="logo-linkedin"></ion-icon>
            </span>
            <a href="https://www.linkedin.com/in/maliksalim/"> LinkedIn </a>
          </li>
          <li>
            <span className="link-icon">
              <ion-icon name="logo-instagram"></ion-icon>
            </span>
            <a href="https://www.instagram.com/madkmalik/"> Instagram </a>
          </li>
        </ul>
      </span>
    );
  }
}

export default About;