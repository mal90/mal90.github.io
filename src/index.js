import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

import './index.css';
import LandingPage from './pages/landing-page';
import Menu from './components/menu';
import Footer from './components/footer';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <span className="app">
        <Menu/>
        <span className="landing-page-container">
          <LandingPage/>
          <Footer/>
        </span>
      </span>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
