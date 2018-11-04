import React, { Component } from 'react';
import "./PicCard.css";

class PicCard extends Component {
  render() {
    return (
  
          <div className="card" onClick={()=> this.props.shufflePics()}>
            <div className="img-container">
              <img alt={this.props.name} src={this.props.imgUrl} />
            </div>
            <div className="content">
              <ul>
                <li>
                  <strong>Name:</strong> {this.props.name}
                </li>
              </ul>
            </div>
          </div>


    );
  }
}

export default PicCard;
