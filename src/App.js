import React, { Component } from 'react';
import Body from './appBody'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gloria's Prototype</h1>
        </header>
      </div>
    );
  }
}

export default App;
