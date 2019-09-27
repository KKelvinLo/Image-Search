import React, { Component } from "react";
import Image from "./Image";
import "./Images.css";

export default class Images extends Component {
  render() {
    return (
      <div className="images">
        {this.props.images.map(image => (
          <Image key={image.key} image={image} />
        ))}
      </div>
    );
  }
}
