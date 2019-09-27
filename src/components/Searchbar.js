import React, { Component } from "react";

export default class Searchbar extends Component {
  state = {
    search: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="search"
          style={{ flex: "10", padding: "8px" }}
          placeholder="Search Image..."
          value={this.state.search}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}
