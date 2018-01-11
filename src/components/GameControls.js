import React, { Component } from 'react';
import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';
import '../styles/App.css';

class GameControls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 6,
      quality: 5
    };
  }

  render() {
    return (
      <div className="Game-controls">
        <div className="controls-lever left">
          <label>Price</label>
          <InputRange
            maxValue={20}
            minValue={1}
            value={this.state.price}
            onChange={value => this.setState({ price: value })} />
        </div>

        <div className="controls-lever right">
          <label>Quality</label>
          <InputRange
            maxValue={10}
            minValue={0}
            value={this.state.quality}
            onChange={value => this.setState({ quality: value })} />
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}

export default GameControls;
