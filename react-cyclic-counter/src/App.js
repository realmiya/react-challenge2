import React, { Component } from 'react';
import './App.css';

import CycleCounter from './components/CycleCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Simple Counter</h1>
        <CycleCounter  />
      </div>
    );
  }
}

export default App;
