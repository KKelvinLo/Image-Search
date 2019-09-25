import React, { Component } from "react";

export class Searchbar extends Component {
  state = {
    search: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="search"
          style={{ flex: "10", padding: "5px" }}
          placeholder=""
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

export default Searchbar;
