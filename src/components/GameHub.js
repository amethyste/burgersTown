import React, { Component } from 'react';

import wallet from '../images/wallet.svg';
import flag from '../images/flag.svg';

import '../styles/App.css';

class GameHub extends Component {
  render() {
    return (
      <div className="Game-hub">
        <div className="hub-score left">
          <img src={wallet} alt="wallet" className="score-icon left"/>
          <span className="score-label">$1,200</span>
          <div className="clear"></div>
        </div>
        <div className="hub-levels right">
          <div className="levels-line">
            <div className="levels-cursor">
              <img src={flag} alt="flag" className="levels-cursor-flag"/>
            </div>
            <div className="levels-dots">
              <div className="levels-dot active"></div>
              <div className="levels-dot"></div>
              <div className="levels-dot"></div>
              <div className="levels-dot"></div>
              <div className="levels-dot"></div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}

export default GameHub;
