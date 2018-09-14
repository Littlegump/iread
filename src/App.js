import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock.js';
import Navbar from './components/Navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">__你就像__生命</h1>
          <Navbar />
        </header>
        <h1 className="App-intro">
          知道你要来，又不能空着走.
        </h1>
        <h3 className="App-intro">
          至少时间会动
        </h3>
        <div>
          <Clock />
        </div>
      </div>
    );
  }
}

export default App;
