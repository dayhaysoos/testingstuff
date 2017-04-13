import React, { Component } from 'react';
import Nick from './components/Nick/Nick';
import Pariss from './components/Pariss/Pariss';

class App extends Component {
  render() {
    return (
    <div>
      <h1>Hello, Pariss</h1>
      <Pumpkin />
      <Nick />
      <Pariss />
      <Pariss />
      <Pariss />
    </div>
    )
  }
}
class Pumpkin extends Component {
  render() {
    return (
  <span>fun size</span>
    )
  }
}

export default App;
