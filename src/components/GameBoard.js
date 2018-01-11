import React, { Component } from 'react';

import vanWhite from '../images/van-white.svg';
import vanGreen from '../images/van-green.svg';

import '../styles/App.css';

class GameBoard extends Component {
  render() {
    return (
      <div className="Game-board">
        <div className="board-cases">
          <div className="board-case"></div>
          <div className="board-case"></div>
          <div className="board-case"></div>
          <div className="board-case"></div>
          <div className="board-case"></div>
          <div className="board-case"></div>
          <div className="board-case"></div>
          <div className="board-case"></div>
          <div className="board-case"></div>
          <div className="board-case"></div>
        </div>

        <div className="board-pieces">
          <div className="board-piece-gamer">
            <img src={vanWhite} alt="White piece"/>
          </div>
          <div className="board-piece-opponent">
            <img src={vanGreen} alt="Green piece"/>
          </div>
        </div>
      </div>
    );
  }
}

export default GameBoard;
