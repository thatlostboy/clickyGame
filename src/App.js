import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import PicContainer from "./components/PicContainer"
import friends from "./friends.json"

//https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php
// implementation of fischer yates
function shuffle(arra1) {
  var ctr = arra1.length, temp, index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}





class App extends Component {

  state = {
    friends,
    highscore: "",
    score: ""
  }

  shufflePics = id => {
    // shuffle the friends
    const friends = shuffle(this.state.friends)
    this.setState({friends})

  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <PicContainer
          friendList={this.state.friends}
          shufflePics = {this.shufflePics}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
