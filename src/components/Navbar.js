import React, { Component } from 'react';
// import './App.css';

class Navbar extends Component {
  render() {
    return (
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="navbar-brand" href="/">Logo</a>
    </li>
  </ul>
  <ul className="navbar-nav mx-auto">
    <li className="nav-item">
      <a className="navbar-brand" href="/">Clicky Game</a>
    </li>
  </ul>
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <span className="navbar-brand">Score: {this.props.score} | HighScore: {this.props.highScore}</span>
    </li>
  </ul>
</nav>
    );
  }
}

export default Navbar;
