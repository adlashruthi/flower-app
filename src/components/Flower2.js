import "./Flower2Styles.css";
import React, { Component } from "react";

class Flower2 extends Component {
  render() {
    return (
      <div className="flower-image">
        <div className="heading">
          <h1>{this.props.heading} </h1>
        </div>
      </div>
    );
  }
}
export default Flower2;
