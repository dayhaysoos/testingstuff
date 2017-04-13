import React, { Component } from 'react';
import Nick from './components/Nick/Nick';

//Styles
import './components/main.scss';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, Pariss</h1>
        <Nick />
      </div>
    )
  }
}

export default App;
