import React, { useState } from "react";

import LandingPage from './pages/landing-page';
import Menu from './components/menu';
import Footer from './components/footer'

const App = () => {
  const [data, setData] = useState('');

  const toggleMenu = () => {
    setData(!data);
  }

  return (
    <span className="app">
    <div className={`burger-btn ${data ? "closed" : "opened"}`} onClick={() => toggleMenu()}>
      {
        data ?
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
    <Menu toggleMenu={data}/>
    <span className="landing-page-container">
      <LandingPage/>
      <Footer/>
    </span>
  </span>
  );
}

export default App;
