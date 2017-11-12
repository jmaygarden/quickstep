import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">The Smart Catalog</h1>
          </span>
        </header>
        <div>
          <video id="preview"></video>
          <script src="instascan.min.js"></script>
          <script src="scan.js"></script>
        </div>
      </div>
    );
  }
}

export default App;
