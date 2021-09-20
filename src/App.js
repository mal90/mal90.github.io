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
    <button className="burger-btn" onClick={() => toggleMenu()}>
      x
    </button>
    <Menu toggleMenu={data}/>
    <span className="landing-page-container">
      <LandingPage/>
      <Footer/>
    </span>
  </span>
  );
}

export default App;
