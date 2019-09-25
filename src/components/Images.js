import React, { Component } from "react";

export default class Images extends Component {
  render() {
    return this.props.images.map(image => (
      <Image key={image.id} image={image} />
    ));
  }
}
