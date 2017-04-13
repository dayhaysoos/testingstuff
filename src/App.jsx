import React, { Component } from 'react';
import Nick from './components/Nick/Nick';
import Pariss from './components/Pariss/Pariss';


//Styles
import './components/main.scss';


class App extends Component {
  render() {
    return (
    <div>
      <h1>Hello, Pariss</h1>
      <Pumpkin />
      <Nick />
      <Pariss />
    </div>
    )
  }
}
class Pumpkin extends Component {
  render() {
    return (
      <div>
  <span>fun size</span>
        <h1>Hello, Pariss</h1>
        <Nick />
      </div>
      )
  }
}

export default App;
