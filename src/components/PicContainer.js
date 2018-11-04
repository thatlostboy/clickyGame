import React, { Component } from 'react'
import "./PicContainer.css"
import PicCard from "./PicCard"
class PicContainer extends Component {


  render() {
    return (
      <div className="wrapper">
        {this.props.friendList.map(friend => (
            <PicCard 
              id = {friend.id}
              key = {friend.id}
              name = {friend.name}
              imgUrl = {friend.image}
              shufflePics = {this.props.shufflePics}
            />
          )
          )}
      </div>
        
        
      );
    }
  }
  
  export default PicContainer;
