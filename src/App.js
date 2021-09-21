import React, { useState } from "react";

import LandingPage from './pages/landing-page';
import Menu from './components/menu';
import Footer from './components/footer'

const App = () => {
  const [toggleState, setToggleState] = useState(false);

  const toggleMenu = () => {
    setToggleState(!toggleState)
  }

  return (
    <span className="app">
    <div className="burger-btn" onClick={() => toggleMenu()}>
      {
        !toggleState ?
        (
          <span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </span>
        )
        :
        (
          <ion-icon size="large" name="close-outline" className="close-btn"></ion-icon>
        )
      }
    </div>
    <Menu toggleMenu={toggleState} setToggleMenu={setToggleState}/>
    <span className="landing-page-container">
      <LandingPage />
      <Footer/>
    </span>
  </span>
  );
}

export default App;
