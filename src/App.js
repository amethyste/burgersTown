import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Game from './components/Game';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/game' component={Game}/>
        </Switch>
      </div>
    );
  }
}

export default App;
