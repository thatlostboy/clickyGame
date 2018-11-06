import React, { Component } from 'react';
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
    highScore: 0,
    score: 0,
    clicked: []
  }

  shufflePics = id => {
    let score, highScore, clicked
    highScore = this.state.highScore
    // check if clicked friends already
    console.log(this.state)
    console.log("\n------------\n")
    if (this.state.clicked.indexOf(id) > -1) {
      console.log(clicked)
      console.log("You have clicked ",id," already")
      clicked = []
      if (this.state.score > this.state.highScore){
        highScore = this.state.score
      } 
      score = 0
    } else {
      console.log("Add it to array clcked ", this.state.clicked)
      this.state.clicked.push(id)
      score = this.state.score + 1
      clicked = this.state.clicked
    }


    // shuffle the friends
    const friends = shuffle(this.state.friends)

    this.setState(
      {friends,score, highScore, clicked}
      )
    
  }

  render() {
    return (
      <div className="App">
        <Navbar 
          highScore = {this.state.highScore}
          score = {this.state.score}
        />
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
