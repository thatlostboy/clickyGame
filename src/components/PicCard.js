import React, { Component } from 'react';
import "./PicCard.css";

class PicCard extends Component {
  render() {
    // console.log("hello", this.props.id)
    return (
  
          <div className="card" onClick={()=> this.props.shufflePics(this.props.id)}>
            <div className="img-container">
              <img alt={this.props.name} src={this.props.imgUrl} />
            </div>
          </div>


    );
  }
}

export default PicCard;
