import React, { Component } from 'react';
import './App.css';
import './font-awesome/css/font-awesome.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="landing">
          <div className="navbar">
            <div className="navbar-content">
              <div className="logo cursive-font">Boot Startstrap</div>
              <div className="links">
                <div>SERVICES</div>
                <div>PORTFOLIO</div>
                <div>ABOUT</div>
                <div>TEAM</div>
                <div>CONTACT</div>
              </div>
              <div className="menu-button">
                MENU<i className="fa fa-bars"></i>
              </div>
            </div>
          </div>
          <div className="cta-content">
            <h2>Welcome To Our Studio!</h2>
            <h1>IT'S NICE TO MEET YOU</h1>
            <button>TELL ME MORE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
