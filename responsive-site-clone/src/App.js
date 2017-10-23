import React, { Component } from 'react';
import './App.css';
import './font-awesome/css/font-awesome.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <div className="logo cursive-font">Boot Startstrap</div>
          <div className="menu-button">
            MENU<i className="fa fa-bars"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
