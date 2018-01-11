import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

import GameHub from './GameHub';
import GameBoard from './GameBoard';
import GameControls from './GameControls';

import '../styles/App.css';

class Game extends Component {
  render() {
    const theme = {
      background: '#f5f8fb',
      headerBgColor: '#EF6C00',
      headerFontColor: '#fff',
      headerFontSize: '15px',
      botBubbleColor: '#EF6C00',
      botFontColor: '#fff',
      userBubbleColor: '#fff',
      userFontColor: '#4a4a4a'
    };

    const steps = [
      {
        id: '0',
        message: 'Welcome to Burgers Town!',
        trigger: '1',
      },
      {
        id: '1',
        message: 'I\'m Bot, I\'m here to help you!',
        end: true
      }
    ];

    return (
      <div className="Game">

        <div className="col-left left">
          <div className="Game-help">
            <ThemeProvider theme={theme}>
              <ChatBot steps={steps} headerTitle="Bot"/>
            </ThemeProvider>
          </div>
        </div>

        <div className="col-right right">
          <GameHub />
          <GameBoard />
          <GameControls />



          <div className="Game-button">
            <Link to={'#'} className="link">Dinner Time !</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
