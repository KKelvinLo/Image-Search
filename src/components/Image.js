import React, { Component } from "react";

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0
    };
    this.setSize = this.setSize.bind(this);
    this.ref = React.createRef();
  }

  setSize() {
    const size = Math.round(this.ref.current.height / 9);

    this.setState({ size });
  }

  componentDidMount() {
    this.ref.current.addEventListener("load", this.setSize);
  }

  render() {
    return (
      <div
        style={{
          gridRowEnd: `span ${this.state.size}`
        }}
      >
        <img
          ref={this.ref}
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
        />
      </div>
    );
  }
}
