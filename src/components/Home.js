import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/burger-logo.png';
import '../styles/App.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-jumbotron">
          <h1 className="Home-title">Burgers Town</h1>
          <img src={logo} alt="Burgers Town" className="Home-logo"/><br/>
          <Link to={`/game`} className="link">PLAY</Link>
        </div>
      </div>
    );
  }
}

export default Home;
