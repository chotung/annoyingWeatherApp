import React, { Component } from 'react';
import './App.css';
import Main from './containers/Main';

class App extends Component{

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Annoying Weather App
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
