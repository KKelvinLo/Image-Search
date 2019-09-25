import React, { Component } from "react";

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0
    };
    setSize = this.setSize.bind(this);
    this.ref = react.CreateRef();
  }

  setSize() {
    const size = Math.round(imageRef.height);

    this.setState({ size });
  }

  state = { size: 0 };
  setSize = this.setSize.bind(this);

  render() {
    return (
      <div style={{ gridRowEnd: `size ${size}` }}>
        <img ref alt={description} src={url.regular} />
      </div>
    );
  }
}

const { url, description, imageRef, size } = this.props.Image;
